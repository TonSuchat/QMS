require("dotenv").config();
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");
const errorHandler = require("./helpers/error-handlers");

// connect to mongodb database
require("./db.js");

// set up express configurations
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));

// setup api routes
app.use("/api/user", require("./routes/user-route"));

// setup error handlers
app.use(errorHandler);

// listen app to port env.PORT
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Connected to port: ${port}`);
});
