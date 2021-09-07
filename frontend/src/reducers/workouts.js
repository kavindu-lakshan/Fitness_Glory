export const work = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return {
        ...state,
        workouts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case "FETCH_WORKOUT":
      return { ...state, workout: action.payload };
    case "CREATE":
      return [...state, action.payload];
    case "UPDATE":
      return state.map((workout) =>
        workout._id === action.payload._id ? action.payload : workout
      );
    case "DELETE":
      return state.filter((workout) => workout._id !== action.payload);
    default:
      return state;
  }
};
