# Zotero 插件合集

本仓库维护 Zotero 插件源清单，并从插件仓库和 XPI manifest 独立采集插件信息。网站入口：[Zotero 中文社区](https://zotero-chinese.com/plugins)。

## 新插件投稿与插件更新

本仓库已恢复接收新插件投稿和已有插件的信息更新，欢迎通过 [Issue](https://github.com/zotero-chinese/zotero-plugins/issues/new) 或 Pull Request 提交。

- 新增插件：提供插件仓库地址、用途说明及发布／下载地址；通过 PR 投稿时，在 `src/plugins.ts` 中按仓库名排序添加条目，格式见下方「源数据」。
- 更新插件：说明需要修正的信息，例如仓库迁移、分类、下载地址或历史版本兼容范围，并提供对应链接。

采集器会检查插件的最新正式版，一般无需为每次版本发布手动更新清单；旧版 Zotero 所需的历史发行版仍需维护对应选择器。投稿经审核合并后纳入本地清单，商店展示以发布构建和网站数据源更新为准。

## 逐步恢复采集

默认运行 `shadow` 模式：采集器会处理本地清单，生成候选数据及与外部 scraper 的差异报告；对外的 `plugins.json` 暂时继续使用外部数据。图表沿用已发布数据，本阶段不恢复图表采集。

1. 合并代码后，定时 CI 自动运行独立采集。查看 Actions 构建产物中的 `comparison.json` 和 `collector/fetch-report.json`。
2. 验证插件覆盖、历史版本、兼容范围和下载地址。采集失败、缺少插件或历史版本、版本倒退均会阻止正式切换。
3. 手动运行 CI，选择 `collector-mode: primary`，发布独立采集结果。验证完成后，可将仓库变量 `COLLECTOR_MODE` 设为 `primary`，使定时任务持续使用采集器。设回 `shadow` 即可恢复外部数据发布。
4. 网站目前仍直接读取外部 scraper；独立产物验证通过后，再修改 website 的 `.github/scripts/fetch-data.mjs`，将插件数据和更新时间一起切换到本仓库。

尚未发布且外部也没有产物的源条目会标记为 pending，不阻止切换。`primary` 不会静默发布不完整的数据。差异报告始终保留在构建产物中；采集器不会自动创建 Issue 或发送评论。

## 当前校验结果

全量采集及针对修复的复核覆盖 336 个已发布插件，采集失败为 0；另 1 个源仓库尚未发布。与外部数据相比，Theorem List、LaTeX Suite 的历史 XPI 均声明最低版本为 `6.999`，外部却将其列为 Zotero 6。源清单中的这两条版本标记已纠正，正式切换仍由差异检查阻止，等待历史兼容记录的处理。详见 [采集验证报告](reports/collector-validation.json)。

## 源数据

2026-10-05 已对齐 [syt2/zotero-addons-scraper 的 addons 目录](https://github.com/syt2/zotero-addons-scraper/tree/master/addons)：337 个唯一仓库，外部当时发布了 336 个插件。具体新增项、重复项及尚未发布的源条目见 [源清单对比报告](reports/source-reconciliation.json)。

- 活跃清单：`src/plugins.ts`；保留旧版插件：`src/deprecated.ts`。
- `releases` 保存已验证的历史版本选择；同一发行版可根据 manifest 兼容范围用于多个 Zotero 版本。
- `discoverReleases: true` 检查最近一页发行版中最新的正式版，与历史选择共同生成 Zotero 6–11 的兼容版本。
- `assetName` 指定多附件仓库中的 XPI；`customLink` 支持非 GitHub 下载来源。
- `tags` 和 `recommended` 来自源清单，支持在本地贡献新插件。

新增插件可在 `src/plugins.ts` 中按仓库名排序添加：

```ts
const plugin = {
  repo: 'owner/plugin',
  releases: [],
  tags: ['reader'],
  discoverReleases: true,
}
```

首次采集会尝试最新正式版；需要兼容旧 Zotero 时，在 `releases` 中补充历史 tag 与附件名称。

## 开发与验证

需要 Node.js、package.json 指定版本的 pnpm，以及可读取公共仓库的 GitHub token。令牌通过环境变量 `GITHUB_TOKEN` 提供，不写入文件。

```bash
pnpm install --frozen-lockfile
pnpm typecheck
pnpm lint:check
pnpm test

# 两个插件的小范围采集，输出到 dist/sample
COLLECTOR_REPOS=northword/zotero-format-metadata,windingwind/zotero-better-notes \
  COLLECTOR_DIST=dist/sample pnpm data:info

# 全量采集与对比，保留外部发布数据
COLLECTOR_MODE=shadow pnpm build

# 对比已有产物
pnpm data:compare dist/external-plugins.json dist/collector/plugins.json

# 从已检出的外部源清单和对应发布快照更新本地清单
pnpm data:sync-source /path/to/zotero-addons-scraper /path/to/addon_infos.json
pnpm lint:fix
```

`data:sync-source` 会保留本地新增仓库，并同步外部的标签、推荐标记和已发布历史版本。提交前检查 diff 与差异报告。

XPI 缓存放在 `.cache/xpi`，以附件 ID 和更新时间区分版本；自定义下载地址每次刷新。候选数据位于 `dist/collector`，最终发布数据位于 `dist`，并保留 `dist/dist/*.json` 的兼容路径。下载使用超时、重试和原子文件替换；错误响应或损坏安装包不会成为有效缓存。

## 定时同步上游源清单

`.github/workflows/sync-source.yml` 每天北京时间 05:45 运行，也支持在 Actions 中手动触发。它读取 syt2 的 `addons` 清单和最新发布快照，合并到本地源文件；有变化时创建或更新 `automation/sync-syt2-sources` 分支的 PR，无变化时不创建 PR。PR 审核合并后，采集器使用更新后的清单。

同步保留本地独有插件、仓库别名、历史版本选择器和已验证的兼容版本修正，并保持现有的活跃／旧插件分组。新增但尚无发布的插件进入待采集状态。同步后必须通过类型检查、测试和 lint；运行产物保留上游提交、发布信息及合并报告，便于追溯。

创建 PR 优先使用现有 `ACCESS_TOKEN`，否则使用 `GITHUB_TOKEN`。使用后者时，仓库设置需允许 GitHub Actions 创建 PR；它创建的 PR 不会自动触发普通 PR 工作流，因此同步任务本身已执行上述验证。此工作流不自动合并 PR，也不执行上游仓库的代码。

## 协议

MIT。感谢 Zotero 社区、插件作者和外部 scraper 维护者。
