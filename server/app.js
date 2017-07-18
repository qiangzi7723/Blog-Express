var express = require('express');
var app = express();
var routes=require('./routes');
var bodyParser = require('body-parser')

// 解析POST过来的数据
app.use(bodyParser.json());
routes(app);

app.listen(9091);
