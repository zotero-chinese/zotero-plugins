<!-- PluginCard.vue -->
<template>
    <div class="card">
      <h2>{{ plugin.name }}</h2>
      <p>Author: {{ plugin.author.name }}</p>
      <p>Stars: {{ plugin.stars }}</p>
      <p>Description: {{ plugin.description }}</p>
      <button @click="showDownloads">Download</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "PluginCard",
    props: {
      plugin: Object
    },
    methods: {
      showDownloads() {
        this.$emit("showDownloads", this.plugin);
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
    width: 25%;
    margin: 1%;
    padding: 1%;
    border: 1px solid #ccc;
  }
  </style>
  