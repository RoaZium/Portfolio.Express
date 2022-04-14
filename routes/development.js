const axios = require('axios');
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const request = require('request');
const server = require('http').createServer(app);

app.use(cors()); // cors 미들웨어를 삽입합니다.

var options = {
  'method': 'GET',
  'url': 'https://api.publicapis.org/entries',
  'headers': {}
};

var testAPI = request(options, function (error, response) {
  return response.body;
});

function hjw(req, res) {
/*   var tt = request('https://api.publicapis.org/entries', function (error, response, body) {
    return 'tttt';
  }) */

  return 'ttt11';
}

app.get('/hjw', function (req, res) {
  var data = hjw();
  res.send(data);
  console.log('hjwtttt');
})

app.get('/', function (req, res) {
  // req.headers['login_token'] = '98A047DF-0C2D-402D-8397-86AC011D09A8'
  request('https://api.publicapis.org/entries', function (error, response, body) {
    res.send(body)
  })
})

app.get('/', function (req, res) {
  // req.headers['login_token'] = '98A047DF-0C2D-402D-8397-86AC011D09A8'
  request('https://api.publicapis.org/entries', function (error, response, body) {
    res.send(body)
  })
})

var options = {
  'method': 'GET',
  'url': 'https://api.publicapis.org/entries',
  'headers': {}
};

app.get('/a', (req, res, next) => { // 요청패스에 대한 콜백함수를 넣어줍니다.
  request(options, function (error, response, body) {
    res.send({
      body
    });
  })
  console.log('server Call')
});


server.listen(5000, () => {
  console.log('server is running on 5000')
})