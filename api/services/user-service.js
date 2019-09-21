const db = require("../db");
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
      expiresIn: "1h"
    });
    return token;
  },
  getById: async function(id) {
    if (!id) throw "Invalid parameter";
    return await User.findById(id);
  }
};
