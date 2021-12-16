/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-12-14 07:50:28
 * @LastEditTime: 2021-12-14 08:03:51
 * @FilePath: /pool/express-demo/src/404.middleware.js
 * @Description: 404中间件
 */
function err_handler_middleware(err, req, res) {
  if (err) {
    res.json({
      msg: "服务器异常",
    });
  }else{
      res.json({
          msg:'请求成功'
      })
  }
}


module.exports = err_handler_middleware