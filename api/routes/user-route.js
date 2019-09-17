const express = require("express");
const errorConst = require("../constants/error-constants");
const router = express.Router();
const userServices = require("../services/user-service");

// routes
// router.post("/authenticate", null);
router.post("/register", register);

function register(req, res, next) {
  userServices
    .create(req.body)
    .then(user => res.json(user))
    .catch(err => next(err));
}

module.exports = router;
