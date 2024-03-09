<template>
  <el-container>
    <el-affix>
      <NavBar />
    </el-affix>
    <el-main>
      <!-- <PluginList :plugins="plugins" /> -->
      <component :is="currentView" />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";
import PluginsStore from "./components/PluginsStore.vue";
import ChartsView from "./components/ChartsView.vue";
const routes: { [key: string]: any } = {
  "/": PluginsStore,
  "/charts": ChartsView,
};

export default defineComponent({
  name: "App",
  components: {
    PluginsStore,
    NavBar,
  },
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || PluginsStore;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
});
</script>

<style scoped></style>
