/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-12-28 08:37:23
 * @LastEditTime: 2021-12-28 08:41:09
 * @FilePath: /pool/sequlizeDemo/ecosystem.config.js
 * @Description:
 */
module.exports = {
  apps: [
    {
      name: "seq_api",
      script: "src/app.js",
      watch: ".",
      autorestart: true,
    },
  ],
};
