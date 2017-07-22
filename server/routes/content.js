var express = require('express');
var router = express.Router();
var query=require('../mysql');

router.post('/all', (req, res) => {
    query('SELECT * FROM list',[],(err,rs)=>{
        console.log(rs);
        res.send({code:1,value:'ok',res:rs});
    })
})

router.post('/person',(req,res)=>{
    query('SELECT * FROM list WHERE username=?',[req.session.username],(err,rs)=>{
        console.log(rs);
        res.send({code:1,value:'ok',res:rs});
    })
})

router.get('/*',(req,res)=>{
    var param=req.params[0];
    if(!isNaN(param)){
        query('SELECT * FROM list WHERE list_id=?',[param],(err,rs)=>{
            res.send({code:1,value:'ok',res:rs});
        })
    }
})

module.exports = router;
