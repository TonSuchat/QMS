const express = require("express");
const passport = require("passport");
const router = express.Router();
const userServices = require("../services/user-service");

// routes
router.get("/profile/:id", profile);
router.get("/getByType", getByType);

function profile(req, res, next) {
  userServices
    .getById(req.params.id)
    .then(user => res.json(user))
    .catch(err => {
      next(err);
    });
}

function getByType(req, res, next) {
  if (!req.query.type) throw "Invalid parameter";
  userServices
    .getByType(req.query.type)
    .then(users => res.json(users))
    .catch(err => next(err));
}

module.exports = router;
