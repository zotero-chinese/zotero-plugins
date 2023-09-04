import { Octokit } from "octokit";
import fs from "fs";
import path from "path";
import { franc } from "franc-min";
import { Align, getMarkdownTable } from "markdown-table-ts";
import translate from "google-translate-api-x";

const pluginsSourceFile = "./plugins.json";
// const pluginsSourceFile = "./plugins-test.json";
const dist = "../dist";

interface PluginInfo {
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

interface PluginReleaseInfo {
  targetZoteroVersion: string;
  tagName: "latest" | "pre" | "string";

  currentVersion?: string;
  xpiDownloadUrl?: string;
  releaseData?: string;
  downloadCount?: number;
  id?: number;
}

// 读写
function readFile(filePath: string) {
  // 读取文件
  const data = fs.readFileSync(filePath, { encoding: "utf8" });
  return JSON.parse(data);
}

function writeFile(filePath: string, data: string | NodeJS.ArrayBufferView) {
  // 获取目标目录路径
  const dirPath = path.dirname(filePath);

  // 检查目录是否存在，如果不存在则创建目录
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // 写入文件
  fs.writeFileSync(filePath, data, "utf8");
  console.log(`    ${filePath} 写入完成`);
}

function copyFileSync(source: string, target: string) {
  var targetFile = target;

  // If target is a directory, a new file with the same name will be created
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source));
    }
  }

  fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolderRecursiveSync(source: string, target: string) {
  var files = Array();

  // Check if folder needs to be created or integrated
  var targetFolder = path.join(target);
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }

  // Copy
  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);
    files.forEach(function (file) {
      var curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder);
      } else {
        copyFileSync(curSource, targetFolder);
      }
    });
  }
}

const plugins = readFile(pluginsSourceFile) as PluginInfo[];

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

async function progressPlugins() {
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
      })
      .catch((err) => {
        console.log(err);
      });

    // 作者信息
    await octokit
      .request("GET /users/{username}", {
        username: owner,
      })
      .then((resp) => {
        plugin.author = {
          name: resp.data.name ?? owner,
          url: resp.data.blog ?? resp.data.html_url ?? "",
          avatar: resp.data.avatar_url ?? "",
        };
      })
      .catch((err) => {
        console.log(err);
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

      await getRelease()
        .then(async (resp) => {
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
          release.id = asset.id;
          release.releaseData = asset.updated_at;
          release.downloadCount = asset.download_count;
          release.xpiDownloadUrl = asset.browser_download_url;
        })
        .catch((err) => {
          console.log(err);
        });
      // return release;
    }

    writeFile(`${dist}/plugins.json`, JSON.stringify(plugins, null, 2));
  }
}

async function writeMarkdown() {
  copyFolderRecursiveSync("../docs/", dist);

  let body = Array();
  plugins.forEach((plugin) => {
    plugin.releases.forEach((release, index) => {
      let name = `[${plugin.name}](https://github.com/${plugin.repo}) </br>`;
      name += `![GitHub Repo stars ${plugin.star}](https://img.shields.io/github/stars/${plugin.repo})`;

      let releaseInfo = `[![适配 Zotero ${release.targetZoteroVersion}](https://img.shields.io/badge/Zotero-${release.targetZoteroVersion}-green?&logo=zotero&logoColor=CC2936)](https://www.zotero.org) </br>`;
      releaseInfo += `![版本 ${release.currentVersion}](https://img.shields.io/badge/版本-${release.targetZoteroVersion}-green) </br>`;
      releaseInfo += `![发布日期 ${new Date(release.releaseData ?? "").toLocaleString("zh-CN")}](https://img.shields.io/badge/日期-${encodeURI(new Date(release.releaseData ?? "").toLocaleString("zh-CN"))}-green) </br>`;
      releaseInfo += `![下载量 ${release.downloadCount}](https://img.shields.io/badge/下载量-${release.downloadCount}-green)`;

      const downloadUrlEncode = encodeURI(release.xpiDownloadUrl!);
      let downloadUrl = `<ul>`;
      downloadUrl += `<li>[官方下载](${release.xpiDownloadUrl}) </li>`;
      downloadUrl += `<li>[GitHub Proxy](https://ghproxy.com/?q=${downloadUrlEncode}) </li>`;
      downloadUrl += `<li>[JsDeliver](https://cdn.jsdelivr.net/gh/northword/zotero-plugins@gh-pages/xpi/${release.id}.xpi) </li>`;
      downloadUrl += `</ul>`;

      const row = [
        !index ? name : "",
        !index ? plugin.description : "",
        !index ? `[${plugin.author?.name}](${plugin.author?.url})` : "",
        release.targetZoteroVersion,
        // release.currentVersion,
        // new Date(release.releaseData ?? "").toLocaleString("zh-CN"),
        releaseInfo,
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
        // "插件版本",
        // "发布时间",
        "版本信息",
        "下载链接",
      ],
      body: body,
    },
    // alignment: [Align.Left, Align.Center, Align.Right],
  });
  writeFile(`${dist}/plugins.md`, table);
}

async function main() {
  console.log("开始处理");
  await progressPlugins();
  // console.log(JSON.stringify(plugins, null, 2));
  // writeFile(`${dist}/plugins.json`, JSON.stringify(plugins, null, 2));

  console.log("处理 Markdown");
  writeMarkdown();

  console.log("完成");

  let shields = {
    lastUpdate: new Date().toLocaleString("zh-CN"),
  };
  writeFile(`${dist}/shields.json`, JSON.stringify(shields, null, 2));
}

main().catch((err) => {
  console.log(err);
  // process.exit(1);
});
