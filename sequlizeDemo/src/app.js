/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-12-09 08:25:42
 * @LastEditTime: 2021-12-27 08:09:52
 * @FilePath: /pool/sequlizeDemo/src/app.js
 * @Description:
 */
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const users = require("./users.router");
const todos = require("./todos.router");

app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", users);
app.use("/todo", todos);

app.use((err, req, res, next) => {
  if (err) {
    console.log("请求出错：", err.message);
    res.status(500).json({
      message: err.message,
    });
  }
});

app.listen(3000, () => {
  console.log("运行成功");
});
