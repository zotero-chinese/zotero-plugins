import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: () => import("../views/PluginsMarket.vue") },
    { path: "/charts", component: () => import("../views/PluginsChart.vue") },
  ],
});

export default router;
