const express = require ("express");
const router = express.Router();
const Feedback = require ("../models/Feedback.model");
const User = require ("../models/User.model");


//----------------------FIND USER ROUTE--------------------------------

router.get("/:userId", async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.userId);
        res.status(200).json({message: "user name found"});
    } catch (error) {
        console.log(error)
    }
})