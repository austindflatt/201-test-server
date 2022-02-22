const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Movie must have a title'],
        unique: [true, 'No duplicate title']
    },
    director: String,
    runtime: Number,
    rating: Number,
    description: String
})

module.exports = mongoose.model('Movie', movieSchema);