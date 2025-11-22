const mongoose = require("mongoose");

mongoose.connect("db url")
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.log("Connection failed:", err));
