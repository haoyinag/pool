/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-12-14 07:46:08
 * @LastEditTime: 2021-12-14 07:49:42
 * @FilePath: /pool/express-demo/src/app.err.js
 * @Description: 处理异常
 */
const express = require("express");

const router = express.Router();

router.get("/demo", (req, res) => {
  throw Error("服务异常");
});

module.exports = router;
