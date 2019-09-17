const db = require("../db");
const User = db.User;

async function create(user) {
  if (!user || user === undefined) throw "Invalid parameter";
  const newUser = new User(user);
  await newUser.save();
}

module.exports = {
  create
};
