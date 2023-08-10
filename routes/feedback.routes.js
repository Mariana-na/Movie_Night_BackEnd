const express = require ("express");
const router = express.Router();
const Feedback = require ("../models/Feedback.model");
const User = require ("../models/User.model");

//-------------------------CREATE COMMENT ROUTE-------------------

router.post("/:eventId", async (req, res) => {
  try {
    const { eventId } = req.params;
    const { comment, userId } = req.body;

    const user = await User.findById(userId);

    const newCommentData = {
        eventId,
        userId,
        name: user.name,
        comment,
    };

    const newComment = await Feedback.create(newCommentData);
    res.status(201).json(newComment);
  } catch (error) {
      console.log(error);
    res.status(500).json({message: "Error creating comment" });
  }
});

//---------------------------DISPLAY COMMENT ROUTE--------------------

router.get("/:eventId", async (req, res) => {
    try {
        const comments = await Feedback.find({ eventId: req.params.eventId });
        res.status(200).json(comments);
        
    } catch (error) {
        res.status(500).json({message: "Error displaying comment" });
    }
})

//-------------------------EDIT COMMENT ROUTE---------------------------

router.put("/:feedbackId", async (req, res) => {
    try {
        const editedComment = await Feedback.findByIdAndUpdate(req.params.feedbackId);
        res.status(202).json(editedComment);
    } catch (error) {
        res.status(500).json({message: "Error updating comment" });
    }
})

//---------------------DELETE COMMENT ROUTE -----------------------------

router.delete("/feedbackId", async (req, res) => {
    try {
        await Feedback.findByIdAndDelete(req.params.feedbackId);
        res.status(202),json({message: "comment deleted"});
        
    } catch (error) {
        res.status(500).json({message: "Error deleting comment" });
    }
})

//----------------------FIND USER ROUTE--------------------------------

/* router.get("/:userId", async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.userId);
        res.status(200).json({message: "user name found"});
    } catch (error) {
        console.log(error)
    }
}) */

module.exports = router;