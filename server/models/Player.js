const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  name: { type: String },
  number: { type: Number },
  position: { type: String },
  appearances: { type: Number },
  goals: { type: Number },
  penalties: { type: Number },
  assists: { type: Number },
  yellowCards: { type: Number },
  redCards: { type: Number },
  started: { type: Number },
  mom: { type: Number },
  cleanSheets: { type: Number },
});

module.exports = mongoose.model("Player", PlayerSchema);
