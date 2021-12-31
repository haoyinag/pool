/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-12-31 08:18:50
 * @LastEditTime: 2021-12-31 08:34:43
 * @FilePath: /vue-component-demo/src/main.js
 * @Description: 
 */
import Vue from "vue";
import App from "./App.vue";

import Demo from "../components/lib/demo/index";
Vue.use(Demo);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
