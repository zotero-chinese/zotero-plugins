import type { TagType } from "zotero-plugins-data";

export type Tag = {
  label: string;
  description: string;
  color?: string;
};

export const tags: { [type in TagType]: Tag } = {
  favorite: {
    label: "推荐",
    description: "我们推荐的高质量插件！",
    color: "#e9669e",
  },
  metadata: {
    label: "条目元数据",
    description: "维护条目元数据",
  },
  interface: {
    label: "界面交互",
    description: "与界面交互相关",
  },
  attachment: {
    label: "附件管理",
    description: "与界面交互相关",
  },
  notes: {
    label: "笔记增强",
    description: "",
    color: undefined,
  },
  reader: {
    label: "阅读器增强",
    description: "",
    color: undefined,
  },
  productivity: {
    label: "效率增强",
    description: "",
    color: undefined,
  },
  visualization: {
    label: "可视化文库",
    description: "",
    color: undefined,
  },
  integration: {
    label: "第三方集成",
    description: "",
    color: undefined,
  },
  writing: {
    label: "写作增强",
    description: "",
    color: undefined,
  },
  developer: {
    label: "开发者工具",
    description: "",
    color: undefined,
  },
  others: {
    label: "其他",
    description: "",
    color: undefined,
  },
};
export const tagList = Object.keys(tags) as TagType[];
