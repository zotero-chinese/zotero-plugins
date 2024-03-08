import { Octokit } from "octokit";
import plugins from "./plugins";
import { readFile, writeFile } from "./utils";
import getChartOptions from "./charts";
import { fetchPlugins } from "./get-plugins-info";
import { renderMarkdown } from "./render-markdown";

if (!process.env.GITHUB_TOKEN) throw new Error("GITHUB_TOKEN 未设置");

export const dist = "./dist",
  octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

export function args() {
  return <"fetchPlugins" | "md" | "charts">process.argv.slice(2)[0];
}

async function main(mode: "fetchPlugins" | "charts" | string) {
  const quotaStart = (await octokit.rest.rateLimit.get()).data.rate;
  console.log(quotaStart);

  if (quotaStart.remaining < 1500) {
    console.log(
      `TOKEN 余量不足, ${new Date(quotaStart.reset).toLocaleTimeString()}后重试`,
    );
    process.exit(1);
  }

  console.log("开始处理");
  switch (mode) {
    case "fetchPlugins":
      {
        const pluginsInfoDist = await fetchPlugins(plugins);
        !process.env.CI
          ? writeFile(
              `${dist}/plugins-debug.json`,
              JSON.stringify(plugins, null, 2),
            )
          : "";
        writeFile(`${dist}/plugins.json`, JSON.stringify(pluginsInfoDist));

        const shields = {
          lastUpdate: new Date().toLocaleString("zh-CN"),
        };
        writeFile(`${dist}/shields.json`, JSON.stringify(shields, null, 2));
      }
      break;
    case "md": {
      console.log("处理 Markdown");
      const pluginsInfoDist = readFile(`${dist}/plugins.json`);
      const markdownContent = await renderMarkdown(pluginsInfoDist);
      writeFile(`${dist}/plugins.md`, markdownContent);
      break;
    }
    case "charts":
      {
        const pluginsInfoDist = readFile(`${dist}/plugins.json`);
        const chartOptions = await getChartOptions(pluginsInfoDist);
        writeFile(
          `${dist}/charts.json`,
          JSON.stringify(
            chartOptions,
            null,
            process.env.NODE_ENV == "development" ? 2 : 0,
          ),
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
