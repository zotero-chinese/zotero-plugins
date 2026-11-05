import type { BlacklistEntry } from '../src/blacklist.js'
import assert from 'node:assert/strict'
import test from 'node:test'
import { pluginBlacklist } from '../src/blacklist.js'
import { canPromote, compareCatalog } from '../src/handler/comparison.js'
import { mergeSourceCatalog } from '../src/handler/source-catalog.js'
import { filterStorePlugins } from '../src/handler/store-policy.js'
import { plugins } from '../src/plugins.js'

const blacklist: BlacklistEntry[] = [{ repo: 'Current/Blocked', reason: 'Store exclusion', aliases: ['original/blocked'] }]
const catalog = [
  { repo: 'current/blocked', aliases: ['previous/blocked'], tags: [], releases: [] },
  { repo: 'allowed/plugin', tags: [], releases: [] },
]

test('store exclusions match full repository names, ignoring case, across aliases', () => {
  const input = [{ repo: 'PREVIOUS/BLOCKED' }, { repo: 'original/blocked' }, { repo: 'other/blocked' }, { repo: 'allowed/plugin' }]
  assert.deepEqual(filterStorePlugins(input, catalog, blacklist).map(p => p.repo), ['other/blocked', 'allowed/plugin'])
  assert.deepEqual(filterStorePlugins(input, catalog, []), input)
})

test('store exclusions follow chains of repository transfers', () => {
  const identities = [...catalog, { repo: 'latest/blocked', aliases: ['previous/blocked'] }]
  assert.deepEqual(filterStorePlugins([{ repo: 'latest/blocked' }], identities, blacklist), [])
})

test('both external shadow output and own output apply the same blacklist after upstream sync', () => {
  const external = [{ repo: 'previous/blocked', releases: [] }, { repo: 'allowed/plugin', releases: [] }]
  const merged = mergeSourceCatalog(catalog, [{ repo: 'previous/blocked', tags: [] }, { repo: 'allowed/plugin', tags: [] }], external)
  assert.equal(merged.length, 2)
  assert.deepEqual(filterStorePlugins(external, merged, blacklist).map(p => p.repo), ['allowed/plugin'])
  assert.deepEqual(filterStorePlugins(merged, merged, blacklist).map(p => p.repo), ['allowed/plugin'])
  assert.deepEqual(filterStorePlugins(merged, merged, []).map(p => p.repo), ['allowed/plugin', 'current/blocked'])
})

test('intentional exclusions are reported without blocking collector promotion', () => {
  const originalLength = pluginBlacklist.length
  pluginBlacklist.push(...blacklist)
  try {
    const report = compareCatalog(catalog.slice(0, 1), [{ repo: 'previous/blocked', releases: [{ targetZoteroVersion: '7', xpiVersion: '1' }] }], [])
    assert.deepEqual(report.excludedByBlacklist, ['previous/blocked'])
    assert.equal(report.sourceCount, 0)
    assert.deepEqual(report.missingReleases, [])
    assert.deepEqual(report.missingFromCollector, [])
    assert.equal(canPromote(report, []), true)
  }
  finally {
    pluginBlacklist.splice(originalLength)
  }
})

test('AI4Paper stays removed when upstream sync or published data includes it', () => {
  const external = [{ repo: 'WDCPClOVER/AI4Paper', releases: [] }, { repo: 'allowed/plugin', releases: [] }]
  const merged = mergeSourceCatalog([], external.map(p => ({ repo: p.repo, tags: [] })), external)
  assert.ok(!plugins.some(p => p.repo.toLowerCase() === 'wdcpclover/ai4paper'))
  assert.deepEqual(filterStorePlugins(merged).map(p => p.repo), ['allowed/plugin'])
  assert.deepEqual(filterStorePlugins(external).map(p => p.repo), ['allowed/plugin'])
})
