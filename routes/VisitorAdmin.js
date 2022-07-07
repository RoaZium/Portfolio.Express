var express = require("express");
var router = express.Router();
var axios = require("axios");
var productionConfig = require("../config/production.config");

var getConfig = {
  method: "get",
  url: null,
  headers: {
    login_token: null,
  },
};

// 방문자 조회(관리자용)
router.get("/", async (req, res, next) => {
  getConfig.url = productionConfig.API_URL + req.originalUrl;
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
