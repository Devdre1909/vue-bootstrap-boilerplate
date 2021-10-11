import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// Styles
import "./assets/css/main.css";
import "./assets/scss/main.scss";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
