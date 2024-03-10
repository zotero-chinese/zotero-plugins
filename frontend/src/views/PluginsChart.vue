<template>
  <div
    id="container"
    :class="{ 'highcharts-dark': darkMode, 'highcharts-light': !darkMode }"
  >
    Loading ...
  </div>
</template>

<script lang="ts">
import chartsData from "zotero-plugins-data/dist/charts.json";
import { defineComponent } from "vue";

import * as Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
HighchartsMore(Highcharts);
import WordCloudGraph from "highcharts/modules/wordcloud";
WordCloudGraph(Highcharts);
import HighchartsBoost from "highcharts/modules/boost";
HighchartsBoost(Highcharts);
import HighStock from "highcharts/modules/stock";
HighStock(Highcharts);
import MouseWheelZoom from "highcharts/modules/mouse-wheel-zoom";
MouseWheelZoom(Highcharts);
import ParallelCoordinates from "highcharts/modules/parallel-coordinates";
ParallelCoordinates(Highcharts);
import VariablePieGraph from "highcharts/modules/variable-pie";
VariablePieGraph(Highcharts);
import HighchartsExporting from "highcharts/modules/exporting";
HighchartsExporting(Highcharts);
import HighchartsExportData from "highcharts/modules/export-data";
HighchartsExportData(Highcharts);
import NoDataToDisplay from "highcharts/modules/no-data-to-display";
NoDataToDisplay(Highcharts);
import HighchartsPlugin from "@highcharts/dashboards/es-modules/Dashboards/Plugins/HighchartsPlugin";
HighchartsPlugin.custom.connectHighcharts(Highcharts);
import Dashboards from "@highcharts/dashboards/es-modules/masters/dashboards.src";
import type { Board } from "@highcharts/dashboards";
Dashboards.PluginHandler.addPlugin(HighchartsPlugin);

export default defineComponent({
  name: "PluginsChart",
  data() {
    return {};
  },
  mounted() {
    // @ts-ignore
    Math.wordCloudEasing = function (pos) {
      if (pos < 1 / 2.75) return 7.5625 * pos * pos;
      if (pos < 2 / 2.75) return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
      if (pos < 2.5 / 2.75) return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
      return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
    };
    this.loadChartsJson();
  },
  computed: {
    darkMode() {
      return matchMedia("(prefers-color-scheme: dark)").matches;
    },
  },

  methods: {
    loadChartsJson() {
      for (const com of chartsData.components) {
        if (com.chartOptions?.exporting) {
          (
            com.chartOptions.exporting.menuItemDefinitions
              .invertSelection as any
          ).onclick = function (this: Highcharts.Chart) {
            this.series.forEach((series) =>
              series.setVisible(undefined, false),
            );
            this.redraw();
          };
        }
      }
      (
        chartsData.components[2].chartOptions!.plotOptions!.series.point!
          .events as any
      ).click = function (this: any) {
        location.href = "https://github.com/" + this.custom.repo;
      };
      console.debug(Dashboards.board("container", chartsData as Board.Options));

      // Highcharts.Templating.helpers.log = function () {
      //   console.debug(arguments[0].ctx);
      // };
    },
  },
});
</script>

<style>
@import url("highcharts/css/highcharts.css");
@import url("@highcharts/dashboards/css/dashboards.css");
@import url("@highcharts/dashboards/css/datagrid.css");

:root {
  --highcharts-neutral-color-5: #fff;
  --highcharts-color-101: #a371f7;
  --highcharts-color-102: #3fb950;
}

.highcharts-color-101 {
  fill: var(--highcharts-color-101);
  stroke: var(--highcharts-color-101);
}

.highcharts-color-102 {
  fill: var(--highcharts-color-102);
  stroke: var(--highcharts-color-102);
}

#title h1 {
  text-align: center;
}

.stargazers-pie-plugin {
  stroke-width: 2px;
}

.trending-tooltip {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--highcharts-neutral-color-80);
}

.trending-tooltip > :first-child {
  background-size: cover;
  border-radius: 8px;
  margin-right: 8px;
  height: 56px;
  width: 56px;
}

.trending-tooltip > :last-child {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.trending-tooltip > :last-child > :first-child {
  border-bottom: 1px solid;
  margin-bottom: 3px;
}

.trending-tooltip > :last-child > :last-child {
  display: flex;
}
</style>
