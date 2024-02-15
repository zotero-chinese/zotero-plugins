import { octokit } from ".";
import { writeFile } from "./utils";
import { PluginInfo } from "./plugins";
import type { Board } from "@highcharts/dashboards";
import type {
  Options,
  SeriesPieOptions,
  PointOptionsObject,
  SeriesSplineOptions,
  SeriesWordcloudOptions,
  SeriesBarOptions,
  ExportingOptions,
} from "highcharts";

import { createRequire } from "module";
const require = createRequire(import.meta.url),
  pluginMap: { [name: string]: PluginMapInfo } =
    process.env.NODE_ENV == "development"
      ? require("../docs/dist/charts-debug.json")
      : {};

interface PluginMapInfo {
  owner?: string;
  repo?: string;
  stars?: number;
  watchers?: number;
  description?: string;
  starHistory?: Date[];
  author?: {
    name: string;
    url: string;
    avatar: string;
  };
  releases?: Array<{
    name: string;
    tag_name: string;
    published_at: string;
    size: number;
    downloadCount: number;
  }>;
  totalDownloads?: number;
  contributors?: Array<{
    name: string;
    avatar: string;
  }>;
  issues?: Array<{
    title: string;
    createdAt: string;
    closedAt: string | null;
  }>;
}

async function fetchInfo(plugin: PluginInfo) {
  console.log("开始获取图表数据: " + plugin.name);
  const [owner, repo] = plugin.repo.split("/"),
    info = await octokit.rest.repos.get({ owner, repo });

  pluginMap[plugin.name] = {
    owner,
    repo,
    stars: info.data.stargazers_count,
    watchers: info.data.subscribers_count,
    description: info.data.description ?? "",
    author: {
      name: info.data.owner.login,
      url: info.data.owner.html_url,
      avatar: info.data.owner.avatar_url,
    },
    starHistory: await getStarHistory(owner, repo),
    contributors: await getContributors(owner, repo),
    releases: await getDownloadsCount(owner, repo),
    issues: await getIssues(owner, repo),
  };
  pluginMap[plugin.name].totalDownloads = pluginMap[
    plugin.name
  ].releases!.reduce((sum, release) => sum + release.downloadCount, 0);
}

async function getIssues(owner: string, repo: string) {
  const data = await octokit.paginate(octokit.rest.issues.listForRepo, {
    owner,
    repo,
    per_page: 100,
    state: "all",
    headers: { accept: "application/vnd.github.v3+json" },
  });
  return data.map((issue) => ({
    title: issue.title,
    createdAt: issue.created_at,
    closedAt: issue.closed_at,
  }));
}

async function getContributors(owner: string, repo: string) {
  const data = await octokit.paginate(octokit.rest.repos.listContributors, {
    owner,
    repo,
    per_page: 100,
    anon: "true",
    headers: {
      accept: "application/vnd.github+json",
    },
  });
  return data.map((contributor) => ({
    name: contributor.login ?? "",
    avatar: contributor.avatar_url ?? "",
  }));
}

async function getDownloadsCount(owner: string, repo: string) {
  const data = await octokit.paginate(octokit.rest.repos.listReleases, {
      owner,
      repo,
      per_page: 100,
      headers: {
        accept: "application/vnd.github+json",
      },
    }),
    allReleases: PluginMapInfo["releases"] = [];
  for (const release of data) {
    // 优先选择 xpi 文件，其次是 zip 文件，否则选择第一个文件
    const xpi =
      release.assets.find(
        (asset) => asset.content_type == "application/x-xpinstall"
      ) ||
      release.assets.find((asset) =>
        /application\/(x-)?zip(-compressed)?/.test(asset.content_type)
      ) ||
      release.assets[0];

    allReleases.push({
      name: release.name ?? "",
      tag_name: release.tag_name,
      published_at: release.published_at || release.created_at,
      size: xpi?.size ?? 0,
      downloadCount: xpi?.download_count ?? 0,
    });
  }
  return allReleases;
}

async function getStarHistory(owner: string, repo: string) {
  const iterator = octokit.paginate.iterator(
      octokit.rest.activity.listStargazersForRepo,
      {
        owner,
        repo,
        per_page: 100,
        headers: {
          accept: "application/vnd.github.star+json",
        },
      }
    ),
    allDate = new Array<Date>();
  for await (const { data } of iterator)
    allDate.push(...data.map((user) => new Date(user.starred_at!)));
  return allDate;
}

