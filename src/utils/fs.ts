import { Buffer } from 'node:buffer'
import fs from 'fs-extra'
import { ofetch } from 'ofetch'

/** Buffer writes avoid leaving a partial cached XPI after a failed transfer. */
export async function download(url: string, path: string) {
  const data = await ofetch(url, {
    responseType: 'arrayBuffer',
    timeout: 60000,
    retry: 2,
    retryDelay: 1000,
  })
  await fs.outputFile(`${path}.tmp`, Buffer.from(data))
  await fs.move(`${path}.tmp`, path, { overwrite: true })
}
