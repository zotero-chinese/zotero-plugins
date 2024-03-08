<template>
  <div class="card">
    <h2>{{ plugin.name }}</h2>
    <p>{{ plugin.author.name }}</p>
    <p>Stars: {{ plugin.stars }}</p>
    <p>Description: {{ plugin.description }}</p>
    <button @click="showDownloads">Download</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { PluginInfo } from '@/types';

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
  width: 25%;
  margin: 1%;
  padding: 1%;
  border: 1px solid #ccc;
}
</style>
