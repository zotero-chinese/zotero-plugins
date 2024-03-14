<template>
  <div class="toolbar">
    <!-- Zotero 版本筛选 -->
    <el-select
      v-model="zotero"
      placeholder="适配 Zotero 版本"
      size="large"
      style="width: 200px"
    >
      <template #prefix>
        <el-icon>
          <Filter />
        </el-icon>
      </template>
      <el-option label="All" value=""></el-option>
      <el-option label="Zotero 6" value="zotero6"></el-option>
      <el-option label="Zotero 7" value="zotero7"></el-option>
    </el-select>

    <!-- 排序 -->
    <el-select
      v-model="sortBy"
      placeholder="排序"
      size="large"
      style="width: 200px"
    >
      <template #prefix>
        <el-icon>
          <Sort />
        </el-icon>
      </template>
      <el-option label="星标量" value="stars"></el-option>
      <el-option label="插件名" value="name"></el-option>
      <el-option label="作者" value="author"></el-option>
      <el-option label="最后更新时间" value="lastUpdated" disabled></el-option>
    </el-select>

    <!-- 搜索 -->
    <el-input
      v-model="searchText"
      size="large"
      placeholder="搜索插件..."
      clearable
      @clear="clearSearch"
      @input="performSearch"
    >
      <template #prefix>
        <el-icon>
          <Search />
        </el-icon>
      </template>
    </el-input>
  </div>

  <!-- 标签筛选 -->
  <el-checkbox-group v-model="selectedTags" size="large">
    <!-- <el-checkbox value="all" border>All</el-checkbox> -->
    <el-checkbox
      v-for="(tagDetail, tag) in allTags"
      :key="tagDetail"
      :value="tag"
      border
    >
      <el-tooltip
        class="box-item"
        effect="dark"
        :content="tagDetail.description"
        placement="bottom"
      >
        {{ tagDetail.label }}
      </el-tooltip>
    </el-checkbox>
  </el-checkbox-group>

  <!-- 插件卡片列表 -->
  <el-row :gutter="20">
    <el-col
      :xs="12"
      :sm="8"
      :md="8"
      :lg="6"
      :xl="4"
      v-for="plugin in sortedPlugins"
      :key="plugin.repo"
    >
      <div class="grid-content ep-bg-purple">
        <PluginCard :plugin="plugin" @showDownloads="showDownloads" />
      </div>
    </el-col>
  </el-row>
  <!-- 空状态 -->
  <el-empty v-if="filteredPlugins.length == 0" description="无匹配插件" />

  <!-- 下载页面 -->
  <DownloadModal
    :showModal="showModal"
    :selectedPlugin="selectedPlugin"
    @closeModal="closeModal"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import PluginCard from "./PluginCard.vue";
import DownloadModal from "./DownloadModal.vue";
import type { PluginInfo } from "zotero-plugins-data";
import { tags } from "@/types/tags";

export default defineComponent({
  name: "PluginsList",
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
      searchText: "",
      sortBy: "stars",
      zotero: "",
      selectedTags: [],
      allTags: tags,
    };
  },
  computed: {
    sortedPlugins() {
      if (this.sortBy === "name") {
        return this.filteredPlugins
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.sortBy === "stars") {
        return this.filteredPlugins.slice().sort((a, b) => b.stars - a.stars);
      } else if (this.sortBy === "author") {
        return this.filteredPlugins
          .slice()
          .sort((a, b) => a.author.name.localeCompare(b.author.name));
      } else {
        return this.filteredPlugins;
      }
    },
    filteredPlugins() {
      let filtered = this.plugins;

      if (this.zotero !== "") {
        filtered = filtered.filter((plugin) => {
          return plugin.releases.some(
            (release) =>
              release.targetZoteroVersion ===
              (this.zotero == "zotero6" ? "6" : "7"),
          );
        });
      }
      if (this.searchText) {
        const searchTextLower = this.searchText.toLowerCase();
        filtered = filtered.filter((plugin) => {
          return (
            plugin.name.toLowerCase().includes(searchTextLower) ||
            plugin.description.toLowerCase().includes(searchTextLower)
          );
        });
      }
      if (this.selectedTags.length !== 0) {
        filtered = filtered.filter((plugin) => {
          return this.selectedTags.every((tag) => plugin.tags.includes(tag));
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
      console.log("Performing search:", this.searchText);
    },
    clearSearch() {
      this.searchText = "";
    },
  },
});
</script>

<style scoped>
.toolbar {
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;
}
.toolbar > * {
  margin: 0 8px;
}
.toolbar > :first-child {
  margin-left: 0;
}
.toolbar > :last-child {
  margin-right: 0;
}
.el-checkbox-group {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  flex-wrap: wrap;
}

.el-checkbox {
  margin: 0px 10px 10px 0px;
}

.el-checkbox > :deep(.el-checkbox__input) {
  display: none !important;
}

.el-checkbox-button {
  border: var(--el-border);
  border-radius: var(--el-border-radius-base);
  /* box-shadow: none!important; */
}
.el-checkbox-button__inner {
  border: unset !important;
  border-left-color: unset !important;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  padding-bottom: 20px;
}
</style>
