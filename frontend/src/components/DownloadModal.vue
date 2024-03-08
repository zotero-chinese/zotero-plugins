<template>
  <div class="modal" v-if="showModal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>下载 {{ selectedPlugin.name }}</h2>
      <div
        v-for="release in selectedPlugin.releases"
        :key="release.targetZoteroVersion"
      >
        <p>适配 Zotero 版本: {{ release.targetZoteroVersion }}</p>
        <p>插件版本：{{ release.tagName }}</p>
        <p>下载链接:</p>
        <div class="downloadLinkList">
          <li v-for="(value, key) in release.xpiDownloadUrl" :key="key">
            <a :href="value">{{ key }}</a>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { PluginInfo } from "zotero-plugins-data";
import { defineComponent } from "vue";
import type { PropType } from "vue";
export default defineComponent({
  name: "DownloadModal",
  props: {
    showModal: Boolean,
    selectedPlugin: { type: Object as PropType<PluginInfo>, required: true },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
});
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-background-mute);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  border: 1px solid #888;
  padding: 20px;
  position: fixed;
  width: 80%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.downloadLinkList li {
  text-decoration: none;
  list-style: none;
  display: inline;
  /* padding: 10px; */
  margin: 10px;
  border: 1px solid var(--color-border);
  /* background-color: #30DDEB; */
}

.downloadLinkList li a {
  color: #040404;
  text-decoration: none;
  margin: 10px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}

.downloadLinkList li:hover {
  border-color: var(--color-border-hover);
}
</style>
