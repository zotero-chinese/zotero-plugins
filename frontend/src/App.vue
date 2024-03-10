<template>
  <el-container>
    <el-affix>
      <NavBar />
    </el-affix>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {};
  },
});
</script>

<style scoped></style>
