import { argv, env, exit } from 'node:process'
import { consola } from 'consola'
import fs from 'fs-extra'
import getChartOptions from './handler/charts-data.js'
import { cleanAssets } from './handler/file-cache.js'
import { fetchPlugins } from './handler/plugins-data.js'
import plugins from './plugins.js'
import { checkRateLimit } from './utils/index.js'

if (!env.GITHUB_TOKEN)
  throw new Error('GITHUB_TOKEN 未设置')

export const dist = './dist'

async function handlePluginsData() {
  const pluginsInfoDist = await fetchPlugins(plugins)
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
