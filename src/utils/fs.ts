import { writeFile } from 'node:fs/promises'
import { ofetch } from 'ofetch'

export async function download(url: string, path: string) {
  const data = await ofetch(url, {
    responseType: 'stream',
    retry: 3,
    retryDelay: 500, // ms
    retryStatusCodes: [404, 500], // response status codes to retry
  })

  await writeFile(path, data)
}
