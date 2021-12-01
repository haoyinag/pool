/*
 * @Author: 郁南
 * @LastEditors: 郁南
 * @Date: 2021-11-30 08:02:02
 * @LastEditTime: 2021-12-01 08:15:35
 * @FilePath: /app/app.js
 * @Description:
 */
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const users = require("./users"); 

const app = express();
function loggingMiddleware(req, res, next) {
  const time = new Date();
  console.log(111,`[${time.toLocaleString()}] ${req.method} ${req.url}`);
  next();
}

app.use(loggingMiddleware) 

// app.get("/", (req, res) => {
//   res.send(users);
// });

// app.post("/", (req, res) => {
//   res.send("Req a post method");
// });

// app.put("/user", (req, res) => {
//   res.send("Req a put method");
// });

// app.delete("/user", (req, res) => {
//   res.send("Req a delete method");
// });

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
 

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
