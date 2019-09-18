const db = require("../db");
const User = db.User;

module.exports = {
  create: async function(user) {
    if (!user || user === undefined) throw "Invalid parameter";
    const newUser = new User(user);
    await newUser.save();
  },
  signin: function(user) {
    if (!!user) throw "User not found";
    // generate JWT token and send back to client
    return "token";
  }
};
