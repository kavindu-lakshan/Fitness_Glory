const mongoose = require("mongoose");

const zpostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tname: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  pack: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("clientPosts", zpostSchema);
