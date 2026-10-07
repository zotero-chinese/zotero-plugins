import { env } from 'node:process'

export const dist = env.COLLECTOR_DIST || './dist/collector'
export const xpiCache = './.cache/xpi'
export const targetVersions = ['11', '10', '9', '8', '7', '6']
