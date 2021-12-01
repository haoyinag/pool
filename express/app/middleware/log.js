/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-11-30 08:23:12
 * @LastEditTime: 2021-11-30 08:31:16
 * @FilePath: /app/middleware/log.js
 * @Description: 中间件 log输出
 */

function loginMiddleware(req, res, next) {
  const time = new Date();
  console.log("Time is ", time);
  next()
}

module.exports = loginMiddleware;
