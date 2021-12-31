/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-12-31 08:32:17
 * @LastEditTime: 2021-12-31 08:33:24
 * @FilePath: /vue-component-demo/components/lib/demo/index.js
 * @Description:
 */
import Demo from "./src/main.vue";

Demo.install = (vue) => {
  vue.component(Demo.name, Demo);
};

export default Demo;
