/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-11-05 07:46:20
 * @LastEditTime: 2021-11-06 19:51:02
 * @FilePath: \webpack\config\webpack.base.js
 * @Description: webpack基础/通用配置
 */ 
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require("./paths"); 

module.exports = {
  entry: paths.src + "/index.tsx", // 入口文件
  output: {
    path: path.resolve(__dirname, "../dist"), // 输出地址
    filename: "[name].[contenthash].js", // 输出文件名
    publicPath: "", // 公共路径
  },
  module: {
    rules: [
      {
        // es6解析器
        use: "babel-loader",
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
      },
      {
        // css解析器
        use: ["style-loader", "css-loader", "less-loader"],
        test: /\.(css|less)$/,
      },
      {
        // 静态资源解析器
        use: "asset",
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"], // 别名匹配文件
    alias: {
      "@": paths.src, // 替代双src
      "@c": paths.src + "/components",
      "@m": paths.src + "/model",
      "@s": paths.src + "/services",
      "@t": paths.src + "/types",
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html", // 以已有html文件为模板
    }),
  ],
};
