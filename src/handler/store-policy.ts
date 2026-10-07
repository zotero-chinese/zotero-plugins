import type { BlacklistEntry } from '../blacklist.js'
import { pluginBlacklist } from '../blacklist.js'

interface RepositoryIdentity {
  repo: string
  aliases?: string[]
}

export function filterStorePlugins<T extends RepositoryIdentity>(plugins: T[], identities: RepositoryIdentity[] = plugins, blacklist: BlacklistEntry[] = pluginBlacklist): T[] {
  const blocked = new Set(blacklist.flatMap(p => [p.repo, ...(p.aliases ?? [])]).map(repo => repo.trim().toLowerCase()))
  // Expand connected aliases, including chains of repository transfers.
  let changed = true
  while (changed) {
    changed = false
    for (const plugin of [...identities, ...plugins]) {
      const names = [plugin.repo, ...(plugin.aliases ?? [])].map(repo => repo.toLowerCase())
      if (names.some(repo => blocked.has(repo))) {
        for (const repo of names) {
          if (!blocked.has(repo)) {
            blocked.add(repo)
            changed = true
          }
        }
      }
    }
  }
  return plugins.filter(p => ![p.repo, ...(p.aliases ?? [])].some(repo => blocked.has(repo.toLowerCase())))
}
