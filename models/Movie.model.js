const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MoviesSchema = new Schema({
    title: "String",
    director: "String",
    stars: ["String"],
    image: "String",
    description: "String",
    showtimes: ["String"]
})

const Movies = mongoose.model("Movies", MoviesSchema)

module.exports = Movies