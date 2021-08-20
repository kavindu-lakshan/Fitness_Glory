const work = (workouts = [], action) => {
    switch (action.type) {
      case "FETCH_ALL":
        return action.payload;
      case "CREATE":
        return [...workouts, action.payload];
      case "UPDATE":
        return workouts.map((workout) =>
          workout._id === action.payload._id ? action.payload : workout
        );
      default:
        return workouts;
    }
  };
  
  export default work;
  