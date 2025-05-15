const mongoose = require("mongoose");

// Create Connection With MongoDB
const connection = mongoose.connect("mongodb+srv://RaoShahbaz:lXcSwrGR6BhAEWrs@cluster0.2yntuol.mongodb.net/rao").then(() => {
    console.log("Connected To DATABASE");
  });

module.exports = connection;
