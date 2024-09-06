import { env } from 'node:process'
import type { PluginInfoBase } from '../types/index.js'

/**
 * 插件列表
 *
 * 贡献者贡献插件时，请按照 `repo` 字母顺序排序。
 *
 * Plugins list
 *
 * Please sort the plugins in alphabetical order by `name` when contributing.
 *
 */
// @keep-sorted { "keys": ["repo", "tags"] }
const plugins: PluginInfoBase[] = [
  {
    repo: '018/zotcard',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['notes'],
  },
  {
    repo: '018/zotero-excalidraw',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['integration'],
  },
  {
    repo: 'AllanChain/zotero-arxiv-workflow',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['metadata'],
  },
  {
    repo: 'Bowen-0x00/zotero-action-cmd',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['productivity'],
  },
  {
    repo: 'bwiernik/zotero-shortdoi',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['metadata'],
  },
  {
    repo: 'ChenglongMa/zoplicate',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['favorite', 'metadata'],
  },
  {
    repo: 'daeh/zotero-markdb-connect',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['integration'],
  },
  {
    repo: 'Dominic-DallOsto/zotero-reading-list',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['productivity'],
  },
  {
    repo: 'dvanoni/notero',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['integration'],
  },
  {
    repo: 'egh/zotxt',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['integration'],
  },
  {
    repo: 'fkguo/zotero-inspire',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['metadata'],
  },
  {
    repo: 'franzbischoff/zotero-pdf-metadata',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['attachment'],
  },
  {
    repo: 'frianasoa/Ze-Notes',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['notes'],
  },
  {
    repo: 'FrLars21/ZoteroCitationCountsManager',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'pre',
      },
    ],
    tags: ['metadata'],
  },
  {
    repo: 'github-young/zotero-better-authors',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['interface'],
  },
  {
    repo: 'ImperialSquid/zotero-zotts',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['reader'],
  },
  {
    repo: 'inciteful-xyz/inciteful-zotero-plugin',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['integration'],
  },
  {
    repo: 'justinribeiro/zotero-google-scholar-citation-count',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['metadata'],
  },
  {
    repo: 'jyjulianwong/PolarRec-Zotero-Plugin',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'pre',
      },
    ],
    tags: ['integration'],
  },
  {
    repo: 'l0o0/jasminum',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'pre',
      },
    ],
    tags: ['favorite', 'metadata'],
  },
  {
    repo: 'l0o0/tara',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['others'],
  },
  {
    repo: 'MuiseDestiny/eaiser-citation',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['favorite', 'writing'],
  },
  {
    repo: 'MuiseDestiny/zotero-attanger',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['attachment'],
  },
  {
    repo: 'MuiseDestiny/zotero-figure',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['favorite', 'reader', 'productivity'],
  },
  {
    repo: 'MuiseDestiny/zotero-gpt',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'pre',
      },
    ],
    tags: ['interface', 'productivity'],
  },
  {
    repo: 'MuiseDestiny/zotero-reference',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['favorite', 'metadata', 'reader'],
  },
  {
    repo: 'MuiseDestiny/ZoteroStyle',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['favorite', 'interface', 'visualization'],
  },
  {
    repo: 'northword/zotero-format-metadata',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['favorite', 'metadata'],
  },
  {
    repo: 'redleafnew/delitemwithatt',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['attachment'],
  },
  {
    repo: 'redleafnew/zotero-updateifsE',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['metadata'],
  },
  {
    repo: 'retorquere/zotero-better-bibtex',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['integration'],
  },
  {
    repo: 'retorquere/zotero-open-pdf',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['attachment'],
  },
  {
    repo: 'retorquere/zotero-pmcid-fetcher',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['metadata'],
  },
  {
    repo: 'RoadToDream/ZotMeta',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['metadata'],
  },
  {
    repo: 'scitedotai/scite-zotero-plugin',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['integration'],
  },
  {
    repo: 'syt2/zotero-addons',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['favorite', 'others'],
  },
  {
    repo: 'syt2/zotero-scipdf',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['attachment'],
  },
  {
    repo: 'syt2/Zotero-TLDR',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['metadata'],
  },
  {
    repo: 'Theigrams/zotero-pdf-custom-rename',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['attachment'],
  },
  {
    repo: 'theRatramnus/RIOPACAddChapter',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['metadata'],
  },
  {
    repo: 'theRatramnus/Zotero-download-DigiVatLib-pdf',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['attachment'],
  },
  {
    repo: 'UB-Mannheim/zotero-ocr',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['others'],
  },
  {
    repo: 'volatile-static/Chartero',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['favorite', 'visualization', 'interface'],
  },
  {
    repo: 'wileyyugioh/zotmoov',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['attachment'],
  },
  {
    repo: 'windingwind/zotero-actions-tags',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['productivity'],
  },
  {
    repo: 'windingwind/zotero-better-notes',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['favorite', 'notes'],
  },
  {
    repo: 'windingwind/zotero-pdf-translate',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['favorite', 'productivity'],
  },
  {
    repo: 'zzlb0224/zotero-annotation-manage',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['others'],
  },
]

/**
 * 仅供开发测试使用的插件列表
 *
 */
const pluginsDev: PluginInfoBase[] = [
  {
    repo: 'northword/zotero-format-metadata',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
      {
        targetZoteroVersion: '6',
        tagName: '0.4.4',
      },
    ],
    tags: ['metadata'],
  },
  {
    repo: 'volatile-static/Chartero',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['visualization'],
  },
  {
    repo: 'syt2/zotero-addons',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
      {
        targetZoteroVersion: '6',
        tagName: '0.6.0-6',
      },
    ],
    tags: ['others'],
  },
]

export default env.NODE_ENV === 'development' ? pluginsDev : plugins
