import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
// import axios from 'axios';
import router from './router';
import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.config.productionTip = false;
// console.log('------------------', process.env)
// axios.defaults.baseURL = process.env.API_ENDPOINT

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
