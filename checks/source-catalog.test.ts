import type { PluginInfo, PluginInfoBase } from '../src/types.js'
import assert from 'node:assert/strict'
import test from 'node:test'
import { applyCatalogMetadata, mergeShadowCatalog, mergeSourceCatalog } from '../src/handler/source-catalog.js'

const current: PluginInfoBase[] = [
  {
    repo: 'new/plugin',
    aliases: ['old/plugin'],
    releases: [
      { tagName: 'v1', assetName: 'plugin.xpi', targetZoteroVersion: '7' },
    ],
    tags: ['reader'],
    discoverReleases: true,
  },
  {
    repo: 'local/only',
    releases: [],
    tags: ['others'],
    discoverReleases: true,
  },
]
const upstream = [
  { repo: 'old/plugin', tags: [] },
  { repo: 'upstream/new', tags: [] },
]
const published = [
  {
    repo: 'old/plugin',
    releases: [
      {
        tagName: 'wrong-tag',
        targetZoteroVersion: '6',
        xpiDownloadUrl: { github: 'https://github.com/old/plugin/releases/download/v1/plugin.xpi' },
      },
    ],
  },
]
const pluginInfo: PluginInfo = {
  repo: 'OLD/plugin',
  name: 'Original name',
  description: 'Original description',
  tags: ['reader'],
  releases: [
    {
      targetZoteroVersion: '7',
      tagName: 'v1',
      xpiVersion: '1.0',
      id: 'test@local',
      minZoteroVersion: '7.0',
      maxZoteroVersion: '7.*',
      releaseDate: '2026-10-05',
      downloadCount: 5,
      assetId: 1,
      xpiDownloadUrl: { github: 'https://example.org/plugin.xpi' },
    },
  ],
  stars: 10,
  watchers: 1,
  author: { name: 'Author', url: '', avatar: '' },
}

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
  const next = [
    {
      repo: 'old/plugin',
      releases: [
        {
          tagName: 'v2',
          targetZoteroVersion: '8',
          xpiDownloadUrl: { github: 'https://github.com/old/plugin/releases/latest/download/plugin.xpi' },
        },
      ],
    },
  ]
  const merged = mergeSourceCatalog(current, upstream, next)
  assert.deepEqual(merged.find(p => p.repo === 'new/plugin')?.releases.map(r => r.tagName), ['v2', 'v1'])
})

test('sync preserves local search metadata and shadow publication while refreshing upstream recommendations', () => {
  const local = [
    {
      ...current[0],
      nameZh: '中文名',
      summaryZh: '中文介绍',
      keywords: ['搜索词'],
      publishInShadow: true,
      recommended: true,
    },
  ]
  const merged = mergeSourceCatalog(local, upstream, published)
  const plugin = merged.find(p => p.repo === local[0].repo)!
  assert.equal(plugin.nameZh, local[0].nameZh)
  assert.equal(plugin.summaryZh, local[0].summaryZh)
  assert.deepEqual(plugin.keywords, local[0].keywords)
  assert.equal(plugin.publishInShadow, true)
  assert.equal(plugin.recommended, undefined)
  assert.deepEqual(mergeSourceCatalog(merged, upstream, published), merged)
})

test('shadow and collector data receive local search metadata without replacing releases or original descriptions', () => {
  const source = {
    ...current[0],
    nameZh: '中文名',
    summaryZh: '中文介绍',
    keywords: ['搜索词'],
  }
  const original = structuredClone(pluginInfo)
  const snapshot = structuredClone(original)
  for (const repo of ['OLD/plugin', 'new/plugin']) {
    const [result] = applyCatalogMetadata([
      { ...original, repo },
    ], [source])
    assert.deepEqual(result, {
      ...original,
      repo,
      nameZh: source.nameZh,
      summaryZh: source.summaryZh,
      keywords: source.keywords,
    })
  }
  assert.deepEqual(original, snapshot)
  assert.deepEqual(applyCatalogMetadata([original], []), [original])
})

