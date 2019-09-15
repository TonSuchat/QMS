require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// set up express configurations
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connect to Mongo database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true }).then(
  () => {
    console.log("Connect to QMS database success.");
  },
  error => {
    console.log(`Error when try to connect to QMS database: ${error}`);
  }
);

// setup api routes

// listen app to port env.PORT
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Connected to port: ${port}`);
});
