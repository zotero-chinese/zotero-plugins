<template>
  <div class="footer">
    <p>
      <el-text>
        Zotero 中文交流群
        913637964，617148016，893963769，666489129，145248977，317995116，962963257（加一个群即可）。独学而无友，则孤陋而寡闻。
      </el-text>
    </p>
    <p>
      <el-text>
        如果你对本页面有任何建议或反馈，请
        <el-link type="primary" href="https://www.kdocs.cn/wo/sl/v14cwJXX">
          填写表格
        </el-link>
        或前往
        <el-link
          type="primary"
          href="https://github.com/zotero-chinese/zotero-plugins"
        >
          GitHub 仓库提 issue
        </el-link>
        。
      </el-text>
    </p>
    <p>
      <el-text>
        Zotero 中文社区
        <el-icon color="#F56C6C"><HeartFilledIcon /></el-icon>
        荣誉出品
      </el-text>
    </p>

    <p>
      <el-link
        href="https://badges.toozhao.com/stats/01H9T10RA7708BEZZ78B6ZW9VV"
      >
        <img
          src="https://badges.toozhao.com/badges/01H9T10RA7708BEZZ78B6ZW9VV/green.svg"
          alt="Page Views Count"
        />
      </el-link>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeartFilledIcon from "./icons/HeartFilledIcon.vue";

export default defineComponent({
  name: "FooterBar",
  components: { HeartFilledIcon },
  data() {
    return {
      activeIndex: window.location.hash.slice(1) || "/",
    };
  },
});
</script>

<style scoped>
.footer {
  text-align: center;
  padding-bottom: 40px;
}
p {
  vertical-align: middle;
}
</style>
