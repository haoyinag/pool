/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-11-05 07:46:33
 * @LastEditTime: 2021-11-05 22:03:57
 * @FilePath: /hy-cli/config/webpack.dev.js
 * @Description: webpack开发环境配置
 */
// const { merge } = require("webpack-merge");
const merge = require("webpack-merge");
const { HotModuleReplacementPlugin } = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const common = require("./webpack.base"); 

const devConfig = {
  mode: "development",
  devServer: {
    port: 9999,
    contentBase: "../dist",
    open: true,
    hot: true,
  },
  target: "web", // web端开发，热更
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
  devtool: "eval-cheap-module-source-map", // devtool在开发模式最佳实践是:eval-cheap-module-source-map
};

module.exports = merge(common, devConfig);
