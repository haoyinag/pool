/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-11-08 07:46:03
 * @LastEditTime: 2021-11-08 08:00:28
 * @FilePath: /docker/index.js
 * @Description: 
 */
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
   ctx.body = 'Hello docker , My name is yunan';
});

app.listen(3000);