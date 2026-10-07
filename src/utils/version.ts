/** Match the scraper's Mozilla-style version comparison, including wildcards. */
export function compareVersions(a: string, b: string): number {
  const left = a.replaceAll('-', '.').split('.')
  const right = b.replaceAll('-', '.').split('.')
  for (let i = 0; i < Math.max(left.length, right.length); i++) {
    const x = left[i] ?? '0'
    const y = right[i] ?? '0'
    if (x === '*' || y === '*')
      continue
    const xn = /^\d+$/.test(x)
    const yn = /^\d+$/.test(y)
    const result = xn && yn ? Number(x) - Number(y) : xn !== yn ? xn ? 1 : -1 : x.localeCompare(y)
    if (result)
      return Math.sign(result)
  }
  return 0
}

/** Use the current upstream cache scraper's major-series overlap rules. */
export function supportsVersion(major: string, min: string, max: string): boolean {
  const lower = min.replaceAll('*', '0')
  const upper = max.replaceAll('*', '999')
  const targetMin = `${major}.0`
  // Upstream excludes sentinel 6.999 and 7.999 compatibility floors.
  const targetMax = `${major}.${major === '6' ? '2' : major === '7' ? '8' : '999'}`
  return compareVersions(lower, targetMax) < 0 && compareVersions(upper, targetMin) > 0
}
