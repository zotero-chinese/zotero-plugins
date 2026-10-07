import type { PluginInfo, PluginInfoBase, ReleaseInfo, ReleaseInfoBase } from '../types.js'
import { createHash } from 'node:crypto'
import { env } from 'node:process'
import { consola } from 'consola'
import fs from 'fs-extra'
import { dist, targetVersions, xpiCache } from '../config.js'
import { download } from '../utils/fs.js'
import { getRelease, octokit } from '../utils/github.js'
import { compareVersions, supportsVersion } from '../utils/version.js'
import { filterStorePlugins } from './store-policy.js'
import { parseXPI } from './xpi.js'

export interface FetchReport {
  requested: number
  refreshed: string[]
  pending: string[]
  errors: { repo: string, error: string }[]
}

/** Failures are reported, never silently published as a reduced catalog. */
export async function fetchPlugins(plugins: PluginInfoBase[]): Promise<PluginInfo[]> {
  plugins = filterStorePlugins(plugins)
  const report: FetchReport = { requested: plugins.length, refreshed: [], pending: [], errors: [] }
  const output: PluginInfo[] = []
  let index = 0
  async function worker() {
    while (index < plugins.length) {
      const plugin = plugins[index++]
      try {
        const result = await fetchPlugin(plugin)
        if (result) {
          output.push(result)
          report.refreshed.push(plugin.repo)
        }
        else {
          report.pending.push(plugin.repo)
          consola.info(`${plugin.repo}: no published stable release yet`)
        }
      }
      catch (error) {
        const message = error instanceof Error ? error.message : String(error)
        report.errors.push({ repo: plugin.repo, error: message })
        consola.error(plugin.repo, message)
      }
    }
  }
  const concurrency = Math.max(1, Math.min(8, Number(env.COLLECTOR_CONCURRENCY) || 4))
  await Promise.all(Array.from({ length: concurrency }, worker))
  fs.outputJSONSync(`${dist}/fetch-report.json`, report, { spaces: 2 })
  return output.sort((a, b) => a.repo.toLowerCase().localeCompare(b.repo.toLowerCase()))
}

async function fetchPlugin(base: PluginInfoBase): Promise<PluginInfo | undefined> {
  const [sourceOwner, sourceRepo] = base.repo.split('/')
  const metadata = (await octokit.rest.repos.get({ owner: sourceOwner, repo: sourceRepo })).data
  const [owner, repo] = metadata.full_name.split('/')
  const author = (await octokit.rest.users.getByUsername({ username: owner })).data
  const recent = base.discoverReleases
    ? (await octokit.rest.repos.listReleases({ owner, repo, per_page: 10 })).data.filter(r => !r.draft && !r.prerelease)
    : []
  if (!base.releases.length && !recent.length)
    return undefined
  const candidates: ReleaseInfo[] = []
  const seen = new Set<string>()
  const failures: string[] = []
  // Historical selectors keep older Zotero versions; recent releases discover new versions.
  const selectors: ReleaseInfoBase[] = [...base.releases]
  for (const release of recent.slice(0, 1)) {
    if (!selectors.some(s => s.tagName === release.tag_name))
      selectors.push({ tagName: release.tag_name, targetZoteroVersion: '', assetName: base.releases.find(r => r.assetName)?.assetName })
  }
  for (const selector of selectors) {
    const key = `${selector.tagName}:${selector.assetName ?? selector.customLink ?? ''}`
    if (seen.has(key))
      continue
    seen.add(key)
    try {
      candidates.push(await parseRelease(owner, repo, selector, recent))
    }
    catch (error) {
      failures.push(`${selector.tagName}: ${error instanceof Error ? error.message : error}`)
    }
  }
  const releases: ReleaseInfo[] = []
  for (const target of targetVersions) {
    const compatible = candidates.filter(r => supportsVersion(target, r.minZoteroVersion, r.maxZoteroVersion))
      .sort((a, b) => compareVersions(b.xpiVersion, a.xpiVersion) || +new Date(b.releaseDate) - +new Date(a.releaseDate))
    if (compatible[0])
      releases.push({ ...compatible[0], targetZoteroVersion: target })
  }
  if (!releases.length)
    throw new Error(`No compatible releases: ${failures.join('; ')}`)
  // A failed release selector must stay visible even if another version succeeded.
  // Recent non-plugin releases in monorepos may be ignored; pinned releases may not.
  const failedPins = failures.filter(f => base.releases.some(r => f.startsWith(`${r.tagName}:`)))
  if (failedPins.length)
    throw new Error(`Historical release fetch failed: ${failedPins.join('; ')}`)
  const latest = releases[0]
  consola.info(`${base.repo}: ${releases.length} Zotero versions`)
  return {
    repo: base.repo,
    aliases: base.aliases,
    tags: [...base.tags],
    recommended: base.recommended ?? false,
    releases,
    name: latest.name || repo,
    description: metadata.description || latest.description || '',
    stars: metadata.stargazers_count,
    watchers: metadata.subscribers_count,
    author: { name: author.name || owner, url: author.html_url, avatar: author.avatar_url },
  }
}

async function parseRelease(owner: string, repo: string, selector: ReleaseInfoBase, recent: Awaited<ReturnType<typeof octokit.rest.repos.listReleases>>['data']): Promise<ReleaseInfo> {
  let url: string
  let assetId: string | number
  let releaseDate: string
  let tagName = selector.tagName
  let downloadCount = 0
  let path: string
  if (selector.tagName === 'custom') {
    if (!selector.customLink)
      throw new Error('customLink missing')
    url = selector.customLink
    assetId = createHash('sha256').update(url).digest('hex').slice(0, 20)
    path = `${xpiCache}/${assetId}.xpi`
    // Custom URLs can change without changing their name, so always refresh them.
    await download(url, path)
    releaseDate = new Date().toISOString()
  }
  else {
    const release = recent.find(r => r.tag_name === selector.tagName)
      ?? await getRelease(owner, repo, selector.tagName)
    if (!release)
      throw new Error('Release not found')
    const assets = release.assets.filter(a => /\.(?:xpi|zip)$/i.test(a.name) || a.content_type === 'application/x-xpinstall')
    const asset = assets.find(a => a.name === selector.assetName)
      ?? assets.find(a => /\.xpi$/i.test(a.name)) ?? assets[0]
    if (!asset)
      throw new Error('Release has no XPI/ZIP asset')
    url = asset.browser_download_url
    assetId = asset.id
    releaseDate = asset.updated_at
    tagName = release.tag_name
    downloadCount = asset.download_count
    path = `${xpiCache}/${asset.id}-${Date.parse(asset.updated_at)}.xpi`
    if (!fs.existsSync(path))
      await download(url, path)
  }
  try {
    const xpi = parseXPI(path)
    return {
      ...xpi,
      targetZoteroVersion: selector.targetZoteroVersion,
      tagName,
      assetId,
      releaseDate,
      downloadCount,
      xpiDownloadUrl: { github: url, ghProxy: `https://gh-proxy.org/${url}` },
    }
  }
  catch (error) {
    fs.removeSync(path)
    throw error
  }
}
