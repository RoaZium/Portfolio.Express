var express = require("express");
var router = express.Router();
var axios = require("axios");
var productionConfig = require("../config/production.config");

var putData = {
  site_id: null,
  visitor_id: null,
  approval: null,
};

var putConfig = {
  method: "put",
  url: null,
  headers: {
    login_token: null,
    "Content-Type": "application/json",
  },
  data: putData,
};

// 방문자 승인(관리자용)
router.put("/", async (req, res, next) => {
  putConfig.url = productionConfig.API_URL + req.originalUrl;
  putConfig.headers.login_token = req.headers.login_token;
  putConfig.data = req.body;

  await axios(putConfig)
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      res.send(error);
      console.log(error);
    });
});

module.exports = router;
