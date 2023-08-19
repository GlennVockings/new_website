const mongoose = require("mongoose");

const WeekSchema = new mongoose.Schema({
  week: { type: Int },
  wc: { type: String },
  status: {
    type: String,
    enum: ["Not Started", "Completed"],
  },
});

module.exports = mongoose.model("Week", WeekSchema);
