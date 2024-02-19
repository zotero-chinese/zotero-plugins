export interface PluginInfo {
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
     * 程序执行后，`tagName` 将替换为实际的 `git.tag_name`
     */
    tagName: "latest" | "pre" | string;
    /**
     * 插件 ID，自 XPI 中提取
     */
    id?: string;
    /**
     * 插件版本，自 XPI 中提取
     */
    xpiVersion?: string;
    xpiDownloadUrl?: {
      github: string;
      gitee: string;
      ghProxy: string;
      jsdeliver: string;
      kgithub: string;
    };
    releaseDate?: string;
    downloadCount?: number;
    assetId?: number;
  }>;

  description?: string;
  star?: number;
  watchers?: number;
  author?: {
    name: string;
    url: string;
    avatar: string;
  };
}

// 贡献者贡献插件时，请按照 `name` 字母顺序排序，第一个“插件商店”插件始终置顶以方便查找。
// Please sort the plugins in alphabetical order by `name` when contributing.
export const plugins: PluginInfo[] = [
  {
    name: "Zotero 插件合集",
    repo: "syt2/zotero-addons",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "latest",
      },
      {
        targetZoteroVersion: "6",
        tagName: "0.6.0-6",
      },
    ],
  },
  {
    name: "Actions and Tags for Zotero",
    repo: "windingwind/zotero-actions-tags",
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
    name: "Attanger for Zotero",
    repo: "MuiseDestiny/zotero-attanger",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "latest",
      },
    ],
  },
  {
    name: "Awesome GPT",
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
    name: "Better Notes for Zotero",
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
    name: "Chartero",
    repo: "volatile-static/Chartero",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "1.3.3",
      },
      {
        targetZoteroVersion: "7",
        tagName: "latest",
      },
    ],
  },
  {
    name: "Crush Reference",
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
    name: "DelItemWithAtt",
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
    name: "Eaiser Citation",
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
    name: "Ethereal Style",
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
    name: "PMCID fetcher for Zotero",
    repo: "retorquere/zotero-pmcid-fetcher",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "latest",
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
    name: "Linter for Zotero",
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
      {
        targetZoteroVersion: "7",
        tagName: "pre",
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
    name: "Open PDF",
    repo: "retorquere/zotero-open-pdf",
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
    name: "Preview for Zotero",
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
    name: "Sci-PDF",
    repo: "syt2/zotero-scipdf",
    releases: [
      {
        targetZoteroVersion: "7",
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
      {
        targetZoteroVersion: "7",
        tagName: "pre",
      },
    ],
  },
  {
    name: "Translate for Zotero",
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
    name: "Ze-Notes",
    repo: "frianasoa/Ze-Notes",
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
    name: "Zoplicate",
    repo: "ChenglongMa/zoplicate",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "latest",
      },
      {
        targetZoteroVersion: "6",
        tagName: "zotero6",
      },
    ],
  },
  {
    name: "ZotCard",
    repo: "018/zotcard",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "latest",
      },
      {
        targetZoteroVersion: "6",
        tagName: "v2.8",
      },
    ],
  },
  {
    name: "Zotero Better Authors",
    repo: "github-young/zotero-better-authors",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "latest",
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
    name: "Zotero Citation Counts Manager Enhaned",
    repo: "FrLars21/ZoteroCitationCountsManager",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "pre",
      },
    ],
  },
  {
    name: "Zotero Excalidraw",
    repo: "018/zotero-excalidraw",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "latest",
      },
    ],
  },
  {
    name: "Zotero Inspire",
    repo: "fkguo/zotero-inspire",
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
    name: "Zotero PDF Metadata",
    repo: "franzbischoff/zotero-pdf-metadata",
    releases: [
      {
        targetZoteroVersion: "7",
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
    name: "Zotero TL;DR",
    repo: "syt2/Zotero-TLDR",
    releases: [
      {
        targetZoteroVersion: "7",
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
    name: "ZoToDo",
    repo: "wbthomason/zotodo",
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
  {
    name: "Semantic Zotero Plugin",
    repo: "AgiNetz/semantic-zotero",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest",
      },
    ],
  },
  {
    name: "ZoteroFields-Plugin-for-Zotero",
    repo: "iShareStuff/ZoteroFields-Plugin-for-Zotero",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest"
      }
    ]
  },
  {
    name: "ZoteroTheme",
    repo: "iShareStuff/ZoteroTheme",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest"
      }
    ]
  },
  {
    name: "Backup Plugin for Zotero",
    repo: "iShareStuff/Backup-Plugin-for-Zotero",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest"
      }
    ]
  },
  {
    name: "Zotero Save with Tag",
    repo: "NicoleMayer/zotero-save-with-tag",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest"
      }
    ]
  },
  {
    name: "ZotIF",
    repo: "peumartino/ZotIF",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest"
      }
    ]
  },
  {
    name: "Zotero Duplicates Merger",
    repo: "frangoud/ZoteroDuplicatesMerger",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest"
      }
    ]
  },
  {
    name: "zotero-plugins",
    repo: "dcartertod/zotero-plugins",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest"
      }
    ]
  },
  {
    name: "Inciteful Plugin for Zotero",
    repo: "inciteful-xyz/inciteful-zotero-plugin",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest"
      }
    ]
  },
  {
    name: "Pubpeer",
    repo: "PubPeerFoundation/pubpeer_zotero_plugin",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest"
      }
    ]
  },
  {
    name: "Google Scholar Citation Count for Zotero",
    repo: "justinribeiro/zotero-google-scholar-citation-count",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest"
      }
    ]
  },
  {
    name: "Zotitle",
    repo: "ManuelaRunge/Zotitle",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest"
      }
    ]
  },
  {
    name: "Zotero Trilium",
    repo: "paulusm/zotero-trilium",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest"
      }
    ]
  },
  {
    name: "Zotero Add Collection Tag",
    repo: "Zar-rok/Zotero-Add-Collection-Tag",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest"
      }
    ]
  },
  {
    name: "ZoteroSpecialTagsColumn",
    repo: "whacked/zotero-special-tags-column",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest"
      },
      {
        targetZoteroVersion: "5",
        tagName: "latest"
      }
    ]
  },
  {
    name: "PolarRec (Zotero Plugin)",
    repo: "jyjulianwong/PolarRec-Zotero-Plugin",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest"
      }
    ]
  },
  {
    name: "Zotero-Literature-Manager",
    repo: "AlbertShenC/Zotero-Literature-Manager",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest"
      }
    ]
  },
  {
    name: "zbatch",
    repo: "mpatelh/zbatch",
    releases: [
      {
        targetZoteroVersion: "6",
        tagName: "latest"
      }
    ]
  },
  {
    name: "Download DigiVatLib pdf",
    repo: "theRatramnus/Zotero-download-DigiVatLib-pdf",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "latest"
      }
    ]
  },
  {
    name: "RIOPACAddChapter",
    repo: "theRatramnus/RIOPACAddChapter",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "latest"
      }
    ]
  },
  {
    name: "Zotero Action Cmd Plugin",
    repo: "Bowen-0x00/zotero-action-cmd",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "latest"
      }
    ]
  },
  {
    name: "ChatGPT Plugin for Zotero",
    repo: "kazgu/zotero-chatgpt",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "latest"
      }
    ]
  },
  {
    name: "Zotero PDF Rename",
    repo: "Theigrams/zotero-pdf-custom-rename",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "latest"
      }
    ]
  },
  {
    name: "zotxt: a Zotero extension for text",
    repo: "egh/zotxt",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "latest"
      }
    ]
  },
  {
    name: "ZotMoov",
    repo: "wileyyugioh/zotmoov",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "latest"
      }
    ]
  },
  {
    name: "ZotMeta: Metadata update tool",
    repo: "RoadToDream/ZotMeta",
    releases: [
      {
        targetZoteroVersion: "7",
        tagName: "latest"
      }
    ]
  }
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
];
