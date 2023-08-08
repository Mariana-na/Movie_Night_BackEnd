const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User.model");
const Movie = require("../models/Movie.model");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/signup", (req, res, next) => {
  res.json("All good in here");
});

router.get("/login", (req, res, next) => {
  res.json("All good in here");
});

router.get("/profile", (req, res, next) => {
  res.json("All good in here");
});

router.get("/eventCreation", (req, res, next) => {
  res.json("All good in here");
});

router.get("/eventDetails", (req, res, next) => {
  res.json("All good in here");
});


module.exports = router;
