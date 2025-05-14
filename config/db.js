const mongoose = require("mongoose");

// Create Connection With MongoDB
const connection = mongoose.connect("mongodb://127.0.0.1:27017/men").then(() => {
    console.log("Connected To DATABASE");
  });

module.exports = connection;
