import { writeFile } from 'node:fs/promises'
import { Readable } from 'node:stream'

export async function download(url: string, path: string) {
  const response = await fetch(url)
  if (!response.ok || response.body === null) {
    throw new Error(`Failed to fetch: ${url}`)
  }
  const reader = response.body.getReader()
  const stream = new Readable({
    async read() {
      const { done, value } = await reader.read()
      if (done) {
        this.push(null)
      }
      else {
        this.push(value)
      }
    },
  })
  await writeFile(path, stream)
}
