import assert from 'node:assert/strict'
import test from 'node:test'
import { getCustomReleaseDate } from '../src/handler/custom-release-date.js'

test('Gitee dates come from the selected file and branch, normalized to UTC', async () => {
  const date = await getCustomReleaseDate('https://gitee.com/MuiseDestiny/plugins/raw/master/nested/zotero-gpt.xpi', async (request) => {
    const url = new URL(request)
    assert.equal(url.origin + url.pathname, 'https://gitee.com/api/v5/repos/MuiseDestiny/plugins/commits')
    assert.equal(url.searchParams.get('sha'), 'master')
    assert.equal(url.searchParams.get('path'), 'nested/zotero-gpt.xpi')
    assert.equal(url.searchParams.get('per_page'), '1')
    return [{ commit: { committer: { date: '2026-10-07T13:01:26+08:00' } } }]
  })
  assert.equal(date, '2026-10-07T05:01:26.000Z')
})

test('custom GitHub URLs use the matching asset update date for pinned and latest releases', async () => {
  for (const [path, expectedTag] of [['download/v1%2Bbuild/plugin%20name.xpi', 'v1+build'], ['latest/download/plugin%20name.xpi', 'latest']]) {
    const date = await getCustomReleaseDate(`https://github.com/other-owner/actual-repo/releases/${path}`, undefined, async (owner, repo, tag) => {
      assert.deepEqual([owner, repo, tag], ['other-owner', 'actual-repo', expectedTag])
      return { assets: [
        { name: 'unrelated.xpi', updated_at: '2026-10-08T00:00:00Z' },
        { name: 'plugin name.xpi', updated_at: '2026-09-03T03:42:28Z' },
      ] }
    })
    assert.equal(date, '2026-09-03T03:42:28.000Z')
  }
})

test('missing or invalid source dates fail instead of publishing collection time', async () => {
  const gitee = 'https://gitee.com/owner/plugins/raw/master/plugin.xpi'
  await assert.rejects(getCustomReleaseDate(gitee, async () => []), /update time unavailable/)
  await assert.rejects(getCustomReleaseDate(gitee, async () => [{ commit: { committer: { date: 'invalid' } } }]), /update time unavailable/)
  await assert.rejects(getCustomReleaseDate(gitee, async () => {
    throw new Error('API unavailable')
  }), /API unavailable/)
  await assert.rejects(getCustomReleaseDate('https://github.com/owner/plugin/releases/download/v1/missing.xpi', undefined, async () => ({ assets: [{ name: 'other.xpi', updated_at: '2026-01-01T00:00:00Z' }] })), /update time unavailable/)
  await assert.rejects(getCustomReleaseDate('https://example.org/plugin.xpi'), /Unsupported custom release date source/)
})
