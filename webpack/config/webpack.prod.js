/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-11-05 07:46:40
 * @LastEditTime: 2021-11-05 21:45:22
 * @FilePath: /hy-cli/config/webpack.prod.js
 * @Description: webpack生产环境配置
 */
const WebpackMerge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("./webpack.base");

const prodConfig = {
  mode: "production",
  devtool: "hidden-source-map", // 生产环境不暴露源码
  module: {
    rules: [
      {
        // 生产环境要抽离css标签，所以这里针对less和css要做特殊处理,一个是postcss处理样式兼容性问题，一个是MiniCssExtractPlugin.loader
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
    ],
  },
  // 压缩配置
  optimization: {
    splitChunks: {
      chunks: "all",
      name: false,
    },
  },
  plugins: [new MiniCssExtractPlugin()], // 装载插件，才可以被使用
};

module.exports = WebpackMerge(common, prodConfig);
