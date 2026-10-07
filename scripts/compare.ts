import { argv } from 'node:process'
import fs from 'fs-extra'
import { deprecatedPlugins } from '../src/deprecated.js'
import { compareCatalog } from '../src/handler/comparison.js'
import { plugins } from '../src/plugins.js'

const external = fs.readJSONSync(argv[2] || 'dist/external-plugins.json')
const candidate = fs.readJSONSync(argv[3] || 'dist/collector/plugins.json')
const report = compareCatalog([...plugins, ...deprecatedPlugins], external, candidate)
fs.outputJSONSync(argv[4] || 'dist/comparison.json', report, { spaces: 2 })
console.log(JSON.stringify(report, null, 2))
