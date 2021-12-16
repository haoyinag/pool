/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-12-14 08:02:41
 * @LastEditTime: 2021-12-14 08:03:46
 * @FilePath: /pool/express-demo/src/static.middleware.js
 * @Description: static中间件
 */
const express = require('express');

const static = express.static('../')

module.exports = static