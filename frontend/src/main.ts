import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

// Router
import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    { path: "/", component: () => import("./views/PluginsStore.vue") },
    { path: "/charts", component: () => import("./views/ChartsView.vue") },
  ],
  router = createRouter({
    history: createWebHashHistory(),
    routes,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    scrollBehavior(to, from, savedPosition) {
      return { top: 0 };
    },
  });
app.use(router);

// Element Plus
import "element-plus/theme-chalk/dark/css-vars.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");
