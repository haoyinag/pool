/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-11-05 07:45:59
 * @LastEditTime: 2021-11-05 22:03:22
 * @FilePath: /hy-cli/config/paths.js
 * @Description: 路径相关配置
 */
const path = require("path");

const paths ={
  // 源码目录
  src: path.resolve(__dirname, "../src"),
  // 构建后的资源产物
  build: path.resolve(__dirname, "../dist"),
  // 静态资源
  public: path.resolve(__dirname, "../public"),
};

module.exports = paths 