async function drawStarHistory() {
  function zeroHour(date: Date) {
    return new Date(date.toLocaleDateString()).getTime();
  }
  const series = Object.entries(pluginMap).map(async ([name, info]) => {
    const datMap: { [t: string]: number } = {};
    for (const date of info.starHistory!) {
      const timestamp = zeroHour(date);
      datMap[timestamp] ??= 0;
      ++datMap[timestamp];
    }
    const data = Object.entries(datMap)
      .map((point) => [parseInt(point[0]), point[1]])
      .sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < data.length; ++i) data[i][1] += data[i - 1][1];
    return {
      name,
      visible: data.length > 200,
      keys: ["x", "y"],
      data,
    } as SeriesSplineOptions;
  });
  return (await Promise.all(series)).sort(
    (a, b) => b.data!.length - a.data!.length
  );
}

function drawTrendingBar(day: number) {
  const now = new Date(),
    startDate = new Date(now.setDate(now.getDate() - day));
  return Object.entries(pluginMap).map(([name, info]) => {
    let begin = info.starHistory!.findIndex((date) => date >= startDate);
    if (begin < 0) begin = info.stars!;
    return {
      name,
      weight: info.stars! - begin,
      custom: {
        description: info.description,
        avatar: info.author!.avatar,
        repo: `${info.owner}/${info.repo}`,
      },
    } as PointOptionsObject;
  });
}

function drawAuthorPie() {
  const authorMap: {
      [name: string]: {
        stars: number;
        plugins: Array<{ name: string; stars: number }>;
      };
    } = {},
    authorSeries: SeriesPieOptions = {
      type: "pie",
      name: "Owner",
      size: "35%",
      data: [],
      dataLabels: {
        distance: "-20%",
        filter: {
          property: "y",
          operator: ">",
          value: 5000,
        },
        zIndex: 3,
        shadow: true,
      },
      tooltip: {
        pointFormat: `<span style='
                    display: inline-block;
                    background-image: url({point.custom.avatar});
                    background-size: cover;
                    width: 32px;
                    height: 32px;
                '></span> <b>{point.y}</b> ⭐`,
      },
    },
    pluginSeries: SeriesPieOptions = {
      type: "pie",
      name: "Plugin",
      size: "70%",
      innerSize: "50%",
      tooltip: { valueSuffix: " ⭐" },
      dataLabels: {
        format: '<b>{point.name}:</b> <span style="opacity: 0.5">{y}</span>',
        filter: {
          property: "y",
          operator: ">",
          value: 900,
        },
        style: {
          fontWeight: "normal",
        },
      },
      allowPointSelect: true,
      data: [],
    };
  for (const [name, plugin] of Object.entries(pluginMap)) {
    authorMap[plugin.author!.name] ??= {
      stars: 0,
      plugins: [],
    };
    authorMap[plugin.author!.name].plugins.push({
      name,
      stars: plugin.stars!,
    });
    authorMap[plugin.author!.name].stars += plugin.stars!;
  }
  let colorIndex = 0;
  Object.entries(authorMap)
    .sort((a, b) => a[1].stars - b[1].stars)
    .forEach(([author, info]) => {
      ++colorIndex;
      colorIndex %= 10; // 默认颜色总数
      authorSeries.data!.push({
        colorIndex,
        name: author,
        y: info.stars,
        custom: {
          avatar: pluginMap[info.plugins[0].name].author!.avatar,
        },
      });
      pluginSeries.data!.push(
        ...info.plugins
          .sort((a, b) => a.stars - b.stars)
          .map((plugin) => ({
            name: plugin.name,
            y: plugin.stars,
            className: "stargazers-pie-plugin",
            colorIndex,
          }))
      );
    });
  return [authorSeries, pluginSeries];
}

function drawIssueBar() {
  const categories = Object.keys(pluginMap).sort(
      (a, b) => pluginMap[b].issues!.length - pluginMap[a].issues!.length
    ),
    closed: SeriesBarOptions = {
      type: "bar",
      name: "Closed",
      colorIndex: 101,
      data: categories.map(
        (name) =>
          pluginMap[name].issues!.filter((issue) => issue.closedAt != null)
            .length
      ),
    },
    open: SeriesBarOptions = {
      type: "bar",
      name: "Open",
      colorIndex: 102,
      data: categories.map(
        (name) =>
          pluginMap[name].issues!.filter((issue) => issue.closedAt == null)
            .length
      ),
    };
  return [open, closed];
}

