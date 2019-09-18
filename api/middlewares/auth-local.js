const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const db = require("../db");
const User = db.User;

const localAuth = new localStrategy(
  {
    usernameField: "email",
    passwordField: "password"
  },
  function(email, password, done) {
    console.log("in-auth-local-strategy", email, password);
    User.findOne({ email, externalLoginProvider: null }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Not found email." });
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return done(null, false, { message: "Password is incorrect." });
      }
      return done(null, user);
    });
  }
);

passport.use(localAuth);
