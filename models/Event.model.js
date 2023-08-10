const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  eventName: {
    type: String,
    required: true,
    trim: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  filmId: {
    type: String,
  },

  randomMeal: {
    strMeal: { type: String, required: true },
    strArea: { type: String, required: true },
    strSource: { type: String, required: true },
    strYouTube: { type: String },
  },
  randomMovie: {
    name: { type: String, required: true },
    datePublished: { type: String, required: true },
    genre: { type: [String], required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
  },
  eventDate: {
    type: String,
    required: true,
  },
  eventLocation: {
    type: String,
    required: true,
  },
  attending: {
    type: Number,
    default: 0,
  },
  notAttending: {
    type: Number,
    default: 0,
  },
  attendees: {
    type: [String],
    required: true,
  },
});

const Event = model("Event", eventSchema);

module.exports = Event;
