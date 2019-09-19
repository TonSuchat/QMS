const mongoose = require("mongoose");

// connect to Mongo database
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(
    () => {
      console.log("Connect to QMS database success.");
    },
    error => {
      console.log(`Error when try to connect to QMS database: ${error}`);
    }
  );

module.exports = {
  User: require("./models/User")
};
