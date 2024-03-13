<template>
  <el-card shadow="hover">
    <template #header>
      <div class="card-header">
        <b>
          <el-link :href="`https://github.com/${plugin.repo}`" target="_blank">
            <el-text tag="b" size="large">{{ plugin.name }}</el-text>
          </el-link>
        </b>
      </div>
    </template>

    <el-space>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="插件作者"
        placement="bottom"
      >
        <el-text>
          <el-icon>
            <Avatar />
          </el-icon>
          <el-link :href="plugin.author.url">{{ plugin.author.name }}</el-link>
        </el-text>
      </el-tooltip>

      <el-tooltip
        class="box-item"
        effect="dark"
        content="插件星标量"
        placement="bottom"
      >
        <el-text>
          <el-icon>
            <StarFilled />
          </el-icon>
          {{ plugin.stars }}
        </el-text>
      </el-tooltip>
    </el-space>

    <p class="desc">
      <el-text truncated line-clamp="5">{{ plugin.description }}</el-text>
    </p>

    <template #footer>
      <el-button type="primary" @click="showDownloads">下载</el-button>
    </template>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { PluginInfo } from "zotero-plugins-data";

export default defineComponent({
  name: "PluginCard",
  props: {
    plugin: { type: Object as PropType<PluginInfo>, required: true },
  },
  methods: {
    showDownloads() {
      this.$emit("showDownloads", this.plugin);
    },
  },
});
</script>

<style scoped>
.desc {
  height: 100px;
}

.desc span {
  /* max-height: 100px; */
  white-space: normal;
}
</style>
