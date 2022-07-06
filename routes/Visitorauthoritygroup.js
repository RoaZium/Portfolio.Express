var express = require("express");
var router = express.Router();
var axios = require("axios");
const { config } = require("dotenv");
require("dotenv").config();

var authorizationData = {
  visitor_id: null,
  authorities: [
    {
      authoritygroup_id: null,
    },
  ],
};

var putConfig = {
  method: "put",
  url: null,
  headers: {
    login_token: null,
    "Content-Type": "application/json",
  },
  data: authorizationData,
};

// 출입그룹권한 수정
router.put("/", async (req, res, next) => {
  putConfig.url = process.env.API_URL + req.originalUrl;
  putConfig.headers.login_token = req.headers.login_token;

  authorizationData.visitor_id = req.body.visitor_id;
  authorizationData.authorities[0].authoritygroup_id =
    req.body.authorities[0].authoritygroup_id;

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
