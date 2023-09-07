# Zotero 插件合集

![GitHub 自动构建状态](https://img.shields.io/github/actions/workflow/status/northword/zotero-plugins/main.yml)
[![Netlify 部署状态](https://api.netlify.com/api/v1/badges/bae2ef92-2f0a-4076-ae7c-6619933cdf39/deploy-status)](https://app.netlify.com/sites/zotero-plugins/deploys)
![GitHub 最后更新时间](https://img.shields.io/github/last-commit/northword/zotero-plugins/gh-pages)
![最后更新](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fnorthword%2Fzotero-plugins%2Fgh-pages%2Fdist%2Fshields.json&query=%24.lastUpdate&label=%E6%9C%80%E5%90%8E%E6%9B%B4%E6%96%B0)

:cn: 本仓库提供了若干 Zotero 插件的信息及其 XPI 包，尝试在 Zotero 官方插件商店建立前，提供集中的插件商店服务。

:gb: This repository provides information of several Zotero plugins and their XPI packages , in an attempt to provide a centralized plugin store service until the official Zotero plugin store is ready.

## 访问

- **Zotero 中文社区主域名：<https://plugins.zotero-chinese.com>**
- Netlify: <https://zotero-plugins.netlify.app/>
- Northword.dev: <https://plugins.zotero.northword.dev>
- GitHub Pages: <https://northword.github.io/zotero-plugins/>
- Vercel: 待部署
- Gitee: 待部署

## 贡献

### 插件信息

插件信息保存在 [`src/plugins.ts`](./src/plugins.ts)，数据格式如下：

```ts
interface PluginInfo {
  name: string;                   // 插件名称
  repo: string;                   // 插件仓库：northword/zotero-format-metadata，前后均无 `/`
  releases: PluginReleaseInfo[];  // 插件的发行版信息
  description?: string;
}

interface PluginReleaseInfo {
  targetZoteroVersion: string;             // 当前发行版针对的 Zotero 版本
  tagName: "latest" | "pre" | "string";    // 当前发行版发布的类型——latest：最新正式发布，pre：最新预发布，string：发布对应的 git.tag_name 
}
```

对于每一个插件，只有必填项需要填写在 [`src/plugins.ts`](./src/plugins.ts) 中，其余字段脚本运行时可以获取。

### 构建过程

[`src/index.ts`](./src/index.ts) 为主要逻辑脚本，它执行如下操作：

- 遍历上述插件信息列表，从 GitHub 获取每一个插件的基本信息和发行版，将获取到的信息保存在 [`docs/dist/plugins.json`](https://github.com/northword/zotero-plugins/blob/gh-pages/dist/plugins.json)
- 同时将 XPI 包保存在 [`docs/dist/xpi/${github.release.asset.id}.xpi`](https://github.com/northword/zotero-plugins/blob/gh-pages/dist/xpi)
- 根据得到的信息，渲染为 Markdown 表格，写入 [`docs/dist/plugins.md`](https://github.com/northword/zotero-plugins/blob/gh-pages/dist/plugins.md)

GitHub Action Bot 定时运行 `src/index.ts` 脚本，执行上述步骤，并将 `docs/dist` 部署到 [`gh-page`](https://github.com/northword/zotero-plugins/blob/gh-pages/) 分支。

### 开发

```bash
# 克隆仓库
git clone https://github.com/northword/zotero-plugins.git zotero-plugins
cd zotero-plugins

# 安装依赖
npm install

# 运行构建脚本
npm run build

# 启动网页服务器
npm run website
```

## 致谢

本项目使用了如下代理或公共 CDN 服务完成 XPI 分发：

- GitHub 代理：<https://github.com/hunshcn/gh-proxy>
- JsDeliver：<https://www.jsdelivr.com/>
- KGitHub: <https://help.kgithub.com/>

本项目是对 [l0o0/ZoteroPlugins](https://github.com/l0o0/ZoteroPlugins) 的 Typescript 重新实现。

本项目部署在 GitHub Pages 和 Netlify.

[![netlify](https://www.netlify.com/v3/img/components/netlify-color-bg.svg)](https://www.netlify.com)

## 协议

MIT License
