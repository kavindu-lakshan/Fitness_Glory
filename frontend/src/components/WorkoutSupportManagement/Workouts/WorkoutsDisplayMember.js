import React, { useState, useEffect } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
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
  const history = useHistory();
  const page = query.get("page") || 1;
  const [search, setSearch] = useState("");

  // console.log(workouts);

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      history.push("/member");
    }
  }, [history]);

  return !workouts?.length ? (
    <CircularProgress />
  ) : (
    <div>
      <div className="container">
        <h1 style={{ textAlign: "center", marginTop: "10px" }}>
          Workouts Library
        </h1>
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
            } else {
              return null;
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
