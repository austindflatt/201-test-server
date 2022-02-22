const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
    console.log(req);
    res.send('hello from the movie routes')
})

module.exports = router;