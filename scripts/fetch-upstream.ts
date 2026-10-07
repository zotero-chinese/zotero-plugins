import { env } from 'node:process'
import fs from 'fs-extra'
import { ofetch } from 'ofetch'

const headers = env.GITHUB_TOKEN ? { Authorization: `Bearer ${env.GITHUB_TOKEN}` } : undefined
const release = await ofetch('https://api.github.com/repos/syt2/zotero-addons-scraper/releases/latest', {
  headers,
  responseType: 'json',
  timeout: 60000,
  retry: 3,
})
const asset = release.assets?.find((entry: { name: string }) => entry.name === 'addon_infos.json')
if (!asset?.browser_download_url)
  throw new Error('Upstream release lacks addon_infos.json')
const data = await ofetch(asset.browser_download_url, { responseType: 'json', timeout: 60000, retry: 3 })
if (!Array.isArray(data) || !data.length || data.some(p => !p.repo || !Array.isArray(p.releases)))
  throw new Error('Invalid upstream plugin data')
fs.outputJSONSync('.cache/upstream-sync/addon_infos.json', data)
fs.outputJSONSync('.cache/upstream-sync/release.json', { tag: release.tag_name, publishedAt: release.published_at, url: release.html_url }, { spaces: 2 })
console.log(`Downloaded upstream release ${release.tag_name}: ${data.length} plugins`)
