<template>
  <div id="container">Loading ...</div>
</template>

<script lang="ts">
import chartsData from "zotero-plugins-data/dist/charts.json";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChartsView",
  components: {},
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

    const highchartsModules = [
      "highcharts",
      "modules/boost",
      "highcharts-more",
      "modules/wordcloud",
      "modules/exporting",
      "modules/stock",
      "dashboards/dashboards",
      "modules/accessibility",
      "modules/mouse-wheel-zoom",
      "modules/no-data-to-display",
      "modules/parallel-coordinates",
      "dashboards/modules/dashboards-plugin",
    ];

    const self = this;
    const loadHighchartsModule = function (index: number) {
      if (index >= highchartsModules.length) {
        self.loadChartsJson();
        return;
      }

      const module = highchartsModules[index];
      const script = document.createElement("script");
      script.src = `https://code.highcharts.com/${module}.src.js`;
      script.async = true;
      script.defer = true;
      script.onload = function () {
        console.log(`Loaded Highcharts module: ${module}`);
        loadHighchartsModule(index + 1);
      };
      script.onerror = function () {
        console.error(`Failed to load Highcharts module: ${module}`);
      };
      document.head.appendChild(script);
    };

    loadHighchartsModule(0);
  },

  methods: {
    loadChartsJson() {
      for (const com of chartsData.components) {
        if (com.chartOptions?.exporting) {
          // @ts-ignore
          com.chartOptions.exporting.menuItemDefinitions.invertSelection.onclick =
            function () {
              // @ts-ignore

              this.series.forEach((series) =>
                series.setVisible(undefined, false),
              );
              // @ts-ignore
              this.redraw();
            };
        }
      }
      // @ts-ignore
      chartsData.components[2].chartOptions.plotOptions.series.point.events.click =
        function () {
          // @ts-ignore
          location.href = "https://github.com/" + this.custom.repo;
        };
      // @ts-ignore
      console.debug(Dashboards.board("container", chartsData));

      // @ts-ignore
      Highcharts.Templating.helpers.log = function () {
        console.debug(arguments[0].ctx);
      };
    },
  },
});
</script>

<style>
@import url("https://code.highcharts.com/css/highcharts.css");
@import url("https://code.highcharts.com/dashboards/css/dashboards.css");
@import url("https://code.highcharts.com/css/datagrid.css");

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
