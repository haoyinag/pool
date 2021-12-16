/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-12-13 08:02:52
 * @LastEditTime: 2021-12-13 08:09:36
 * @FilePath: /pool/express-demo/src/user.router.js
 * @Description: user-router
 */
const express = require("express");

// express的子實例對象
const router = express.Router();

router.get("/users", (req, res) => {
  res.json({
    code: 200,
    msg: "请求成功",
    data: {
      list: [
        {
          id: 0,
          name: "Yunan",
          age: 18,
        },
      ],
    },
  });
});

module.exports = router;
