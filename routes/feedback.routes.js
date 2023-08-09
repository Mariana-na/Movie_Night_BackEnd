const express = require ("express");
const router = express.Router();
const Feedback = require ("../models/Feedback.model");

//-------------------------CREATE COMMENT ROUTE-------------------

router.post("/:eventId", async (req, res) => {
  try {
    const { eventId } = req.params;
    const { comment, userId } = req.body;
    const newComment = await Feedback.create({ eventId, comment, userId });
    res.status(201).json(newComment);
  } catch (error) {
      console.log(error);
    res.status(500).json("error creating new comment", error);
  }
});

//---------------------------DISPLAY COMMENT ROUTE--------------------

router.get("/:eventId", async (req, res) => {
    try {
        const comments = await Feedback.find({ eventId: req.params.eventId });
        res.status(200).json(comments);
        
    } catch (error) {
        res.status(500).json("error displaying comment", error);
    }
})

//-------------------------EDIT COMMENT ROUTE---------------------------

router.put("/:feedbackId", async (req, res) => {
    try {
        const editedComment = await Feedback.findByIdAndUpdate(req.params.feedbackId);
        res.status(202).json(editedComment);
    } catch (error) {
        res.status(500).json("error updating comment", error);
    }
})

//---------------------DELETE COMMENT ROUTE -----------------------------

router.delete("/feedbackId", async (req, res) => {
    try {
        await Feedback.findByIdAndDelete(req.params.feedbackId);
        res.status(202),json({message: "comment deleted"});
        
    } catch (error) {
        res.status(500).json("error deleting comment",error);
    }
})

module.exports = router;