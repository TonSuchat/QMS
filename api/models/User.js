const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const saltRounds = 10;

const User = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true, trim: true, select: false },
  type: {
    type: String,
    enum: ["customer", "provider"],
    required: true
  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String },
  mobilePhone: { type: String, required: true },
  socialSignin: { type: Boolean, required: true, default: false },
  externalLoginProvider: {
    type: String,
    default: null
  },
  createdDate: { type: Date, default: Date.now }
});

User.pre("save", function(next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

module.exports = mongoose.model("User", User);
