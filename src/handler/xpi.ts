import AdmZip from 'adm-zip'
import { jsonc } from 'jsonc'
import { compareVersions } from '../utils/version.js'

export interface XpiInfo {
  name: string
  description: string
  id: string
  xpiVersion: string
  minZoteroVersion: string
  maxZoteroVersion: string
}

export function parseXPI(filePath: string): XpiInfo {
  const zip = new AdmZip(filePath)
  const manifest = zip.getEntry('manifest.json')
  if (manifest) {
    const data = jsonc.parse(manifest.getData().toString('utf8'))
    const settings = data.applications?.zotero ?? data.browser_specific_settings?.zotero
      ?? data.applications?.gecko ?? data.browser_specific_settings?.gecko
    function localize(value: string | undefined): string {
      const key = value?.match(/^__MSG_(.+)__$/)?.[1]
      if (!key)
        return value ?? ''
      for (const locale of ['zh_CN', 'zh-CN', 'zh', data.default_locale, 'en_US', 'en']) {
        const entry = zip.getEntry(`_locales/${locale}/messages.json`)
        if (entry) {
          const message = jsonc.parse(entry.getData().toString('utf8'))[key]?.message
          if (message)
            return message
        }
      }
      return value ?? ''
    }
    const result = {
      name: localize(data.name),
      description: localize(data.description),
      id: settings?.id ?? '',
      xpiVersion: data.version ?? '',
      minZoteroVersion: settings?.strict_min_version ?? '*',
      maxZoteroVersion: settings?.strict_max_version ?? '*',
    }
    if (!result.id || !result.xpiVersion || !result.minZoteroVersion || !result.maxZoteroVersion)
      throw new Error('XPI manifest lacks ID, version or Zotero compatibility range')
    if (zip.getEntry('install.rdf')) {
      let legacy: XpiInfo | undefined
      try {
        legacy = parseRDF(zip)
      }
      catch {
        // An unrelated RDF file must not invalidate a valid Zotero JSON manifest.
      }
      // Some packages ship both loaders. Merge only when they describe the same addon.
      if (legacy && legacy.id === result.id) {
        result.name = legacy.name || result.name
        result.description = legacy.description || result.description
        result.xpiVersion = legacy.xpiVersion || result.xpiVersion
        if (compareVersions(legacy.minZoteroVersion.replaceAll('*', '0'), result.minZoteroVersion.replaceAll('*', '999')) <= 0)
          result.minZoteroVersion = legacy.minZoteroVersion
        if (compareVersions(legacy.maxZoteroVersion.replaceAll('*', '999'), result.maxZoteroVersion.replaceAll('*', '0')) >= 0)
          result.maxZoteroVersion = legacy.maxZoteroVersion
      }
    }
    return result
  }
  return parseRDF(zip)
}

function parseRDF(zip: AdmZip): XpiInfo {
  const rdf = zip.getEntry('install.rdf')?.getData().toString('utf8')
  if (!rdf)
    throw new Error('XPI has neither manifest.json nor install.rdf')
  // Ignore referenced application descriptions preceding the install-manifest node.
  const installNode = [...rdf.matchAll(/<(?:\w+:)?Description\b[^>]*>/g)].find(match => match[0].includes('urn:mozilla:install-manifest'))
  const install = installNode?.index === undefined ? rdf : rdf.slice(installNode.index)
  const namespace = rdf.match(/xmlns:(\w+)=["']http:\/\/www\.mozilla\.org\/2004\/em-rdf#["']/)?.[1]
  const em = namespace ? `${namespace}:` : 'em:'
  const header = install.split(`<${em}targetApplication`)[0]
  function value(text: string, key: string): string {
    return text.match(new RegExp(`${em}${key}=["']([^"']+)["']`))?.[1]
      ?? text.match(new RegExp(`<${em}${key}>([\\s\\S]*?)</${em}${key}>`))?.[1]?.trim() ?? ''
  }
  const target = install.match(new RegExp(`<${em}targetApplication[^>]*>([\\s\\S]*?)</${em}targetApplication>`, 'g'))
    ?.find(block => value(block, 'id') === 'zotero@chnm.gmu.edu')
  if (!target)
    throw new Error('install.rdf lacks Zotero targetApplication')
  const result = {
    name: value(header, 'name'),
    description: value(header, 'description'),
    id: value(header, 'id'),
    xpiVersion: value(header, 'version'),
    minZoteroVersion: value(target, 'minVersion'),
    // RDF addons use the legacy loader, unavailable in Zotero 7 and later.
    maxZoteroVersion: compareVersions(value(target, 'maxVersion').replaceAll('*', '999'), '6.*') > 0 ? '6.*' : value(target, 'maxVersion'),
  }
  if (!result.id || !result.xpiVersion || !result.minZoteroVersion || !result.maxZoteroVersion)
    throw new Error('install.rdf lacks ID, version or Zotero compatibility range')
  return result
}
