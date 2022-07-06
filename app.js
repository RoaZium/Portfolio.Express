var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var authorizationRouter = require("./routes/Authorization");
var loginRouter = require("./routes/Login");
var managerRouter = require("./routes/Manager");
var userauthoritygroupRouter = require("./routes/Userauthoritygroup");
var visitorRouter = require("./routes/Visitor");
var visitorAdminRouter = require("./routes/VisitorAdmin");
var visitorApprovalRouter = require("./routes/VisitorApproval");
var visitorauthoritygroupRouter = require("./routes/Visitorauthoritygroup");
var app = express();

// view engine setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/authorization", authorizationRouter);
app.use("/login", loginRouter);
app.use("/userauthoritygroup", userauthoritygroupRouter);
app.use("/visitormanagerid", managerRouter);
app.use("/visitor", visitorRouter);
app.use("/visitoradmin", visitorAdminRouter);
app.use("/visitorapproval", visitorApprovalRouter);
app.use("/visitorauthoritygroup", visitorauthoritygroupRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log(path.join(__dirname, "public"));
  next(createError(403));
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

app.listen(5000, () => {
  console.log("server is running on 5000");
});

module.exports = app;
