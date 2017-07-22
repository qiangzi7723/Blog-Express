var express = require('express');
var router = express.Router();
var query = require('../mysql');

router.post('/', (req, res) => {
    var obj = req.body;
    // INSERT INTO Store_Information(Store_Name, Sales, Txn_Date)
    // VALUES('Los Angeles', 900, 'Jan-10-1999');
    // query('SELECT * FROM user', ['*'], function(err, res, fil) {
    //     console.log(err, res, fil);
    // })
    // query('INSERT INTO user(username,password,sex,desc) VALUES(?,?,?,?)',[obj.name,obj.password,obj.sex,obj.desc],function(){})
    console.log(obj);
    query("INSERT INTO user(username,password,sex,`desc`) VALUES('" + obj.username + "','" + obj.password + "','" + obj.sex + "','" + obj.desc + "')", [], function(err, rs, fil) {
        console.log(err, rs, fil);
        res.send({code:1,value:'ok'});
    })
})

module.exports = router;
