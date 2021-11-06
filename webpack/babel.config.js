/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-11-05 08:04:52
 * @LastEditTime: 2021-11-05 22:13:35
 * @FilePath: /hy-cli/babel.config.js
 * @Description: babel配置
 */
const { argv } = require("yargs");
const isDev = argv.mode === "development";

const plugins = [
  [
    "const-enum",
    {
      transform: "constObject",
    },
  ],
  "@babel/plugin-transform-runtime",
  // 支持import懒加载
  "@babel/plugin-syntax-dynamic-import",
  // 支持装饰器
  "@babel/plugin-transform-async-to-generator",
  // "transform-class-properties",
];

module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          corejs: 3.9,
          useBuiltIns: "usage",
        },
      ],
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
      "@babel/preset-typescript",
    ],
    plugins: isDev ? [...plugins, "react-refresh/babel"] : [...plugins],
  };
};
