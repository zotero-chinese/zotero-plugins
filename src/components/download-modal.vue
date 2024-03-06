<!-- DownloadModal.vue -->
<template>
    <div class="modal" v-if="showModal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Downloads</h2>
        <ul>
          <li v-for="release in selectedPlugin.releases" :key="release.targetZoteroVersion">
            <p>Zotero Version: {{ release.targetZoteroVersion }}</p>
            <p>Download: {{ release.tagName }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "DownloadModal",
    props: {
      showModal: Boolean,
      selectedPlugin: Object
    },
    methods: {
      closeModal() {
        this.$emit("closeModal");
      }
    }
  };
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
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
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
  </style>
  