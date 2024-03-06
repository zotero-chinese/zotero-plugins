<!-- PluginList.vue -->

<template>
  <div>
    <button @click="sortBy('name')">Sort by Name</button>
    <button @click="sortBy('stars')">Sort by Stars</button>
    <button @click="sortBy('targetZoteroVersion')">Sort by Zotero Version</button>

    <div class="card-container">
      <PluginCard v-for="plugin in sortedPlugins" :key="plugin.repo" :plugin="plugin" @showDownloads="showDownloads" />
    </div>

    <DownloadModal :showModal="showModal" :selectedPlugin="selectedPlugin" @closeModal="closeModal" />
  </div>
</template>

<script>
import PluginCard from "./plugin-card.vue";
import DownloadModal from "./download-modal.vue";

export default {
  name: "PluginList",
  components: {
    PluginCard,
    DownloadModal
  },
  props: {
    plugins: Array
  },
  data() {
    return {
      showModal: false,
      selectedPlugin: null,
      sortByField: ""
    };
  },
  computed: {
    sortedPlugins() {
      if (this.sortByField === "name") {
        return this.plugins.slice().sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.sortByField === "stars") {
        return this.plugins.slice().sort((a, b) => b.stars - a.stars);
      } else if (this.sortByField === "targetZoteroVersion") {
        return this.plugins.slice().sort((a, b) => a.releases[0].targetZoteroVersion.localeCompare(b.releases[0].targetZoteroVersion));
      } else {
        return this.plugins;
      }
    }
  },
  methods: {
    showDownloads(plugin) {
      this.selectedPlugin = plugin;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedPlugin = null;
    },
    sortBy(field) {
      this.sortByField = field;
    }
  }
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
}
</style>