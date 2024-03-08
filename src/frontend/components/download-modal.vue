<template>
  <div class="modal" v-if="showModal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>Downloads</h2>
      <ul>
        <li v-for="release in selectedPlugin.releases" :key="release.targetZoteroVersion">
          <p>适配 Zotero 版本: {{ release.targetZoteroVersion }}</p>
          <p>插件版本：{{ release.tagName }}</p>
          <p>下载链接:</p>
          <ul class="downloadLinkList">
            <li v-for="(value, key) in release.xpiDownloadUrl">
              <a :href="value">{{ key }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import type { PluginInfo } from '@/types';
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
export default defineComponent({
  name: "DownloadModal",
  props: {
    showModal: Boolean,
    selectedPlugin: { type: Object as PropType<PluginInfo>, required: true }
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    }
  }
});
</script>

<style scoped>
.modal {
  /* display: none; */
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* overflow: auto; */
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
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
  padding: 10px;
  margin: 10px;
  border: 1px solid #000000;
  /* background-color: #30DDEB; */
}

.downloadLinkList li a {
  color: #040404;
  text-decoration: none;
  margin: 0px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}

.downloadLinkList li:hover {
  background-color: blue;
}
</style>