const mongoose = require("mongoose");

const FixtureSchema = new mongoose.Schema({
  homeTeam: { type: String },
  awayTeam: { type: String },
  time: { type: String },
  date: { type: String },
  venue: { type: String },
  homeScore: { type: Int },
  awayScore: { type: Int },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
  },
  weekId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Week",
  },
});

module.exports = mongoose.model("Fixture", FixtureSchema);
