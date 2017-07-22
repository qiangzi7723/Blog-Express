var express = require('express');
var app = express();
var routes = require('./routes');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors')

// axios的post请求无法带上cookie，设置了credentials之后后端要对应的进行以下设置
app.use(cors({
    credentials: true,
    origin:'http://localhost:8081'
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: 'qiangzi',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 2592000000
    },
}));
routes(app);

app.listen(9091);
