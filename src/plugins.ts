export interface PluginInfo {
  name: string;
  repo: string;
  releases: PluginReleaseInfo[];

  description?: string;
  star?: number;
  author?: {
    name: string;
    url: string;
    avatar: string;
  };
}

export interface PluginReleaseInfo {
  targetZoteroVersion: string;
  tagName: "latest" | "pre" | string;

  currentVersion?: string;
  xpiDownloadUrl?: string;
  releaseData?: string;
  downloadCount?: number;
  id?: number;
}

export const plugins: PluginInfo[] = [
  {
    name: "Better BibTex for Zotero",
    repo: "retorquere/zotero-better-bibtex",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "latest",
      },
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "Chartero",
    repo: "volatile-static/Chartero",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "Delitemwithatt",
    repo: "redleafnew/delitemwithatt",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "latest",
      },
      {
        targetZoteroVersion: "6",
        tagName: "0.1.06",
      },
    ],
  },
  {
    name: "Green Frog",
    repo: "redleafnew/zotero-updateifsE",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "latest",
      },
      {
        targetZoteroVersion: "6",
        tagName: "0.13.0",
      },
    ],
  },
  {
    name: "Jasminum",
    repo: "l0o0/jasminum",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "pre",
      },
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "KeepZotero",
    repo: "yhmtsai/KeepZotero",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "LyZ",
    repo: "wshanks/lyz",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "MarkDBConnect",
    repo: "daeh/zotero-obsidian-citations",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "Mdnotes for Zotero",
    repo: "argenos/zotero-mdnotes",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "Night for Zotero",
    repo: "tefkah/zotero-night",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "pre",
      },
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "Notero",
    repo: "dvanoni/notero",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "latest",
      },
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "PDF Figure",
    repo: "MuiseDestiny/zotero-figure",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "latest",
      },
      {
        targetZoteroVersion: "6",
        tagName: "0.0.7",
      },
    ],
  },
  {
    name: "Reading List for Zotero",
    repo: "Dominic-DallOsto/zotero-reading-list",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "Sci-Hub Plugin for Zotero",
    repo: "ethanwillis/zotero-scihub",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "scite Plugin for Zotero",
    repo: "scitedotai/scite-zotero-plugin",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "Storage Scanner for Zotero",
    repo: "retorquere/zotero-storage-scanner",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "Tara",
    repo: "l0o0/tara",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "ZotCard",
    repo: "018/zotcard",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "Zotero Better Notes",
    repo: "windingwind/zotero-better-notes",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "pre",
      },
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "Zotero Citation",
    repo: "MuiseDestiny/eaiser-citation",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "latest",
      },
      {
        targetZoteroVersion: "6",
        tagName: "0.3.1",
      },
    ],
  },
  {
    name: "Zotero Citation Counts Manager",
    repo: "eschnett/zotero-citationcounts",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "Zotero File",
    repo: "MuiseDestiny/zotero-file",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "latest",
      },
    ],
  },
  {
    name: "Zotero Format Metadata",
    repo: "northword/zotero-format-metadata",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "latest",
      },
      {
        targetZoteroVersion: "6",
        tagName: "0.4.4",
      },
    ],
  },
  {
    name: "Zotero GPT",
    repo: "MuiseDestiny/zotero-gpt",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "pre",
      },
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "Zotero Inspire",
    repo: "fkguo/zotero-inspire",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "Zotero OCR",
    repo: "UB-Mannheim/zotero-ocr",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "Zotero PDF Preview",
    repo: "windingwind/zotero-pdf-preview",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
      {
        targetZoteroVersion: "7",
        tagName: "pre",
      },
    ],
  },
  {
    name: "Zotero PDF Translate",
    repo: "windingwind/zotero-pdf-translate",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "pre",
      },
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "Zotero Reference",
    repo: "MuiseDestiny/zotero-reference",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "pre",
      },
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "Zotero Style",
    repo: "MuiseDestiny/ZoteroStyle",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "pre",
      },
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "Zotero Tag",
    repo: "windingwind/zotero-tag",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "pre",
      },
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "Zotero ShortDOI",
    repo: "bwiernik/zotero-shortdoi",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "Zotero 更新影响因子",
    repo: "redleafnew/zotero-updateifs",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "ZotFile",
    repo: "jlegewie/zotfile",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "ZotFile 汉化版",
    repo: "lychichem/zotfile",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "Zutilo Utility for Zotero",
    repo: "wshanks/Zutilo",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
];

// 以下列表仅供开发测试使用
export const test: PluginInfo[] = [
  {
    name: "Zotero Format Metadata",
    repo: "northword/zotero-format-metadata",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "latest",
      },
      {
        targetZoteroVersion: "6",
        tagName: "0.4.4",
      },
    ],
  },
];
