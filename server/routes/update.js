var express = require('express');
var router = express.Router();
var query=require('../mysql');
var moment=require('moment');

router.post('/', (req, res) => {
    var obj=req.body;
    console.log(req.body);
    query('UPDATE list SET title=?,content=? WHERE list_id=?',[obj.title,obj.content,obj.list_id],(err,rs)=>{
    })

})

module.exports = router;
