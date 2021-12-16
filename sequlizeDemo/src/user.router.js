/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-12-13 08:10:19
 * @LastEditTime: 2021-12-13 08:12:26
 * @FilePath: /pool/express-demo/src/user.router.js
 * @Description: user-item
 */
const express = require("express");

const router = express.Router();

router.get("/user/:id", (req, res) => {
  res.json({
    code: 200,
    msg: "请求成功",
    data: {
      id: 0,
      name: "Yunan",
      age: 18,
    },
  });
});

module.exports = router