import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import process from 'node:process'
import test from 'node:test'

// Run the real publishing entrypoint with in-memory I/O and no collector/network access.
const harness = String.raw`
import assert from 'node:assert/strict'
import { mock } from 'node:test'

const scenario = process.env.SHADOW_CASE
const giteeUrl = 'https://gitee.com/MuiseDestiny/plugins/raw/master/zotero-gpt.xpi'
const oldDate = '2026-05-01T22:47:34Z'
const release = {
  id: 'zoterogpt@polygon.org', targetZoteroVersion: '10', tagName: '3.1.4',
  xpiVersion: '3.1.185', minZoteroVersion: '10.0', maxZoteroVersion: '11.*',
  releaseDate: oldDate, xpiDownloadUrl: { github: giteeUrl, ghProxy: 'https://example.org/mirror.xpi' },
}
const external = [
  { repo: 'MuiseDestiny/zotero-gpt', releases: [release, { ...release, targetZoteroVersion: '11' }] },
  { repo: 'l0o0/jasminum', name: 'Jasminum', description: 'Original description', releases: [
    { ...release, xpiVersion: '1.1.40', xpiDownloadUrl: { github: 'https://github.com/l0o0/jasminum/releases/download/v1.1.40/jasminum.xpi' } },
  ] },
  { repo: 'wdcpclover/ai4paper', releases: [
    { ...release, xpiDownloadUrl: { github: 'https://gitee.com/blocked/plugin/raw/master/plugin.xpi' } },
  ] },
]
const sources = [
  { repo: 'MuiseDestiny/zotero-gpt', releases: [], tags: [] },
  {
    repo: 'local/jasminum', aliases: ['L0O0/JASMINUM'], releases: [], tags: ['metadata'],
    publishInShadow: true, nameZh: '茉莉花', keywords: ['知网'],
  },
]
const approved = {
  repo: 'reviewed/local', aliases: ['previous/local'], releases: [], tags: ['reader'],
  publishInShadow: true, summaryZh: '已审核的本地插件',
}
const needsSupplement = ['supplement', 'missing', 'empty-releases'].includes(scenario)
if (needsSupplement) {
  sources.push(approved)
  sources.push({ repo: 'unreviewed/local', releases: [], tags: ['reader'] })
}
const collected = [
  { ...external[1], releases: [{ ...external[1].releases[0], xpiVersion: '99.0.0' }] },
  {
    repo: 'PREVIOUS/local', releases: scenario === 'empty-releases' ? [] : [
      { ...release, xpiDownloadUrl: { github: 'https://github.com/reviewed/local/releases/download/v1/local.xpi' } },
    ],
  },
  {
    repo: 'unreviewed/local', releases: [
      { ...release, xpiDownloadUrl: { github: 'https://github.com/unreviewed/local/releases/download/v1/local.xpi' } },
    ],
  },
]
const original = structuredClone(external)
const outputs = new Map()
const requests = []
mock.module('./src/plugins.ts', { namedExports: { plugins: sources } })
mock.module('./src/deprecated.ts', { namedExports: { deprecatedPlugins: [] } })
mock.module('node:child_process', { namedExports: { execFileSync() {
  if (!['supplement', 'empty-releases'].includes(scenario))
    throw new Error('Collector unavailable')
  outputs.set('dist/collector/plugins.json', collected)
  outputs.set('dist/collector/fetch-report.json', {
    requested: sources.length, refreshed: collected.map(p => p.repo), pending: [], errors: [],
  })
} } })
mock.module('fs-extra', { defaultExport: {
  outputJSONSync(file, data) { outputs.set(file, structuredClone(data)) },
  readJSONSync(file) { return structuredClone(outputs.get(file)) },
  removeSync() {}, existsSync(file) { return outputs.has(file) }, ensureDirSync() {}, ensureFileSync() {},
  copySync(from, to) { if (outputs.has(from)) outputs.set(to, outputs.get(from)) },
} })
mock.module('ofetch', { namedExports: { async ofetch(url) {
  if (url.includes('addon_infos.json')) return external
  if (url.endsWith('/charts.json')) return { components: [] }
  const request = new URL(url)
  assert.equal(request.origin + request.pathname, 'https://gitee.com/api/v5/repos/MuiseDestiny/plugins/commits')
  assert.equal(request.searchParams.get('path'), 'zotero-gpt.xpi')
  assert.equal(request.searchParams.get('sha'), 'master')
  requests.push(url)
  if (scenario === 'gitee-failure') throw new Error('Gitee unavailable')
  return [{ commit: { committer: { date: '2026-10-10T13:57:44+08:00' } } }]
} } })

const missingSupplement = ['missing', 'empty-releases'].includes(scenario)
if (scenario === 'gitee-failure' || missingSupplement) {
  await assert.rejects(import('./scripts/build.ts'), missingSupplement ? /reviewed\/local/ : /Gitee unavailable/)
  assert.deepEqual(external, original)
  for (const file of ['dist/plugins.json', 'dist/dist/plugins.json', 'dist/shields.json', 'dist/dist/shields.json'])
    assert.equal(outputs.has(file), false, file + ' must not be replaced after a failed publication')
} else {
  await import('./scripts/build.ts')
  const published = outputs.get('dist/plugins.json')
  assert.equal(published.length, scenario === 'supplement' ? 3 : 2)
  const expectedReleases = original[0].releases.map(r => ({ ...r, releaseDate: '2026-10-10T05:57:44.000Z' }))
  assert.deepEqual(published[0].releases, expectedReleases)
  assert.deepEqual(published[1].releases, original[1].releases)
  assert.equal(published[1].nameZh, '茉莉花')
  assert.ok(published[1].keywords.includes('知网'))
  assert.equal(published[1].description, 'Original description')
  if (scenario === 'supplement') {
    assert.equal(published[2].repo, 'PREVIOUS/local')
    assert.deepEqual(published[2].releases, collected[1].releases)
    assert.equal(published[2].summaryZh, approved.summaryZh)
    assert.ok(!published.some(p => p.repo === 'unreviewed/local'))
  }
  assert.deepEqual(outputs.get('dist/dist/plugins.json'), published)
  assert.equal(outputs.get('dist/shields.json').mode, 'shadow')
}
assert.equal(requests.length, missingSupplement ? 0 : 1, 'Gitee lookup runs once per URL only after supplements are available')
`

const scenarios = [
  ['existing', 'shadow preserves external releases, metadata and exclusions when an approved alias exists despite collector failure'],
  ['gitee-failure', 'shadow publication stops when Gitee dates fail'],
  ['supplement', 'shadow adds only approved missing plugins and keeps external versions'],
  ['missing', 'shadow publication stops when an approved missing plugin cannot be collected'],
  ['empty-releases', 'shadow publication stops when an approved missing plugin has no collected release'],
]

for (const [scenario, title] of scenarios) {
  test(title, () => {
    assert.doesNotThrow(() => execFileSync(process.execPath, [
      '--experimental-test-module-mocks',
      '--import',
      'tsx',
      '--input-type=module',
    ], {
      input: harness,
      cwd: new URL('../', import.meta.url),
      env: {
        ...process.env,
        COLLECTOR_MODE: 'shadow',
        COLLECTOR_REPOS: '',
        NODE_ENV: 'test',
        GITHUB_STEP_SUMMARY: '',
        SHADOW_CASE: scenario,
      },
      stdio: ['pipe', 'pipe', 'pipe'],
    }))
  })
}
