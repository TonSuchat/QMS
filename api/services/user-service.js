const db = require("../db");
const mongoose = require("mongoose");
const User = db.User;
const jwt = require("jsonwebtoken");

module.exports = {
  create: async function(user) {
    if (!user || user === undefined) throw "Invalid parameter";
    const newUser = new User(user);
    await newUser.save();
  },
  signin: function(user) {
    if (!user) throw "User not found";
    // generate JWT token and send back to client
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "10m"
    });
    return token;
  },
  getById: async function(id) {
    if (!id || !mongoose.Types.ObjectId.isValid(id)) throw "Invalid parameter";
    return await User.findById(id);
  },
  getByType: async function(type) {
    if (!type) throw "Invalid parameter";
    return await User.find({ type });
  }
};
