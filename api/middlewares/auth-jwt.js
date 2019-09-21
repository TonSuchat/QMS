const passport = require("passport");
const jwtStrategy = require("passport-jwt").Strategy;
const extractJwt = require("passport-jwt").ExtractJwt;
const db = require("../db");
const User = db.User;

// passport.use()

const jwtOptions = {
  jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY
  // passReqToCallback: true
};

const jwtAuth = new jwtStrategy(jwtOptions, function(payload, done) {
  User.findOne({ _id: payload.id }, function(err, user) {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false, { message: "Invalid token" });
    }
    return done(null, user);
  });
});

passport.use(jwtAuth);
