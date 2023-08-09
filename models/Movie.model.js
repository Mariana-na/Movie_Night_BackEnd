const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
actor: [String],
aggregateRating: Object,
contentRating: String,
creator: [String],
datePublished: String,
description: String,
director: [String],
duration: String,
genre: [String],
image: String,
keywords: String,
name: String,
trailer: Object,
  url: String,
'@type': String,

  
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;
