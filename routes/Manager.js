var express = require("express");
var router = express.Router();
var axios = require("axios");
require("dotenv").config();

// 접견자 조회
router.get("/", async (req, res, next) => {
  await axios
    .get(process.env.API_URL + req.originalUrl)
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
