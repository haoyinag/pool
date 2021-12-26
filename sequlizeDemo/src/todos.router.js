/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-12-13 08:10:19
 * @LastEditTime: 2021-12-20 08:39:36
 * @FilePath: /pool/sequlizeDemo/src/todos.router.js
 * @Description: user-router
 */
const express = require("express");

const router = express.Router();

/** 使用sequelize操作數據庫 */
const models = require("../models/index");

router.post("/todo/create", async (req, res, next) => {
  try {
    let { name, content, deadline } = req.body;
    console.log(name, content, deadline);

    // 創建user--具備sequelize特性的對象
    let user = await models.Todo.create({
      name,
      content,
      deadline,
    });

    res.json({
      user,
      message: "創建成功",
    });
  } catch (error) {
    next(error);
  }
});

router.post("/todo/update", async (req, res, next) => {
  try {
    // let { id } = req.params;
    let { id, name, content } = req.body;
    // console.log(req, name, content, id);
    if (id) {
      // 創建user--具備sequelize特性的對象
      let todo = await models.Todo.findOne({
        where: { id },
      });
      if (todo) {
        console.log("找到", todo);
        todo = await todo.update({
          name,
          content,
        });
        res.json({
          todo,
          message: "修改成功",
        });
      } else {
        console.log("找不到", todo);
      }
    } else {
      res.json({
        name,
        message: "查找user失败",
      });
    }
  } catch (error) {
    next(error);
  }
});

router.get("/detail/:id", async (req, res) => {
  const { id } = req.params;
  // 創建user--具備sequelize特性的對象
  let user = await models.User.findOne({
    where: {
      id,
    },
  });
  if (user) {
    res.json({
      code: 200,
      user,
      message: "查找成功",
    });
  } else {
    res.json({
      code: 404,
      message: "查无此人",
    });
  }
});

router.get("/users", async (req, res) => {
  // 創建user--具備sequelize特性的對象
  let user = await models.User.findAll();
  res.json({
    user,
    message: "查找成功",
  });
});

module.exports = router;
