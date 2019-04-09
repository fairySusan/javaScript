var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });
app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})
app.get('/axios.js', function (req, res) {
    res.sendFile( __dirname + "/" + "axios.js" );
})
app.get('/getData',urlencodedParser,function(req,res){
   // 输出 JSON 格式
   var response = {
    "loginName": 'taorui',
    "password":123456
    };
    res.end(JSON.stringify(response));
})

var server = app.listen(3000,function(){
    var host = server.address().address
    var port = server.address().port
   
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})