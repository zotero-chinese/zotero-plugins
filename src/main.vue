<!-- Main.vue -->

<template>
  <div id="app">
    <h1>Zotero 插件商店</h1>
    <PluginList :plugins="plugins" />
  </div>
</template>

<script>
import PluginList from "./components/plugin-list.vue";
import plugins from "../docs/dist/plugins.json"

export default {
  name: 'Main',
  components: {
    PluginList
  },
  data() {
    return {
      plugins: [] // Your plugin data will be fetched here
    };
  },
  created() {
    // Fetch plugin data from your JSON file or API
    // For demo, I'm just assigning some sample data
    this.plugins = plugins
  }
};
</script>
