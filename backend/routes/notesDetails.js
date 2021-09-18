const express = require("express");
const notes = require("../models/noteModel");

const router = express.Router();

router.get("/notesDetails", (req, res) => {
  notes.find().exec((err, details) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingDetails: details,
    });
  });
});

module.exports = router;
