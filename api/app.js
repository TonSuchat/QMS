require("dotenv").config();
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");
const errorHandler = require("./helpers/error-handlers");

// auth-middlewares
require("./middlewares/auth-local");

// connect to mongodb database
require("./db.js");

// set up express configurations
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(passport.initialize());

// setup api routes
app.use("/api/user", require("./routes/user-route"));

// setup error handlers
app.use(errorHandler);

// listen app to port env.PORT
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Connected to port: ${port}`);
});
