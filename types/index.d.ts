export interface PluginInfoBase {
  /**
   * 插件仓库
   *
   * 例如：northword/zotero-format-metadata
   *
   * 注意前后均无 `/`
   */
  repo: string
  /**
   * 插件的发布地址信息
   */
  releases: ReleaseInfoBase[]

  tags: TagType[]
}

export interface ReleaseInfoBase {
  /**
   * 当前发布版对应的 Zotero 版本
   */
  targetZoteroVersion: string
  /**
   * 当前发布版对应的下载通道
   *
   * `latest`：最新正式发布；
   * `pre`：最新预发布；
   * `string`：发布对应的 `git.tag_name`；
   * 注意 `git.tag_name` 有的有 `v` 而有的没有，可以通过发布链接来判断
   * 程序执行后，`tagName` 将替换为实际的 `git.tag_name`
   */
  tagName: 'latest' | 'pre' | string
}

export interface PluginInfo extends PluginInfoBase {
  /**
   * 插件名称
   */
  name: string
  releases: ReleaseInfo[]
  description: string
  /**
   * @deprecated Please use stars instead.
   */
  star: number
  stars: number
  watchers: number
  author: {
    name: string
    url: string
    avatar: string
  }
}

export interface ReleaseInfo extends ReleaseInfoBase {
  /**
   * 插件 ID，自 XPI 中提取
   */
  id: string
  /**
   * 插件版本，自 XPI 中提取
   */
  xpiVersion: string
  xpiDownloadUrl: {
    github: string
    gitee: string
    ghProxy: string
    jsdeliver: string
    kgithub: string
  }
  releaseDate: string
  downloadCount: number
  assetId: number
}

/**
 * 插件标签
 */
export type TagType =
  // 推荐列表
  | 'favorite'
  // 条目元数据维护
  | 'metadata'
  // UI相关
  | 'interface'
  // 附件管理相关
  | 'attachment'
  // 笔记增强
  | 'notes'
  // 阅读器增强
  | 'reader'
  // 效率增强、生产力工具
  | 'productivity'
  // 可视化、文库分析
  | 'visualization'
  // 第三方软件集成
  | 'integration'
  // 字处理软件集成或增强
  | 'writing'
  // 开发者工具
  | 'developer'
  // 其他
  | 'others'
