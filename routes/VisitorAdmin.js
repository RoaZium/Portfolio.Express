var express = require("express");
var router = express.Router();
var axios = require("axios");
require("dotenv").config();

var getConfig = {
  method: "get",
  url: process.env.API_URL,
  headers: {
    login_token: "e81b0c1e-52ae-41e2-bf4e-064f1d4a87d2",
  },
};

// 방문자 조회(관리자용)
router.get("/", async (req, res, next) => {
  getConfig.url = getConfig.url + req.originalUrl;
  getConfig.headers.login_token = req.headers.login_token;

  await axios(getConfig)
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      res.send(error);
      console.log(error);
    });
});

module.exports = router;
