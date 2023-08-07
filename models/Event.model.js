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
  recipeId: {
    type: String,
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
