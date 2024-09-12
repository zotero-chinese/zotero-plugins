import process from 'node:process'
import { Buffer } from 'node:buffer'
import { Octokit } from 'octokit'

export const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

export async function checkRateLimit() {
  const { data } = await octokit.rest.rateLimit.get()
  return data.rate
}

export async function getRelease(owner: string, repo: string, tagName: string) {
  if (tagName === 'latest') {
    const resp = await octokit.rest.repos.getLatestRelease({ owner, repo })
    return resp.data
  }
  else if (tagName === 'pre') {
    const resp = await octokit.rest.repos.listReleases({ owner, repo })
    return resp.data.filter(item => item.prerelease && item.tag_name !== 'release')[0]
  }
  else {
    const resp = await octokit.rest.repos.getReleaseByTag({
      owner,
      repo,
      tag: tagName,
    })
    return resp.data
  }
}

export async function getReleaseAssetBuffer(owner: string, repo: string, asset_id: number) {
  const resp = await octokit.rest.repos
    .getReleaseAsset({
      owner,
      repo,
      asset_id,
      headers: {
        Accept: 'application/octet-stream',
      },
    })
  return Buffer.from(resp.data as unknown as ArrayBuffer)
}
