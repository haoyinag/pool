/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-11-06 18:20:07
 * @LastEditTime: 2021-11-06 18:21:16
 * @FilePath: \micro\index.js
 * @Description: 基座入口文件
 */
import { registryApp, start } from 'chunchao/src/index'

// 注册微应用subapp1
registryApp(
  'http://localhost:8889',
  location => location.pathname === '/subapp1'
)

// 注册微应用subapp2
registryApp(
  'http://localhost:8890',
  location => location.pathname === '/subapp2'
)

// 启动微前端
start()
