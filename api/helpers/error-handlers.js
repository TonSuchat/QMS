const errorConst = require("../constants/error-constants");

const errorHandler = (err, req, res, next) => {
  if (typeof err === "string") {
    return res.status(400).json({ message: err });
  }

  if (err.name === errorConst.VALIDATION_ERROR) {
    return res.status(400).json({ message: err.message });
  }

  if (err.name === errorConst.UNAUTHORIZED_ERROR) {
    return res.status(401).json({ message: "Invalid token" });
  }

  return res.status(500).json({ message: err.message });
};

module.exports = errorHandler;
