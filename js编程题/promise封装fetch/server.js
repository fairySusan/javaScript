var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/main.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, './main.js'));
});

app.get('/getList', (req, res) => {
  if (req.query.filter === 'red') {
    setTimeout(() => {
      res.json({key: 'hello world red'})
    }, 3000);
  } else if (req.query.filter === 'blue') {
    res.json({key: 'hello world blue'})
  } else {
    res.status(400).json({message: 'erorr111'})
  }
});

app.post('/postData', jsonParser, (req, res) => {
  if(req.body.color === 'red') {
    res.json({key: 'post red'})
  } else if (req.body.color === 'blue') {
    res.json({key: 'post blue'})
  } else {
    res.status(400).json({message: 'erorr222'})
  }
})
app.listen(8000, (req, res) => {
  console.log('port is' + ' ' + 8000);
})