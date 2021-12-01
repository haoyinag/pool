/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-11-30 08:02:02
 * @LastEditTime: 2021-12-01 08:14:40
 * @FilePath: /app/routes/users.js
 * @Description: 
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
