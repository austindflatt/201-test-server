const express = require('express');
const { createMovie, getAllMovies, updateMovie, deleteMovie } = require('./movies/controller/moviesController');
const router = express.Router();

router.get('/', function(req, res, next){
    console.log(req);
    res.send('hello from the movie routes')
})

// Create a movie
router.post('/create-movie', createMovie);

// Get all movies
router.get('/get-all-movies', getAllMovies);

// Get single movie


// Update movie
router.put('/update-movie/:id', updateMovie);

// Delete movie
router.delete('/delete-movie/:id', deleteMovie);

module.exports = router;