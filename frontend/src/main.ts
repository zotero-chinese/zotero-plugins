// import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("./views/PluginsStore.vue") },
  { path: "/charts", component: () => import("./views/ChartsView.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
// app.use(ElementPlus);

app.use(router);
app.mount("#app");
