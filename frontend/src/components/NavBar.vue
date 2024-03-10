<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    :ellipsis="false"
    router
  >
    <el-menu-item index="0">
      <img src="/favicon.ico" alt="Zotero Chinese logo" />
      <h1>Zotero 中文社区</h1>
    </el-menu-item>
    <div class="flex-grow" />

    <el-menu-item index="/">插件商店</el-menu-item>

    <el-menu-item index="/charts">插件排行榜</el-menu-item>

    <el-link href="https://zotero-chinese.com/user-guide/" target="_blank">
      <el-menu-item class="external-link" index="./">百科全书</el-menu-item>
    </el-link>

    <el-sub-menu index="./">
      <template #title>更多资料</template>

      <el-link
        href="https://zotero-chinese.com/plugin-dev-guide/"
        target="_blank"
      >
        <el-menu-item index="./">插件开发手册</el-menu-item>
      </el-link>

      <el-link href="https://zotero-chinese.com/about.html" target="_blank">
        <el-menu-item index="./">关于</el-menu-item>
      </el-link>
    </el-sub-menu>

    <el-link
      href="https://github.com/zotero-chinese/zotero-plugins"
      target="_blank"
    >
      <el-tooltip
        class="box-item"
        effect="dark"
        content="GitHub 仓库"
        placement="bottom"
      >
        <el-menu-item index="./">
          <el-icon :size="20">
            <GitHubIcon />
          </el-icon>
        </el-menu-item>
      </el-tooltip>
    </el-link>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GitHubIcon from "./icons/GitHubIcon.vue";

export default defineComponent({
  name: "NavBar",
  components: { GitHubIcon },
  data() {
    return {
      activeIndex: window.location.hash.slice(1),
    };
  },
});
</script>

<style>
.flex-grow {
  flex-grow: 1;
}

.external-link {
  cursor: pointer;
}
</style>
