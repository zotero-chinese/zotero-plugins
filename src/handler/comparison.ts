import type { PluginInfo, PluginInfoBase } from '../types.js'
import { compareVersions } from '../utils/version.js'
import { filterStorePlugins } from './store-policy.js'

interface PublishedPlugin {
  repo: string
  releases: { targetZoteroVersion: string, xpiVersion: string, id?: string, minZoteroVersion?: string, maxZoteroVersion?: string }[]
}

export function compareCatalog(catalog: PluginInfoBase[], external: PublishedPlugin[], collected: PluginInfo[]) {
  const identities = [...catalog, ...collected]
  const allowedExternal = filterStorePlugins(external, identities)
  const excludedByBlacklist = external.filter(p => !allowedExternal.includes(p)).map(p => p.repo)
  external = allowedExternal
  catalog = filterStorePlugins(catalog, identities)
  collected = filterStorePlugins(collected, identities)
  const source = new Set(catalog.flatMap(p => [p.repo, ...(p.aliases ?? [])]).map(r => r.toLowerCase()))
  const baseline = new Map(external.map(p => [p.repo.toLowerCase(), p]))
  const candidate = new Map(collected.flatMap(p => [p.repo, ...(p.aliases ?? [])].map(repo => [repo.toLowerCase(), p] as const)))
  const missingReleases: { repo: string, targetZoteroVersion: string }[] = []
  const changedVersions: { repo: string, targetZoteroVersion: string, external: string, collected: string }[] = []
  const identityChanges: { repo: string, targetZoteroVersion: string, external: string, collected: string }[] = []
  const compatibilityChanges: { repo: string, targetZoteroVersion: string, external: string, collected: string }[] = []
  const invalidReleases: { repo: string, targetZoteroVersion: string }[] = []
  for (const plugin of collected) {
    for (const release of plugin.releases) {
      if (!release.id || !release.xpiVersion || !release.minZoteroVersion || !release.maxZoteroVersion || !release.xpiDownloadUrl?.github)
        invalidReleases.push({ repo: plugin.repo, targetZoteroVersion: release.targetZoteroVersion })
    }
  }
  for (const plugin of external) {
    const own = candidate.get(plugin.repo.toLowerCase())
    for (const release of plugin.releases) {
      const matching = own?.releases.find(r => r.targetZoteroVersion === release.targetZoteroVersion)
      if (!matching) {
        missingReleases.push({ repo: plugin.repo, targetZoteroVersion: release.targetZoteroVersion })
      }
      else {
        if (matching.xpiVersion !== release.xpiVersion)
          changedVersions.push({ repo: plugin.repo, targetZoteroVersion: release.targetZoteroVersion, external: release.xpiVersion, collected: matching.xpiVersion })
        if (release.id && matching.id !== release.id)
          identityChanges.push({ repo: plugin.repo, targetZoteroVersion: release.targetZoteroVersion, external: release.id, collected: matching.id })
        if (release.minZoteroVersion !== matching.minZoteroVersion || release.maxZoteroVersion !== matching.maxZoteroVersion)
          compatibilityChanges.push({ repo: plugin.repo, targetZoteroVersion: release.targetZoteroVersion, external: `${release.minZoteroVersion} - ${release.maxZoteroVersion}`, collected: `${matching.minZoteroVersion} - ${matching.maxZoteroVersion}` })
      }
    }
  }
  return {
    excludedByBlacklist,
    sourceCount: catalog.length,
    externalCount: baseline.size,
    collectedCount: collected.length,
    missingFromSource: external.filter(p => !source.has(p.repo.toLowerCase())).map(p => p.repo),
    sourceOnly: catalog.filter(p => ![p.repo, ...(p.aliases ?? [])].some(repo => baseline.has(repo.toLowerCase()))).map(p => p.repo),
    missingFromCollector: catalog.filter(p => !candidate.has(p.repo.toLowerCase())).map(p => p.repo),
    collectorOnly: collected.filter(p => ![p.repo, ...(p.aliases ?? [])].some(repo => baseline.has(repo.toLowerCase()))).map(p => p.repo),
    repositoryAliases: collected.filter(p => p.aliases?.length).map(p => ({ repo: p.repo, aliases: p.aliases })),
    missingReleases,
    changedVersions,
    invalidReleases,
    identityChanges,
    compatibilityChanges,
    regressedVersions: changedVersions.filter(r => compareVersions(r.collected, r.external) < 0),
    duplicateCollectedRepos: collected.length - new Set(collected.map(p => p.repo.toLowerCase())).size,
  }
}

export function canPromote(report: ReturnType<typeof compareCatalog>, errors: unknown[], pending: string[] = []): boolean {
  return !errors.length && !report.missingFromSource.length && !report.missingFromCollector.some(repo => !pending.includes(repo) || !report.sourceOnly.includes(repo))
    && !report.missingReleases.length && !report.invalidReleases.length && !report.duplicateCollectedRepos
    && !report.regressedVersions.length && !report.identityChanges.length
}
