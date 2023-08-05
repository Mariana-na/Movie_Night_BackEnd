const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");
isAuthenticated

router.use(express.json());

// --------- SIGN IN ROUTE ---------


router.post("/signup", async (req, res) => {
  const payload = req.body;
  const salt = bcrypt.genSaltSync(13);
  const passwordHash = bcrypt.hashSync(payload.password, salt);
  try {
    const newUser = await User.create({
      email: payload.email,
      password: passwordHash,
      username: payload.username,
    });
    res.status(201).json({ message: "User created" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// --------- SIGN IN ROUTE ---------

router.post("/login", async (rec, res) => {
  const payload = req.body;
  const potentialUser = await User.find({ email: payload.email });
  if (potentialUser) {
    const passwordsMatch = bcrypt.compareSync(
      payload.password,
      potentialUser.password
    );
    if (passwordsMatch) {
      const authtoken =
        jwt -
        sign({ userId: potentialUser._id }, process.env.TOKEN_SECRET, {
          algorithm: "HS256",
          expiresIn: "6h",
        });
      res.status(202).json({ token: authToken });
    } else {
      res.status(403).json({ errorMessage: "Password invalid" });
    }
  } else {
    res.status(403).json({ errorMessage: "No user found" });
  }
});

// --------- TOKEN VERIFICATION ROUTE ---------

router.get("/verify", isAuthenticated, async (req, res) => {
    console.log("req payload:", req.payload)
    const currentUser = await User.findById(req.payload.userId)
    currentUser.password = '****';
    res.status(200).json({message: 'Token is valid', currentUser})

})





module.exports = router;
