const express = require('express');
const { createMovie } = require('./movies/controller/moviesController');
const router = express.Router();

router.get('/', function(req, res, next){
    console.log(req);
    res.send('hello from the movie routes')
})

router.post('/create-movie', createMovie);

module.exports = router;