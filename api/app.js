require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");
const errorHandler = require("./helpers/error-handlers");

// auth-middlewares
require("./middlewares/auth-local");
require("./middlewares/auth-jwt");
require("./middlewares/serialize");

// connect to mongodb database
require("./db.js");

// set up express configurations
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(session({ secret: process.env.SESSION_SECRET }));
app.use(passport.initialize());
app.use(passport.session());

// setup api routes
app.use("/api/account", require("./routes/auth-route.js"));
// private routes
app.use(
  "/api/user",
  passport.authenticate("jwt"),
  require("./routes/user-route")
);

// setup error handlers
app.use(errorHandler);

// listen app to port env.PORT
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Connected to port: ${port}`);
});
