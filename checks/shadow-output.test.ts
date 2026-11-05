import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import process from 'node:process'
import test from 'node:test'

// Run the real publishing entrypoint with in-memory I/O and no collector/network access.
const harness = String.raw`
import assert from 'node:assert/strict'
import { mock } from 'node:test'

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
const original = structuredClone(external)
const outputs = new Map()
const requests = []
mock.module('node:child_process', { namedExports: { execFileSync() { throw new Error('Collector unavailable') } } })
mock.module('fs-extra', { defaultExport: {
  outputJSONSync(file, data) { outputs.set(file, structuredClone(data)) },
  removeSync() {}, existsSync() { return false }, ensureDirSync() {}, ensureFileSync() {},
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
  if (process.env.FAIL_GITEE === '1') throw new Error('Gitee unavailable')
  return [{ commit: { committer: { date: '2026-10-10T13:57:44+08:00' } } }]
} } })

if (process.env.FAIL_GITEE === '1') {
  await assert.rejects(import('./scripts/build.ts'), /Gitee unavailable/)
  assert.deepEqual(external, original)
  for (const file of ['dist/plugins.json', 'dist/dist/plugins.json', 'dist/shields.json'])
    assert.equal(outputs.has(file), false, file + ' must not be replaced after a failed lookup')
} else {
  await import('./scripts/build.ts')
  const published = outputs.get('dist/plugins.json')
  assert.equal(published.length, 2)
  const expectedReleases = original[0].releases.map(r => ({ ...r, releaseDate: '2026-10-10T05:57:44.000Z' }))
  assert.deepEqual(published[0].releases, expectedReleases)
  assert.deepEqual(published[1].releases, original[1].releases)
  assert.equal(published[1].nameZh, '茉莉花')
  assert.ok(published[1].keywords.includes('知网'))
  assert.equal(published[1].description, 'Original description')
  assert.deepEqual(outputs.get('dist/dist/plugins.json'), published)
  assert.equal(outputs.get('dist/shields.json').mode, 'shadow')
}
assert.equal(requests.length, 1, 'Repeated Gitee URLs must be fetched once')
`

for (const failure of [false, true]) {
  test(failure ? 'shadow publication stops when Gitee dates fail' : 'shadow output corrects Gitee dates once per URL while preserving source metadata and exclusions', () => {
    assert.doesNotThrow(() => execFileSync(process.execPath, ['--experimental-test-module-mocks', '--import', 'tsx', '--input-type=module'], {
      input: harness,
      cwd: new URL('../', import.meta.url),
      env: { ...process.env, COLLECTOR_MODE: 'shadow', COLLECTOR_REPOS: '', NODE_ENV: 'test', GITHUB_STEP_SUMMARY: '', FAIL_GITEE: failure ? '1' : '0' },
      stdio: ['pipe', 'pipe', 'pipe'],
    }))
  })
}
