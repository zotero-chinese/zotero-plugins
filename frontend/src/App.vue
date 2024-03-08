<template>
  <div id="app">
    <h1>Zotero 插件商店</h1>
    <p>更新时间：{{ updateTime }}</p>
    <PluginList :plugins="plugins" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PluginList from "./components/PluginList.vue";
import plugins from "zotero-plugins-data/dist/plugins.json";
import type { PluginInfo } from "zotero-plugins-data";
import UpdateTime from "zotero-plugins-data/dist/shields.json";

export default defineComponent({
  name: "App",
  components: {
    PluginList,
  },
  data() {
    return {
      plugins: plugins as unknown as PluginInfo[],
      updateTime: UpdateTime["lastUpdate"],
    };
  },
});
</script>
