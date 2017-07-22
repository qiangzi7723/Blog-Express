var express = require('express');
var router = express.Router();
var query = require('../mysql');

router.post('/', (req, res) => {
    var obj = req.body;
    query('SELECT * FROM user WHERE username="'+obj.username+'"',[], function(err, rs, fil) {
        if(rs.length==0){
            // 说明查询数据库并没有对应字段
            res.send({code:-1,value:'no username'});
        }else{
            var password=rs[0].password;
            if(obj.password!=password){
                res.send({code:-2,value:'wrong password'});
            }else{
                req.session.username=obj.username;
                res.send({code:0,value:'ok'});
            }
        }
    })
})

module.exports = router;