function drawActivities() {
  function toFixedNum(num: number) {
    return Number(num.toFixed(2));
  }
  function getDays(start: string | Date, end: string | Date) {
    const startDate = new Date(start),
      endDate = new Date(end),
      duration = endDate.getTime() - startDate.getTime();
    return duration / 1000 / 60 / 60 / 24;
  }
  const series: Highcharts.SeriesLineOptions[] = [];
  for (const [name, info] of Object.entries(pluginMap)) {
    const totalSize = info.releases!.reduce(
        (sum, release) => sum + release.size,
        0
      ),
      closedIssues = info.issues!.filter((issue) => issue.closedAt != null);
    series.push({
      type: "line",
      name,
      data: [
        info.contributors!.length,
        info.watchers!,
        toFixedNum(
          info.totalDownloads! /
            getDays(info.releases!.at(-1)!.published_at, new Date())
        ),
        toFixedNum(totalSize / info.releases!.length / 1024 / 1024),
        toFixedNum(
          closedIssues.reduce(
            (sum, issue) => sum + getDays(issue.createdAt, issue.closedAt!),
            0
          ) / closedIssues.length
        ),
        toFixedNum(
          (info.stars! * 7) /
            getDays(info.starHistory![0], info.starHistory!.at(-1)!)
        ),
      ],
    });
  }
  return series;
}

