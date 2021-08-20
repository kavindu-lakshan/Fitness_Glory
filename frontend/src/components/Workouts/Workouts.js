import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import Workout from "./Workout/Workout";
import Filters from "../Filter/Filters";
import useStyles from "./styles";

const Workouts = ({ setCurrentId }) => {
  const workouts = useSelector((state) => state.workouts);
  const classes = useStyles();

  console.log(workouts);

  return !workouts.length ? (
    <CircularProgress />
  ) : (
    <div>
      <div style={{ textAlign: "center", fontSize: "25px" }}>
        <Filters />
      </div>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {workouts.map((workout) => (
          // <Grid key={workout._id} item xs={12} sm={0} item>
          <Workout
            workout={workout}
            setCurrentId={setCurrentId}
            key={workout._id}
          />
          // </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Workouts;
