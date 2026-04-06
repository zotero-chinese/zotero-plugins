import { env } from 'node:process'
import { octokit } from './index.js'

export async function handlePluginErrors(errors: { repo: string, error: any }[]) {
  const repo = env.GITHUB_REPOSITORY
  if (!repo) {
    throw new Error('Not in GitHub Actions environment')
  }
  const [owner, name] = repo.split('/')

  for (const error of errors) {
    const title = `Plugin fetch failed: ${error.repo}`
    const body = `Failed to fetch plugin ${error.repo}\n\nError: ${error.error.message || error.error}`

    // Search for existing open issue with the same title
    const searchResult = await octokit.rest.search.issuesAndPullRequests({
      q: `repo:${owner}/${name} is:issue is:open in:title "${title}"`,
    })

    if (searchResult.data.items.length > 0) {
      // Add comment to existing issue
      const issue = searchResult.data.items[0]
      await octokit.rest.issues.createComment({
        owner,
        repo: name,
        issue_number: issue.number,
        body: `New error occurred:\n\n${body}`,
      })
    }
    else {
      // Create new issue
      await octokit.rest.issues.create({
        owner,
        repo: name,
        title,
        body,
        labels: ['plugin-error'],
      })
    }
  }
}
