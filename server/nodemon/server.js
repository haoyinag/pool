/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-12-07 08:14:36
 * @LastEditTime: 2021-12-07 08:20:28
 * @FilePath: /pool/server/nodemon/server.js
 * @Description: nodemon 使用
 */
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("hello world hhh ");
});

server.listen(3000, "localhost", () => {
  console.log("服务监听成功",'nodemon.json 的watch字段设置监听文件');
});
