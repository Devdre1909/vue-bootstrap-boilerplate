import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import axiosInstance from "./api/axios";

// Styles
import "./assets/css/main.css";
import "./assets/scss/main.scss";

Vue.config.productionTip = false;

Vue.prototype.$axios = axiosInstance;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