test('shadow adds only explicitly reviewed sources and retains their curated metadata', () => {
  const reviewed = {
    ...current[1],
    publishInShadow: true,
    summaryZh: '本地插件',
    keywords: ['本地'],
  }
  const unreviewed = { ...current[1], repo: 'local/unreviewed' }
  const external = [
    { ...pluginInfo, repo: 'upstream/plugin' },
  ]
  const collected = [
    { ...pluginInfo, repo: reviewed.repo },
    { ...pluginInfo, repo: unreviewed.repo },
    { ...pluginInfo, repo: 'unlisted/plugin' },
  ]
  const before = structuredClone({ external, collected })
  const result = mergeShadowCatalog(external, collected, [reviewed, unreviewed])
  assert.deepEqual(result.map(p => p.repo), ['upstream/plugin', reviewed.repo])
  assert.deepEqual(result[0], external[0])
  assert.deepEqual(result[1].releases, collected[0].releases)
  assert.equal(result[1].summaryZh, reviewed.summaryZh)
  assert.deepEqual(result[1].keywords, reviewed.keywords)
  assert.deepEqual({ external, collected }, before)
})

test('shadow keeps every external version when a reviewed source matches an alias', () => {
  const source = {
    ...current[0],
    publishInShadow: true,
    nameZh: '中文名',
    summaryZh: '中文介绍',
    keywords: ['搜索词'],
  }
  const external = {
    ...pluginInfo,
    releases: [
      ...pluginInfo.releases,
      {
        ...pluginInfo.releases[0],
        targetZoteroVersion: '10',
        tagName: 'v2',
        xpiVersion: '2.0',
        minZoteroVersion: '10.0',
        maxZoteroVersion: '10.*',
        xpiDownloadUrl: { github: 'https://example.org/plugin-v2.xpi' },
      },
    ],
  }
  const newerCollected = {
    ...pluginInfo,
    repo: source.repo,
    releases: [
      { ...pluginInfo.releases[0], xpiVersion: '3.0' },
    ],
  }
  for (const collected of [
    [],
    [newerCollected],
  ]) {
    assert.deepEqual(mergeShadowCatalog([external], collected, [source]), [
      {
        ...external,
        nameZh: source.nameZh,
        summaryZh: source.summaryZh,
        keywords: source.keywords,
      },
    ])
  }
})

test('shadow rejects a required local source that is missing or has no collected releases', () => {
  const source = { ...current[1], publishInShadow: true }
  for (const collected of [
    [],
    [
      { ...pluginInfo, repo: source.repo, releases: [] },
    ],
  ]) {
    assert.throws(() => mergeShadowCatalog([], collected, [source]), /Missing reviewed plugin.*local\/only/)
  }
  assert.deepEqual(mergeShadowCatalog([], [], [current[1]]), [])
})

test('sync rejects empty or duplicate upstream catalogs before rewriting sources', () => {
  assert.throws(() => mergeSourceCatalog(current, [], published), /Empty/)
  assert.throws(() => mergeSourceCatalog(current, upstream, []), /Empty/)
  assert.throws(() => mergeSourceCatalog(current, [
    ...upstream,
    { repo: 'OLD/plugin', tags: [] },
  ], published), /duplicate/)
  assert.throws(() => mergeSourceCatalog(current, [
    { repo: '../bad', tags: [] },
  ], published), /Invalid/)
})

test('sync retains distinct compatibility labels for one historical asset', () => {
  const local: PluginInfoBase[] = [
    {
      ...current[0],
      releases: [
        { ...current[0].releases[0], targetZoteroVersion: '11' },
        current[0].releases[0],
      ],
    },
  ]
  const merged = mergeSourceCatalog(local, upstream, published)
  const labels = merged.find(p => p.repo === 'new/plugin')!.releases.map(r => r.targetZoteroVersion)
  assert.deepEqual(labels.sort(), ['11', '7'])
  assert.deepEqual(mergeSourceCatalog(merged, upstream, published), merged)
})
