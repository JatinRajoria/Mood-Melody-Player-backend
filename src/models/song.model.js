const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
  {
    songName: String,
    singerName: String,
    mood: String,
    audio: String
  },
  { timestamps: true }
);

const song = mongoose.model("song", songSchema);

module.exports = song;
