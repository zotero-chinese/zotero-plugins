import fs from "fs";
import { franc } from "franc-min";
import { Align, getMarkdownTable } from "markdown-table-ts";
import translate from "google-translate-api-x";
import { PluginInfo } from "./plugins";
import { writeFile } from "./utils";
import { octokit } from ".";
import { dist } from ".";

export async function progressPlugins(plugins: PluginInfo[]) {
  for (const plugin of plugins) {
    console.log(`开始处理 ${plugin.name}`);
    const repoParts = plugin.repo.split("/"),
      owner = repoParts[0],
      repo = repoParts[1];

    // 仓库信息：插件简介
    await octokit
      .request("GET /repos/{owner}/{repo}", {
        owner: owner,
        repo: repo,
      })
      .then(async (resp) => {
        let desc = "";
        if (resp.data.description) {
          if (franc(resp.data.description) == "cmn") {
            desc = resp.data.description;
          } else {
            desc = resp.data.description;
            // 翻译
            // console.log("需要翻译");
            // await translate(resp.data.description, { to: "zh-CN" })
            //   .then((res) => {
            //     console.log(res.text);
            //     desc = res.text;
            //   })
            //   .catch((e) => {
            //     console.log(e);
            //     desc = resp.data.description;
            //   });
          }
        } else {
          desc = "无简介";
        }
        plugin.description = desc;
        plugin.star = resp.data.stargazers_count;
      });

    // 作者信息
    await octokit
      .request("GET /users/{username}", {
        username: owner,
      })
      .then((resp) => {
        plugin.author = {
          name: resp.data.name || owner,
          url: resp.data.blog || resp.data.html_url,
          avatar: resp.data.avatar_url,
        };
      });

    // 发行版
    for (const release of plugin.releases) {
      async function getRelease() {
        if (release.tagName == "latest") {
          const resp = await octokit.request(
            "GET /repos/{owner}/{repo}/releases/latest",
            {
              owner: owner,
              repo: repo,
            }
          );
          return resp.data;
        } else if (release.tagName == "pre") {
          const resp = await octokit.request(
            "GET /repos/{owner}/{repo}/releases",
            {
              owner: owner,
              repo: repo,
            }
          );
          return resp.data.filter((item) => item.prerelease === true)[0];
        } else {
          const resp = await octokit.request(
            "GET /repos/{owner}/{repo}/releases/tags/{tag}",
            {
              owner: owner,
              repo: repo,
              tag: release.tagName,
            }
          );
          return resp.data;
        }
      }

      await getRelease().then(async (resp) => {
        release.currentVersion = resp.tag_name;
        const asset = resp.assets
          .filter((asset) => {
            return asset.content_type === "application/x-xpinstall";
          })
          .sort((a, b) => {
            const dateA = new Date(a.updated_at);
            const dateB = new Date(b.updated_at);
            // 使用时间戳进行比较
            return dateB.getTime() - dateA.getTime();
          })[0] || resp.assets
          .filter((asset) => {
            /application\/(x-)?zip(-compressed)?/.test(asset.content_type)
          })[0] || resp.assets[0];
        if (!asset)
          return;
        if (!fs.existsSync(`${dist}/xpi/${asset.id}.xpi`)) {
          const xpiFlie = await octokit.rest.repos
            .getReleaseAsset({
              owner: owner,
              repo: repo,
              asset_id: asset.id,
              headers: {
                Accept: "application/octet-stream",
              },
            })
            .then((resp) => {
              return resp.data as unknown as ArrayBuffer;
            });

          writeFile(`${dist}/xpi/${asset.id}.xpi`, Buffer.from(xpiFlie));
        }
        release.assetId = asset.id;
        release.releaseData = asset.updated_at;
        release.downloadCount = asset.download_count;
        release.xpiDownloadUrl = {
          github: asset.browser_download_url,
          gitee: `https://gitee.com/northword/zotero-plugins/raw/gh-pages/dist/xpi/${release.assetId}.xpi`,
          ghProxy: `https://ghproxy.com/?q=${encodeURI(
            asset.browser_download_url
          )}`,
          jsdeliver: `https://cdn.jsdelivr.net/gh/northword/zotero-plugins@gh-pages/dist/xpi/${release.assetId}.xpi`,
          kgithub: asset.browser_download_url.replace(
            "github.com",
            "kgithub.com"
          ),
        };
      });

      // return release;
    }
  }
  return plugins;
}

export async function renderMarkdown(plugins: PluginInfo[]) {
  let body = Array();
  plugins.forEach((plugin) => {
    let name = `[${plugin.name}](https://github.com/${plugin.repo}) </br>`;
    name += `![GitHub Repo stars ${plugin.star}](https://img.shields.io/github/stars/${plugin.repo})`;
    plugin.releases.forEach((release, index) => {
      if (release.assetId == undefined) {
        console.log(`  ${plugin.name} ${release.currentVersion} 不存在`);
        return;
      }

      // let releaseInfo = `[![适配 Zotero ${release.targetZoteroVersion}](https://img.shields.io/badge/Zotero-${release.targetZoteroVersion}-green?&logo=zotero&logoColor=CC2936)](https://www.zotero.org) </br>`;
      // releaseInfo += `![版本 ${release.currentVersion}](https://img.shields.io/badge/版本-${release.targetZoteroVersion}-green) </br>`;
      // releaseInfo += `![发布日期 ${new Date(release.releaseData ?? "").toLocaleString("zh-CN")}](https://img.shields.io/badge/日期-${encodeURI(new Date(release.releaseData ?? "").toLocaleString("zh-CN"))}-green) </br>`;
      // releaseInfo += `![下载量 ${release.downloadCount}](https://img.shields.io/badge/下载量-${release.downloadCount}-green)`;

      let downloadUrl = `<ul>`;
      downloadUrl += `<li>[GitHub](${release.xpiDownloadUrl?.github}) </li>`;
      downloadUrl += `<li>[Gitee](${release.xpiDownloadUrl?.gitee})</li>`;
      downloadUrl += `<li>[GitHub Proxy](${release.xpiDownloadUrl?.ghProxy}) </li>`;
      downloadUrl += `<li>[JsDeliver](${release.xpiDownloadUrl?.jsdeliver}) </li>`;
      downloadUrl += `<li>[KGitHub](${release.xpiDownloadUrl?.kgithub}) </li>`;
      downloadUrl += `</ul>`;

      const row = [
        !index ? name : "",
        !index ? plugin.description : "",
        !index ? `[${plugin.author?.name}](${plugin.author?.url})` : "",
        release.targetZoteroVersion,
        release.currentVersion,
        new Date(release.releaseData ?? "").toLocaleString("zh-CN") +
          `</br>![下载量 ${release.downloadCount}](https://img.shields.io/github/downloads/${plugin.repo}/${release.currentVersion}/total?label=下载量)`,
        // releaseInfo,
        downloadUrl,
      ];
      body.push(row);
    });
  });
  const table = getMarkdownTable({
    table: {
      head: [
        "插件名称",
        "描述",
        "作者",
        "目标 Zotero 版本",
        "插件版本",
        "发布时间",
        // "版本信息",
        "下载链接",
      ],
      body: body,
    },
    alignment: [
      Align.Left,
      Align.Left,
      Align.Center,
      Align.Center,
      Align.Center,
      Align.Center,
      Align.Left,
    ],
  });
  return table;
}
