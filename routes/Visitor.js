var express = require("express");
var router = express.Router();
var axios = require("axios");

var option = {
  method: "GET",
  url: "http://172.17.17.101:48090/v2/visitor?site_id=00000000-0000-0000-0000-000000000000",
  headers: {},
};

router.get("/", async (req, res, next) => {
  console.log(option);
  await axios
    .get("http://172.17.17.101:48090/v2" + req.originalUrl)
    .then(function (response) {
      res.send(JSON.stringify(response.data));
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  console.log("test");
});

module.exports = router;
