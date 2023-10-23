const mongoose = require("mongoose");

const WeekSchema = new mongoose.Schema({
  week: { type: Number },
  wc: { type: String },
});

module.exports = mongoose.model("Week", WeekSchema);
