import { Octokit } from "octokit";
import { plugins } from "./plugins";
import { writeFile } from "./utils";
import getChartOptions from "./charts";
import { progressPlugins, renderMarkdown } from "./get_plugins_info";

// 仅供测试使用
// import { test as plugins } from "./plugins";

if (!process.env.GITHUB_TOKEN) throw new Error("GITHUB_TOKEN 未设置");
export const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
export const dist = "../docs/dist";

export function args() {
  return <"releases" | "charts">process.argv.slice(2)[0];
}

async function main(mode: "releases" | "charts" | string) {
  const quotaStart = (await octokit.rest.rateLimit.get()).data.rate;
  console.log(quotaStart);

  if (quotaStart.remaining < 700) {
    console.log(
      `TOKEN 余量不足, ${new Date(quotaStart.reset).toLocaleTimeString()}后重试`
    );
    process.exit(1);
  }

  console.log("开始处理");
  switch (mode) {
    case "releases":
      {
        let pluginsInfoDist = await progressPlugins(plugins);
        writeFile(
          `${dist}/plugins.json`,
          JSON.stringify(pluginsInfoDist, null, 2)
        );

        console.log("处理 Markdown");
        const markdownContent = await renderMarkdown(pluginsInfoDist);
        writeFile(`${dist}/plugins.md`, markdownContent);

        let shields = {
          lastUpdate: new Date().toLocaleString("zh-CN"),
        };
        writeFile(`${dist}/shields.json`, JSON.stringify(shields, null, 2));
      }
      break;
    case "charts":
      {
        const chartOptions = await getChartOptions(plugins);
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
  const quotaEnd = (await octokit.rest.rateLimit.get()).data.rate;
  console.log(quotaEnd);
  console.log(`共计请求 ${quotaStart.remaining - quotaEnd.remaining} 次`);
}

main(args()).catch((err) => {
  console.log(err);
  process.exit(1);
});
