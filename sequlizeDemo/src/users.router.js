/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-12-13 08:10:19
 * @LastEditTime: 2021-12-17 09:01:44
 * @FilePath: /pool/sequlizeDemo/src/user.router.js
 * @Description: user-router
 */
const express = require("express");

const router = express.Router();

/** 使用sequelize操作數據庫 */
const models = require("../models/index");

router.post("/create", async (req, res) => {
  let { name, age } = req.body;
  console.log(name, age);

  // 創建user--具備sequelize特性的對象
  let user = await models.User.create({
    name,
    age,
  });

  res.json({
    user,
    message: "創建user成功",
  });
});

router.post("/update", async (req, res) => {
  // let { id } = req.params;
  let { id, name, age } = req.body;
  console.log(req, name, age, id);
  if (id) {
    // 創建user--具備sequelize特性的對象
    let user = await models.User.update(
      {
        name,
        age,
      },
      {
        where: { id },
      }
    );

    res.json({
      user,
      message: "修改user成功",
    });
  } else {
    res.json({
      name,
      message: "查找user失败",
    });
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
