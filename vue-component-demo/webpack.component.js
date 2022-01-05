/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2022-01-05 07:59:57
 * @LastEditTime: 2022-01-05 08:23:55
 * @FilePath: /vue-component-demo/webpack.component.js
 * @Description: webpack配置
 */
const path = require("path");
const glob = require("glob");
const { VueLoaderPlugin } = require("vue-loader");

let entry = {};

// 生成入口文件
async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`);
  console.log(files);

  for (const file of files) {
    const cmp = file.split(/[/.]/);
    if (cmp && cmp[2]) {
      console.log(cmp[2], file);
      list[cmp[2]] = `./${file}`;
    }
  }
  console.log(list);
}
makeList("components/lib", entry);

module.exports = {
  entry,
  output: {
    filename: "[name].umd.js", // 生成的入口文件名称
    path: path.resolve(__dirname, "dist"), // 绝对路径处理
    library: "vui", // 库的名称
    libraryTarget: "umd", // 库打包的方式
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
          },
        ],
      },
    ],
  },
};
