var express = require("express");
var router = express.Router();
var axios = require("axios");
require("dotenv").config();

var postConfig = {
  method: "post",
  url: process.env.API_URL + "/visitor",
  headers: {
    "Content-Type": "application/json",
  },
  data: null,
};

var deleteConfig = {
  method: "delete",
  url: null,
  headers: {
    login_token: null,
  },
};

// 방문자 생성
router.post("/", async (req, res, next) => {
  postConfig.data = req.body;
  await axios(postConfig)
    .then(function (response) {
      if (response === null) {
        return;
      }

      if (response.data["code"] !== 1) {
        return;
      }

      res.send(JSON.stringify(response.data));
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      res.send(error);
      console.log(error);
    });
});

// 방문자 조회
router.get("/", async (req, res, next) => {
  console.log("API", process.env.API_URL);
  await axios
    .get(process.env.API_URL + req.originalUrl)
    .then(function (response) {
      res.send(JSON.stringify(response.data));
      console.log(response);
    })
    .catch(function (error) {
      res.send(error);
      console.log(error);
    });
});

// 방문자 조회(관리자용)
router.get(async (req, res, next) => {
  await axios
    .get()
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      res.send(error);
      console.log(error);
    });
});

// 방문자 승인(관리자용)
router.get(async (req, res, next) => {
  await axios
    .get()
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      res.send(error);
      console.log(error);
    });
});

// 방문자 삭제(관리자용)
router.get(async (req, res, next) => {
  deleteConfig.url = process.env.API_URL + req.originalUrl;
  deleteConfig.headers.login_token = req.headers.login_token;

  await axios(deleteConfig)
    .then(function (response) {
      res.send(JSON.stringify(response.data));
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      res.send(error);
      console.log(error);
    });
});

module.exports = router;
