<template>
  <div>
    <div class="sort-buttom">
      <button @click="sortBy('name')">Sort by Name</button>
      <button @click="sortBy('stars')">Sort by Stars</button>
      <button @click="sortBy('targetZoteroVersion')">
        Sort by Zotero Version
      </button>
    </div>

    <div class="card-container">
      <PluginCard
        v-for="plugin in sortedPlugins"
        :key="plugin.repo"
        :plugin="plugin"
        @showDownloads="showDownloads"
      />
    </div>

    <DownloadModal
      :showModal="showModal"
      :selectedPlugin="selectedPlugin"
      @closeModal="closeModal"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import PluginCard from "./PluginCard.vue";
import DownloadModal from "./DownloadModal.vue";
import type { PluginInfo } from "zotero-plugins-data";

export default defineComponent({
  name: "PluginList",
  components: {
    PluginCard,
    DownloadModal,
  },
  props: {
    plugins: { type: Array as PropType<PluginInfo[]>, required: true },
  },
  data() {
    return {
      showModal: false,
      selectedPlugin: this.plugins[0],
      sortByField: "",
    };
  },
  computed: {
    sortedPlugins() {
      if (this.sortByField === "name") {
        return this.plugins
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.sortByField === "stars") {
        return this.plugins.slice().sort((a, b) => b.stars - a.stars);
      } else if (this.sortByField === "targetZoteroVersion") {
        return this.plugins
          .slice()
          .sort((a, b) =>
            a.releases[0].targetZoteroVersion.localeCompare(
              b.releases[0].targetZoteroVersion,
            ),
          );
      } else {
        return this.plugins;
      }
    },
  },
  methods: {
    showDownloads(plugin: PluginInfo) {
      this.selectedPlugin = plugin;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      // this.selectedPlugin = null;
    },
    sortBy(field: string) {
      this.sortByField = field;
    },
  },
});
</script>

<style scoped>
.sort-buttom {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.sort-buttom button {
  padding: 2px;
  margin: 0px 5px;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
