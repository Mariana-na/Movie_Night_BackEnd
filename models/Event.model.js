const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
  {
    movie: {
      type: String,
      required: [true, 'Movie name is required.'],
    },
    snack: {
      type: String,
      required: [true, 'Snack name is required.'],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required.'],
    },
  },
  {
    timestamps: true,
  }
);

const Event = model("Event", eventSchema);

module.exports = Event;
