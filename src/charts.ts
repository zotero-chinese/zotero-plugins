import { octokit } from './index';
import { writeFile } from './utils';
import { PluginInfo } from './plugins';
import type { Board } from '@highcharts/dashboards';
import type {
    Options,
    SeriesPieOptions,
    PointOptionsObject,
    SeriesSplineOptions,
    SeriesWordcloudOptions
} from 'highcharts';

import { plugins } from './plugins';
// 以下三行仅供测试时用
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const plugins = require('../docs/dist/plugins.json') as PluginInfo[];

const pluginMap: { [name: string]: PluginMapInfo } =
    process.env.NODE_ENV == 'development'
        ? require('../docs/dist/charts.json')
        : {};

interface PluginMapInfo {
    owner?: string;
    repo?: string;
    stars?: number;
    description?: string;
    starHistory?: Date[];
    author?: {
        name: string;
        url: string;
        avatar: string;
    };
};

async function fetchInfo(plugin: PluginInfo) {
    const [owner, repo] = plugin.repo.split('/');

    pluginMap[plugin.name] = {
        owner,
        repo,
        stars: plugin.star,
        description: plugin.description,
        author: plugin.author
    };
    pluginMap[plugin.name].starHistory = await getStarHistory(owner, repo);
}

async function getDownloadsCount(owner: string, repo: string) {
}

async function getStarHistory(owner: string, repo: string) {
    const iterator = octokit.paginate.iterator(
        octokit.rest.activity.listStargazersForRepo,
        {
            owner, repo, per_page: 100, headers: {
                accept: "application/vnd.github.star+json"
            }
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
            .map(point => [parseInt(point[0]), point[1]])
            .sort((a, b) => a[0] - b[0]);
        for (let i = 1; i < data.length; ++i)
            data[i][1] += data[i - 1][1];
        return {
            name,
            visible: data.length > 200,
            keys: ["x", "y"],
            data
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
        let begin = info.starHistory!.findIndex(date => date >= startDate);
        if (begin < 0)
            begin = info.stars!;
        return {
            name,
            weight: info.stars! - begin,
            custom: {
                description: info.description,
                owner: info.owner,
                repo: info.repo,
                avatar: info.author!.avatar,
                author: info.author!.name
            }
        } as PointOptionsObject;
    });
}

function drawAuthorBar() {
    const authorMap: {
        [name: string]: {
            stars: number,
            plugins: Array<{ name: string, stars: number }>
        }
    } = {},
        authorSeries: SeriesPieOptions = {
            type: 'pie',
            name: 'Owner',
            size: '35%',
            data: [],
            dataLabels: {
                useHTML: true,
                distance: '-20%',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 5000
                },
                shadow: true,
            },
            tooltip: {
                pointFormat: `<span style='
                    display: inline-block;
                    background-image: url({point.custom.avatar});
                    background-size: cover;
                    width: 32px;
                    height: 32px;
                '></span> <b>{point.y}</b> ⭐`
            }
        },
        pluginSeries: SeriesPieOptions = {
            type: 'pie',
            name: 'Plugin',
            size: '70%',
            innerSize: '50%',
            tooltip: { valueSuffix: ' ⭐' },
            dataLabels: {
                format: '<b>{point.name}:</b> <span style="opacity: 0.5">{y}</span>',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 900
                },
                style: {
                    fontWeight: 'normal'
                }
            },
            allowPointSelect: true,
            data: []
        };
    for (const plugin of plugins as Required<PluginInfo>[]) {
        authorMap[plugin.author.name] ??= {
            stars: 0,
            plugins: []
        };
        authorMap[plugin.author.name].plugins.push({
            name: plugin.name,
            stars: plugin.star
        });
        authorMap[plugin.author.name].stars += plugin.star;
    }
    let colorIndex = 0;
    Object.entries(authorMap)
        .sort((a, b) => a[1].stars - b[1].stars)
        .forEach(([author, info]) => {
            ++colorIndex;
            colorIndex %= 10;  // 默认颜色总数
            authorSeries.data!.push({
                colorIndex,
                name: author,
                y: info.stars,
                custom: {
                    avatar: pluginMap[info.plugins[0].name].author!.avatar
                }
            });
            pluginSeries.data!.push(
                ...info.plugins
                    .sort((a, b) => a.stars - b.stars)
                    .map(plugin => ({
                        name: plugin.name,
                        y: plugin.stars,
                        className: 'stargazers-pie-plugin',
                        colorIndex
                    }))
            );
        });
    return [authorSeries, pluginSeries];
}

