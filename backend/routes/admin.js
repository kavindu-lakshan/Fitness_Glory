const express = require("express");
const {
  authAdmin,
  updateAdminProfile,
} = require("../controllers/adminController");
const { protect } = require("../middlewares/authAdminMiddleware");
const router = express.Router();

router.route("/login").post(authAdmin);
router.route("/profile").post(protect, updateAdminProfile);

module.exports = router;
