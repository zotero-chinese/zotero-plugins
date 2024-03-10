import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

// Router
import router from "./router";
app.use(router);

// Element Plus
import "element-plus/theme-chalk/dark/css-vars.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");
