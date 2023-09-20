import { octokit } from './index';
import { PluginInfo, plugins } from './plugins';
import type { Board } from '@highcharts/dashboards';
import type { Options } from 'highcharts';

interface PluginMapInfo {
    owner?: string;
    repo?: string;
    stars?: number;
    description?: string;
    author?: {
        name: string;
        url: string;
        avatar: string;
    };
};
const pluginMap: { [name: string]: PluginMapInfo } = {};

async function fetchInfo(plugin: PluginInfo) {
    pluginMap[plugin.name] = {
        stars: plugin.star,
        description: plugin.description,
        author: plugin.author,
        owner: plugin.repo.split('/')[0],
        repo: plugin.repo.split('/')[1]
    };

    // TODO
}

async function getStarHistory(plugin: Required<PluginMapInfo>) {
    const iterator = octokit.paginate.iterator(
        octokit.rest.activity.listStargazersForRepo,
        {
            owner: plugin.owner,
            repo: plugin.repo,
            per_page: 100,
            headers: { accept: "application/vnd.github.star+json" }
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
        const dat = await getStarHistory(info as Required<PluginMapInfo>),
            datMap: { [t: string]: number } = {};
        for (const date of dat) {
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
            keys: ["x", "y"],
            data
        };
    });
    return await Promise.all(series);
}

function drawStargazersPie() {
    return (plugins as Required<PluginInfo>[]).map((plugin) => ({
        name: plugin.name,
        y: plugin.star
    })).sort((a, b) => a.y - b.y);
}

function drawAuthorBar() {
    const authorMap: { [name: string]: number } = {},
        data = [];
    for (const plugin of plugins as Required<PluginInfo>[]) {
        authorMap[plugin.author.name] ??= 0;
        ++authorMap[plugin.author.name];
    }
    for (const author in authorMap)
        if (authorMap[author] > 1) data.push([author, authorMap[author]]);
    return data;
}

export default async function getChartOptions() {
    await Promise.all(plugins.map(fetchInfo));
    console.debug(pluginMap);
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
                            { id: 'dashboard-col-0' },
                            { id: 'dashboard-col-1' }
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
                }
            },
            {
                cell: 'dashboard-col-0',
                type: 'Highcharts',
                chartOptions: {
                    chart: { type: 'pie' },
                    title: { text: '🔭 Stargazers' },
                    series: [
                        {
                            name: 'Total stars',
                            colorByPoint: true,
                            data: drawStargazersPie()
                        }
                    ]
                } as Options
            },
            {
                cell: 'dashboard-col-1',
                type: 'Highcharts',
                chartOptions: {
                    xAxis: { type: 'category' },
                    yAxis: { title: { text: 'Number of Plugins' } },
                    title: { text: 'Top Owners' },
                    chart: { type: 'bar' },
                    series: [
                        {
                            name: 'Number of Plugins',
                            showInLegend: false,
                            dataSorting: {
                                enabled: true,
                                matchByName: true
                            },
                            colorByPoint: true,
                            data: drawAuthorBar()
                        }
                    ]
                } as Options
            }
        ]
    } as Board.default.Options;
}
