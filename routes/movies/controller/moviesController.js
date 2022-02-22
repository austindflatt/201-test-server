const Movie = require('../model/moviesModel');

const createMovie = async (req, res) => {
    try {
        const { title, director, runtime, rating, description } = req.body;
        const newMovie = new Movie({
            title,
            director,
            runtime,
            rating,
            rating,
            description
        })
        const savedMovie = await newMovie.save();
        res.status(200).json({ message: 'Movie has been saved', payload: savedMovie });
    } catch (error) {
        if(error.code === 11000){
            res.status(500).json({ message: 'error', error: 'Duplicate title' })
        }
        res.status(500).json({ message: 'There is an error', error: error })
    }
}

module.exports = {
    createMovie
}