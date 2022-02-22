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

const getAllMovies = async (req, res) => {
    try {
        let allMovies = await Movie.find();
        res.status(200).json(allMovies);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getOneMovie = async (req, res) => {
    try {
        const { id } = req.params;
        let oneMovie = await Movie.findById(id);
        res.status(200).json(oneMovie);
    } catch (error) {
        res.status(500).json(error);
    }
}

const updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        let updateMovie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: 'Movie was updated', payload: updateMovie });
    } catch (error) {
        res.status(500).json({ message: 'There is an error', error: error.message });
    }
}

const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        let deleteMovie = await Movie.findByIdAndDelete(id);
        res.status(200).json({ message: 'Movie was deleted', payload: deleteMovie });
    } catch (error) {
        res.status(500).json({ message: 'There is an error', error: error.message });
    }
}

module.exports = {
    createMovie,
    getAllMovies,
    getOneMovie,
    updateMovie,
    deleteMovie
}