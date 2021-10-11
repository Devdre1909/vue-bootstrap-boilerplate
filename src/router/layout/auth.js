const authLayoutRoute = {
  path: "/",
  name: "AuthLayout",
  component: () => import("../../layout/auth.vue"),
  children: [
    {
      path: "/login",
      name: "Login",
      component: () => import("../../pages/login.vue"),
      meta: {
        title: "Login",
      },
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../../pages/register.vue"),
      meta: {
        title: "Register",
      },
    },
  ],
};

export default authLayoutRoute;
