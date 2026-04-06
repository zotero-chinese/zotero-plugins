import { Buffer } from 'node:buffer'
import process from 'node:process'
import { Octokit } from 'octokit'

export const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

const thisOwner = 'zotero-chinese'
const thisRepo = 'zotero-plugins'

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

export async function handlePluginErrors(errors: { repo: string, error: any }[]) {
  for (const error of errors) {
    const title = `Plugin fetch failed: ${error.repo}`
    const body = `Failed to fetch plugin ${error.repo}\n\nError: ${error.error.message || error.error}`

    // Search for existing open issue with the same title
    const searchResult = await octokit.rest.search.issuesAndPullRequests({
      q: `repo:${thisOwner}/${thisRepo} is:issue is:open in:title "${title}"`,
    })

    if (searchResult.data.items.length > 0) {
      // Add comment to existing issue
      const issue = searchResult.data.items[0]
      await octokit.rest.issues.createComment({
        owner: thisOwner,
        repo: thisRepo,
        issue_number: issue.number,
        body: `New error occurred:\n\n${body}`,
      })
    }
    else {
      // Create new issue
      await octokit.rest.issues.create({
        owner: thisOwner,
        repo: thisRepo,
        title,
        body,
        labels: ['plugin-error'],
      })
    }
  }
}