export default async function getChartOptions(plugins: PluginInfo[]) {
  if (process.env.NODE_ENV != "development")
    for (const plugin of plugins) await fetchInfo(plugin);

  // 仅供测试时用
  // writeFile('../docs/dist/charts-debug.json', JSON.stringify(pluginMap, null, 2));

  if (process.env.NODE_ENV == "development")
    for (const plugin in pluginMap)
      pluginMap[plugin].starHistory = pluginMap[plugin].starHistory?.map(
        (date) => new Date(date)
      );
  const pointColor = "var(--highcharts-color-{point.colorIndex})",
    exporting = {
      menuItemDefinitions: { invertSelection: { text: "Invert Selection" } },
      buttons: {
        contextButton: {
          menuItems: [
            "viewFullscreen",
            "printChart",
            "separator",
            "downloadPNG",
            "downloadJPEG",
            "downloadPDF",
            "downloadSVG",
            "separator",
            "invertSelection",
          ],
        },
      },
    } as ExportingOptions;
  return {
    editMode: {
      enabled: true,
      contextMenu: {
        enabled: true,
        items: ["editMode"],
      },
    },
    gui: {
      layouts: [
        {
          rows: [
            {
              cells: [{ id: "title" }],
            },
            {
              cells: [
                {
                  id: "dashboard-col-0",
                  responsive: {
                    small: { width: "100%" },
                    medium: { width: "40%" },
                    large: { width: "50%" },
                  },
                },
                {
                  id: "dashboard-col-1",
                  responsive: {
                    small: { width: "100%" },
                    medium: { width: "60%" },
                    large: { width: "50%" },
                  },
                },
              ],
            },
            {
              cells: [
                {
                  id: "dashboard-col-3",
                  height: 600,
                  responsive: {
                    small: { width: "100%" },
                    medium: { width: "60%" },
                    large: { width: "50%" },
                  },
                },
                {
                  id: "dashboard-col-2",
                  height: 600,
                  responsive: {
                    small: { width: "100%" },
                    medium: { width: "40%" },
                    large: { width: "50%" },
                  },
                },
              ],
            },
            { cells: [{ id: "star-history" }] },
          ],
        },
      ],
    },
    components: [
      {
        cell: "title",
        type: "HTML",
        elements: [
          {
            tagName: "h1",
            textContent: "🤩 Awesome Zotero Plugins",
          },
        ],
      },
      {
        cell: "star-history",
        type: "Highcharts",
        chartConstructor: "stockChart",
        chartOptions: {
          chart: { type: "spline", height: 600 },
          exporting,
          series: await drawStarHistory(),
          legend: { enabled: true, maxHeight: 160 },
          tooltip: { valueDecimals: 0 },
          boost: {
            enabled: true,
            useGPUTranslations: true,
            usePreAllocated: true,
            seriesThreshold: 10,
          },
          xAxis: { type: "datetime" },
          yAxis: {
            title: { text: "Total Stars" },
            opposite: false,
          },
          title: { text: "📈 Star History" },
        } as Options,
      },
      {
        cell: "dashboard-col-0",
        type: "Highcharts",
        chartOptions: {
          title: { text: "🚀 Trending" },
          xAxis: { visible: false },
          chart: {
            animation: {
              duration: 1200,
              easing: "wordCloudEasing",
            },
          },
          tooltip: {
            useHTML: true,
            outside: true,
            format: `<div class="trending-tooltip">
                            <span style='background-image: url({point.custom.avatar});'></span>
                            <span>
                                <div style="border-color: ${pointColor};">
                                    <b><span style="color: ${pointColor};">•</span></b>
                                    <b>{point.name}</b>
                                </div>
                                <div>Stars in {series.name}: <b>{point.weight}</b></div>
                                <div>{point.custom.description}</div>
                            </span>
                        </div>`,
          },
          plotOptions: { series: { point: { events: {} } } },
          series: [
            {
              type: "wordcloud",
              name: "This Week",
              showInLegend: true,
              rotation: { orientations: 1 },
              data: drawTrendingBar(7),
            } as SeriesWordcloudOptions,
            {
              type: "wordcloud",
              name: "Half Year",
              visible: false,
              showInLegend: true,
              rotation: { orientations: 1 },
              data: drawTrendingBar(182),
            } as SeriesWordcloudOptions,
          ],
        } as Options,
      },
      {
        cell: "dashboard-col-1",
        type: "Highcharts",
        chartOptions: {
          title: { text: "🔭 Stargazers" },
          tooltip: {
            useHTML: true,
            headerFormat: `<span 
                            style='color: ${pointColor};'
                        >{point.key}</span><br/>`,
          },
          series: drawAuthorPie(),
        } as Options,
      },
      {
        cell: "dashboard-col-2",
        type: "Highcharts",
        chartOptions: {
          chart: { type: "bar" },
          title: { text: "⊙ Issues" },
          series: drawIssueBar(),
          xAxis: {
            categories: Object.keys(pluginMap).sort(
              (a, b) =>
                pluginMap[b].issues!.length - pluginMap[a].issues!.length
            ),
          },
          yAxis: {
            title: { text: null },
            type: "logarithmic",
          },
          tooltip: {
            shared: true,
            useHTML: true,
            format: `
                            <table>
                                <thead>
                                    <tr>
                                        <th 
                                            colspan='2' 
                                            style='border-bottom: solid 1px;'
                                        >{x}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {#each points}
                                        <tr>
                                            <td style='color: ${pointColor};'>{series.name}</td>
                                            <td><b>{y}</b></td>
                                        </tr>
                                    {/each}
                                    {#if (gt points.length 1)}
                                        <tr>
                                            <td>Ratio</td>
                                            <td><b>{percentage:.2f}%</b></td>
                                        </tr>
                                    {/if}
                                </tbody>
                            </table>
                        `,
          },
          plotOptions: {
            series: {
              stacking: "normal",
              dataLabels: { enabled: true },
            },
          },
        } as Options,
      },
      {
        cell: "dashboard-col-3",
        type: "Highcharts",
        chartOptions: {
          title: { text: "🕸️ Activities" },
          exporting,
          chart: {
            polar: true,
            parallelCoordinates: true,
            parallelAxes: {
              gridLineWidth: 1,
              lineWidth: 2,
              showFirstLabel: false,
              showLastLabel: true,
            },
          },
          tooltip: {
            pointFormat: `
                            <span style="color: ${pointColor};">\u25CF</span>
                            {series.name}: <b>{point.formattedValue}</b><br/>
                        `,
          },
          legend: {
            enabled: true,
            maxHeight: 160,
          },
          xAxis: {
            categories: [
              "Contributors Count",
              "Watchers Count",
              "Downloads Per Day",
              "Average Size of XPI",
              "Issues Duration",
              "Stars Per Week",
            ],
          },
          yAxis: [
            {},
            {},
            {
              tooltipValueFormat: `
                                {#if (gt value 1000)}
                                    {(divide value 1000):.1f} K
                                {else}
                                    {value}
                                {/if}
                            `,
            },
            { tooltipValueFormat: "{value} MB" },
            { tooltipValueFormat: "{value} Days" },
            {},
          ],
          series: drawActivities(),
        } as Options,
      },
    ],
  } as Board.Options;
}
