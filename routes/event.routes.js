const express = require ("express");
const router = express.Router();
const Event = require("../models/Event.model");

//------------------------------CREATE EVENT ROUTE-------------------

router.post("/event", async (req, res) => {
    try {
        const newEvent = await Event.create(req.body);
        res.status(201).json(newEvent);

    } catch (error) {
        res.status(500).json(error);
    }
})

//---------------------------SHOW AN EVENT ROUTE------------------------

router.get("/:eventId", async (req, res) => {
    try {
        const event = await Event.findById(req.params.eventId);
        res.status(200).json(event);

    } catch (error) {
        res.status(500).json("error displaying event", error);
    }
})

//--------------------EDIT EVENT ROUTE----------------------------------

router.put("/:eventId", async (req, res) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(req.params.eventId);
        res.status(202).json(updatedEvent);
    } catch (error) {
        res.status(500).json("error updating event", error);
    }
})

//--------------------DELETE EVENT ROUTE---------------------------------

router.delete("/:eventId", async (req, res) => {
    try {
        await Event.findByIdAndDelete(req.params.eventId);
        res.status(202).json({message: "event deleted"});

    } catch (error) {
        res.status(500).json("error deleting event", error);
    }
})

//--------------------ATTENDING/NOT ATTENDING ROUTES--------------------

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