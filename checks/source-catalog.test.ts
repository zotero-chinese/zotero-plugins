import type { PluginInfoBase } from '../src/types.js'
import assert from 'node:assert/strict'
import test from 'node:test'
import { mergeSourceCatalog } from '../src/handler/source-catalog.js'

const current: PluginInfoBase[] = [
  { repo: 'new/plugin', aliases: ['old/plugin'], releases: [{ tagName: 'v1', assetName: 'plugin.xpi', targetZoteroVersion: '7' }], tags: ['reader'], discoverReleases: true },
  { repo: 'local/only', releases: [], tags: ['others'], discoverReleases: true },
]
const upstream = [{ repo: 'old/plugin', tags: [] }, { repo: 'upstream/new', tags: [] }]
const published = [{ repo: 'old/plugin', releases: [{ tagName: 'wrong-tag', targetZoteroVersion: '6', xpiDownloadUrl: { github: 'https://github.com/old/plugin/releases/download/v1/plugin.xpi' } }] }]

test('sync preserves aliases, verified compatibility and local-only sources while adding unpublished sources', () => {
  const merged = mergeSourceCatalog(current, upstream, published)
  assert.equal(merged.length, 3)
  assert.deepEqual(merged.find(p => p.repo === 'new/plugin')?.aliases, ['old/plugin'])
  assert.deepEqual(merged.find(p => p.repo === 'new/plugin')?.releases, current[0].releases)
  assert.deepEqual(merged.find(p => p.repo === 'local/only'), current[1])
  assert.equal(merged.find(p => p.repo === 'upstream/new')?.discoverReleases, true)
  assert.deepEqual(mergeSourceCatalog(merged, upstream, published), merged)
})

test('sync adds release selectors without removing historical versions', () => {
  const next = [{ repo: 'old/plugin', releases: [{ tagName: 'v2', targetZoteroVersion: '8', xpiDownloadUrl: { github: 'https://github.com/old/plugin/releases/latest/download/plugin.xpi' } }] }]
  const merged = mergeSourceCatalog(current, upstream, next)
  assert.deepEqual(merged.find(p => p.repo === 'new/plugin')?.releases.map(r => r.tagName), ['v2', 'v1'])
})

test('sync rejects empty or duplicate upstream catalogs before rewriting sources', () => {
  assert.throws(() => mergeSourceCatalog(current, [], published), /Empty/)
  assert.throws(() => mergeSourceCatalog(current, upstream, []), /Empty/)
  assert.throws(() => mergeSourceCatalog(current, [...upstream, { repo: 'OLD/plugin', tags: [] }], published), /duplicate/)
  assert.throws(() => mergeSourceCatalog(current, [{ repo: '../bad', tags: [] }], published), /Invalid/)
})

test('sync retains distinct compatibility labels for one historical asset', () => {
  const local: PluginInfoBase[] = [{ ...current[0], releases: [
    { ...current[0].releases[0], targetZoteroVersion: '11' },
    current[0].releases[0],
  ] }]
  const merged = mergeSourceCatalog(local, upstream, published)
  const labels = merged.find(p => p.repo === 'new/plugin')!.releases.map(r => r.targetZoteroVersion)
  assert.deepEqual(labels.sort(), ['11', '7'])
  assert.deepEqual(mergeSourceCatalog(merged, upstream, published), merged)
})
