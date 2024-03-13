<template>
  <div class="modal" v-if="showModal">
    <div
      class="modal-content"
      :style="{
        borderRadius: `var(--el-border-radius-base)`,
        boxShadow: `var(--el-box-shadow)`,
      }"
    >
      <span class="close" @click="closeModal">&times;</span>
      <el-container>
        <el-header>
          <h2>下载 {{ selectedPlugin.name }}</h2>
        </el-header>

        <el-main>
          <el-space wrap>
            <el-card
              v-for="release in selectedPlugin.releases"
              :key="release.targetZoteroVersion"
              shadow="hover"
            >
              <template #header>
                <div class="card-header">
                  <span>适配 Zotero {{ release.targetZoteroVersion }}</span>
                </div>
              </template>

              <p>插件版本：{{ release.xpiVersion }}</p>
              <p>
                发布时间：{{ new Date(release.releaseDate).toLocaleString() }}
              </p>
              <p>下载量：{{ release.downloadCount }}</p>
              <p>下载链接:</p>
              <el-button
                v-for="(value, key) in release.xpiDownloadUrl"
                :key="key"
                tag="a"
                :href="value"
                text
                bg
              >
                {{ key }}
              </el-button>

              <!-- <template #footer>Footer content</template> -->
            </el-card>
          </el-space>
        </el-main>

        <el-footer>
          <el-text>
            <el-icon>
              <InfoFilled />
            </el-icon>
            本页面为每一个插件都提供了多个下载地址，请逐个尝试选择可用的地址。火狐浏览器用户请通过在链接上右击，选择“另存为”来下载
            XPI 包。插件之间可能存在冲突，建议按需安装。
          </el-text>
          <br />
          <el-text type="warning">
            <el-icon>
              <WarnTriangleFilled />
            </el-icon>
            Zotero 6 与 Zotero 7 的插件可能互不兼容，请按自己的 Zotero
            版本下载对应的插件版本。查看 Zotero 版本和安装插件步骤请参考：
            <el-link
              href="https://zotero-chinese.com/user-guide/plugins/about-plugin.html"
              type="danger"
            >
              关于 Zotero 插件 - 安装插件
            </el-link>
            。
          </el-text>
        </el-footer>
      </el-container>
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
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--el-overlay-color-light);
}

.modal-content {
  background-color: var(--el-bg-color);
  padding: 10px 20px 40px 20px;
  position: fixed;
  width: 80%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.close {
  color: var(--el-border-color);
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: var(--el-border-color-hover);
  text-decoration: none;
  cursor: pointer;
}
</style>
