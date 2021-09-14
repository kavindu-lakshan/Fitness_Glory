const express = require("express");
const {
  getBlogPostsBySearch,
  getBlogPosts,
  getBlogPost,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
} = require("../controllers/blogposts.js");

const router = express.Router();
router.get("/search", getBlogPostsBySearch);
router.get("/", getBlogPosts);
router.get("/:id", getBlogPost);
router.post("/", createBlogPost);

router.patch("/:id", updateBlogPost);
router.delete("/:id", deleteBlogPost);
module.exports = router;
