const express = require("express");
const users = require("../models/userModel");

const router = express.Router();

//get users
router.get("/memberDetails", (req, res) => {
  users.find().exec((err, details) => {
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

//get a specific member
router.get("/memberDetails/:id", (req, res) => {
  let userID = req.params.id;

  users.findById(userID, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      user,
    });
  });
});

//update users
router.put("/memberDetail/update/:id", (req, res) => {
  users.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, detail) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json({
        success: "Updated Successfully",
      });
    }
  );
});

//delete user
router.delete("/memberDetail/delete/:id", (req, res) => {
  users.findByIdAndRemove(req.params.id).exec((err, deleteUser) => {
    if (err)
      return res.status(400).json({
        message: "Delete unsuccessful",
        err,
      });
    return res.json({
      message: "Delete Successful",
      deleteUser,
    });
  });
});

module.exports = router;
