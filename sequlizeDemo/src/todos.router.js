/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-12-13 08:10:19
 * @LastEditTime: 2021-12-28 08:21:19
 * @FilePath: /pool/sequlizeDemo/src/todos.router.js
 * @Description: user-router
 */
const express = require("express");

const router = express.Router();

/** 使用sequelize操作數據庫 */
const models = require("../models/index");

router.post("/create", async (req, res, next) => {
  try {
    let { name, content, deadline } = req.body;
    console.log(name, content, deadline);

    // 創建user--具備sequelize特性的對象
    let user = await models.Todo.create({
      ...req.body,
    });

    res.json({
      user,
      message: "創建成功",
    });
  } catch (error) {
    next(error);
  }
});

router.post("/update", async (req, res, next) => {
  try {
    // let { id } = req.params;
    let { id, name, content } = req.body;
    // console.log(req, name, content, id);
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
  } catch (error) {
    next(error);
  }
});

router.get("/byId/:id", async (req, res) => {
  const { id } = req.params;
  // 創建user--具備sequelize特性的對象
  let todo = await models.Todo.findOne({
    where: {
      id,
    },
  });
  if (todo) {
    res.json({
      code: 200,
      todo,
      message: "查找成功",
    });
  } else {
    res.json({
      code: 404,
      message: "查无此人",
    });
  }
});

router.get("/list/:page", async (req, res) => {
  const { page } = req.params;
  let limit = 10;
  let offset = (page - 1) * limit;
  let todo = await models.Todo.findAndCountAll({
    limit,
    offset,
  });
  if (todo) {
    res.json({
      code: 200,
      todo,
      message: "查找成功",
    });
  } else {
    res.json({
      code: 404,
      message: "查无此人",
    });
  }
});

router.get("/many", async (req, res) => {
  // 創建user--具備sequelize特性的對象
  let Users = await models.Todo.hasMany(models.User, {
    foreignKey: "id",
    targetKey: "id",
  });
  console.log(111,Users);
  Users.findAll().then(res=>{
    console.log(333,res);
  });
  // const Users = all.findAndCountAll()
  console.log(222,Users);
  if (Users) {
    res.json({
      code: 200, 
      message: "查找成功",
    });
  } else {
    res.json({
      a:123, 
      code: 404,
      message: "查无此人",
    });
  }
});

module.exports = router;
