import * as api from "../api/request_index";

export const getBlogPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING_BLOGPOST" });

    const { data } = await api.fetchBlogPost(id);

    dispatch({ type: "FETCH_POST_BLOGPOST", payload: { blogpost: data } });
  } catch (error) {
    console.log(error);
  }
};

export const getBlogPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBlogPosts();

    dispatch({ type: "FETCH_ALL_BLOGPOST", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createBlogPost = (blogpost) => async (dispatch) => {
  try {
    const { data } = await api.createBlogPost(blogpost);
    dispatch({ type: "CREATE_BLOGPOST", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateBlogPost = (id, blogpost) => async (dispatch) => {
  try {
    const { data } = await api.updateBlogPost(id, blogpost);

    dispatch({ type: "UPDATE_BLOGPOST", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const deleteBlogPost = (id) => async (dispatch) => {
  try {
    await api.deleteBlogPost(id);

    dispatch({ type: "DELETE_BLOGPOST", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const getBlogPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING_BLOGPOST" });
    const {
      data: { data },
    } = await api.fetchBlogPostsBySearch(searchQuery);

    dispatch({ type: "FETCH_BY_SEARCH_BLOGPOST", payload: { data } });
    dispatch({ type: " END_LOADING_BLOGPOST" });
  } catch (error) {
    console.log(error);
  }
};
