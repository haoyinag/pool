/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-11-27 19:30:05
 * @LastEditTime: 2021-11-27 19:30:06
 * @FilePath: \pool\plopfile.js
 * @Description: 命令生成文件
 */
module.exports = plop => {
  plop.setGenerator('wxfile', {
    // 这里的wxfile是一个自己设定的名字，在执行命令行的时候会用到
    description: 'create the repeat wxfile', // 这里是对这个plop的功能描述
    prompts: [
      {
        type: 'input', // 问题的类型
        name: 'fileName', // 问题对应得到答案的变量名，可以在actions中使用该变量
        message: 'your fileName is', // 在命令行中的问题
        default: 'page' // 问题的默认答案
      }
    ],
    actions: [
      {
        type: 'add', // 操作类型，这里是添加文件
        path: '{{fileName}}.js', // 添加的文件的路径
        templateFile: 'plop-temp/temp.js' // 模板文件的路径
      }
    ]
  })
}
