import axios from 'axios';

const url = 'http://localhost:5000/preposts';

export const fetchPrePost = (id) => axios.get(`/preposts/${id}`);
export const fetchPrePosts = () => axios.get(url);
export const createPrePost = (newPrePost) => axios.post(url, newPrePost);
export const likePrePost = (id) => axios.patch(`${url}/${id}/likePrePost`);
export const updatePrePost = (id, updatedPrePost) => axios.patch(`${url}/${id}`, updatedPrePost);
export const deletePrePost = (id) => axios.delete(`${url}/${id}`);