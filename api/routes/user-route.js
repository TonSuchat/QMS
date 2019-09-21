const express = require("express");
const passport = require("passport");
const router = express.Router();
const userServices = require("../services/user-service");

// routes
router.get("/profile", profile);

function profile(req, res, next) {
  userServices
    .getById(req.user._id)
    .then(user => res.json(user))
    .catch(err => next(err));
}

module.exports = router;
