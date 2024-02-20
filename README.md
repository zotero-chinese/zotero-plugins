# Zotero 插件合集

![GitHub 自动构建状态](https://img.shields.io/github/actions/workflow/status/northword/zotero-plugins/main.yml?logo=githubactions)
[![Netlify 部署状态](https://api.netlify.com/api/v1/badges/bae2ef92-2f0a-4076-ae7c-6619933cdf39/deploy-status)](https://app.netlify.com/sites/zotero-plugins/deploys)
![GitHub 最后更新时间](https://img.shields.io/github/last-commit/northword/zotero-plugins/main?logo=github)
![最后更新](https://img.shields.io/badge/dynamic/json?logo=github&url=https%3A%2F%2Fraw.githubusercontent.com%2Fnorthword%2Fzotero-plugins%2Fgh-pages%2Fdist%2Fshields.json&query=%24.lastUpdate&label=%E6%9C%80%E5%90%8E%E6%9B%B4%E6%96%B0)
![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hw/zotero-chinese/zotero-plugins?logo=jsdelivr)

:cn: 本仓库提供了若干 Zotero 插件的信息及其 XPI 包，尝试在 Zotero 官方插件商店建立前，提供集中的插件商店服务。

:gb: This repository provides information of several Zotero plugins and their XPI packages , in an attempt to provide a centralized plugin store service until the official Zotero plugin store is ready.

## 访问

- **Zotero 中文社区主域名：<https://plugins.zotero-chinese.com>**
- Netlify: <https://zotero-plugins.netlify.app/>
- GitHub Pages: <https://zotero-chinese.github.io/zotero-plugins/>

## 贡献

### 插件信息

插件信息保存在 [`src/plugins.ts`](./src/plugins.ts)，数据格式如下：

```ts
interface PluginInfo {
  /**
   * 插件名称
   */
  name: string;
  /**
   * 插件仓库
   *
   * 例如：northword/zotero-format-metadata
   *
   * 注意前后均无 `/`
   */
  repo: string;
  /**
   * 插件的发布地址信息
   */
  releases: Array<{
    /**
     * 当前发布版对应的 Zotero 版本
     */
    targetZoteroVersion: string;
    /**
     * 当前发布版对应的下载通道
     *
     * `latest`：最新正式发布；
     * `pre`：最新预发布；
     * `string`：发布对应的 `git.tag_name`；
     * 注意 `git.tag_name` 有的有 `v` 而有的没有，可以通过发布链接来判断
     */
    tagName: "latest" | "pre" | string;
  }>;
}
```

对于每一个插件，只有必填项需要填写在 [`src/plugins.ts`](./src/plugins.ts) 中，其余字段脚本运行时可以获取。

> [!NOTE]
>
> 如何添加未收录的插件？
>
> 编辑 [`src/plugins.ts`](./src/plugins.ts)，在 `plugins` 列表中添加一个对象，内容如上所示，已有的内容亦可作为参考。
>
> 编辑完成后提交，发起 Pull Request，仓库成员将尽快处理。

### 构建过程

[`src/index.ts`](./src/index.ts) 为主要逻辑脚本，它执行如下操作：

- 遍历上述插件信息列表，从 GitHub 获取每一个插件的基本信息和发行版，将获取到的信息保存在 [`docs/dist/plugins.json`](https://github.com/northword/zotero-plugins/blob/gh-pages/dist/plugins.json)
- 同时将 XPI 包保存在 [`docs/dist/xpi/${github.release.asset.id}.xpi`](https://github.com/northword/zotero-plugins/blob/gh-pages/dist/xpi)
- 根据得到的信息，渲染为 Markdown 表格，写入 [`docs/dist/plugins.md`](https://github.com/northword/zotero-plugins/blob/gh-pages/dist/plugins.md)

GitHub Action Bot 定时运行 `src/index.ts` 脚本，执行上述步骤，并将 `docs/dist` 部署到 [`gh-page`](https://github.com/northword/zotero-plugins/blob/gh-pages/) 分支。

> [!NOTE]
>
> 如何将本项目作为依赖项进行二次开发？
>
> 开发者可以使用 [`gh-pages` 分支中 `dist/plugins.json`](https://github.com/northword/zotero-plugins/blob/gh-pages/dist/plugins.json) 等构建文件。

### 开发

根据 [GitHub 文档](https://docs.github.com/zh/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) 创建 GitHub 个人访问令牌，将其存入本地环境变量 `GITHUB_TOKEN`。

```bash
# 克隆仓库
git clone https://github.com/northword/zotero-plugins.git zotero-plugins
cd zotero-plugins

# 安装依赖
npm install -g pnpm
pnpm install

# 构建插件信息表格
pnpm run get-info

# 启动网页预览服务器
pnpm run website

# 构建插件排行榜图表页面
pnpm run get-chart
```

## 致谢

感谢 Zotero 社区及开发者们的付出！

本项目使用了如下代理或公共 CDN 服务完成 XPI 分发：

- GitHub 代理：<https://github.com/hunshcn/gh-proxy>
- JsDeliver：<https://www.jsdelivr.com/>
- KGitHub: <https://help.kkgithub.com/>

本项目是对 [l0o0/ZoteroPlugins](https://github.com/l0o0/ZoteroPlugins) 的 Typescript 重新实现。

本项目部署在 GitHub Pages 和 Netlify.

[![netlify](https://www.netlify.com/v3/img/components/netlify-color-bg.svg)](https://www.netlify.com)

## 贡献者

[![本项目贡献者](https://contrib.rocks/image?repo=zotero-chinese/zotero-plugins)](https://github.com/zotero-chinese/zotero-plugins/graphs/contributors)

## 协议

MIT License

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=zotero-chinese/zotero-plugins&type=Date)](https://star-history.com/#zotero-chinese/zotero-plugins&Date)
