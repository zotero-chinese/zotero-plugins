import { env } from 'node:process'
import type { PluginInfoBase } from '../types/index.js'

/**
 * 插件列表
 *
 * 贡献者贡献插件时，请按照 `repo` 字母顺序排序。
 * Please sort the plugins in alphabetical order by `name` when contributing.
 */
const plugins: PluginInfoBase[] = [
  {
    repo: '018/zotcard',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'v2.8',
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
    repo: 'AgiNetz/semantic-zotero',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['metadata'],
  },
  {
    repo: 'AlbertShenC/Zotero-Literature-Manager',
    releases: [
      {
        targetZoteroVersion: '6',
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
    repo: 'ChenglongMa/zoplicate',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'zotero6',
      },
    ],
    tags: ['favorite', 'metadata'],
  },
  {
    repo: 'Dominic-DallOsto/zotero-reading-list',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'v0.3.2',
      },
    ],
    tags: ['productivity'],
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
    repo: 'ManuelaRunge/Zotitle',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['metadata'],
  },
  {
    repo: 'MuiseDestiny/ZoteroStyle',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'pre',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['favorite', 'interface', 'visualization'],
  },
  {
    repo: 'MuiseDestiny/eaiser-citation',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
      {
        targetZoteroVersion: '6',
        tagName: '0.3.1',
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
      {
        targetZoteroVersion: '6',
        tagName: '0.0.7',
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
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['interface', 'productivity'],
  },
  {
    repo: 'MuiseDestiny/zotero-reference',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'pre',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['favorite', 'metadata', 'reader'],
  },
  {
    repo: 'PubPeerFoundation/pubpeer_zotero_plugin',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['integration'],
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
    repo: 'SiriusXT/Zotero-Scholar-Rank',
    releases: [
      {
        targetZoteroVersion: '6',
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
    repo: 'UB-Mannheim/zotero-ocr',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['others'],
  },
  {
    repo: 'Zar-rok/Zotero-Add-Collection-Tag',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['others'],
  },
  {
    repo: 'argenos/zotero-mdnotes',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['notes'],
  },
  {
    repo: 'bwiernik/zotero-shortdoi',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['metadata'],
  },
  {
    repo: 'daeh/zotero-markdb-connect',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'v0.0.27',
      },
    ],
    tags: ['integration'],
  },
  {
    repo: 'dvanoni/notero',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['integration'],
  },
  {
    repo: 'egh/zotxt',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['integration'],
  },
  {
    repo: 'eschnett/zotero-citationcounts',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['metadata'],
  },
  {
    repo: 'ethanwillis/zotero-scihub',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['attachment'],
  },
  {
    repo: 'fkguo/zotero-inspire',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'pre',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['metadata'],
  },
  {
    repo: 'frangoud/ZoteroDuplicatesMerger',
    releases: [
      {
        targetZoteroVersion: '6',
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
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['notes'],
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
    repo: 'iShareStuff/Backup-Plugin-for-Zotero',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['others'],
  },
  {
    repo: 'iShareStuff/ZoteroFields-Plugin-for-Zotero',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['metadata'],
  },
  {
    repo: 'iShareStuff/ZoteroTheme',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['interface'],
  },
  {
    repo: 'inciteful-xyz/inciteful-zotero-plugin',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['integration'],
  },
  {
    repo: 'jlegewie/zotfile',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['attachment'],
  },
  {
    repo: 'justinribeiro/zotero-google-scholar-citation-count',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['metadata'],
  },
  {
    repo: 'jyjulianwong/PolarRec-Zotero-Plugin',
    releases: [
      {
        targetZoteroVersion: '6',
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
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['favorite', 'metadata'],
  },
  {
    repo: 'l0o0/tara',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'pre',
      },
    ],
    tags: ['others'],
  },
  {
    repo: 'mpatelh/zbatch',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['productivity'],
  },
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
    tags: ['favorite', 'metadata'],
  },
  {
    repo: 'paulusm/zotero-trilium',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['integration'],
  },
  {
    repo: 'redleafnew/delitemwithatt',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
      {
        targetZoteroVersion: '6',
        tagName: '0.1.06',
      },
    ],
    tags: ['attachment'],
  },
  {
    repo: 'redleafnew/zotero-updateifs',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['metadata'],
  },
  {
    repo: 'redleafnew/zotero-updateifsE',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
      {
        targetZoteroVersion: '6',
        tagName: '0.13.0',
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
      {
        targetZoteroVersion: '6',
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
      {
        targetZoteroVersion: '6',
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
    repo: 'retorquere/zotero-storage-scanner',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['attachment'],
  },
  {
    repo: 'scitedotai/scite-zotero-plugin',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['integration'],
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
    repo: 'tefkah/zotero-night',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['interface'],
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
    repo: 'volatile-static/Chartero',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: '1.3.3',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'latest',
      },
    ],
    tags: ['favorite', 'visualization', 'interface'],
  },
  {
    repo: 'wbthomason/zotodo',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['productivity'],
  },
  {
    repo: 'whacked/zotero-special-tags-column',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['others'],
  },
  {
    repo: 'wileyyugioh/zotmoov',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'pre',
      },
    ],
    tags: ['attachment'],
  },
  {
    repo: 'windingwind/zotero-actions-tags',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'pre',
      },
      {
        targetZoteroVersion: '6',
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
        tagName: 'pre',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['favorite', 'notes'],
  },
  {
    repo: 'windingwind/zotero-pdf-preview',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['attachment'],
  },
  {
    repo: 'windingwind/zotero-pdf-translate',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'pre',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['favorite', 'productivity'],
  },
  {
    repo: 'wshanks/Zutilo',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['productivity'],
  },
  {
    repo: 'wshanks/lyz',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['integration'],
  },
  {
    repo: 'yhmtsai/KeepZotero',
    releases: [
      {
        targetZoteroVersion: '6',
        tagName: 'latest',
      },
    ],
    tags: ['others'],
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
