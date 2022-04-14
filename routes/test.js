var express = require('express');
var router = express.Router();
var request = require('request');

var options = {
    'method': 'GET',
    'url': 'https://api.publicapis.org/entries',
    'headers': {}
};

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

function RequestMessage() {
    return 'request Message';
}

function CommonAPI() {
    var data = request('https://api.publicapis.org/entries', function (error, response, body) {
        console.log(body);
        return body;
    });
    var test = 'feeee';
    console.log(data);
    return data;
};

router.get('/test', function (req, res) {
    res.send(RequestMessage());
});

router.get('/test1', function (req, res) {
    res.send(CommonAPI());
/*     request('https://api.publicapis.org/entries', function (error, response, body) {
        res.send(body)
      }) */
});

module.exports = router;