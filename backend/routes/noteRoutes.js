const express = require("express");
const {
  getNoteById,
  getNotes,
  CreateNote,
  DeleteNote,
  UpdateNote,
} = require("../controllers/noteController.js");
const router = express.Router();

const { protect } = require("../middlewares/authAdminMiddleware");

router.route("/").get(protect, getNotes);
router
  .route("/:id")
  .get(getNoteById)
  .delete(protect, DeleteNote)
  .put(protect, UpdateNote);
router.route("/create").post(protect, CreateNote);

module.exports = router;
