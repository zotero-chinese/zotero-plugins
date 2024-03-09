<template>
  <div class="toolbar">
    <el-select v-model="tag" placeholder="适配 Zotero 版本" size="large" style="width: 200px;">
      <template #prefix>
        <el-icon>
          <Filter />
        </el-icon>
      </template>
      <el-option label="All" value=""></el-option>
      <el-option label="Zotero 6" value="zotero6"></el-option>
      <el-option label="Zotero 7" value="zotero7"></el-option>
    </el-select>

    <el-select v-model="sortBy" placeholder="排序" size="large" style="width: 200px;">
      <template #prefix>
        <el-icon>
          <Sort />
        </el-icon>
      </template>
      <el-option label="星标量" value="stars"></el-option>
      <el-option label="插件名" value="name"></el-option>
      <el-option label="最后更新时间" value="lastUpdated" disabled></el-option>
    </el-select>

    <el-input v-model="searchText" size="large" placeholder="搜索插件..." clearable @clear="clearSearch"
      @input="performSearch">
      <template #prefix>
        <el-icon>
          <Search />
        </el-icon>
      </template>
    </el-input>

  </div>


  <el-row :gutter="20">
    <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="4" v-for="plugin in sortedPlugins" :key="plugin.repo">
      <div class="grid-content ep-bg-purple">
        <PluginCard :plugin="plugin" @showDownloads="showDownloads" />
      </div>
    </el-col>
  </el-row>

  <DownloadModal :showModal="showModal" :selectedPlugin="selectedPlugin" @closeModal="closeModal" />

  <el-empty v-if="filteredPlugins.length == 0" description="无匹配插件" />

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
      // filteredPlugins: this.plugins,
      showModal: false,
      selectedPlugin: this.plugins[0],
      searchText: '',
      sortBy: "stars",
      tag: "",
    };
  },
  computed: {
    sortedPlugins() {
      console.log("tag", this.tag, this.filteredPlugins);
      if (this.sortBy === "name") {
        return this.filteredPlugins
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.sortBy === "stars") {
        return this.filteredPlugins.slice().sort((a, b) => b.stars - a.stars);
      } else {
        return this.filteredPlugins;
      }
    },
    filteredPlugins() {
      let filtered = this.plugins;
      if (this.tag == "zotero6") {
        filtered = filtered.filter((plugin) => {
          return plugin.releases.some(
            (release) => release.targetZoteroVersion === "6",
          );
        });
        // return this.plugins.filter((plugin) => plugin.name.endWith("Zotero"));
      } else if (this.tag == "zotero7") {
        filtered = filtered.filter((plugin) => {
          return plugin.releases.some(
            (release) => release.targetZoteroVersion === "7",
          );
        });
      }
      if (this.searchText) {
        const searchTextLower = this.searchText.toLowerCase();
        filtered = filtered.filter((plugin) => {
          return plugin.name.toLowerCase().includes(searchTextLower) || plugin.description.toLowerCase().includes(searchTextLower);
        });
      }
      return filtered;

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
    performSearch() {
      // Handle search logic here
      console.log('Performing search:', this.searchText);
    },
    clearSearch() {
      this.searchText = '';
    }
  },
});
</script>

<style scoped>
.toolbar {
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  padding-bottom: 20px;
}
</style>
