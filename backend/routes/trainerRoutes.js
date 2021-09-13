const express = require("express");
const {
  registerTrainer,
  authTrainer,
  updateTrainerProfile,
} = require("../controllers/trainerControllers");
const { protect } = require("../middlewares/authTrainer");
const router = express.Router();

router.route("/trainer-register").post(registerTrainer);
router.route("/trainer-login").post(authTrainer);
router.route("/trainer-profile").post(protect, updateTrainerProfile);

module.exports = router;
