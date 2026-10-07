import type { FetchReport } from '../src/handler/plugins-data.js'
import { execFileSync } from 'node:child_process'
import { env, execPath } from 'node:process'
import fs from 'fs-extra'
import { ofetch } from 'ofetch'
import { deprecatedPlugins } from '../src/deprecated.js'
import { canPromote, compareCatalog } from '../src/handler/comparison.js'
import { filterStorePlugins } from '../src/handler/store-policy.js'
import { plugins } from '../src/plugins.js'

const mode = env.COLLECTOR_MODE || 'shadow'
if (!['shadow', 'primary'].includes(mode))
  throw new Error('COLLECTOR_MODE must be shadow or primary')
if (env.COLLECTOR_REPOS || env.NODE_ENV === 'development')
  throw new Error('Build requires the full production catalog')

const external = await ofetch('https://github.com/syt2/zotero-addons-scraper/releases/latest/download/addon_infos.json', {
  responseType: 'json',
  timeout: 60000,
  retry: 3,
})
if (!Array.isArray(external) || !external.length || external.some(p => !p.repo || !Array.isArray(p.releases)))
  throw new Error('Invalid external plugin data')
fs.outputJSONSync('dist/external-plugins.json', external)
// Candidate files from a previous run must never be treated as fresh output.
fs.removeSync('dist/collector')
let collectorFailure: string | undefined
try {
  execFileSync(execPath, ['--import', 'tsx', 'src/index.ts', 'fetchPlugins'], {
    stdio: 'inherit',
    env: { ...env, COLLECTOR_DIST: 'dist/collector' },
  })
}
catch {
  collectorFailure = 'Collector process failed; inspect build log'
}
const collected = fs.existsSync('dist/collector/plugins.json') ? fs.readJSONSync('dist/collector/plugins.json') : []
const fetchReport: FetchReport = fs.existsSync('dist/collector/fetch-report.json')
  ? fs.readJSONSync('dist/collector/fetch-report.json')
  : { requested: plugins.length + deprecatedPlugins.length, refreshed: [], pending: [], errors: [] }
const report = {
  checkedAt: new Date().toISOString(),
  mode,
  collectorFailure,
  ...compareCatalog([...plugins, ...deprecatedPlugins], external, collected),
  fetchErrors: fetchReport.errors,
  pendingSources: fetchReport.pending,
}
const ready = !collectorFailure && canPromote(report, fetchReport.errors, fetchReport.pending)
fs.outputJSONSync('dist/comparison.json', { ...report, readyForPrimary: ready }, { spaces: 2 })
if (env.GITHUB_STEP_SUMMARY) {
  fs.appendFileSync(env.GITHUB_STEP_SUMMARY, `## Collector comparison\n\nMode: ${mode}\n\nSource: ${report.sourceCount}; external: ${report.externalCount}; collected: ${report.collectedCount}\n\nFetch errors: ${report.fetchErrors.length}; missing releases: ${report.missingReleases.length}; changed versions: ${report.changedVersions.length}\n\nReady for primary: ${ready}\n\nFull report: comparison.json in build artifact.\n`)
}
if (mode === 'primary' && !ready)
  throw new Error('Primary promotion blocked: inspect dist/comparison.json')
// Shadow mode keeps existing output while making the collector candidate reviewable.
const storePlugins = filterStorePlugins(mode === 'primary' ? collected : external, [...plugins, ...deprecatedPlugins, ...collected])
fs.outputJSONSync('dist/plugins.json', storePlugins)
fs.outputJSONSync('dist/shields.json', { lastUpdate: new Date().toISOString(), source: mode === 'primary' ? 'zotero-chinese/zotero-plugins' : 'syt2/zotero-addons-scraper', mode })
const charts = await ofetch('https://raw.githubusercontent.com/zotero-chinese/zotero-plugins/gh-pages/charts.json', {
  responseType: 'json',
  timeout: 60000,
  retry: 3,
})
if (!charts || typeof charts !== 'object' || Array.isArray(charts) || !Array.isArray(charts.components))
  throw new Error('Invalid cached charts data')
fs.outputJSONSync('dist/charts.json', charts)
fs.ensureDirSync('dist/dist')
for (const name of ['plugins.json', 'charts.json', 'shields.json'])
  fs.copySync(`dist/${name}`, `dist/dist/${name}`)
for (const name of ['index.html', '_redirects'])
  fs.copySync(`.github/scripts/${name}`, `dist/${name}`)
fs.ensureFileSync('dist/.nojekyll')
console.log(`Published ${mode} output; comparison ready: ${ready}`)
