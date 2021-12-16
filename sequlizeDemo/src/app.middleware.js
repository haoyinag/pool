/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-12-13 08:28:11
 * @LastEditTime: 2021-12-13 08:31:15
 * @FilePath: /pool/express-demo/src/app.middleware.js
 * @Description: 中間件
 */
const express = require("express");

const app = express();

function log_middleware(req, res, next) {
  console.log(req.method);
  next();
}

module.exports = log_middleware;
