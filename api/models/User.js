const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  email: { type: String, required: true },
  registerType: {
    type: String,
    enum: ["customer", "provider"],
    required: true
  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String },
  mobilePhone: { type: String, required: true },
  externalLoginProvider: { type: String, enum: ["facebook", "google"] },
  createdDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", User);
