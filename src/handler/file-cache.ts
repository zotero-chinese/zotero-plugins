import process from 'node:process'
import { globbySync } from 'globby'
import { consola } from 'consola'
import fs from 'fs-extra'
import { difference } from 'es-toolkit'
import type { PluginInfo } from '../types.js'

export function cleanAssets() {
  const currentAssets = globbySync('dist/xpi/*.xpi')
    .map(p => p.replace('dist/xpi/', '').replace('.xpi', ''))

  const plugins = fs.readJsonSync('dist/plugins.json') as PluginInfo[]
  const keepAssets = plugins
    .map(p => p.releases)
    .flat()
    .map(r => String(r.assetId))

  const diff = difference(currentAssets, keepAssets)

  if (process.env.NODE_ENV !== 'development') {
    diff.forEach((id) => {
      fs.rmSync(`dist/xpi/${id}.xpi`)
    })
  }
  else {
    consola.info('Clean assets skiped.', diff)
  }
}
