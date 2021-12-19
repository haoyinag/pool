/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-12-09 08:25:42
 * @LastEditTime: 2021-12-17 08:55:29
 * @FilePath: /pool/sequlizeDemo/src/app.js
 * @Description:
 */
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const user = require("./user.router");

app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use((err, req, res, next) => {
//   if (err) {
//     console.log("请求出错：", err);
//   }
//   console.log(req);

//   next();
// });

app.use(user);

app.listen(3000, () => {
  console.log("运行成功");
});
