import type { PublishedSource, UpstreamSource } from '../src/handler/source-catalog.js'
import { createHash } from 'node:crypto'
import path from 'node:path'
import { argv } from 'node:process'
import fs from 'fs-extra'
import { deprecatedPlugins } from '../src/deprecated.js'
import { mergeSourceCatalog } from '../src/handler/source-catalog.js'
import { filterStorePlugins } from '../src/handler/store-policy.js'
import { plugins, pluginsDev } from '../src/plugins.js'

const sourceDir = argv[2]
const publishedFile = argv[3]
if (!sourceDir || !publishedFile)
  throw new Error('Usage: pnpm data:sync-source <scraper-checkout> <addon_infos.json>')
const published = fs.readJSONSync(publishedFile) as PublishedSource[]
if (!Array.isArray(published) || published.some(p => !p.repo || !Array.isArray(p.releases)))
  throw new Error('Invalid upstream published data')
const upstream: UpstreamSource[] = fs.readdirSync(path.join(sourceDir, 'addons')).filter(n => n.includes('@')).map((name) => {
  const content = fs.readFileSync(path.join(sourceDir, 'addons', name), 'utf8').trim()
  const metadata = content ? JSON.parse(content) : {}
  return { repo: name.replace('@', '/'), tags: metadata.tags ?? [], recommended: metadata.recommended }
})
const current = [...plugins, ...deprecatedPlugins]
const imported = mergeSourceCatalog(current, upstream, published)
const legacy = new Set(deprecatedPlugins.map(p => p.repo.toLowerCase()))
const active = imported.filter(p => !legacy.has(p.repo.toLowerCase()))
const retired = imported.filter(p => legacy.has(p.repo.toLowerCase()))
const header = 'import type { PluginInfoBase } from \'./types.js\'\n\n'
fs.writeFileSync('src/plugins.ts', `${header}/** Local catalog; selectors retain historical versions and discover new releases. */\nexport const plugins: PluginInfoBase[] = ${JSON.stringify(active, null, 2)}\n\n/** Small development sample. */\nexport const pluginsDev: PluginInfoBase[] = ${JSON.stringify(active.filter(p => pluginsDev.some(d => d.repo === p.repo)), null, 2)}\n`)
fs.writeFileSync('src/deprecated.ts', `${header}/** Legacy plugins retained for compatibility. */\nexport const deprecatedPlugins: PluginInfoBase[] = ${JSON.stringify(retired, null, 2)}\n`)
const known = new Set(current.flatMap(p => [p.repo, ...(p.aliases ?? [])].map(repo => repo.toLowerCase())))
const sourceNames = new Set(upstream.map(p => p.repo.toLowerCase()))
const eligible = filterStorePlugins(imported)
const report = {
  upstreamSourceCount: upstream.length,
  upstreamPublishedCount: published.length,
  localBefore: current.length,
  localAfter: imported.length,
  excludedByBlacklist: imported.filter(p => !eligible.includes(p)).map(p => p.repo),
  added: upstream.filter(p => !known.has(p.repo.toLowerCase())).map(p => p.repo),
  localOnlyRetained: current.filter(p => ![p.repo, ...(p.aliases ?? [])].some(repo => sourceNames.has(repo.toLowerCase()))).map(p => p.repo),
  publishedSHA256: createHash('sha256').update(fs.readFileSync(publishedFile)).digest('hex'),
}
fs.outputJSONSync('.cache/upstream-sync/report.json', report, { spaces: 2 })
console.log(JSON.stringify(report, null, 2))
