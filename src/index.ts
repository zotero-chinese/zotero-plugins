import { Octokit } from "octokit";
import { plugins } from "./plugins";
import { writeFile } from "./utils";
import getChartOptions from "./charts";
import { progressPlugins, renderMarkdown } from "./get_plugins_info";

// 仅供测试使用
// import { test as plugins } from "./plugins";

export const dist = "../docs/dist";

if (!process.env.GITHUB_TOKEN) throw new Error("GITHUB_TOKEN 未设置");
export const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

async function main(mode: "releases" | "charts" | string) {
  const quota = (
    await octokit.rest.rateLimit.get()
  ).data.rate.remaining;
  if (quota < 750) {
    console.log("API 次数不足，退出");
    process.exit(1);
  }

  console.log("开始处理");
  switch (mode) {
    case "releases":
      {
        await progressPlugins();
        writeFile(`${dist}/plugins.json`, JSON.stringify(plugins, null, 2));

        console.log("处理 Markdown");
        const markdownContent = await renderMarkdown();
        writeFile(`${dist}/plugins.md`, markdownContent);

        let shields = {
          lastUpdate: new Date().toLocaleString("zh-CN"),
        };
        writeFile(`${dist}/shields.json`, JSON.stringify(shields, null, 2));
      }
      break;
    case "charts":
      {
        const chartOptions = await getChartOptions();
        writeFile(
          `${dist}/charts.json`,
          JSON.stringify(
            chartOptions,
            null,
            process.env.NODE_ENV == "development" ? 2 : 0
          )
        );
      }
      break;
    default:
      console.log("No arg, exit.");
      break;
  }

  console.log("完成");
  const remaining = (
    await octokit.rest.rateLimit.get()
  ).data.rate.remaining;
  console.log(`耗费API次数：${quota - remaining}`);
}

const args = process.argv.slice(2)[0];

main(args).catch((err) => {
  console.log(err);
  process.exit(1);
});
