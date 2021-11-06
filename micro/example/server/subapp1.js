/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-11-06 18:22:30
 * @LastEditTime: 2021-11-06 19:37:13
 * @FilePath: \micro\example\server\subapp1.js
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
app.use(express.static(resolve(__dirname, '../subapp1')))

app.post(
  'https://open.feishu.cn/open-apis/bot/v2/hook/f72dc8cb-f0a9-43af-93ea-0b5e39cc46c5?text=request example'
)

app.listen(3333, err => {
  !err && console.log('3333端口成功')
})
