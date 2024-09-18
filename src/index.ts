import { argv, env, exit } from 'node:process'
import { consola } from 'consola'
import fs from 'fs-extra'
import { deprecatedPlugins } from './deprecated.js'
import getChartOptions from './handler/charts-data.js'
import { cleanAssets } from './handler/file-cache.js'
import { fetchPlugins } from './handler/plugins-data.js'
import { plugins, pluginsDev } from './plugins.js'
import { checkRateLimit } from './utils/index.js'

if (!env.GITHUB_TOKEN)
  throw new Error('GITHUB_TOKEN 未设置')

export const dist = './dist'

function getPlugins() {
  if (env.NODE_ENV === 'development')
    return pluginsDev

  return [...plugins, ...deprecatedPlugins]

  // const mergedPlugins = unionBy(plugins, deprecatedPlugins, p => p.repo)
  // return mergedPlugins.map((item) => {
  //   const list1Item = plugins.find(l => l.repo === item.repo)
  //   const list2Item = deprecatedPlugins.find(l => l.repo === item.repo)

  //   if (list1Item && list2Item) {
  //     return {
  //       ...item,
  //       releases: [...list1Item.releases, ...list2Item.releases],
  //       tags: union(list1Item.tags, list2Item.tags),
  //     }
  //   }
  //   return item
  // })
};

async function handlePluginsData() {
  const allPlugins = getPlugins()
  const pluginsInfoDist = await fetchPlugins(allPlugins)
  fs.outputJSONSync(`${dist}/plugins-debug.json`, pluginsInfoDist, { spaces: 2 })
  fs.outputJSONSync(`${dist}/plugins.json`, pluginsInfoDist)

  cleanAssets()

  const shields = {
    lastUpdate: new Date().toLocaleString('zh-CN'),
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
    consola.error(`TOKEN 余量不足, ${new Date(quotaStart.reset).toLocaleTimeString()}后重试`)
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
    consola.error('No arg, exit.')
  }

  consola.log('完成')
  const quotaEnd = await checkRateLimit()
  consola.log(`共计请求 ${quotaStart.remaining - quotaEnd.remaining} 次`)
}

main().catch((err) => {
  consola.error(err)
  exit(1)
})
