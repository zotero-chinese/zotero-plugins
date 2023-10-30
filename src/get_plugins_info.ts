import fs from "fs";
import { franc } from "franc-min";
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
          })[0];

        if (!asset) {
          console.log(`  ${plugin.name} ${release.currentVersion} 不存在 XPI`);
          // throw new Error(
          //   `${plugin.name} ${release.currentVersion} 不存在 XPI`
          // );
          return;
        }

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
            "kkgithub.com"
          ),
        };
      });

      // return release;
    }
  }
  return plugins;
}
