export interface BlacklistEntry {
  /** GitHub repository, for example owner/plugin. */
  repo: string
  /** Previous repository names, to keep exclusions after transfers. */
  aliases?: string[]
  reason: string
}

/** Store exclusions are maintained locally and never overwritten by upstream sync. */
export const pluginBlacklist: BlacklistEntry[] = [
  { repo: 'wdcpclover/ai4paper', reason: 'Removed from the store at the maintainer’s request.' },
]
