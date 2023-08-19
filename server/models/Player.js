const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  name: { type: String },
  number: { type: Int },
  position: { type: String },
  appearances: { type: Int },
  goals: { type: Int },
  penalties: { type: Int },
  assists: { type: Int },
  yellowCards: { type: Int },
  redCards: { type: Int },
  started: { type: Int },
  mom: { type: Int },
  cleanSheets: { type: Int },
});

module.exports = mongoose.model("Player", PlayerSchema);
