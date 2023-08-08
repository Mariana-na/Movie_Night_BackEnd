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

// ------ RANDOM FILM ROUTE --------

router.get("/randomMovie", async (req, res) => {
  console.log("req data:", req.body);
  const randomMovie = await Movie.findOne({
    datePublished: "1961-09-13",
  });
  // .skip(
  // Math.floor(Math.random() * (await Movie.countDocuments()))
  // );
  // res.status(200).json({ message: 'Token is valid' })
});

module.exports = router;
