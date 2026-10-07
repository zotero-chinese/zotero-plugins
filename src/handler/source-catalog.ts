import type { PluginInfoBase, ReleaseInfoBase, TagType } from '../types.js'

export interface UpstreamSource {
  repo: string
  tags: TagType[]
  recommended?: boolean
}

export interface PublishedSource {
  repo: string
  releases: { targetZoteroVersion: string, tagName: string, xpiDownloadUrl?: Record<string, string> }[]
}

function sameSelector(a: ReleaseInfoBase, b: ReleaseInfoBase): boolean {
  return a.tagName === b.tagName && a.assetName === b.assetName && a.customLink === b.customLink
}

export function mergeSourceCatalog(current: PluginInfoBase[], upstream: UpstreamSource[], published: PublishedSource[]): PluginInfoBase[] {
  if (!upstream.length || !published.length)
    throw new Error('Empty upstream catalog or published data; refusing to rewrite local sources')
  const names = new Set<string>()
  for (const entry of upstream) {
    if (!/^[\w-]+\/[\w.-]+$/.test(entry.repo) || names.has(entry.repo.toLowerCase()) || !Array.isArray(entry.tags))
      throw new Error(`Invalid or duplicate upstream source: ${entry.repo}`)
    names.add(entry.repo.toLowerCase())
  }
  const outputs = new Map(published.map(p => [p.repo.toLowerCase(), p]))
  const existing = new Map(current.flatMap(p => [p.repo, ...(p.aliases ?? [])].map(repo => [repo.toLowerCase(), p] as const)))
  const imported = upstream.map((source): PluginInfoBase => {
    const previous = existing.get(source.repo.toLowerCase())
    const releases: ReleaseInfoBase[] = (outputs.get(source.repo.toLowerCase())?.releases ?? []).map((release) => {
      const url = release.xpiDownloadUrl?.github
      const prefix = `https://github.com/${source.repo}/releases/`
      const github = url?.startsWith(`${prefix}download/`)
      const latest = url?.startsWith(`${prefix}latest/download/`)
      const downloadTag = github ? decodeURIComponent(url!.split('/releases/download/')[1].split('/')[0]) : undefined
      return {
        targetZoteroVersion: release.targetZoteroVersion,
        tagName: github ? downloadTag! : latest || !url ? release.tagName : 'custom',
        ...(github || latest ? { assetName: url?.split('/').pop() } : url ? { customLink: url } : {}),
      }
    })
    // Keep locally verified compatibility labels and historical selectors.
    const incoming = releases.map((release) => {
      const matches = previous?.releases.filter(old => sameSelector(old, release)) ?? []
      matches.sort((a, b) => Math.abs(Number(a.targetZoteroVersion) - Number(release.targetZoteroVersion)) - Math.abs(Number(b.targetZoteroVersion) - Number(release.targetZoteroVersion)))
      return matches[0] ?? release
    })
    const combined = [...incoming, ...(previous?.releases ?? [])]
    return {
      repo: previous?.repo ?? source.repo,
      ...(previous?.aliases ? { aliases: previous.aliases } : {}),
      releases: combined.filter((release, i) => combined.findIndex(other => sameSelector(other, release) && other.targetZoteroVersion === release.targetZoteroVersion) === i),
      tags: source.tags,
      ...(source.recommended ? { recommended: true } : {}),
      discoverReleases: previous?.discoverReleases ?? true,
    }
  })
  for (const entry of current) {
    if (!imported.some(p => p.repo.toLowerCase() === entry.repo.toLowerCase()))
      imported.push(entry)
  }
  return imported.sort((a, b) => a.repo.toLowerCase().localeCompare(b.repo.toLowerCase()))
}