export default async function getChartOptions() {
    if (process.env.NODE_ENV != 'development')
        await Promise.all(plugins.map(fetchInfo));

    // 仅供测试时用
    // writeFile('../docs/dist/charts.json', JSON.stringify(pluginMap, null, 2));
    if (process.env.NODE_ENV == 'development')
        for (const plugin in pluginMap)
            pluginMap[plugin].starHistory = pluginMap[plugin].starHistory?.map(date => new Date(date));

    const pointColor = 'var(--highcharts-color-{point.colorIndex})';
    return {
        editMode: {
            enabled: true,
            contextMenu: {
                enabled: true,
                items: ['editMode']
            }
        },
        gui: {
            layouts: [{
                rows: [
                    {
                        cells: [{ id: 'title' }]
                    },
                    {
                        cells: [
                            {
                                id: 'dashboard-col-0',
                                responsive: {
                                    small: { width: '100%' },
                                    medium: { width: '40%' },
                                    large: { width: '50%' },
                                }
                            },
                            {
                                id: 'dashboard-col-1',
                                responsive: {
                                    small: { width: '100%' },
                                    medium: { width: '60%' },
                                    large: { width: '50%' },
                                }
                            }
                        ]
                    },
                    {
                        cells: [{ id: 'star-history' }]
                    }
                ]
            }]
        },
        components: [
            {
                cell: 'title',
                type: 'HTML',
                elements: [
                    {
                        tagName: 'h1',
                        textContent: '🤩 Awesome Zotero Plugins'
                    }
                ]
            },
            {
                cell: 'star-history',
                type: 'Highcharts',
                chartOptions: {
                    chart: {
                        type: 'spline',
                        zooming: {
                            mouseWheel: {
                                type: 'x',
                                enabled: true
                            }
                        }
                    },
                    series: await drawStarHistory(),
                    xAxis: { type: 'datetime' },
                    yAxis: { title: { text: 'Total Stars' } },
                    title: { text: 'Star History' }
                } as Options
            },
            {
                cell: 'dashboard-col-0',
                type: 'Highcharts',
                chartOptions: {
                    title: { text: '🚀 Trending' },
                    xAxis: { visible: false },
                    chart: {
                        animation: {
                            duration: 1200,
                            easing: 'wordCloudEasing'
                        }
                    },
                    tooltip: {
                        useHTML: true,
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
                        </div>`
                    },
                    series: [
                        {
                            type: 'wordcloud',
                            name: 'This Week',
                            showInLegend: true,
                            rotation: { orientations: 1 },
                            data: drawTrendingBar(7)
                        } as SeriesWordcloudOptions,
                        {
                            type: 'wordcloud',
                            name: 'Half Year',
                            visible: false,
                            showInLegend: true,
                            rotation: { orientations: 1 },
                            data: drawTrendingBar(182)
                        } as SeriesWordcloudOptions
                    ]
                } as Options
            },
            {
                cell: 'dashboard-col-1',
                type: 'Highcharts',
                chartOptions: {
                    title: { text: '🔭 Stargazers' },
                    tooltip: { useHTML: true },
                    series: drawAuthorBar()
                } as Options
            }
        ]
    } as Board.default.Options;
}
