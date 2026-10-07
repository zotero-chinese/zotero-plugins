import assert from 'node:assert/strict'
import { Buffer } from 'node:buffer'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { test } from 'node:test'
import AdmZip from 'adm-zip'
import { deprecatedPlugins } from '../src/deprecated.js'
import { canPromote, compareCatalog } from '../src/handler/comparison.js'
import { parseXPI } from '../src/handler/xpi.js'
import { plugins } from '../src/plugins.js'
import { compareVersions, supportsVersion } from '../src/utils/version.js'

function withXpi(entries: Record<string, string>, check: (file: string) => void) {
  const dir = mkdtempSync(path.join(tmpdir(), 'collector-check-'))
  try {
    const zip = new AdmZip()
    for (const [name, content] of Object.entries(entries))
      zip.addFile(name, Buffer.from(content))
    const file = path.join(dir, 'fixture.xpi')
    zip.writeZip(file)
    check(file)
  }
  finally {
    rmSync(dir, { recursive: true, force: true })
  }
}

test('manifest localizes arbitrary message keys and supports browser_specific_settings', () => {
  withXpi({
    'manifest.json': JSON.stringify({ name: '__MSG_extensionName__', description: '__MSG_extensionDescription__', default_locale: 'en', version: '2.0.0', browser_specific_settings: { zotero: { id: 'test@example.org', strict_min_version: '7.9.9', strict_max_version: '10.*' } } }),
    '_locales/zh_CN/messages.json': JSON.stringify({ extensionName: { message: '中文插件' }, extensionDescription: { message: '中文说明' } }),
  }, (file) => {
    const info = parseXPI(file)
    assert.equal(info.name, '中文插件')
    assert.equal(info.description, '中文说明')
    assert.equal(info.minZoteroVersion, '7.9.9')
    assert.equal(info.maxZoteroVersion, '10.*')
  })
})

test('legacy RDF reads Zotero range rather than another target application', () => {
  withXpi({ 'install.rdf': '<RDF><Description em:id="plugin@example.org" em:version="1.0" em:name="Legacy"><em:targetApplication><Description em:id="firefox" em:minVersion="1" em:maxVersion="99" /></em:targetApplication><em:targetApplication><Description><em:id>zotero@chnm.gmu.edu</em:id><em:minVersion>5.0</em:minVersion><em:maxVersion>6.*</em:maxVersion></Description></em:targetApplication></Description></RDF>' }, (file) => {
    const info = parseXPI(file)
    assert.equal(info.id, 'plugin@example.org')
    assert.equal(info.maxZoteroVersion, '6.*')
  })
})

test('incomplete manifests are rejected instead of publishing blank compatibility', () => {
  withXpi({ 'manifest.json': '{"name":"bad","version":"1"}' }, file => assert.throws(() => parseXPI(file), /compatibility range/))
})

test('version selection matches external major-series interval checks', () => {
  assert.equal(supportsVersion('7', '7.9.9', '10.*'), false)
  assert.equal(supportsVersion('6', '7.0', '10.*'), false)
  assert.equal(supportsVersion('6', '6.999', '10.*'), false)
  assert.equal(supportsVersion('7', '7.999', '10.*'), false)
  assert.equal(supportsVersion('9', '9.0.3', '10.*'), true)
  assert.equal(supportsVersion('7', '7.0.15', '8.*'), true)
  assert.equal(supportsVersion('11', '7.0', '10.*'), false)
  assert.equal(compareVersions('2.0.0', '2.0.0-beta.1'), 1)
})

test('promotion refuses missing plugins, missing historical versions, failures and downgrades', () => {
  const catalog = [{ repo: 'owner/plugin', releases: [], tags: [] }]
  const external = [{ repo: 'owner/plugin', releases: [{ targetZoteroVersion: '7', xpiVersion: '2.0.0' }] }]
  const release = { targetZoteroVersion: '7', tagName: 'v2', xpiVersion: '2.0.0', id: 'test', minZoteroVersion: '7.0', maxZoteroVersion: '7.*', releaseDate: '2026-10-05', downloadCount: 0, assetId: 1, xpiDownloadUrl: { github: 'https://example.org/a.xpi' } }
  const plugin = { repo: 'owner/plugin', releases: [release], tags: [], name: 'test', description: '', stars: 0, watchers: 0, author: { name: 'owner', url: '', avatar: '' } }
  const report = compareCatalog(catalog, external, [plugin])
  assert.equal(canPromote(report, []), true)
  assert.equal(canPromote(report, [new Error('network')]), false)
  assert.equal(canPromote(compareCatalog(catalog, external, []), []), false)
  assert.equal(canPromote(compareCatalog(catalog, external, [{ ...plugin, releases: [] }]), []), false)
  assert.equal(canPromote(compareCatalog(catalog, external, [{ ...plugin, releases: [{ ...release, xpiVersion: '1.0.0' }] }]), []), false)
  assert.equal(canPromote(compareCatalog(catalog, external, [{ ...plugin, releases: [{ ...release, xpiVersion: '3.0.0' }] }]), []), true)
})

