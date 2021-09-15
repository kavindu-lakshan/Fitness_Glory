export const blogposts = (blogposts = [], action) => {
  switch (action.type) {
    case "FETCH_POST_BLOGPOST":
      return action.payload;

    case "FETCH_BY_SEARCH_BLOGPOST":
      return action.payload;
    case "FETCH_ALL_BLOGPOST":
      return action.payload;

    case "CREATE_BLOGPOST":
      return [...blogposts, action.payload];

    case "UPDATE_BLOGPOST":
      return blogposts.map((blogpost) =>
        blogpost._id === action.payload._id ? action.payload : blogpost
      );
    case "DELETE_BLOGPOST":
      return blogposts.filter((blogpost) => blogpost._id !== action.payload);
    default:
      return blogposts;
  }
};
