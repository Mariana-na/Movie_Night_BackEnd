const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required.'],
    },
    dateTime: {
      type: Date,
      required: [true, 'Date and time are required.'],
    },
    location: {
      type: String,
      required: [true, 'Location is required.'],
    },
    movieChosen: {
      type: String,
      required: [true, 'Movie chosen is required.'],
    },
    mealChosen: {
      type: String,
      required: [true, 'Meal chosen is required.'],
    },
    // API data for meal and movie
    movieData: {
      type: Schema.Types.Mixed,
      required: [true, 'Movie data from the API is required.'],
    },
    mealData: {
      type: Schema.Types.Mixed,
      required: [true, 'Meal data from the API is required.'],
    }
  },
  {
    timestamps: true,
  }
);

const Event = model("Event", eventSchema);

module.exports = Event;
