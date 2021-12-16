/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-12-13 08:02:52
 * @LastEditTime: 2021-12-13 08:47:14
 * @FilePath: /pool/express-demo/src/user.login.js
 * @Description: login-router & middleware
 */
const express = require("express");

// express的子實例對象
const router = express.Router();

function valid_middleware(req, res, next) {
  const { username, password } = req.query;
  console.log(username, password);
  if (!username || !password) {
    res.json({
      code: 0,
      message: "登錄失敗",
    });
  } else {
    const formData = {
      username,
      password,
    };
    req.formData = formData;
    next();
  }
}

router.get(
  "/login",
  [
    valid_middleware,
    /** 中間件 */
  ],
  (req, res) => {
    const { formData } = req;
    res.json({
      code: 200,
      msg: "请求成功",
      data: { formData },
    });
  }
);

module.exports = router;
