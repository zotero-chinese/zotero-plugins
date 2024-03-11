import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: () => import("../views/PluginsMarket.vue") },
    { path: "/charts", component: () => import("../views/PluginsChart.vue") },
  ],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
