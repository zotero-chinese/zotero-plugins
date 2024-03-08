<template>
  <div class="card">
    <div class="header">
      <h2>
        <a :href="`https://github.com/${plugin.repo}`">{{ plugin.name }}</a>
      </h2>

      <p>
        <a :href="plugin.author.url">{{ plugin.author.name }}</a> , Stars:
        {{ plugin.stars }}
      </p>
      <p class="desc">{{ plugin.description }}</p>
    </div>

    <div class="footer">
      <button @click="showDownloads">Download</button>
    </div>
  </div>
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
.card {
  width: 30%;
  margin: 1%;
  padding: 1%;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.desc {
  /* max-height: 100px; */
  height: 150px;
  overflow: hidden;
  /* white-space: nowrap; */
  text-overflow: clip;
}
.footer {
}
</style>
