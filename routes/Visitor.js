var express = require("express");
var router = express.Router();
var axios = require("axios");
require("dotenv").config();

var option = {
  method: "GET",
  url: "http://172.17.17.101:48090/v2/visitor?site_id=00000000-0000-0000-0000-000000000000",
  headers: {},
};

router.get("/", async (req, res, next) => {
  console.log("API", process.env.API_URL);
  await axios
    .get(process.env.API_URL + req.originalUrl)
    .then(function (response) {
      res.send(JSON.stringify(response.data));
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
