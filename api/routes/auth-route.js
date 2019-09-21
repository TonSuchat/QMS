const express = require("express");
const passport = require("passport");
const router = express.Router();
const userServices = require("../services/user-service");

router.post("/register", register);
router.post("/signin", signin);

function register(req, res, next) {
  userServices
    .create(req.body)
    .then(user => res.json(user))
    .catch(err => next(err));
}

function signin(req, res, next) {
  passport.authenticate("local", function(err, user, info) {
    if (err) return next(error);
    if (!user) {
      res.status(400);
      res.json({ message: info.message });
      return;
    }
    const token = userServices.signin(user);
    res.json({ token });
  })(req, res, next);
}

module.exports = router;
