import type { PluginInfoBase } from './types.js'

/** Local catalog; selectors retain historical versions and discover new releases. */
export const plugins: PluginInfoBase[] = [
  {
    repo: '018/zotcard',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'v3.3',
        assetName: 'zotcard-3.3.0.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'v2.8',
        assetName: 'zotcard-2.8.1.xpi',
      },
    ],
    tags: [
      'notes',
    ],
    discoverReleases: true,
  },
  {
    repo: '018/zotero-excalidraw',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'v1.1',
        assetName: 'zotero-excalidraw-1.1.0.xpi',
      },
    ],
    tags: [
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: '1654842532/zotero-ai-assistant',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.1.3',
        assetName: 'zotero-ai-assistant-v1.1.3.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: '1ywan/zotero-odh',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.3.5',
        assetName: 'zotero-odh.xpi',
      },
    ],
    tags: [
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: '4965898/zotero-AI-OCR',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'custom',
        customLink: 'https://github.com/4965898/Zotero-AI-OCR/releases/download/v1.9.7/ai-ocr.xpi',
      },
    ],
    tags: [
      'ai',
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'aidecameron/zotero-annotation-color-customizer',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: '1.1.2',
        assetName: 'annotation-color-customizer-1.1.2.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'airalinknowledge/zotero-book-splitter',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.14.2',
        assetName: 'zoterobooksplitter0.14.2.xpi',
      },
    ],
    tags: [
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'alansirius/Zotero-Exitem',
    releases: [
      {
        targetZoteroVersion: '8',
        tagName: 'v0.2.2',
        assetName: 'zotero-exitem.xpi',
      },
    ],
    tags: [
      'ai',
      'notes',
    ],
    discoverReleases: true,
  },
  {
    repo: 'alima-webdev/zotero-review-assistant',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v2.0.2',
        assetName: 'zotero-review-assistant.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'AllanChain/zotero-arxiv-workflow',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.4.1',
        assetName: 'zotero-arxiv-workflow.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v0.4.1',
        assetName: 'zotero-arxiv-workflow.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'v0.4.1',
        assetName: 'zotero-arxiv-workflow.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v0.3.6',
        assetName: 'zotero-arxiv-workflow.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v0.4.0',
        assetName: 'zotero-arxiv-workflow.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Alleyf/zotero-duplicate-cleaner',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'v0.15.6',
        assetName: 'zotero-dedup-plugin-0.15.6.xpi',
      },
    ],
    tags: [
      'utility',
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'ANDYPENG09/zotero-ima-sync',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.0.1',
        assetName: 'zotero-ima-sync-0.0.1.xpi',
      },
    ],
    tags: [
      'integration',
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'anfang886/zotero-doi-column',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'v0.1.1',
        assetName: 'doi-column.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'ANGJustinl/zotero-plugin-hjfy',
    releases: [
      {
        targetZoteroVersion: '8',
        tagName: 'v0.1.3',
        assetName: '-ar-xiv-.xpi',
      },
    ],
    tags: [
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Ares960826/zotero-grouptag',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v1.2.0',
        assetName: 'zotero-grouptag.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'arqueon/zotero-tagnavigator',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.6.1',
        assetName: 'zotero-tag-navigator.xpi',
      },
    ],
    tags: [
      'interface',
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Asianfleet/mineru-for-zotero',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.9.4',
        assetName: 'mineru-for-zotero.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v0.9.4',
        assetName: 'mineru-for-zotero.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'v0.9.4',
        assetName: 'mineru-for-zotero.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v0.9.4',
        assetName: 'mineru-for-zotero.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v0.9.3',
        assetName: 'mineru-for-zotero.xpi',
      },
    ],
    tags: [
      'reader',
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'astro-koko/deepseek-copilot-for-zotero',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.0.1',
        assetName: 'Deepseek.Copliot-1.0.1.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Avi7ii/Zotero-glass',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.2.49',
        assetName: 'Zotero-Glass-0.2.49.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'B3000Kcn/daily-folder-for-zotero',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: '1.0.2',
        assetName: 'daily-folder-for-zotero-1.0.2.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'B3000Kcn/minimize-zotero-to-tray',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: '1.1.5',
        assetName: 'minimize-zotero-to-tray-1.1.5.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Babylonehy/zetero-BabelDoc',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.1.4',
        assetName: 'babel-doc-side-by-side.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'BaiRuic/BibGenie',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.9.1',
        assetName: 'bibgenie-0.9.1.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'ben-AI-cybersec/zotero-publication-rankings',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.3.2',
        assetName: 'publication-rankings-0.3.2.xpi',
      },
    ],
    tags: [
      'metadata',
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'bionux-th/Zotero-Translate-for-ReadingMode',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'V1.0.0',
        assetName: 'translate-for-readingmode-1.0.0.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'BlueBlueKitty/zotero-ainote',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.3.7',
        assetName: 'ainote.xpi',
      },
    ],
    tags: [
      'ai',
      'notes',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Bowen-0x00/zotero-action-cmd',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: '1.0.2',
        assetName: 'zotero-action-cmd.xpi',
      },
    ],
    tags: [
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'BryceWG/zotero-ai-tags',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.2.3',
        assetName: 'zotero-ai-tags.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'bulletproof-system/zotero-maimemo-sync',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.2.1',
        assetName: 'zotero-maimemo-sync.xpi',
      },
    ],
    tags: [
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'bwiernik/zotero-shortdoi',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'v1.5.0',
        assetName: 'zotero-doi-manager-1.5.0.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'by1907047/zotero-management-bridge',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.4.1',
        assetName: 'zotero-management-bridge-0.4.1.xpi',
      },
    ],
    tags: [
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'cannolis/ZotRead',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v1.0.0',
        assetName: 'zot-read.xpi',
      },
    ],
    tags: [
      'ai',
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'ChaoPlayer/zotero-glossary',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.2.16',
        assetName: 'zotero-glossary.xpi',
      },
    ],
    tags: [
      'notes',
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'chen7447/item-pane-organizer-zotero',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.4.2',
        assetName: 'itempaneorganizer-1.4.2.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'chen7447/journal-tags',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.3.1',
        assetName: 'journal-tags.xpi',
      },
    ],
    tags: [
      'metadata',
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'chen7447/rapidocr-for-zotero',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v2.1.0',
        assetName: 'pdf-ocr-for-zotero-2.1.0.xpi',
      },
    ],
    tags: [
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'chen7447/Rebootero',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.0.0',
        assetName: 'Rebootero.xpi',
      },
    ],
    tags: [
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'chen7447/sci-download-for-zotero',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.4.1',
        assetName: 'sci-download-1.4.1.xpi',
      },
    ],
    tags: [
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'chen7447/word-translator-zotero',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'v6.17.0',
        assetName: 'wordtranslator-6.17.0.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'ChenglongMa/zoplicate',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v5.1.1',
        assetName: 'zoplicate.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: '4.0.0',
        assetName: 'zoplicate.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'zotero6',
        assetName: 'zoplicate.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'CHENYUZ-hub/zotero-literature-star-citation',
    releases: [],
    tags: [
      'interface',
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Chikit-L/zotero-fulltext-translate',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.0.4',
        assetName: 'full-text-translate.xpi',
      },
    ],
    tags: [
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'cislunarspace/bibtex-clean',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'custom',
        customLink: 'https://github.com/ouyangjiahong26/bibtex-clean/releases/download/v1.3.2/bibtex-clean-v1.3.2.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'cookjohn/zotero-mcp',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.6.0',
        assetName: 'zotero-mcp-plugin-1.6.0.xpi',
      },
    ],
    tags: [
      'ai',
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Creling/Zotero-Metadata-Scraper',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'v1.0.0',
        assetName: 'zotero-metadata-scraper.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'daeh/zotero-citation-tally',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.0.18',
        assetName: 'citation-tally.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v0.0.16',
        assetName: 'citation-tally.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'v0.0.12',
        assetName: 'citation-tally.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'daeh/zotero-markdb-connect',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.2.4',
        assetName: 'markdb-connect.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v0.2.2',
        assetName: 'markdb-connect.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'v0.2.1',
        assetName: 'markdb-connect.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'v0.0.27',
        assetName: 'markdb-connect-0.0.27.xpi',
      },
    ],
    tags: [
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'david3684/zotero-tab-limiter',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'v1.0.2',
        assetName: 'zotero-tab-limiter.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'dawaltconley/zotero-center-pdf',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.1.5',
        assetName: 'center-pdf.xpi',
      },
    ],
    tags: [
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'diegodlh/zotero-cita',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'custom',
        customLink: 'https://github.com/zotero-cita/zotero-cita/releases/download/v1.0.0-beta.28/zotero-cita.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'v0.5.5',
        assetName: 'zotero-cita-v0.5.5.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'digitalartificialint-cmd/Zotero-Med-Impact',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'zoteromedimpact-v0.4.18',
        assetName: 'zotero-med-impact-0.4.18.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Dirreke/zotero-metadata-translator',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.3.0',
        assetName: 'metadata-translator.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Dominic-DallOsto/zotero-annotations-count',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.3.2',
        assetName: 'zotero-annotations-count.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Dominic-DallOsto/zotero-pin-items',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.4.7',
        assetName: 'zotero-pin-items.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Dominic-DallOsto/zotero-reading-list',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.7.0',
        assetName: 'zotero-reading-list.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'v0.3.2',
        assetName: 'zotero-reading-list-0.3.2.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'dralkh/seerai',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: '1.9.43',
        assetName: 'seerai.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: '1.9.43',
        assetName: 'seerai.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: '1.9.43',
        assetName: 'seerai.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: '1.9.42',
        assetName: 'seerai.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'DrinkTea905/zotero-paper-outline',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.7.10',
        assetName: 'paper-outline-gpt.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'dschaehi/Zotero-Focused-Mode',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.6.7',
        assetName: 'zotero-focused-mode.xpi',
      },
    ],
    tags: [
      'reader',
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'dvanoni/notero',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v2.1.0',
        assetName: 'notero-2.1.0.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v1.2.3',
        assetName: 'notero-1.2.3.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'v0.5.17',
        assetName: 'notero-0.5.17.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'v0.5.16',
        assetName: 'notero-0.5.17.xpi',
      },
    ],
    tags: [
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'ECHOUniverse/zotero-translator-next',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.12.1',
        assetName: 'zotero-translator-next.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'edwintuan/pdf-ai-bookmarks',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: '1.0.2',
        assetName: 'pdf-ai-bookmarks-1.0.2.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'egh/zotxt',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'v9.0.0',
        assetName: 'zotxt-9.0.0.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'v7.0.0rc1',
        assetName: 'zotxt-7.0.0.xpi',
      },
    ],
    tags: [
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'endoretic/zotero-wallpaper',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.3.0',
        assetName: 'zotero-wallpaper-0.3.0.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'ET06731/zotero-paper2slides',
    releases: [
      {
        targetZoteroVersion: '8',
        tagName: 'v1.0.3',
        assetName: 'paper2slide-v1.0.3.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v1.0.1',
        assetName: 'paper2slide.xpi',
      },
    ],
    tags: [
      'ai',
      'notes',
    ],
    discoverReleases: true,
  },
  {
    repo: 'etShaw-zh/zotero-career-tracker',
    releases: [
      {
        targetZoteroVersion: '8',
        tagName: 'v1.0.3',
        assetName: 'career-tracker.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'etShaw-zh/zotracer',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'v1.0.6',
        assetName: 'zo-tracer.xpi',
      },
    ],
    tags: [
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Fangziyang0910/zotero-ccf-plus',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.3.2',
        assetName: 'zotero-ccf-plus.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'federicotorrielli/zotero-metadata-hunter',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.8.0',
        assetName: 'metadatahunter%40federicotorrielli.github.io-0.8.0.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'fenghsu2019/zotero-mineru-obsidian',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.2.7',
        assetName: 'mineru-obsidian-sync-0.2.7.xpi',
      },
    ],
    tags: [
      'notes',
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'fkguo/zotero-inspire',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v4.0.3',
        assetName: 'zotero-inspire.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v3.2.5',
        assetName: 'zotero-inspire.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: '0.2.20',
        assetName: 'zotero-inspire-0.2.20.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'forrtproject/fred_zotero',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'custom',
        customLink: 'https://github.com/forrtproject/flora-zotero/releases/download/v0.1.14/replication-checker-for-zotero.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'franzbischoff/zotero-pdf-metadata',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: '0.5.6',
        assetName: 'zotero-pdf-metadata.xpi',
      },
    ],
    tags: [
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'fre-ms/zotLook',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.4.1',
        assetName: 'zotlook-1.4.1.xpi',
      },
    ],
    tags: [
      'attachment',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'frianasoa/Ze-Notes',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v1.2.0',
        assetName: 'zenotes-v1.2.0.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'v1.0.0-beta006',
        assetName: 'zenotes-v1.0.0-beta006.xpi',
      },
    ],
    tags: [
      'notes',
    ],
    discoverReleases: true,
  },
  {
    repo: 'FrLars21/ZoteroCitationCountsManager',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'v2.0',
        assetName: 'zoterocitationcountsmanager-2.0.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'garlicwu/fanyipaiban-zotero',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.1.1',
        assetName: 'fanyi-paiban-pdf-translator.xpi',
      },
    ],
    tags: [
      'ai',
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'garlicwu/filetrans_ai',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v2.0.3',
        assetName: 'filetrans-ai-fulltext-translate.xpi',
      },
    ],
    tags: [
      'ai',
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'gaviiiinnnn/zotero-settings-sync',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.2.3',
        assetName: 'zotero-settings-sync.xpi',
      },
    ],
    tags: [
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'GinixStudy/zotero-browser',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.3.3',
        assetName: 'zotero-browser-v0.3.3.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'github-young/zotero-better-authors',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v6.0.1',
        assetName: 'zotero-better-authors.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'GOKORURI007/zotero-api-plus',
    releases: [
      {
        targetZoteroVersion: '8',
        tagName: 'v0.2.1',
        assetName: 'zotero-api-plus.xpi',
      },
    ],
    tags: [
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'gracefullight/pkgs',
    releases: [
      {
        targetZoteroVersion: '8',
        tagName: 'zotero-plugin-uts@0.1.2',
        assetName: 'zotero-plugin-uts%400.1.2.xpi',
      },
    ],
    tags: [],
    discoverReleases: true,
  },
  {
    repo: 'GroundbreakerLhy/CCF-Rank',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.8.0',
        assetName: 'ccf-rank.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'guaguastandup/zotero-pdf2zh',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v4.1.7',
        assetName: 'zotero-pdf-2-zh.xpi',
      },
    ],
    tags: [
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'haohaomin/zotero-codex',
    aliases: [
      'renhao12356578/zotero-codex',
    ],
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'custom',
        customLink: 'https://github.com/haohaomin/zotero-codex/releases/download/v0.8.3/zotero-codex-0.8.3.xpi',
      },
    ],
    tags: [
      'ai',
      'notes',
    ],
    discoverReleases: true,
  },
  {
    repo: 'haozhihuiYmh150/zotero-agent',
    releases: [
      {
        targetZoteroVersion: '8',
        tagName: 'v0.2.1',
        assetName: 'zotero-agent.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'HDU-OrangeS/zotero-paper-chat',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'zotero-paper-chat-v0.1.2',
        assetName: 'zotero-paper-chat-0.1.2.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'heimi98/zotero-deduplicator',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v1.2.0',
        assetName: 'zotero-pdf-deduplicator.xpi',
      },
    ],
    tags: [
      'attachment',
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'heimi98/zotero-figure-overview',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.3.0',
        assetName: 'zotero-figure-overview.xpi',
      },
    ],
    tags: [
      'reader',
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'heimi98/zotero-random-read',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.3.1',
        assetName: 'zotero-random-read.xpi',
      },
    ],
    tags: [
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Helloxiaolaodi/Zotero-StaticSync',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.0.6',
        assetName: 'zotero-static-sync.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v0.0.2',
        assetName: 'zotero-static-sync-v0.0.2.xpi',
      },
    ],
    tags: [
      'integration',
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'huachuanchuan/ZoteroFastRead',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.4.0',
        assetName: 'fastRead-Python.xpi',
      },
    ],
    tags: [
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Huoyuuu/zotero-ai-latex',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v1.0.0',
        assetName: 'zotero-ai-la-te-x.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Huoyuuu/zotero-github-links',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v1.0.3',
        assetName: 'zotero-git-hub-links.xpi',
      },
    ],
    tags: [
      'interface',
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'ievlevpn/zotero-djvu-converter',
    releases: [
      {
        targetZoteroVersion: '8',
        tagName: 'v1.11.0',
        assetName: 'djvu-converter-1.11.0.xpi',
      },
    ],
    tags: [
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'ievlevpn/zotero-feed-riffle',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.28.0',
        assetName: 'feed-riffle.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v0.28.0',
        assetName: 'feed-riffle.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'v0.28.0',
        assetName: 'feed-riffle.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v0.28.0',
        assetName: 'feed-riffle.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v0.27.1',
        assetName: 'feed-riffle.xpi',
      },
    ],
    tags: [
      'interface',
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'ievlevpn/zotero-latex-suite',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'v0.5.0',
        assetName: 'latex-suite.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v0.5.4',
        assetName: 'latex-suite.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v0.3.1',
        assetName: 'latex-snippets.xpi',
      },
    ],
    tags: [
      'reader',
      'notes',
    ],
    discoverReleases: true,
  },
  {
    repo: 'ievlevpn/zotero-sentence-focus',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.41.0',
        assetName: 'sentence-focus.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v0.41.0',
        assetName: 'sentence-focus.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'v0.41.0',
        assetName: 'sentence-focus.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v0.41.0',
        assetName: 'sentence-focus.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v0.39.0',
        assetName: 'sentence-focus.xpi',
      },
    ],
    tags: [
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'ievlevpn/zotero-tag-explorer',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'v0.10.3',
        assetName: 'tag-explorer.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v0.11.0',
        assetName: 'tag-explorer.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v0.2.0',
        assetName: 'tag-explorer.xpi',
      },
    ],
    tags: [
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'ievlevpn/zotero-tag-fuzzy-search',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.3.3',
        assetName: 'tag-fuzzy-search.xpi',
      },
    ],
    tags: [
      'interface',
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'ievlevpn/zotero-theorem-list',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'v0.5.0',
        assetName: 'theorem-list.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v0.7.2',
        assetName: 'theorem-list.xpi',
      },
    ],
    tags: [
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'ievlevpn/zotero-time-tracking',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.43.1',
        assetName: 'reading-time.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v0.14.0',
        assetName: 'reading-time.xpi',
      },
    ],
    tags: [
      'reader',
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'ImagonTuTu/zotero-filelink-bridge',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.1.0',
        assetName: 'zotero-filelink-bridge.xpi',
      },
    ],
    tags: [
      'attachment',
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'immersive-translate/zotero-immersivetranslate',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.0.24',
        assetName: 'immersive-translate.xpi',
      },
    ],
    tags: [
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'ImperialSquid/zotero-zotts',
    releases: [
      {
        targetZoteroVersion: '8',
        tagName: 'v1.6.0',
        assetName: 'zo-tts.xpi',
      },
    ],
    tags: [
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'inciteful-xyz/inciteful-zotero-plugin',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.3.0',
        assetName: 'inciteful-zotero-plugin.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v0.2.2',
        assetName: 'inciteful-zotero-plugin.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: '0.0.9',
        assetName: 'inciteful-zotero-plugin.xpi',
      },
    ],
    tags: [
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Infinity4B/zotero-hjfy-split-reader',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.1.7',
        assetName: 'hjfy-split-reader.xpi',
      },
    ],
    tags: [
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'introfini/mcp-server-zotero-dev',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'plugin-v1.0.6',
        assetName: 'zotero-mcp-bridge-1.0.6.xpi',
      },
    ],
    tags: [
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'introfini/ZotSeek',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.22.6',
        assetName: 'zotseek-1.22.6.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v1.22.6',
        assetName: 'zotseek-1.22.6.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'v1.22.6',
        assetName: 'zotseek-1.22.6.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v1.11.2',
        assetName: 'zotseek-1.11.2.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v1.22.4',
        assetName: 'zotseek-1.22.4.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'IrisM6/AlphaPulse',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'v1.3.9',
        assetName: 'alphapulse-v1.3.9.xpi',
      },
    ],
    tags: [
      'metadata',
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'iu-parvej/Zotero-PDF-Copier-Renamer',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.0.0',
        assetName: 'zotero-pdf-copier-renamer.xpi',
      },
    ],
    tags: [
      'attachment',
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'j-cyoung/PaperViewZoteroPlugin',
    releases: [
      {
        targetZoteroVersion: '8',
        tagName: 'v0.5.32',
        assetName: 'paperview-query.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'jadense-ai/jadense-in-zotero',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.6.10',
        assetName: 'jadense-in-zotero-v0.6.10.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'jagaldol/zotero-cite-preview-resizer',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.1.2',
        assetName: 'zotero-cite-preview-resizer.xpi',
      },
    ],
    tags: [
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'janbaykara/zotero-syllabus',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.13.3',
        assetName: 'zotero-syllabus.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Jarvis-Towne/paper-feed-zotero',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: '0.2.1',
        assetName: 'paper-feed-v0.2.1.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'jetxa/zotero-ai-assistant',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.0.3',
        assetName: 'ai-assistant.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'jhj223/zotero-ai-guided-reader',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.1.3',
        assetName: 'zotero-ai-guided-reader.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Jiahaohong/mineru-to-zotero',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.1.24',
        assetName: 'mineru-to-zotero-0.1.24.xpi',
      },
    ],
    tags: [
      'notes',
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'jlegewie/beaver-zotero',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.26.0-beta.3',
        assetName: 'beaver.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v0.26.0-beta.3',
        assetName: 'beaver.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'v0.26.0-beta.3',
        assetName: 'beaver.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v0.26.0-beta.3',
        assetName: 'beaver.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v0.26.0-beta.1',
        assetName: 'beaver.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'jmiba/Zotero-add-items-from-text',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.0.16',
        assetName: 'add-items-from-text.xpi',
      },
    ],
    tags: [
      'ai',
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'josesiqueira/zotero-watch-folder',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v2.8.6',
        assetName: 'zotero-watch-folder-2.8.6.xpi',
      },
    ],
    tags: [
      'attachment',
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Juris-M/zotero-odf-scan-plugin',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v3.2.2',
        assetName: 'zotero-odf-scan-v3.2.2.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'v2.0.48',
        assetName: 'zotero-odf-scan-v2.0.48.xpi',
      },
    ],
    tags: [
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'justanotherjurastudent/zotero_Book-Group',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: '1.0.1',
        assetName: 'book-group.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'justanotherjurastudent/zotero_FlexAnnotate',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: '1.1.0',
        assetName: 'flexannotate.xpi',
      },
    ],
    tags: [
      'reader',
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'justinfjx/zotero-ai-collection',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.0.4',
        assetName: 'zotero-ai-collection.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'justinribeiro/zotero-google-scholar-citation-count',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v7.0.0',
        assetName: 'zotero-google-scholar-citation-count-7.0.0.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v6.0.0',
        assetName: 'zotero-google-scholar-citation-count-6.0.0.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'v5.0.0',
        assetName: 'zotero-google-scholar-citation-count-5.0.0.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v4.3.0',
        assetName: 'zotero-google-scholar-citation-count-4.3.0.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'v4.0.1',
        assetName: 'zotero-google-scholar-citation-count-4.0.1.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'jyjulianwong/PolarRec-Zotero-Plugin',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: '0.11.0',
        assetName: 'polarrec-zotero-plugin.xpi',
      },
    ],
    tags: [
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'KaguraTart/literature-review-with-LLM',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.1.146',
        assetName: 'literature-review-with-llm.xpi',
      },
    ],
    tags: [
      'ai',
      'notes',
    ],
    discoverReleases: true,
  },
  {
    repo: 'kazgu/zotero-chatgpt',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.7',
        assetName: 'zotero-chat-gpt.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v1.7',
        assetName: 'zotero-chat-gpt.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'v1.7',
        assetName: 'zotero-chat-gpt.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v1.4',
        assetName: 'zotero-chat-gpt.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'v1.1',
        assetName: 'zotero-chatbot.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Kevin65536/zotero-datacheck-plugin',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.2.4',
        assetName: 'zotero-data-check.xpi',
      },
    ],
    tags: [
      'reader',
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'kevin65536/zotero-openreview-plugin',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'custom',
        customLink: 'https://github.com/Kevin65536/zotero-openreview-plugin/releases/download/v0.1.6/zotero-open-review.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'kongyan66/arxiv2zh',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.2.0',
        assetName: 'arxiv2zh.xpi',
      },
    ],
    tags: [
      'ai',
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'l0o0/Garden-for-Zotero',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.2.10',
        assetName: 'garden_v0.2.10.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'l0o0/jasminum',
    nameZh: '茉莉花',
    summaryZh: '识别中文 PDF/CAJ 的文献元数据，更新中文转换器并整理作者姓名。',
    keywords: ['知网', 'CNKI', '中文文献', '元数据', '转换器', 'PDF', 'CAJ'],
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'v1.1.35',
        assetName: 'jasminum_1.1.35.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v1.1.40',
        assetName: 'jasminum_1.1.40.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v1.1.40',
        assetName: 'jasminum_1.1.40.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v1.1.28',
        assetName: 'jasminum_1.1.28.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'v0.3.2',
        assetName: 'jasminum-v0.3.2.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v1.1.39',
        assetName: 'jasminum_1.1.39.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    recommended: true,
    discoverReleases: true,
  },
  {
    repo: 'l0o0/MagicZotero',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v2.8.11',
        assetName: 'zotero-magic-for-user.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'custom',
        customLink: 'https://gitee.com/zotero-chinese/zotero-magic-for-user/raw/master/zotero-magic-for-user.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'v2.8.1',
        assetName: 'zotero-magic-for-user.xpi',
      },
    ],
    tags: [
      'ai',
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'l0o0/scholar-sketch',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.2.3',
        assetName: 'scholarsketch-v0.2.3.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v0.2.3',
        assetName: 'scholarsketch-v0.2.3.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'v0.1.2',
        assetName: 'zotero-markdown.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v0.1.2',
        assetName: 'zotero-markdown.xpi',
      },
    ],
    tags: [
      'notes',
    ],
    discoverReleases: true,
  },
  {
    repo: 'l0o0/tara',
    nameZh: '蒲公英',
    summaryZh: '备份与恢复 Zotero 的插件、配置、引用样式和转换器。',
    keywords: ['备份', '恢复', '配置', '迁移', 'CSL', '转换器'],
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.0.11',
        assetName: 'tara.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'v0.0.6',
        assetName: 'tara-0.0.6.xpi',
      },
    ],
    tags: [
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'leike0813/Zotero-Skills',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'custom',
        customLink: 'https://github.com/leike0813/zotero-agents/releases/download/v0.8.4/zotero-agents.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'lelelelelelelelelelelelele/arxiv-marker',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'v0.2.2',
        assetName: 'arxiv-marker-0.2.2.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'lifan0127/ai-research-assistant',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: '0.7.0-z7',
        assetName: 'aria.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: '0.8.0',
        assetName: 'aria.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'LightWindW/zotero-better-vertical-tabs',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.2.5',
        assetName: 'better-vertical-tabs-v1.2.5.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'lisontowind/zotero-copilot',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.3.30',
        assetName: 'zotero-copilot.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'lisontowind/zotero-mineru',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.1.70',
        assetName: 'zotero-mineru.xpi',
      },
    ],
    tags: [
      'ai',
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Littview/zotero-openalex-pdf',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'v0.3.1',
        assetName: 'zotero-openalex-pdf-0.3.1.xpi',
      },
    ],
    tags: [
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'LoveTheStar7/Zotero-CloseFlow',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v1.2.5',
        assetName: 'closeflow-1.2.5.xpi',
      },
    ],
    tags: [
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'lss3765/Zotero-Bilingual-Reader-Public',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.3.4',
        assetName: 'bilingual-reader%40local.xpi',
      },
    ],
    tags: [
      'reader',
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'lss3765/Zotero-Display-Title-Public',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.1.11',
        assetName: 'display-title-alias%40local.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'LuckYang1/PDF-to-md',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.1.2',
        assetName: 'pdf-to-markdown.xpi',
      },
    ],
    tags: [
      'notes',
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'LuckYang1/zotero2eagle',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.2.0',
        assetName: 'zotero-2-eagle.xpi',
      },
    ],
    tags: [
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Lyz-623/JournalLens',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.3.9',
        assetName: 'journallens-0.3.9.xpi',
      },
    ],
    tags: [
      'metadata',
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Lyz-623/ZotAssets',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.3.7',
        assetName: 'ZotAssets-0.3.7.xpi',
      },
    ],
    tags: [
      'attachment',
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'MaiZiPiaoPiao/InkBridge',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.1.1',
        assetName: 'inkbridge.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'max3925vats/zotero-docling',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'v0.3.3',
        assetName: 'zotero-docling.xpi',
      },
    ],
    tags: [
      'notes',
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'MCXCC303/just-enough-color',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'v0.1.4-beta.1',
        assetName: 'just-enough-color.xpi',
      },
    ],
    tags: [
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'MCXCC303/ZCTr',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'v0.2.1-beta.1',
        assetName: 'zc-tr.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Mengqi97/codex-bilingual-reader-for-zotero',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v1.4.5',
        assetName: 'codex-bilingual-reader.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'menyoung/zoTLDR',
    releases: [
      {
        targetZoteroVersion: '8',
        tagName: 'v0.2.4',
        assetName: 'zo-tldr.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'milekpl/zotero-ner',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.5.1',
        assetName: 'zotero-author-name-normalizer-detect-and-fix-author-name-variants.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'milekpl/zotero-search-replace',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.3.0',
        assetName: 'zotero-search-and-replace-plugin-with-regex-support-and-preloaded-data-quality-patterns.xpi',
      },
    ],
    tags: [
      'metadata',
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'mjthoraval/Weavero',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.21.8',
        assetName: 'weavero.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v0.21.8',
        assetName: 'weavero.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'v0.21.8',
        assetName: 'weavero.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v0.21.8',
        assetName: 'weavero.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v0.21.6',
        assetName: 'weavero.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'test-builds',
        assetName: 'weavero-0.21.2-issue48.dev.1.xpi',
      },
    ],
    tags: [
      'reader',
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'mlfc0422/zotero-puls',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.10.36',
        assetName: 'zotero-puls.xpi',
      },
    ],
    tags: [
      'metadata',
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'mobench/zotero-annotation-links',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.2.1',
        assetName: 'annotation-links.xpi',
      },
    ],
    tags: [
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Moonweave-Research/zotero-reading-flow',
    aliases: [
      'Moon-python/zotero-reading-flow',
    ],
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'custom',
        customLink: 'https://github.com/Moonweave-Research/zotero-reading-flow/releases/download/v1.3.6/zotero-reading-flow.xpi',
      },
    ],
    tags: [
      'reader',
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'MuiseDestiny/eaiser-citation',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'custom',
        customLink: 'https://github.com/MuiseDestiny/zotero-citation/releases/download/0.5.7/zotero-citation.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'custom',
        customLink: 'https://github.com/MuiseDestiny/zotero-citation/releases/download/0.3.1/zotero-citation-z7.xpi',
      },
    ],
    tags: [
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'MuiseDestiny/zotero-attanger',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.5.0',
        assetName: 'zotero-attanger.xpi',
      },
    ],
    tags: [
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'MuiseDestiny/zotero-figure',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.0.3',
        assetName: 'zotero-figure.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: '0.2.7',
        assetName: 'zotero-figure.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'custom',
        customLink: 'https://github.com/MuiseDestiny/zotero-figure/releases/latest/download/zotero-figure.xpi',
      },
    ],
    tags: [
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'MuiseDestiny/zotero-gpt',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: '2.2.3',
        assetName: 'zotero-gpt.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'custom',
        customLink: 'https://gitee.com/MuiseDestiny/plugins/raw/master/zotero-gpt.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: '0.2.8',
        assetName: 'zotero-gpt.xpi',
      },
    ],
    tags: [
      'ai',
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'MuiseDestiny/zotero-reference',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'custom',
        customLink: 'https://gitee.com/MuiseDestiny/plugins/raw/master/zotero-reference.xpi',
      },
    ],
    tags: [
      'metadata',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'MuiseDestiny/ZoteroStyle',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'custom',
        customLink: 'https://gitee.com/MuiseDestiny/plugins/raw/master/zotero-style.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'custom',
        customLink: 'https://github.com/MuiseDestiny/zotero-style/releases/download/2.8.0/ethereal-style.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'mxlapan/zotero-prism',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'v1.0.2-beta.1',
        assetName: 'zotero-prism.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Nayuta-9/zotero-geyi-translator',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.10.4',
        assetName: 'geyi-translator.xpi',
      },
    ],
    tags: [
      'ai',
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'NebulaRaven/zotero-refolio',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.2.1',
        assetName: 'refolio-1.2.1.xpi',
      },
    ],
    tags: [
      'metadata',
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'nian1147/-61-',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: '1.0.0',
        assetName: '-61.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Noahxie83/zotero-local-mdx-click',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.1.3',
        assetName: 'local-mdx-click-1.1.3.xpi',
      },
    ],
    tags: [
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'NoEdgeAI/Doc2XZoteroPlugin',
    releases: [
      {
        targetZoteroVersion: '8',
        tagName: 'v1.1.18',
        assetName: 'doc2x-ai-translate.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v1.1.18',
        assetName: 'doc2x-ai-translate.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'v1.1.16',
        assetName: 'doc2x-ai-translate.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'NoEdgeAI/Doc2XZoteroPlugin9',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.1.20',
        assetName: 'doc2x-ai-translate.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v1.1.20',
        assetName: 'doc2x-ai-translate.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v1.1.16',
        assetName: 'doc2x-ai-translate.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'northword/zotero-format-metadata',
    summaryZh: '规范条目元数据，补全 DOI、ISBN 对应信息并整理期刊缩写和标题大小写。',
    keywords: ['Linter', '元数据', '格式化', '期刊缩写', 'DOI', 'ISBN', '重复条目'],
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v4.0.1',
        assetName: 'linter-for-zotero.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v3.3.2',
        assetName: 'linter-for-zotero.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v2.3.0',
        assetName: 'linter-for-zotero.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: '0.4.4',
        assetName: 'zotero-format-metadata-0.4.5.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'northword/zotero-mica',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'v0.1.1',
        assetName: 'mica-for-zotero.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'nutstore/zotero-plugin-nutstore-sso',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'custom',
        customLink: 'https://github.com/nutstore/zotero-plugin-nutstore/releases/download/v2.1.2/nutstore.xpi',
      },
    ],
    tags: [
      'attachment',
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'nyaru177/ccf-for-zotero',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.2.5',
        assetName: 'ccf-for-zotero-0.2.5-zotero10.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'occasional16/researchopia',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'zotero-plugin',
        assetName: 'researchopia-zotero-plugin-v0.1.0.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'zotero-plugin',
        assetName: 'researchopia-zotero-latest.xpi',
      },
      {
        targetZoteroVersion: '11',
        tagName: 'zotero-plugin/v0.1.0',
        assetName: 'researchopia-zotero-plugin-v0.1.0.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'zotero-plugin/v0.9.0',
        assetName: 'researchopia-zotero-latest.xpi',
      },
    ],
    tags: [
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'oekeur/zotero-linked-mindmaps',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.0.0',
        assetName: 'zotero-linked-mindmaps.xpi',
      },
    ],
    tags: [
      'notes',
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'oekeur/zotero-timeline',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.9.0',
        assetName: 'zotero-timeline.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v0.9.0',
        assetName: 'zotero-timeline.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'v0.9.0',
        assetName: 'zotero-timeline.xpi',
      },
    ],
    tags: [
      'notes',
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'OneOneLiu/zotero-annotation-summary',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: '1.4.3',
        assetName: 'annotation-summary.xpi',
      },
    ],
    tags: [
      'notes',
    ],
    discoverReleases: true,
  },
  {
    repo: 'origin652/zotero-assistant',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.1.4',
        assetName: 'zotero-assistant.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'ottersem/zotero-reference-linker',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.9.7',
        assetName: 'zotero-reference-linker-0.9.7.xpi',
      },
    ],
    tags: [
      'reader',
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'pandaAIGC/zotero-doi-fix',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.1.9',
        assetName: 'zotero-doi-fix.xpi',
      },
    ],
    tags: [
      'metadata',
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'panhaoyu/zotero-categorial-tags',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.5.3',
        assetName: 'zotero-categorial-tags.xpi',
      },
    ],
    tags: [
      'metadata',
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'papersgpt/papersgpt-for-zotero',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'papersgpt-v1.7.0',
        assetName: 'papersgpt-v1.7.0.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'paulMrG2/zotero-highlight-descriptions',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.3.2',
        assetName: 'highlight-descriptions-1.3.2.xpi',
      },
    ],
    tags: [
      'reader',
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'peekabooXT/Zotero_Paper_Classification_XT',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.3.22',
        assetName: 'xt-zotero-auto-classifier-1.3.22.xpi',
      },
    ],
    tags: [
      'ai',
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'peterdresslar/zotero-gemini-notebook',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.5.0',
        assetName: 'zotero-gemini-notebook.xpi',
      },
    ],
    tags: [
      'ai',
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'poesein/ZotQuery',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v3.1.26',
        assetName: 'ZotQuery-3.1.26.xpi',
      },
    ],
    tags: [
      'reader',
      'notes',
    ],
    discoverReleases: true,
  },
  {
    repo: 'poesein/ZotRadar',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v5.4.1',
        assetName: 'ZotRadar-5.4.1-zotero10.xpi',
      },
    ],
    tags: [
      'ai',
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'ppavlidis/condense-info-view',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.1.0',
        assetName: 'condense-info-view.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'psiQAQ/zotero-agent',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v2.2.2',
        assetName: 'zotero-agent-2.2.2.xpi',
      },
    ],
    tags: [
      'ai',
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'PubPeerFoundation/pubpeer_zotero_plugin',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.0.9',
        assetName: 'zotero-pubpeer-1.0.9.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'v1.0.4',
        assetName: 'zotero-pubpeer-1.0.4.xpi',
      },
    ],
    tags: [
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'qingpy/zotero-pdf2md',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.0.1',
        assetName: 'zotero-pdf2md.xpi',
      },
    ],
    tags: [
      'attachment',
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'QinSihan/zotero-paper-partner',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.1.1',
        assetName: 'paper-partner.xpi',
      },
    ],
    tags: [
      'ai',
      'notes',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Qiujv/zotero-hashtags-column',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.1.1',
        assetName: 'zotero-hashtags-column.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'qiwei-ma/zotero-pdf-setHorizontal',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.1.2',
        assetName: 'set-horizontal-scroll.xpi',
      },
    ],
    tags: [
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'qnscholar/zotero-if',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.6.1',
        assetName: 'zoteroif-v1.6.1.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'v1.5.0',
        assetName: 'ZoteroIF-v1.5.0.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'qrkks/zotero-annotation-markdown',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.12.1',
        assetName: 'zotero-annotation-markdown.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v0.12.1',
        assetName: 'zotero-annotation-markdown.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v0.11.0',
        assetName: 'zotero-annotation-markdown.xpi',
      },
    ],
    tags: [
      'reader',
      'notes',
    ],
    discoverReleases: true,
  },
  {
    repo: 'quertt/zotero-keyword-highlighter',
    releases: [
      {
        targetZoteroVersion: '8',
        tagName: 'v1.3.1',
        assetName: 'keyword-highlighter-v1.3.1.xpi',
      },
    ],
    tags: [
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'quillamio/bilingual-reader',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.5.1',
        assetName: 'bilingual-reader.xpi',
      },
    ],
    tags: [
      'reader',
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Rafael-Silva-Oliveira/numify',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.3.2',
        assetName: 'numify.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Rafael-Silva-Oliveira/NZBridge',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.5.1',
        assetName: 'nz-bridge.xpi',
      },
    ],
    tags: [
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Rafael-Silva-Oliveira/paperzorro',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.1.1',
        assetName: 'paperzorro.xpi',
      },
    ],
    tags: [
      'ai',
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'redleafnew/delitemwithatt',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.5.0',
        assetName: 'del-item-with-attachment.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: '0.1.06',
        assetName: 'delitemwithatt.xpi',
      },
    ],
    tags: [
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'redleafnew/zotero-updateifsE',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.22.2',
        assetName: 'green-frog.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v0.22.0',
        assetName: 'green-frog.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: '0.13.0',
        assetName: 'greenfrog.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'replynow20/gemini-zotero',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: '0.4.6',
        assetName: 'gemini-zotero-v0.4.6.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'retorquere/zotero-better-bibtex',
    summaryZh: '管理和导出 BibTeX 参考文献数据，配合 LaTeX、Markdown 写作。',
    keywords: ['BBT', 'LaTeX', 'BibTeX', 'BibLaTeX', 'Markdown', '参考文献', '导出', '写作'],
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'v9.0.27',
        assetName: 'zotero-better-bibtex-9.0.27.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v9.0.71',
        assetName: 'zotero-better-bibtex-9.0.71.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v9.0.71',
        assetName: 'zotero-better-bibtex-9.0.71.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'v9.0.71',
        assetName: 'zotero-better-bibtex-9.0.71.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v7.0.76',
        assetName: 'zotero-better-bibtex-7.0.76.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'v6.7.269',
        assetName: 'zotero6-better-bibtex-6.7.269.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v9.0.68',
        assetName: 'zotero-better-bibtex-9.0.68.xpi',
      },
    ],
    tags: [
      'integration',
    ],
    recommended: true,
    discoverReleases: true,
  },
  {
    repo: 'retorquere/zotero-folder-import',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.0.2',
        assetName: 'zotero-folder-import-1.0.2.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v0.0.10',
        assetName: 'zotero-folder-import-0.0.10.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'builds',
        assetName: 'zotero-folder-import-0.0.9.45.62.xpi',
      },
    ],
    tags: [
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'retorquere/zotero-open-pdf',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.0.14',
        assetName: 'zotero-open-pdf-1.0.14.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'builds',
        assetName: 'zotero-open-pdf-1.0.11.105.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'v0.0.11',
        assetName: 'zotero-open-pdf-0.0.11.xpi',
      },
    ],
    tags: [
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'retorquere/zotero-pmcid-fetcher',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.0.3',
        assetName: 'zotero-pmcid-fetcher-1.0.3.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v0.0.32',
        assetName: 'zotero-pmcid-fetcher-0.0.32.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'RickWashon/AstroZotero',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.3.4',
        assetName: 'AstroZotero-0.3.4.xpi',
      },
    ],
    tags: [
      'metadata',
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'rikochyou/zotero-smart-clipboard-import',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'v0.1.38',
        assetName: 'smart-clipboard-import.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'RoadToDream/ZotMeta',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v2.1',
        assetName: 'zotmeta-2.1.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'v1.1',
        assetName: 'zotmeta-1.1.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Royshare/zotero-spotlight',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.6.1',
        assetName: 'zotero-spotlight.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Rphone/zotero-tab-enhance',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.5.5',
        assetName: 'tab-enhance.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v0.5.5',
        assetName: 'tab-enhance.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'v0.5.5',
        assetName: 'tab-enhance.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v0.5.5',
        assetName: 'tab-enhance.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v0.5.4',
        assetName: 'tab-enhance.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'samreading/zotero-mindmap',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: '1.0.5',
        assetName: 'zotero-mindmap-plugin.xpi',
      },
    ],
    tags: [
      'notes',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Saytanz0815/annotation-color-memory',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.0.4',
        assetName: 'annotation-color-memory-1.0.4.xpi',
      },
    ],
    tags: [
      'reader',
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'sbilmis/zotero-project-manager',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.4.1',
        assetName: 'zpm-zotero-1.4.1.xpi',
      },
    ],
    tags: [
      'attachment',
      'notes',
    ],
    discoverReleases: true,
  },
  {
    repo: 'ScienceLiveHub/science-live-platform',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v1.0.6',
        assetName: 'science-live.xpi',
      },
    ],
    tags: [
      'metadata',
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'scigreat/zotbox',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'latest',
        assetName: 'zotero-box.xpi',
      },
    ],
    tags: [
      'ai',
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'SciImage/zotero-attachment-scanner',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'v0.5.1',
        assetName: 'attachmentscanner-0.5.1.xpi',
      },
    ],
    tags: [
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'scitedotai/scite-zotero-plugin',
    releases: [
      {
        targetZoteroVersion: '8',
        tagName: 'v2.0.5',
        assetName: 'scite-zotero-plugin-2.0.5.xpi',
      },
    ],
    tags: [
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'ShamanStone/Zotero_snapshot_reviver',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v1.0.1',
        assetName: 'snapshot-reviver-1.0.1.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'SHANGKAIJIE/zotero-dual-title',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.1.8',
        assetName: 'dual-title.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'SHANGKAIJIE/zotero-hover-translate-eudic',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.3.7',
        assetName: 'hover-translate-eudic.xpi',
      },
    ],
    tags: [
      'reader',
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'sheny-bio/marginalia',
    releases: [
      {
        targetZoteroVersion: '8',
        tagName: 'v3.3.4',
        assetName: 'marginalia-ai-chat.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'SolveSaint/RSSrch-for-Zotero',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'v1.1.2',
        assetName: 'rssrch-v1.1.2.xpi',
      },
    ],
    tags: [
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'soyami/zotero-pick2anki',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'release',
        assetName: 'zotero-pick2anki.xpi',
      },
    ],
    tags: [
      'reader',
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'SRT117/LitMTrans-Zotero',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'v2.1.1',
        assetName: 'litmtrans-2.1.1.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'sstraume97/zotero-highlight-popup-ui-plugin',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.8.0',
        assetName: 'streamline-highlight-popup-v0.8.0.xpi',
      },
    ],
    tags: [
      'reader',
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'StarKujo/zotero-wordbook',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.1.9',
        assetName: 'zotero-wordbook-0.1.9.xpi',
      },
    ],
    tags: [
      'reader',
      'notes',
    ],
    discoverReleases: true,
  },
  {
    repo: 'steven-jianhao-li/zotero-AI-Butler',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v4.1.0-beta.2',
        assetName: 'zotero-ai-butler.xpi',
      },
    ],
    tags: [
      'ai',
      'notes',
    ],
    discoverReleases: true,
  },
  {
    repo: 'StevenGLee/zotero-author-browser',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.2.3',
        assetName: 'zotero-author-browser.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'stevepowell99/causalmap-zotero',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.4.5',
        assetName: 'causalmap-zotero.xpi',
      },
    ],
    tags: [
      'integration',
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'STRUGGLE1999/zotero-ai-notes',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.4.1',
        assetName: 'zotero-ai-notes-0.4.1.xpi',
      },
    ],
    tags: [
      'ai',
      'notes',
    ],
    discoverReleases: true,
  },
  {
    repo: 'study-233/zotero-pdf2zh-pro',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.8.1',
        assetName: 'zotero-pdf2zh-pro.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v1.8.1',
        assetName: 'zotero-pdf2zh-pro.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'v1.8.1',
        assetName: 'zotero-pdf2zh-pro.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v1.0.0',
        assetName: 'zotero-pdf2zh-pro.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v1.8.0',
        assetName: 'zotero-pdf2zh-pro.xpi',
      },
    ],
    tags: [
      'ai',
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Sum-su/yaobian-zotero',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.4.1',
        assetName: 'yaobian.xpi',
      },
    ],
    tags: [
      'interface',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Sum-su/zotero-js-bridge',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.14',
        assetName: 'zotero-js-bridge.xpi',
      },
    ],
    tags: [
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Suzuka24/paper-chat-for-zotero',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.6.7',
        assetName: 'paper-chat-for-zotero.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'swcxito/zotero-ai-bar',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'v1.6.7',
        assetName: 'zotero-ai-bar.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v1.6.7',
        assetName: 'zotero-ai-bar.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v1.6.7',
        assetName: 'zotero-ai-bar.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'v1.6.7',
        assetName: 'zotero-ai-bar.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v1.6.7',
        assetName: 'zotero-ai-bar.xpi',
      },
      {
        targetZoteroVersion: '11',
        tagName: 'v1.6.4',
        assetName: 'zotero-ai-bar.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'syt2/paper-chat-for-zotero',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'V2.8.0',
        assetName: 'ai-paper-chat.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'V3.7.0',
        assetName: 'ai-paper-chat.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    recommended: true,
    discoverReleases: true,
  },
  {
    repo: 'syt2/zotero-addons',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'V10.0.1',
        assetName: 'zotero-addons.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: '0.6.0-6',
        assetName: 'zotero-addons.xpi',
      },
    ],
    tags: [
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'syt2/zotero-scipdf',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'V8.1.1',
        assetName: 'sci-pdf.xpi',
      },
    ],
    tags: [
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'syt2/Zotero-TLDR',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: '1.0.7',
        assetName: 'zotero-tldr.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'TangQi001/zotero-ai-assist',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v4.0.0-beta.1',
        assetName: 'fr-ai.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'taotaozsky2025-beep/zotero-var-highlighter',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.2.1',
        assetName: 'zotero-var-highlighter.xpi',
      },
    ],
    tags: [
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'tenglvjun/mktero',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.5.0',
        assetName: 'mktero-0.5.0.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v0.5.0',
        assetName: 'mktero-0.5.0.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'v0.5.0',
        assetName: 'mktero-0.5.0.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v0.5.0',
        assetName: 'mktero-0.5.0.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v0.4.2',
        assetName: 'mktero-0.4.2.xpi',
      },
    ],
    tags: [
      'reader',
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Theigrams/zotero-pdf-custom-rename',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: '1.1.0',
        assetName: 'zotero-pdf-rename.xpi',
      },
    ],
    tags: [
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'TheJieee/zotero-pdf-translate',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.2.0',
        assetName: 'zotero-pdf-translate-1.2.0.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'theRatramnus/RIOPACAddChapter',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'v1.0.5',
        assetName: 'riopac-add-chapters.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'theRatramnus/Zotero-download-DigiVatLib-pdf',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'v0.0.1',
        assetName: 'zotero-addon-template.xpi',
      },
    ],
    tags: [
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'tianlrz/zotero-reading-bilingual',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.6.3',
        assetName: 'zotero-reading-bilingual.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'tiberavonltd/estravon-plugin',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'v0.5.0',
        assetName: 'estravon-0.5.0.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v0.5.1',
        assetName: 'estravon-0.5.1.xpi',
      },
    ],
    tags: [
      'ai',
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'TimeTrapzz/zotero-ccf-info',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.4.1',
        assetName: 'zotero-ccf-info.xpi',
      },
    ],
    tags: [
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'TomYU2023/Zone',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.3.2',
        assetName: 'zone-1.3.2-zotero10.xpi',
      },
    ],
    tags: [
      'attachment',
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'UB-Mannheim/zotero-ocr',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: '0.9.6',
        assetName: 'zotero-ocr-0.9.6.xpi',
      },
    ],
    tags: [
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'understandlxy/mineru-html-parser-zotero',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.1.97',
        assetName: 'mineru-html-parser-0.1.97.xpi',
      },
    ],
    tags: [
      'attachment',
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'vastronghq/MarginMind',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'v1.3.3',
        assetName: 'margin-mind.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Visterainer/zoteroAI',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'custom',
        customLink: 'https://github.com/Visterainer/aidea-zotero/releases/download/v3.6.0/AIdea-3.6.0.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'volatile-static/Chartero',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v2.11.0',
        assetName: 'chartero.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'v2.10.0',
        assetName: 'chartero.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: '2.4.0',
        assetName: 'chartero.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: '1.3.3',
        assetName: 'Chartero.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'wangqian06/zotero-pdf-background',
    aliases: [
      'q77190858/zotero-pdf-background',
    ],
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v2.3.0',
        assetName: 'zotero-pdf-backgroundv2.3.0.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'v0.0.2',
        assetName: 'zotero-pdf-backgroundv0.0.2.xpi',
      },
    ],
    tags: [
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'wcmendes/MdBundle-for-Zotero',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.9.4',
        assetName: 'mdbundle.xpi',
      },
    ],
    tags: [
      'attachment',
      'notes',
    ],
    discoverReleases: true,
  },
  {
    repo: 'WildDataX/suppr-zotero-plugin',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: '0.4.0',
        assetName: 'suppr.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'wileyyugioh/zotmoov',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: '1.2.33',
        assetName: 'zotmoov-1.2.33-fx.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: '1.2.33',
        assetName: 'zotmoov-1.2.33-fx.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: '1.2.33',
        assetName: 'zotmoov-1.2.33-fx.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: '1.2.33',
        assetName: 'zotmoov-1.2.33-fx.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: '1.2.32',
        assetName: 'zotmoov-1.2.32-fx.xpi',
      },
    ],
    tags: [
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'WilliamsLiang/zotero-skr',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v1.2.1',
        assetName: 'skr-zotero7-9-1.2.1.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'windfollowingheart/zotero-paper-agent',
    releases: [
      {
        targetZoteroVersion: '8',
        tagName: 'v3.1.1',
        assetName: 'zotero-paper-agent.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'windingwind/bionic-for-zotero',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.4.3',
        assetName: 'bionic-for-zotero.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v0.2.0',
        assetName: 'bionic-for-zotero.xpi',
      },
    ],
    tags: [
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'windingwind/know-ur-zotero',
    releases: [
      {
        targetZoteroVersion: '8',
        tagName: 'v0.0.6',
        assetName: 'know-ur-zotero.xpi',
      },
    ],
    tags: [
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'windingwind/zotero-actions-tags',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v2.6.1',
        assetName: 'actions-and-tags-for-zotero.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v2.5.2',
        assetName: 'actions-and-tags-for-zotero.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v2.3.0',
        assetName: 'actions-and-tags-for-zotero.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'v0.3.0',
        assetName: 'zotero-tag.xpi',
      },
    ],
    tags: [
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'windingwind/zotero-better-notes',
    summaryZh: '将文献阅读与双链笔记结合，支持 Markdown 笔记和笔记导出。',
    keywords: ['笔记', '双链', 'Markdown', '导出笔记', '知识管理'],
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v3.3.3',
        assetName: 'better-notes-for-zotero.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v2.5.13',
        assetName: 'better-notes-for-zotero.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: '1.0.4',
        assetName: 'zotero-better-notes.xpi',
      },
    ],
    tags: [
      'notes',
    ],
    recommended: true,
    discoverReleases: true,
  },
  {
    repo: 'windingwind/zotero-pdf-translate',
    summaryZh: '在阅读器中划词翻译，翻译标题、摘要与批注，支持多种翻译引擎。',
    keywords: ['翻译', 'PDF', '划词', '标题', '摘要', '批注', '词典'],
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v2.4.8',
        assetName: 'translate-for-zotero.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v2.3.16',
        assetName: 'translate-for-zotero.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'v1.0.28',
        assetName: 'zotero-pdf-translate.xpi',
      },
    ],
    tags: [
      'reader',
    ],
    recommended: true,
    discoverReleases: true,
  },
  {
    repo: 'WindLX/paper_plane_x',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.2.1',
        assetName: 'paper-plane-x.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v0.2.1',
        assetName: 'paper-plane-x.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'v0.2.1',
        assetName: 'paper-plane-x.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v0.2.1',
        assetName: 'paper-plane-x.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v0.2.0',
        assetName: 'paper-plane-x.xpi',
      },
    ],
    tags: [
      'ai',
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'WncFht/texlate',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.1.1',
        assetName: 'texlate.xpi',
      },
    ],
    tags: [
      'ai',
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'wshanks/Zutilo',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v4.2.2',
        assetName: 'zutilo.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'wu-uk/zotero-feishu',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.7.0',
        assetName: 'zotero-feishu-sync.xpi',
      },
    ],
    tags: [
      'integration',
      'notes',
    ],
    discoverReleases: true,
  },
  {
    repo: 'wuok0618/zotero-sidemark',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.1.0',
        assetName: 'sidemark-1.1.0.xpi',
      },
    ],
    tags: [
      'notes',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'wyhao2333/zotero-paperpilot',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.0.1',
        assetName: 'paperpilot-1.0.1.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'xfl031129/zotero-pdf-outline-builder',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.1.2',
        assetName: 'zotero-pdf-outline-builder-windows-v0.1.2.xpi',
      },
    ],
    tags: [
      'reader',
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'XiaoDuComrade/zotero-manual-sort',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'V0.3.0',
        assetName: 'zotero-manual-sort-0.3.0.xpi',
      },
    ],
    tags: [
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'XiaoDuComrade/zotero-margin-comments',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'V0.9.1',
        assetName: 'margin-comments-0.9.1.xpi',
      },
    ],
    tags: [
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'XiaoDuComrade/Zotero-margin-notes',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'V0.5.0',
        assetName: 'margin-notes-0.5.0.xpi',
      },
    ],
    tags: [
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'XiaoDuComrade/zotero-reading-heatmap',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'V0.7.7',
        assetName: 'reading-heatmap-0.7.7.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'xiaoxiao937/li-yue-zotero',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v1.3.0',
        assetName: 'li-yue-1.3.0.xpi',
      },
    ],
    tags: [
      'ai',
      'notes',
    ],
    discoverReleases: true,
  },
  {
    repo: 'xiaoxuan353/zotero-paper-radar',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.2.3',
        assetName: 'paper-radar.xpi',
      },
    ],
    tags: [
      'ai',
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'XoYaPeng/zotero-hide-fields',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.1.7',
        assetName: 'ZoteroHideFields-1.1.7.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'xuhan-rgb/zotero-ai-sidebar',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.8.16',
        assetName: 'zotero-ai-sidebar.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v0.8.16',
        assetName: 'zotero-ai-sidebar.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'v0.8.16',
        assetName: 'zotero-ai-sidebar.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v0.8.16',
        assetName: 'zotero-ai-sidebar.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v0.8.15',
        assetName: 'zotero-ai-sidebar.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'xujialiu/Zotero-TTS',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'custom',
        customLink: 'https://github.com/xujialiu/Zotero-OpenReader/releases/download/v1.16.8/zotero-tts.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'custom',
        customLink: 'https://github.com/xujialiu/Zotero-OpenReader/releases/download/v1.16.6/zotero-tts.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v1.16.5',
        assetName: 'zotero-tts.xpi',
      },
    ],
    tags: [
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'xutaoya/paper-mind',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'V3.3.4',
        assetName: 'paper-mind.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'V3.3.3',
        assetName: 'paper-mind.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'yanchou3/zotero-lastread-format',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.3.1',
        assetName: 'lastread-format%40yangc.dev.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'YanSH258/zotero-dailypaper',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v1.4.0',
        assetName: 'daily-paper-digest.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'yfengup/notion-item-opener-for-zotero',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v1.1.0',
        assetName: 'notion-item-opener-1.1.0.xpi',
      },
    ],
    tags: [
      'integration',
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'yhmtsai/KeepZotero',
    releases: [
      {
        targetZoteroVersion: '7',
        tagName: 'v0.2.0',
        assetName: 'keepzotero-0.2.0-fx.xpi',
      },
      {
        targetZoteroVersion: '6',
        tagName: 'v0.0.2',
        assetName: 'keepzotero-0.0.2-fx.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Yihtsy/ZotLink',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.4.0',
        assetName: 'zotlink-0.4.0.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v0.3.0',
        assetName: 'zotlink-0.3.0.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v0.3.20',
        assetName: 'zotlink-0.3.20.xpi',
      },
    ],
    tags: [
      'attachment',
      'metadata',
    ],
    discoverReleases: true,
  },
  {
    repo: 'yilewang/llm-for-zotero',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'v3.9.11',
        assetName: 'llm-for-zotero.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v3.9.11',
        assetName: 'llm-for-zotero.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v3.9.11',
        assetName: 'llm-for-zotero.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'v3.9.11',
        assetName: 'llm-for-zotero.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v3.9.11',
        assetName: 'llm-for-zotero.xpi',
      },
      {
        targetZoteroVersion: '11',
        tagName: 'v3.9.10',
        assetName: 'llm-for-zotero.xpi',
      },
    ],
    tags: [
      'ai',
      'notes',
    ],
    discoverReleases: true,
  },
  {
    repo: 'ysqander/listen2papers-zotero',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.1.0',
        assetName: 'listen2papers-zotero-0.1.0.xpi',
      },
    ],
    tags: [
      'reader',
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'yueneiqi/zotero2eagle',
    releases: [
      {
        targetZoteroVersion: '8',
        tagName: 'v0.0.5',
        assetName: 'zotero-2-eagle.xpi',
      },
    ],
    tags: [
      'integration',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Yuriyagn/zotero-pdf2zh',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.2.3',
        assetName: 'zotero-pdf2zh-0.2.3.xpi',
      },
    ],
    tags: [
      'ai',
      'attachment',
    ],
    discoverReleases: true,
  },
  {
    repo: 'ZBigFish/zotero-ccf-rank',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.0.1',
        assetName: 'zotero-ccf-rank.xpi',
      },
    ],
    tags: [
      'metadata',
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'zerolfl/zotero-split-view-reader',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v1.3.0',
        assetName: 'split-view-reader.xpi',
      },
    ],
    tags: [
      'reader',
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'zhi-11/zotero-ai-paragraph-notes',
    releases: [
      {
        targetZoteroVersion: '9',
        tagName: 'v0.01',
        assetName: 'ai-paragraph-notes-0.01.xpi',
      },
    ],
    tags: [
      'ai',
      'notes',
    ],
    discoverReleases: true,
  },
  {
    repo: 'zhi-11/zotero-ai-sidebar',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.9.5',
        assetName: 'zotero-click-translate.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'zhongrubo/translation-notebook',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.0.1',
        assetName: 'translation-notebook-1.0.1.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'zhongrubo/zotero-annotation-filter',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.2',
        assetName: 'zotero-annotation-filter-0.2.xpi',
      },
    ],
    tags: [
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'zhongrubo/zotero-tag-sort',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'v1.0.2',
        assetName: 'zotero-tag-sort.xpi',
      },
    ],
    tags: [
      'interface',
    ],
    discoverReleases: true,
  },
  {
    repo: 'zhouyi654/zotero-title-translator',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.3.12',
        assetName: 'zotero-title-translator-0.3.12.xpi',
      },
    ],
    tags: [
      'ai',
    ],
    discoverReleases: true,
  },
  {
    repo: 'ZionDoki/confucius',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.6.0-beta.1',
        assetName: 'confucius.xpi',
      },
      {
        targetZoteroVersion: '9',
        tagName: 'v0.6.0-beta.1',
        assetName: 'confucius.xpi',
      },
      {
        targetZoteroVersion: '8',
        tagName: 'v0.6.0-beta.1',
        assetName: 'confucius.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v0.6.0-beta.1',
        assetName: 'confucius.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v0.5.1-beta.1',
        assetName: 'confucius.xpi',
      },
    ],
    tags: [
      'ai',
      'notes',
    ],
    discoverReleases: true,
  },
  {
    repo: 'ZorroStardust/zotero-vim-plus',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v1.10.0',
        assetName: 'zoetero-vim-plus.xpi',
      },
    ],
    tags: [
      'reader',
      'utility',
    ],
    discoverReleases: true,
  },
  {
    repo: 'zxyl1003/Inthes',
    releases: [
      {
        targetZoteroVersion: '10',
        tagName: 'v0.10.60',
        assetName: 'inthes-0.10.60.xpi',
      },
      {
        targetZoteroVersion: '10',
        tagName: 'v0.10.49',
        assetName: 'inthes-0.10.49.xpi',
      },
    ],
    tags: [
      'ai',
      'reader',
    ],
    discoverReleases: true,
  },
  {
    repo: 'zzlb0224/zotero-annotation-manage',
    releases: [
      {
        targetZoteroVersion: '8',
        tagName: 'v0.8.2',
        assetName: 'zotero-annotation-manage.xpi',
      },
      {
        targetZoteroVersion: '7',
        tagName: 'v0.7.38',
        assetName: 'zotero-annotation-manage.xpi',
      },
    ],
    tags: [
      'notes',
    ],
    discoverReleases: true,
  },
  {
    repo: 'Zzq-02/zotero-vocab-builder',
    releases: [
      {
        targetZoteroVersion: '11',
        tagName: 'v1.3.0',
        assetName: 'zotero-vocab-builder.xpi',
      },
    ],
    tags: [
      'reader',
      'notes',
    ],
    discoverReleases: true,
  },
]

/** Small development sample. */
export const pluginsDev = plugins.filter(p => ['northword/zotero-format-metadata', 'windingwind/zotero-better-notes'].includes(p.repo))
