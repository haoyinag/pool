/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-12-09 08:25:42
 * @LastEditTime: 2021-12-15 08:39:29
 * @FilePath: /pool/sequlizeDemo/src/app.js
 * @Description:
 */
const express = require("express");

const app = express();

const log_middleware = require("./app.middleware");
const err = require("./app.err");
const login = require("./user.login");
const user = require("./user.router");
const users = require("./users.router");
const static_handler_middleware = require("./static.middleware.js");
const err_handler_middleware = require("./err.middleware.js");

/** 使用sequelize操作數據庫 */
const models = require("../models/index");

app.post("/create", async (req, res) => {
  let { name } = req.query;

  // 創建user--具備sequelize特性的對象
  let user = await models.User.create({
    name,
  });

  res.json({
    user,
    message: "創建user成功",
  });
});

app.get("/users", async (req, res) => { 

  // 創建user--具備sequelize特性的對象
  let user = await models.User.findAll()

  res.json({
    user,
    message: "查找成功",
  });
});

app.use(log_middleware);
app.use(err_handler_middleware);
app.use(err);
app.use(static_handler_middleware);
app.use(login);
// app.use("/users", user);
// app.use("/users", users);

app.listen(3000, () => {
  console.log("运行成功");
});
