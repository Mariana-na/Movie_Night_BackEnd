const { Schema, model } = require("mongoose");

const feedbackSchema = new Schema({
  eventId: {
    type: Schema.Types.ObjectId,
    ref: "Event",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  comment: {
    type: String,
    required: true,
  },

});

const Feedback = model("Feedback", feedbackSchema);

module.exports = Feedback;
