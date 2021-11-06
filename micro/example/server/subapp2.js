/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-11-06 18:22:30
 * @LastEditTime: 2021-11-06 18:23:11
 * @FilePath: \micro\example\server\subapp2.js
 * @Description: 微应用app
 */
const express = require('express')
const app = express()
const { resolve } = require('path')

//设置跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})
app.use(express.static(resolve(__dirname, '../subapp2')))

app.listen(8889, err => {
  !err && console.log('8889端口成功')
})