test('catalog has unique sources and supports new entries without published releases', () => {
  const all = [...plugins, ...deprecatedPlugins]
  assert.equal(all.length, new Set(all.map(p => p.repo.toLowerCase())).size)
  assert.ok(all.some(p => p.repo === 'CHENYUZ-hub/zotero-literature-star-citation'))
  assert.ok(all.every(p => p.releases.length > 0 || p.discoverReleases))
})

test('manifest with a Zotero ID and unspecified bounds has an unbounded range', () => {
  withXpi({ 'manifest.json': JSON.stringify({ name: 'legacy', version: '1', applications: { zotero: { id: 'legacy@local' } } }) }, (file) => {
    assert.equal(parseXPI(file).minZoteroVersion, '*')
    assert.equal(parseXPI(file).maxZoteroVersion, '*')
  })
})

test('repository transfers compare using old upstream aliases', () => {
  const catalog = [{ repo: 'new-owner/plugin', aliases: ['old-owner/plugin'], releases: [], tags: [] }]
  const external = [{ repo: 'old-owner/plugin', releases: [] }]
  const report = compareCatalog(catalog, external, [])
  assert.equal(report.sourceCount, 1)
  assert.deepEqual(report.missingFromSource, [])
  assert.deepEqual(report.sourceOnly, [])
  assert.equal(canPromote(report, [], ['new-owner/plugin']), false)
})

test('an unreleased source may stay pending only when absent from published upstream data', () => {
  const report = compareCatalog([{ repo: 'owner/unreleased', releases: [], tags: [] }], [], [])
  assert.equal(canPromote(report, []), false)
  assert.equal(canPromote(report, [], ['owner/unreleased']), true)
})

test('dual-loader packages retain RDF compatibility and metadata when IDs agree', () => {
  withXpi({
    'manifest.json': JSON.stringify({ name: 'Modern', version: '2.0', applications: { zotero: { id: 'same@local', strict_min_version: '6.999', strict_max_version: '10.*' } } }),
    'install.rdf': '<Description em:id="same@local" em:version="2.0" em:name="Both"><em:targetApplication><Description em:id="zotero@chnm.gmu.edu" em:minVersion="5.0" em:maxVersion="*" /></em:targetApplication></Description>',
  }, (file) => {
    const result = parseXPI(file)
    assert.equal(result.minZoteroVersion, '5.0')
    assert.equal(result.maxZoteroVersion, '10.*')
    assert.equal(result.name, 'Both')
  })
})

test('RDF application references before install-manifest do not replace the addon ID', () => {
  withXpi({ 'install.rdf': '<RDF:RDF><RDF:Description RDF:about="rdf:firefox" em:id="firefox@mozilla" /><RDF:Description RDF:about="urn:mozilla:install-manifest" em:id="addon@local" em:version="2.6"><em:targetApplication><Description em:id="zotero@chnm.gmu.edu" em:minVersion="5.0" em:maxVersion="7.*" /></em:targetApplication></RDF:Description></RDF:RDF>' }, (file) => {
    assert.equal(parseXPI(file).id, 'addon@local')
    assert.equal(parseXPI(file).xpiVersion, '2.6')
    assert.equal(parseXPI(file).maxZoteroVersion, '6.*')
  })
})

test('RDF namespace aliases retain legacy compatibility in dual manifests', () => {
  withXpi({
    'manifest.json': JSON.stringify({ name: 'Test', version: '1', applications: { zotero: { id: 'test@local', strict_min_version: '6.999', strict_max_version: '7.1.*' } } }),
    'install.rdf': '<rdf:RDF xmlns:ns1="http://www.mozilla.org/2004/em-rdf#"><rdf:Description about="urn:mozilla:install-manifest"><ns1:id>test@local</ns1:id><ns1:version>1</ns1:version><ns1:targetApplication><rdf:Description><ns1:id>zotero@chnm.gmu.edu</ns1:id><ns1:minVersion>6.0</ns1:minVersion><ns1:maxVersion>*</ns1:maxVersion></rdf:Description></ns1:targetApplication></rdf:Description></rdf:RDF>',
  }, file => assert.equal(parseXPI(file).minZoteroVersion, '6.0'))
})
