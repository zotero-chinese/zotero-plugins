import { ofetch } from 'ofetch'
import { getRelease } from '../utils/github.js'

type FetchCommits = (url: string) => Promise<{ commit?: { committer?: { date?: string } } }[]>
type FindRelease = (owner: string, repo: string, tag: string) => Promise<{ assets: { name: string, updated_at: string }[] } | undefined>

/** Resolve the downloaded file's update time, never the collection time. */
export async function getCustomReleaseDate(
  downloadUrl: string,
  fetchCommits: FetchCommits = url => ofetch(url, { timeout: 60000, retry: 2 }),
  findRelease: FindRelease = getRelease,
): Promise<string> {
  const url = new URL(downloadUrl)
  const gitee = url.pathname.match(/^\/([^/]+)\/([^/]+)\/raw\/([^/]+)\/(.+)$/)
  const github = url.pathname.match(/^\/([^/]+)\/([^/]+)\/releases\/(?:download\/([^/]+)|latest\/download)\/([^/]+)$/)
  let date: string | undefined

  if (url.hostname === 'gitee.com' && gitee) {
    const [, owner, repo, ref, file] = gitee
    const endpoint = new URL(`https://gitee.com/api/v5/repos/${owner}/${repo}/commits`)
    endpoint.searchParams.set('sha', decodeURIComponent(ref))
    endpoint.searchParams.set('path', decodeURIComponent(file))
    endpoint.searchParams.set('per_page', '1')
    const commits = await fetchCommits(endpoint.href)
    date = commits[0]?.commit?.committer?.date
  }
  else if (url.hostname === 'github.com' && github) {
    const [, owner, repo, tag, file] = github
    const release = await findRelease(decodeURIComponent(owner), decodeURIComponent(repo), tag ? decodeURIComponent(tag) : 'latest')
    date = release?.assets.find(asset => asset.name === decodeURIComponent(file))?.updated_at
  }
  else {
    throw new Error(`Unsupported custom release date source: ${downloadUrl}`)
  }

  if (!date || !Number.isFinite(Date.parse(date)))
    throw new Error(`Custom release update time unavailable: ${downloadUrl}`)
  return new Date(date).toISOString()
}
