/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2022-01-05 08:27:07
 * @LastEditTime: 2022-01-05 08:31:41
 * @FilePath: /vue-component-demo/components/lib/index.js
 * @Description: 生成组件库统一入口文件配置
 */
import Demo from "./demo";
import Card from "./card";

const components = { Demo, Card };

const install = (Vue /** 引入组件的时候会自动传入Vue实例 */) => {
  if (install.installed) {
    return; // 避免重复下载
  }
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key]);
  });
};

const API = { install };

export default API;
