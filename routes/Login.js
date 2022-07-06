var express = require("express");
var router = express.Router();
var axios = require("axios");
require("dotenv").config();

var postConfig = {
  method: "post",
  url: process.env.API_URL + "/login",
  headers: {
    "Content-Type": "application/json",
  },
  data: null,
};

// 로그인
router.post("/", async (req, res, next) => {
  postConfig.data = req.body;

  await axios(postConfig)
    .then(function (response) {
      if (response === null) {
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

module.exports = router;
