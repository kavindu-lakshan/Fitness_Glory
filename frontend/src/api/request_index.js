import axios from "axios";

const url = "http://localhost:5000/blogposts";

export const fetchBlogPost = (id) => axios.get(`/blogposts/${id}`);
export const fetchBlogPosts = () => axios.get(url);
export const createBlogPost = (newBlogPost) => axios.post(url, newBlogPost);
export const fetchBlogPostsBySearch = (searchQuery) =>
  axios.get(
    `/blogposts/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );
export const updateBlogPost = (id, updatedBlogPost) =>
  axios.patch(`${url}/${id}`, updatedBlogPost);
export const deleteBlogPost = (id) => axios.delete(`${url}/${id}`);
export const likeBlogPost = (id) =>
  axios.patch(`/blogposts/${id}/likeblogPost`);
