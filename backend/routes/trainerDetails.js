const express = require("express");
const trainers = require("../models/trainerModel");

const router = express.Router();

router.get("/trainerDetails", (req, res) => {
  trainers.find().exec((err, details) => {
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
