const mongoose = require("mongoose");

const PostMessage = require("../models/postMessage.js");

const getBlogPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getBlogPost = async (req, res) => {
  const { id } = req.params;

  try {
    const blogpost = await PostMessage.findById(id);

    res.status(200).json(blogpost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getBlogPostsBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query;

  try {
    const title = new RegExp(searchQuery, "i");

    const blogposts = await PostMessage.find({
      $or: [{ title }, { tags: { $in: tags.split(",") } }],
    });

    res.json({ data: blogposts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createBlogPost = async (req, res) => {
  const {
    title,
    message,
    selectedFile,
    creator,
    tags,
    mon,
    tue,
    wed,
    thu,
    fri,
    sat,
    sun,
    face,
    what,
    email,
  } = req.body;

  const newPostMessage = new PostMessage({
    title,
    message,
    selectedFile,
    creator,
    tags,
    mon,
    tue,
    wed,
    thu,
    fri,
    sat,
    sun,
    face,
    email,
    what,
  });

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const updateBlogPost = async (req, res) => {
  const { id: _id } = req.params;
  const blogpost = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with id: ");

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...blogpost, _id },
    { new: true }
  );

  res.json(updatedPost);
};
const deleteBlogPost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};

module.exports = {
  updateBlogPost,
  createBlogPost,
  getBlogPost,
  deleteBlogPost,
  getBlogPosts,
  getBlogPostsBySearch,
};
