var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
    req.session.username=null;
    res.send({code:1,value:'ok'});
})

module.exports = router;
