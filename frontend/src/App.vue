<template>
  <el-container>
    <NavBar />
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";
import { useDark } from "@vueuse/core";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {
      isDark: useDark(),
    };
  },
});
</script>
