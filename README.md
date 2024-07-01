# Zotero Plugins Collection

![GitHub Action Status](https://img.shields.io/github/actions/workflow/status/northword/zotero-plugins/main.yml?logo=githubactions)
[![Netlify deploys](https://api.netlify.com/api/v1/badges/bae2ef92-2f0a-4076-ae7c-6619933cdf39/deploy-status)](https://app.netlify.com/sites/zotero-plugins/deploys)
![GitHub last commit](https://img.shields.io/github/last-commit/northword/zotero-plugins/main?logo=github)
![last updated](https://img.shields.io/badge/dynamic/json?logo=github&url=https%3A%2F%2Fraw.githubusercontent.com%2Fnorthword%2Fzotero-plugins%2Fgh-pages%2Fdist%2Fshields.json&query=%24.lastUpdate&label=last%20updated)
![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hw/zotero-chinese/zotero-plugins?logo=jsdelivr)

_This README is also available in: [:cn: 简体中文](./README-zh.md) | :gb: English._

This repository provides information of several Zotero plugins and their XPI packages , in an attempt to provide a centralized plugin store service until the official Zotero plugin store is ready.

## View

- **Main domin of Zotero Chinese: <https://zotero-chinese.com/plugins>**
- Netlify: <https://zotero-plugins.netlify.app/>
- GitHub Pages: <https://zotero-chinese.github.io/zotero-plugins/>

## Submitting Plugins

> [!NOTE]
>
> How to add a plugin that hasn't been included?
>
> Edit [`src/plugins.ts`](./src/plugins.ts), and add an object to the `plugins` list in the following format. Existing entries can serve as references.
>
> When adding, please sort by `repo`.
>
> After editing, commit and pull request. We will process it as soon as possible.

```ts
interface PluginInfo {
  /**
   * Repository of plugin
   *
   * Example: northword/zotero-format-metadata
   *
   * Note: no `/` at the beginning or end
   */
  repo: string
  /**
   * Release information of the plugin
   */
  releases: Array<{
    /**
     * Zotero version for this release, "7" or "6"
     */
    targetZoteroVersion: string
    /**
     * Download channel for this release
     *
     * `latest`: Latest official release;
     * `pre`: Latest pre-release;
     * `string`: Corresponding `git.tag_name` of the release;
     * Note that some `git.tag_name` have `v` while others do not, you can check the release link to determine.
     */
    tagName: 'latest' | 'pre' | string
  }>
}
```

## Development Guide

Before starting development, you need to create a [GitHub personal access token](https://docs.github.com/zh/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) and store it in the local environment variable `GITHUB_TOKEN`.

```bash
# Clone the repository
git clone https://github.com/northword/zotero-plugins.git zotero-plugins
cd zotero-plugins

# Install dependencies
npm install -g pnpm
pnpm install

# Fetch plugin information
pnpm data:info

# Fetch chart information
pnpm data:chart
```

[`src/index.ts`](./src/index.ts) is the main logic script, which performs the following actions:

- Iterates through the plugin information list, fetches basic information and releases for each plugin from GitHub, and saves the obtained information in [`dist/plugins.json`](https://github.com/northword/zotero-plugins/blob/gh-pages/dist/plugins.json)
- Saves the XPI packages in [`dist/xpi/${github.release.asset.id}.xpi`](https://github.com/northword/zotero-plugins/blob/gh-pages/dist/xpi)

The GitHub Action Bot periodically runs the `src/index.ts` script, performs the above steps, and deploys the `dist/` to the [`gh-page`](https://github.com/northword/zotero-plugins/blob/gh-pages/) branch.

> [!NOTE]
>
> How to use this project as a dependency for secondary development?
>
> Developers can use the dist files like [`dist/plugins.json`](https://github.com/northword/zotero-plugins/blob/gh-pages/dist/plugins.json) from the `gh-pages` branch.

## Acknowledgements

Thanks to the Zotero community and developers for their contributions!

This project uses the following proxies or public CDN services for XPI distribution:

- GitHub Proxy: <https://github.com/hunshcn/gh-proxy>
- JsDeliver: <https://www.jsdelivr.com/>
- KGitHub: <https://help.kkgithub.com/>

This project is a TypeScript reimplementation of [l0o0/ZoteroPlugins](https://github.com/l0o0/ZoteroPlugins).

This project is deployed on GitHub Pages and Netlify.

[![netlify](https://www.netlify.com/v3/img/components/netlify-color-bg.svg)](https://www.netlify.com)

## Contributors

[![contributors](https://contrib.rocks/image?repo=zotero-chinese/zotero-plugins)](https://github.com/zotero-chinese/zotero-plugins/graphs/contributors)

## License

MIT License

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=zotero-chinese/zotero-plugins&type=Date)](https://star-history.com/#zotero-chinese/zotero-plugins&Date)
