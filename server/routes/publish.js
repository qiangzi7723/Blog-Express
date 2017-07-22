var express = require('express');
var router = express.Router();
var query=require('../mysql');
var moment=require('moment');

router.post('/', (req, res) => {
    var obj=req.body;
    var time=moment().format('YYYY-MM-DD HH:mm:ss');
    query('INSERT INTO list(username,title,content,date) VALUES(?,?,?,?)',[req.session.username,obj.title,obj.content,time],function(err){
        console.log(err);
        res.send({code:1,value:'ok'});
    })
})

module.exports = router;
