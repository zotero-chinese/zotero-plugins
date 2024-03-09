<template>
  <el-container>
    <el-header>
      <h2>Zotero 插件商店</h2>
      <el-text>更新时间：{{ updateTime }}</el-text>
      <!-- <el-button type="primary" plain>请求收录插件</el-button> -->
      <!-- <details>
          <summary><el-text>本页面主地址为：plugins.zotero-chinese.com，点击查看其他备用地址</el-text></summary>
          <ul>
            <li><el-text>Zotero 中文社区主域名：https://plugins.zotero-chinese.com</el-text></li>
            <li><el-text>Netlify: https://zotero-plugins.netlify.app/</el-text></li>
            <li><el-text>GsitHub Pages: https://zotero-chinese.github.io/zotero-plugins/</el-text></li>
          </ul>
        </details> -->
    </el-header>
    <el-main>
      <PluginList :plugins="plugins" />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PluginList from "./PluginList.vue";
import plugins from "zotero-plugins-data/dist/plugins.json";
import type { PluginInfo } from "zotero-plugins-data";
import updateTime from "zotero-plugins-data/dist/shields.json";

export default defineComponent({
  name: "PluginsStore",
  components: {
    PluginList,
  },
  data() {
    return {
      plugins: plugins as unknown as PluginInfo[],
      updateTime: updateTime["lastUpdate"],
    };
  },
});
</script>

<style scoped>
.el-header {
  height: max-content;
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 50px;
}
</style>
