/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-11-06 18:20:07
 * @LastEditTime: 2021-11-06 19:29:30
 * @FilePath: \micro\index.js
 * @Description: 基座入口文件
 */
import 'regenerator-runtime/runtime' // 解决报错：ReferenceError: regeneratorRuntime is not defined
import { registryApp, start } from './src/index'

// 注册微应用subapp1
registryApp(
  'http://localhost:3333',
  location => location.pathname === '/subapp1'
)

// 注册微应用subapp2
registryApp(
  'http://localhost:8890',
  location => location.pathname === '/subapp2'
)

// 启动微前端
start()
