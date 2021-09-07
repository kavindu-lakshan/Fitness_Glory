import React, { useState } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import WorkoutDisplayMember from "./Workout/WorkoutDisplayMember";
import useStyles from "./styles";
import PaginationMember from "../PaginationMember";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const WorkoutsDisplayMember = ({ setCurrentId }) => {
  const { workouts } = useSelector((state) => state.workouts);
  const classes = useStyles();
  const query = useQuery();
  const page = query.get("page") || 1;
  const [search, setSearch] = useState("");

  console.log(workouts);

  return !workouts?.length ? (
    <CircularProgress />
  ) : (
    <div>
      <div className="container">
        <div className="input-group" style={{ marginTop: "20px" }}>
          <input
            type="search"
            name="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="form-control rounded"
            placeholder="Search Workout"
            aria-label="Search"
            aria-describedby="search-addon"
          />
        </div>
      </div>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {workouts
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (
              val.workout_name.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          .map((workout) => (
            <WorkoutDisplayMember
              workout={workout}
              setCurrentId={setCurrentId}
              key={workout._id}
            />
          ))}
      </Grid>
      &nbsp;
      <PaginationMember page={page} />
    </div>
  );
};

export default WorkoutsDisplayMember;
