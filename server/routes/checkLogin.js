var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
    console.log(req);
    res.send({code:0,value:'ok',session:req.session.username});
})

module.exports = router;
