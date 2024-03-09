<template>
  <el-container>
    <el-affix>
      <NavBar />
    </el-affix>

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

      <!-- <el-collapse>
        <el-collapse-item title="本页面主地址为：plugins.zotero-chinese.com，点击查看其他备用地址" name="1">
          <ul>
            <li>Zotero 中文社区主域名：https://plugins.zotero-chinese.com</li>
            <li>Netlify: https://zotero-plugins.netlify.app/</li>
            <li>GitHub Pages: https://zotero-chinese.github.io/zotero-plugins/</li>
          </ul>
        </el-collapse-item>
        <el-collapse-item title="Feedback" name="2">
          <div>
            Operation feedback: enable the users to clearly perceive their
            operations by style updates and interactive effects;
          </div>
          <div>
            Visual feedback: reflect current state by updating or rearranging
            elements of the page.
          </div>
        </el-collapse-item>
        <el-collapse-item title="Efficiency" name="3">
          <div>
            Simplify the process: keep operating process simple and intuitive;
          </div>
          <div>
            Definite and clear: enunciate your intentions clearly so that the
            users can quickly understand and make decisions;
          </div>
          <div>
            Easy to identify: the interface should be straightforward, which helps
            the users to identify and frees them from memorizing and recalling.
          </div>
        </el-collapse-item>
        <el-collapse-item title="Controllability" name="4">
          <div>
            Decision making: giving advices about operations is acceptable, but do
            not make decisions for the users;
          </div>
          <div>
            Controlled consequences: users should be granted the freedom to
            operate, including canceling, aborting or terminating current
            operation.
          </div>
        </el-collapse-item>
      </el-collapse> -->
    </el-header>
    <el-main>
      <PluginList :plugins="plugins" />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>


</template>

<script lang="ts">
import { defineComponent } from "vue";
import PluginList from "./components/PluginList.vue";
import plugins from "zotero-plugins-data/dist/plugins.json";
import type { PluginInfo } from "zotero-plugins-data";
import updateTime from "zotero-plugins-data/dist/shields.json";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  name: "App",
  components: {
    PluginList,
    NavBar,
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