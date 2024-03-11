<template>
  <el-container>
    <NavBar />
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <FooterBar />
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";
import { useDark } from "@vueuse/core";
import FooterBar from "./components/FooterBar.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
    FooterBar,
  },
  data() {
    return {
      isDark: useDark(),
    };
  },
});
</script>

<style scoped>
.el-footer {
  height: auto;
}
</style>
