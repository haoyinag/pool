/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-11-30 08:02:02
 * @LastEditTime: 2021-11-30 08:39:59
 * @FilePath: /app/routes/index.js
 * @Description: 
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',src:"/users" });
});

module.exports = router;
