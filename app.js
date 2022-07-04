var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var usersRouter = require("./routes/users");
var visitorsRouter = require("./routes/visitors");
var testRouter = require("./routes/test");
var visitorRouter = require("./routes/visitor");
var app = express();

app.use(
  cors({
    origin: ["http://172.17.17.101:48090/v2"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
); // cors 미들웨어를 삽입합니다.

app.engine("pug", require("pug").__express);

// view engine setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public")));
app.use("/", express.static(path.join(__dirname, "build")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/user", usersRouter);
app.use("/visitorss", visitorsRouter);
app.use("/test", testRouter);
app.use("/visitor", visitorRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
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
