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
  const { username, password, isAdmin } = req.body;

  const trainer = await Trainer.findOne({ username, isAdmin: false });
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

const authAdmin = asyncHandler(async (req, res) => {
  const { username, password, isAdmin } = req.body;

  const admin = await Trainer.findOne({ username, isAdmin: true });
  if (admin && (await admin.matchPassword(password))) {
    res.json({
      _id: admin._id,
      fname: admin.fname,
      lname: admin.lname,
      isAdmin: admin.isAdmin,
      username: admin.username,
      nic: admin.nic,
      dob: admin.dob,
      gender: admin.gender,
      mobile: admin.mobile,
      address: admin.address,
      qualifications: admin.qualifications,
      yrsexp: admin.yrsexp,
      pic: admin.pic,
      token: generateToken(admin._id),
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

const updateAdminProfile = asyncHandler(async (req, res) => {
  const admin = await Trainer.findById(req.trainer._id);

  if (admin) {
    admin.fname = req.body.fname || admin.fname;
    admin.lname = req.body.lname || admin.lname;
    admin.username = req.body.username || admin.username;
    admin.nic = req.body.nic || admin.nic;
    admin.dob = req.body.dob || admin.dob;
    admin.gender = req.body.gender || admin.gender;
    admin.mobile = req.body.mobile || admin.mobile;
    admin.address = req.body.address || admin.address;
    admin.qualifications = req.body.qualifications || admin.qualifications;
    admin.yrsexp = req.body.yrsexp || admin.yrsexp;
    admin.pic = req.body.pic || admin.pic;
    if (req.body.password) {
      admin.password = req.body.password;
    }

    const updatedAdmin = await admin.save();

    res.json({
      _id: updatedAdmin._id,
      fname: updatedAdmin.fname,
      lname: updatedAdmin.lname,
      isAdmin: updatedAdmin.isAdmin,
      username: updatedAdmin.username,
      nic: updatedAdmin.nic,
      dob: updatedAdmin.dob,
      gender: updatedAdmin.gender,
      mobile: updatedAdmin.mobile,
      address: updatedAdmin.address,
      qualifications: updatedAdmin.qualifications,
      yrsexp: updatedAdmin.yrsexp,
      pic: updatedAdmin.pic,
      token: generateToken(updatedAdmin._id),
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
  authAdmin,
  updateAdminProfile,
};
