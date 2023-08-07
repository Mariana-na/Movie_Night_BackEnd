const express = require ("express");
const router = express.Router();
const Event = require("../models/Event.model");

router.post("/event", async (req, res) => {
    try {
        const newEvent = await Event.create(req.body);
        res.status(201).json(newEvent)

    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
})

router.put("/:eventId/attending", async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.eventId,
            {$inc:{attending: 1 }, $inc: {attendees: req.user.id} },
            {new: true});
        res.json({attendingCount: event.attending});

    } catch (error) {
        res.status(500).json({error: "Error posting attending count"})
        
    }
})

router.put("/:eventId/notAttending", async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.eventId,
            {$inc: {notAttending: 1}, $pull: {attendees: req.user.id}},
            {new: true});
        res.json({notAttendingCount: event.notAttending});

    } catch (error) {
        res.status(500).json({error: "Error posting not attending count"})
    }
})


module.exports = router;