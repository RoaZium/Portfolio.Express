var express = require("express");
var router = express.Router();
var axios = require("axios");
var productionConfig = require("../config/production.config");

var postConfig = {
  method: "post",
  url: productionConfig.API_URL + "/visitor",
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
  await axios
    .get(productionConfig.API_URL + req.originalUrl)
    .then(function (response) {
      res.send(JSON.stringify(response.data));
      console.log(response);
    })
    .catch(function (error) {
      res.send(error);
      console.log(error);
    });
});

// 방문자 삭제(관리자용)
router.delete("/", async (req, res, next) => {
  deleteConfig.url = productionConfig.API_URL + req.originalUrl;
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
