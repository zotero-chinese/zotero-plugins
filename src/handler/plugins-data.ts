import type { PluginInfo, PluginInfoBase, ReleaseInfo, ReleaseInfoBase } from '../types.js'
import AdmZip from 'adm-zip'
import { consola } from 'consola'
import fs from 'fs-extra'
import { jsonc } from 'jsonc'
import { dist } from '../index.js'
import { getRelease, getReleaseAssetBuffer, octokit, translateString } from '../utils/index.js'

export function fetchPlugins(plugins: PluginInfoBase[]) {
  return Promise.all(plugins.map(fetchPlugin))
}

async function fetchPlugin(pluginBase: PluginInfoBase): Promise<PluginInfo> {
  const plugin = { ...pluginBase } as PluginInfo
  const [owner, repo] = pluginBase.repo.split('/')

  // 仓库信息：插件简介
  await octokit.rest.repos.get({ owner, repo }).then((resp) => {
    plugin.description = translateString(resp.data.description)
    plugin.stars = resp.data.stargazers_count
    plugin.watchers = resp.data.subscribers_count
  })

  // 作者信息
  await octokit.rest.users.getByUsername({ username: owner }).then(resp =>
    plugin.author = {
      name: resp.data.name || owner,
      url: resp.data.blog || resp.data.html_url,
      avatar: resp.data.avatar_url,
    },
  )

  // 发行版
  for (const release of plugin.releases) {
    const releaseDist = await parseRelease(owner, repo, release)
    Object.assign(release, releaseDist)

    const xpiData = parseXPI(`${dist}/xpi/${release.assetId}.xpi`)
    plugin.name ??= xpiData.name
    plugin.description ??= xpiData.description
    release.id = xpiData.id
    release.xpiVersion = xpiData.xpiVersion
  }
  consola.info(`${owner}/${repo} done`)
  return plugin
}

async function parseRelease(owner: string, repo: string, releaseBase: ReleaseInfoBase): Promise<ReleaseInfo> {
  const release = { ...releaseBase } as ReleaseInfo

  const resp = await getRelease(owner, repo, releaseBase.tagName)
  release.tagName = resp.tag_name

  const asset = resp.assets
    .filter(asset => asset.content_type === 'application/x-xpinstall')
    .sort((a, b) =>
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
    )[0]

  if (!asset) {
    throw new Error(`  ${owner}/${repo} ${release.tagName} 不存在 XPI`)
  }

  if (!fs.existsSync(`${dist}/xpi/${asset.id}.xpi`)) {
    const buffer = await getReleaseAssetBuffer(owner, repo, asset.id)
    fs.outputFileSync(`${dist}/xpi/${asset.id}.xpi`, buffer)
    consola.log(`  Write ${asset.name} ${asset.id}`)
  }

  release.assetId = asset.id
  release.releaseDate = asset.updated_at
  release.downloadCount = asset.download_count
  release.xpiDownloadUrl = {
    github: asset.browser_download_url,
    gitee: `https://gitee.com/northword/zotero-plugins/raw/gh-pages/xpi/${release.assetId}.xpi`,
    ghProxy: `https://ghproxy.com/?q=${encodeURI(asset.browser_download_url)}`,
    jsdeliver: `https://cdn.jsdelivr.net/gh/northword/zotero-plugins@gh-pages/xpi/${release.assetId}.xpi`,
    kgithub: asset.browser_download_url.replace(
      'github.com',
      'kkgithub.com',
    ),
  }
  return release
}

function parseXPI(filePath: string): {
  name: string
  description: string
  id: string
  xpiVersion: string
} {
  if (!fs.existsSync(filePath))
    throw new Error(`${filePath} do not exist.`)

  const zip = new AdmZip(filePath)
  const zipEntries = zip.getEntries()
  const zipEntryNames = zipEntries.map(zipEntrie => zipEntrie.entryName)

  if (zipEntryNames.includes('manifest.json')) {
    const fileData = zip
      .getEntry('manifest.json')!
      .getData()
      .toString('utf8')
    const manifestData = jsonc.parse(fileData)

    function getManifestValueLocal(key: string) {
      const locale = ['zh-CN', 'zh', manifestData.default_locale]
        .map(e => `_locales/${e}/messages.json`)
        .find(e => !!zipEntryNames.includes(e))
      if (locale) {
        const message = zip.getEntry(locale)!.getData().toString('utf8')
        const messageData = jsonc.parse(message)
        return messageData[key].message
      }
    }

    // Plugin Name
    let name = manifestData.name
    if (name === '__MSG_name__') {
      name = getManifestValueLocal('name')
    }

    // todo: 适配多语言，当值为 `__MSG_description__` 是前往 i18n 目录获取
    let description = manifestData.description
    if (description === '__MSG_description')
      description = getManifestValueLocal('description')

    const id = manifestData.applications.zotero.id
    const xpiVersion = manifestData.version

    return {
      name,
      description,
      id,
      xpiVersion,
    }
  }
  else if (zipEntryNames.includes('install.rdf')) {
    return parseInstallRef(zip)
  }
  else {
    throw new Error('Bad XPI file')
  }
}

// 临时恢复 Zotero 6 插件解析
function parseInstallRef(zip: AdmZip) {
  const fileData = zip.getEntry('install.rdf')!.getData().toString('utf8')

  // 从 install.rdf 中获取 id
  const id
  = (fileData.match(/em:id="(.*?)"/)
    ?? fileData.match(/<em:id>(.*?)<\/em:id>/) ?? [
    '',
    'NO id',
  ])[1]

  // 从 install.rdf 中获取 description
  const description
     = (fileData.match(/em:description="(.*?)"/)
       ?? fileData.match(/<em:description>(.*?)<\/em:description>/) ?? [
       '',
       'NO desc',
     ])[1]

  const name
    = (fileData.match(/em:name="(.*?)"/)
      ?? fileData.match(/<em:name>(.*?)<\/em:name>/) ?? ['', 'No Name'])[1]

  const xpiVersion = (fileData.match(/em:version="(.*?)"/)
    ?? fileData.match(/<em:version>(.*?)<\/em:version>/) ?? ['', ''])[1]

  return {
    name,
    id,
    description,
    xpiVersion,
  }
}
