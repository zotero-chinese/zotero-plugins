import type { TagType } from "zotero-plugins-data";

export type Tag = {
  label: string;
  description: string;
  color?: string;
};

export const tags: { [type in TagType]: Tag } = {
  favorite: {
    label: "推荐",
    description:
      "我们推荐的高质量插件！这些插件通常可以解决多数同学的痛点，且维护良好",
    color: "#e9669e",
  },
  metadata: {
    label: "条目元数据",
    description: "维护条目元数据，管理文献库条目等",
  },
  interface: {
    label: "界面交互",
    description: "美化用户界面，优化交互操作",
  },
  attachment: {
    label: "附件管理",
    description: "管理 PDF、DOCX 等附件",
  },
  notes: {
    label: "笔记增强",
    description: "改善 Zotero 笔记功能使用体验",
    color: undefined,
  },
  reader: {
    label: "阅读器增强",
    description: "增强阅读器使用体验",
    color: undefined,
  },
  productivity: {
    label: "效率增强",
    description: "效率工具，生产力工具",
    color: undefined,
  },
  visualization: {
    label: "可视化文库",
    description: "可视化文库",
    color: undefined,
  },
  integration: {
    label: "第三方集成",
    description: "与第三方软件集成，如 LaTeX、Obsidian、Notion 等",
    color: undefined,
  },
  writing: {
    label: "写作增强",
    description: "增强 Zotero 在 Word 等字处理软件的使用体验",
    color: undefined,
  },
  developer: {
    label: "开发者工具",
    description: "开发者使用的插件，常规用户可以忽略",
    color: undefined,
  },
  others: {
    label: "其他",
    description: "不在以上分类中的其他插件",
    color: undefined,
  },
};
export const tagList = Object.keys(tags) as TagType[];
