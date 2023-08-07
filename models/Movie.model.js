const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: String,
  year: Number,
  director: String,
  duration: String,
  genre: [String],
  score: Number,
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;
