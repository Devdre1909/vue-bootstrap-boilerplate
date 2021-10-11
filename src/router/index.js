import Vue from "vue";
import VueRouter from "vue-router";
import authLayoutRoute from "./layout/auth";
import dashboardLayoutRoute from "./layout/dashbaord";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: () => import("../pages/index.vue"),
    meta: {
      title: "Home",
    },
  },
  authLayoutRoute,
  dashboardLayoutRoute,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, _from) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title + " | Your Project Name";
  }
});

export default router;
