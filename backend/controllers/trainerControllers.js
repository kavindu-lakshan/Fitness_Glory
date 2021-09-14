const asyncHandler = require("express-async-handler");
const Trainer = require("../models/trainerModel");
const { use } = require("../routes/trainerRoutes");
const generateToken = require("../utils/generateToken");

const registerTrainer = asyncHandler(async (req, res) => {
  const {
    fname,
    lname,
    username,
    nic,
    dob,
    gender,
    mobile,
    address,
    qualifications,
    yrsexp,
    password,
    pic,
  } = req.body;

  const trainerExists = await Trainer.findOne({ username });
  if (trainerExists) {
    res.status(400);
    throw new Error("Trainer Already Exists");
  }

  const trainer = await Trainer.create({
    fname,
    lname,
    username,
    nic,
    dob,
    gender,
    mobile,
    address,
    qualifications,
    yrsexp,
    password,
    pic,
  });

  if (trainer) {
    res.status(201).json({
      _id: trainer._id,
      fname: trainer.fname,
      lname: trainer.lname,
      isAdmin: trainer.isAdmin,
      username: trainer.username,
      nic: trainer.nic,
      dob: trainer.dob,
      gender: trainer.gender,
      mobile: trainer.mobile,
      address: trainer.address,
      qualifications: trainer.qualifications,
      yrsexp: trainer.yrsexp,
      pic: trainer.pic,
      token: generateToken(trainer._id),
    });
  } else {
    res.status(400);
    throw new Error("Error Occurred!");
  }
});

const authTrainer = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const trainer = await Trainer.findOne({ username });
  if (trainer && (await trainer.matchPassword(password))) {
    res.json({
      _id: trainer._id,
      fname: trainer.fname,
      lname: trainer.lname,
      isAdmin: trainer.isAdmin,
      username: trainer.username,
      nic: trainer.nic,
      dob: trainer.dob,
      gender: trainer.gender,
      mobile: trainer.mobile,
      address: trainer.address,
      qualifications: trainer.qualifications,
      yrsexp: trainer.yrsexp,
      pic: trainer.pic,
      token: generateToken(trainer._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Username or Password!");
  }
});

const updateTrainerProfile = asyncHandler(async (req, res) => {
  const trainer = await Trainer.findById(req.trainer._id);

  if (trainer) {
    trainer.fname = req.body.fname || trainer.fname;
    trainer.lname = req.body.lname || trainer.lname;
    trainer.username = req.body.username || trainer.username;
    trainer.nic = req.body.nic || trainer.nic;
    trainer.dob = req.body.dob || trainer.dob;
    trainer.gender = req.body.gender || trainer.gender;
    trainer.mobile = req.body.mobile || trainer.mobile;
    trainer.address = req.body.address || trainer.address;
    trainer.qualifications = req.body.qualifications || trainer.qualifications;
    trainer.yrsexp = req.body.yrsexp || trainer.yrsexp;
    trainer.pic = req.body.pic || trainer.pic;
    if (req.body.password) {
      trainer.password = req.body.password;
    }

    const updatedTrainer = await trainer.save();

    res.json({
      _id: updatedTrainer._id,
      fname: updatedTrainer.fname,
      lname: updatedTrainer.lname,
      isAdmin: updatedTrainer.isAdmin,
      username: updatedTrainer.username,
      nic: updatedTrainer.nic,
      dob: updatedTrainer.dob,
      gender: updatedTrainer.gender,
      mobile: updatedTrainer.mobile,
      address: updatedTrainer.address,
      qualifications: updatedTrainer.qualifications,
      yrsexp: updatedTrainer.yrsexp,
      pic: updatedTrainer.pic,
      token: generateToken(updatedTrainer._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

module.exports = {
  registerTrainer,
  authTrainer,
  updateTrainerProfile,
};
