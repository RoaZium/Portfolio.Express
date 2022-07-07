var express = require("express");
var router = express.Router();
var axios = require("axios");
var productionConfig = require("../config/production.config");

var postData = {
  user_id: null,
  mobile: 2,
  start_date: null,
  end_date: null,
};

var postConfig = {
  method: "post",
  url: null,
  headers: {
    login_token: null,
    "Content-Type": "application/json",
  },
  data: postData,
};

var deleteConfig = {
  method: "delete",
  url: null,
  headers: {
    login_token: null,
  },
  data: null,
};

// 카드 생성
router.post("/", async (req, res, next) => {
  postConfig.url = productionConfig.API_URL + req.originalUrl;
  postConfig.headers.login_token = req.headers.login_token;
  postConfig.data = req.body;

  await axios(postConfig)
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      res.send(error);
      console.log(error);
    });
});

// 카드 삭제
router.delete("/", async (req, res, next) => {
  deleteConfig.url = productionConfig.API_URL + req.originalUrl;
  deleteConfig.headers.login_token = req.headers.login_token;

  await axios(deleteConfig)
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      res.send(error);
      console.log(error);
    });
});

module.exports = router;
