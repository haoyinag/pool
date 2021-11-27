/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-11-27 16:02:15
 * @LastEditTime: 2021-11-27 18:19:26
 * @FilePath: \pool\use-cli\use-npm\src\questions.js
 * @Description:
 */

const path = require('path')
const chalk = require('chalk');
const gitRemoteOriginUrl = require('git-remote-origin-url')
const gitRepoInfo = require('git-repo-info')

async function getDefaultValues () {
  let author = ''
  let repoUrl = ''

  try {
    const gitInfo = gitRepoInfo()
    author = gitInfo.author
    repoUrl = await gitRemoteOriginUrl()
  } catch (ex) {}
    console.log(chalk.yellow(repoUrl));

  return [
    {
      type: 'input',
      name: 'name',
      message: '项目名称',
      default: path.parse(process.cwd()).name
    },
    {
      type: 'input',
      name: 'version',
      message: '版本',
      default: '1.0.0'
    },
    {
      type: 'input',
      name: 'description',
      message: '项目描述'
    },
    {
      type: 'input',
      name: 'gitUrl',
      message: 'git 地址',
      default: repoUrl
    },
    {
      type: 'input',
      name: 'author',
      message: '作者',
      default: author
    }
  ]
}

module.exports = getDefaultValues
