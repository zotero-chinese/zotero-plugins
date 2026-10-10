# Zotero Plugins Collection

This repository maintains a local Zotero plugin catalog and independently collects repository metadata and XPI compatibility information. Visit [Zotero Chinese](https://zotero-chinese.com/plugins). [中文说明](README-zh.md).

## New plugins and plugin updates

We are accepting new plugin submissions and updates to existing plugin information again. Contributions are welcome through an [issue](https://github.com/zotero-chinese/zotero-plugins/issues/new) or pull request.

- New plugins: include the repository URL, a brief description and a release/download link. For a pull request, add an entry to `src/plugins.ts` in repository-name order, with `repo`, `tags`, `releases` and `discoverReleases: true`. An empty `releases` array enables discovery of the latest stable release.
- Plugin updates: describe the correction, such as a repository transfer, category, download URL or historical compatibility range, and include supporting links.

The collector checks the latest stable release, so ordinary version releases generally require no manual catalog edit. Historical release selectors still need maintenance for older Zotero versions. Reviewed submissions enter the local catalog after merging; store availability depends on publication builds and the website's configured data source.

## Collector rollout

The default `shadow` build runs our collector and compares its candidate data with the external scraper. Published `plugins.json` continues to use external data during validation, enriched with locally maintained Chinese names, summaries and search terms. Releases, compatibility and download URLs still come from the external data. Chart collection remains disabled; published charts are preserved.

1. Merge the changes and inspect `comparison.json` and `collector/fetch-report.json` in the Actions artifact.
2. Check repository coverage, historical releases, compatibility ranges and download URLs. Fetch failures, missing releases and version regressions block promotion.
3. Run CI manually with `collector-mode: primary` to publish independently collected data. Set the repository variable `COLLECTOR_MODE=primary` after validation to retain this mode for scheduled builds. Revert it to `shadow` to publish external data again.
4. The website still reads the external scraper directly. Switch both plugin data and update timestamps in website's `.github/scripts/fetch-data.mjs` after validating the independent output.

Unreleased sources absent from the external output are marked pending and do not block promotion. The collector does not create issues or comments. Incomplete candidates remain available for inspection and cannot replace the published catalog in primary mode.

## Source reconciliation

On 2026-10-05 the local catalog was reconciled with upstream's `addons` directory: **337 unique repositories**, compared with **336 published plugins**. See [the reconciliation report](reports/source-reconciliation.json) for additions, duplicates and the unpublished source entry.

`src/plugins.ts` contains active plugins; `src/deprecated.ts` retains legacy plugins. Historical release selectors are combined with the newest stable release from the most recent release page. XPI manifests determine compatible Zotero versions (6–11). `assetName` selects an attachment, `customLink` supports external download sources, and `tags` / `recommended` preserve upstream metadata.

Optional `nameZh`, `summaryZh` and `keywords` fields hold an established Chinese name, a short Chinese purpose statement and search terms. Maintain them in the source catalog; upstream sync preserves them, and both collector and shadow output include them. Omit `nameZh` when the plugin has no established Chinese name. Repository `aliases` remain separate and only identify previous repository names.

## Development

Use the pnpm version in package.json and supply `GITHUB_TOKEN` through the environment.

```bash
pnpm install --frozen-lockfile
pnpm typecheck
pnpm lint:check
pnpm test
COLLECTOR_MODE=shadow pnpm build
pnpm data:compare dist/external-plugins.json dist/collector/plugins.json
pnpm data:sync-source /path/to/scraper-checkout /path/to/addon_infos.json
pnpm lint:fix
```

Use `COLLECTOR_REPOS=owner/repo,owner/other` and `COLLECTOR_DIST=dist/sample` with `pnpm data:info` for a small sample. Review the diff after importing upstream data; local-only repositories are preserved.

XPI files are cached in `.cache/xpi` by asset ID and update time. Custom URLs are refreshed each run. Candidate data is written to `dist/collector`; published JSON is written to `dist` and the legacy `dist/dist` paths.

## Scheduled upstream source sync

`.github/workflows/sync-source.yml` runs daily at 05:45 Asia/Shanghai and supports manual dispatch. It merges syt2's source catalog and latest published snapshot, then creates or updates a PR on `automation/sync-syt2-sources` when the catalog changes. Review and merge the PR to update the collector's sources.

The merge retains local-only plugins, repository aliases, historical selectors, verified compatibility corrections and the active/legacy split. New unpublished sources remain pending. Typecheck, tests and lint run before PR creation; artifacts record the source commit, release metadata and merge report.

PR creation uses `ACCESS_TOKEN` when available, falling back to `GITHUB_TOKEN`. The fallback requires the repository setting allowing Actions to create PRs and does not trigger ordinary PR workflows. The sync job performs validation itself. PRs are not automatically merged, and upstream code is not executed.

## License

MIT. Thanks to Zotero, plugin authors and the external scraper maintainers.
