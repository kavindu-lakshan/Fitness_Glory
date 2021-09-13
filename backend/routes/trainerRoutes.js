const express = require("express");
const {
  registerTrainer,
  authTrainer,
  updateTrainerProfile,
  authAdmin,
  updateAdminProfile,
} = require("../controllers/trainerControllers");
const { protect } = require("../middlewares/authTrainer");
const router = express.Router();

router.route("/trainer-register").post(registerTrainer);
router.route("/trainer-login").post(authTrainer);
router.route("/admin-login").post(authAdmin);
router.route("/trainer-profile").post(protect, updateTrainerProfile);
router.route("/admin-profile").post(protect, updateAdminProfile);

module.exports = router;
