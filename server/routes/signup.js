var express = require('express');
var router = express.Router();
var query=require('../mysql');

router.post('/', (req, res) => {
    console.log(req.body);
    query('SELECT * FROM user',['*'],function(err,res,fil){
        console.log(err,res,fil);
    })
})

module.exports = router;
