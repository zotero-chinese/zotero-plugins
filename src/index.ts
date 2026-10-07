import { argv, env, exit } from 'node:process'
import { consola } from 'consola'
import fs from 'fs-extra'
import { dist } from './config.js'
import { deprecatedPlugins } from './deprecated.js'
import getChartOptions from './handler/charts-data.js'
import { fetchPlugins } from './handler/plugins-data.js'
import { filterStorePlugins } from './handler/store-policy.js'
import { plugins, pluginsDev } from './plugins.js'
import { checkRateLimit } from './utils/index.js'

if (!env.GITHUB_TOKEN)
  throw new Error('GITHUB_TOKEN 未设置')

function getPlugins() {
  const catalog = filterStorePlugins(env.NODE_ENV === 'development' ? pluginsDev : [...plugins, ...deprecatedPlugins], [...plugins, ...deprecatedPlugins])
  const repos = env.COLLECTOR_REPOS?.split(',').map(r => r.trim().toLowerCase())
  const selected = repos ? catalog.filter(p => [p.repo, ...(p.aliases ?? [])].some(repo => repos.includes(repo.toLowerCase()))) : catalog
  if (repos && !selected.length)
    throw new Error('No eligible plugins selected')
  if (new Set(selected.map(p => p.repo.toLowerCase())).size !== selected.length)
    throw new Error('Duplicate repository in catalog')
  return selected
}

async function handlePluginsData() {
  const allPlugins = getPlugins()
  const pluginsInfoDist = await fetchPlugins(allPlugins)
  fs.outputJSONSync(`${dist}/plugins-debug.json`, pluginsInfoDist, { spaces: 2 })
  fs.outputJSONSync(`${dist}/plugins.json`, pluginsInfoDist)

  // Keep partial candidates for inspection; promotion checks fetch-report.json.

  const shields = {
    lastUpdate: new Date().toISOString(),
    source: 'zotero-chinese/zotero-plugins',
  }
  fs.outputJSONSync(`${dist}/shields.json`, shields)
}

async function handleChartsData() {
  const pluginsInfoDist = fs.readJSONSync(`${dist}/plugins.json`)
  const chartOptions = await getChartOptions(pluginsInfoDist)
  fs.outputJSONSync(`${dist}/charts.json`, chartOptions, { spaces: env.NODE_ENV === 'development' ? 2 : 0 })
}

async function main() {
  const mode: 'fetchPlugins' | 'charts' | string = argv.slice(2)[0]

  const quotaStart = await checkRateLimit()
  if (quotaStart.remaining < 1500) {
    consola.error(`TOKEN 余量不足, ${new Date(quotaStart.reset * 1000).toLocaleTimeString()}后重试`)
    exit(1)
  }

  consola.log('开始处理')
  fs.ensureDir(dist)

  if (mode === 'fetchPlugins') {
    await handlePluginsData()
  }
  else if (mode === 'charts') {
    await handleChartsData()
  }
  else {
    throw new Error('Expected fetchPlugins or charts')
  }

  consola.log('完成')
  const quotaEnd = await checkRateLimit()
  consola.log(`共计请求 ${quotaStart.remaining - quotaEnd.remaining} 次`)
}

main().catch((err) => {
  consola.error(err)
  exit(1)
})
