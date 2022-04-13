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


/* app.get('/admin', (req, res, next) => { // 요청패스에 대한 콜백함수를 넣어줍니다.
  res.send({
    message: 'hellow HJW'
  });
  console.log('server Call')
}) */

/* axios.get('/', (req, res, next) => { // 요청패스에 대한 콜백함수를 넣어줍니다.
  res.send({
    message: 'hellow HJW'
  });
  console.log('server Call')
}); */

/* const instance = axios.create({
  baseURL: 'http://20.194.27.202:48090/v1/visitormanager?visitor_name=김민구&site_id=01f0ea04-6040-47d8-a756-f1b08d855096',
  timeout: 1000,
  headers: {'login_token': '98A047DF-0C2D-402D-8397-86AC011D09A8'}
}) */

/* app.get('/', (req,res) => { // 요청패스에 대한 콜백함수를 넣어줍니다.
  res.send({message:'hellow HJW'});
}); */

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


/* app.get('/', (req,res) => { // 요청패스에 대한 콜백함수를 넣어줍니다.
  res.send({message:'hellow HJW'});
}); */

server.listen(5000, () => {
  console.log('server is running on 5000')
})

/* const express = require('express');
const app = express();
const test = require('./test');

app.use('/', test);

const port=5000; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, ()=>{console.log(`Listening on port ${port}`)}); */