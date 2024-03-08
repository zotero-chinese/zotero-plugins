<template>
  <div id="app">
    <h1>Zotero 插件商店</h1>
    <p>更新时间：{{ updateTime }}</p>
    <PluginList :plugins="plugins" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import PluginList from "./components/plugin-list.vue";
import plugins from "@dist/plugins.json"
import type { PluginInfo } from "@/types"
import UpdateTime from "@dist/shields.json"

export default defineComponent({
  name: 'Main',
  components: {
    PluginList
  },
  data() {
    return {
      plugins: [] as PluginInfo[],
      updateTime: UpdateTime["lastUpdate"],
    };
  },
  created() {
    this.plugins = plugins
  }
});
</script>
