const express = require("express");
const passport = require("passport");
const router = express.Router();
const userServices = require("../services/user-service");

// routes
router.post("/register", register);
router.post("/signin", passport.authenticate("local"), signin);

function register(req, res, next) {
  userServices
    .create(req.body)
    .then(user => res.json(user))
    .catch(err => next(err));
}

function signin(req, res, next) {
  const token = userServices.signin(req.body.user);
  res.json({ token });
}

module.exports = router;
