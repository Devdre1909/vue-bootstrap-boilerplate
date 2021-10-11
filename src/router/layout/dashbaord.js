const dashboardLayoutRoute = {
  path: "/dashboard",
  redirect: "/dashboard/home",
  name: "Dashboard",
  component: () => import("../../layout/dashboard.vue"),
  children: [
    {
      path: "/dashboard/home",
      name: "DashboardHome",
      component: () => import("../../pages/dashboard/index.vue"),
      meta: {
        title: "Dashboard",
      },
    },
    {
      path: "/dashboard/profile",
      name: "DashboardProfile",
      component: () => import("../../pages/dashboard/profile.vue"),
      meta: {
        title: "Profile",
      },
    },
  ],
};

export default dashboardLayoutRoute;
