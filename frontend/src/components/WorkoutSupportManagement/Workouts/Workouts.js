import React, { useState, useEffect } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import Workout from "./Workout/Workout";
import useStyles from "./styles";
import Pagination from "../Pagination";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Workouts = ({ setCurrentId }) => {
  const { workouts } = useSelector((state) => state.workouts);
  const classes = useStyles();
  const query = useQuery();
  const history = useHistory();
  const page = query.get("page") || 1;
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("trainerInfo")) {
      history.push("/employee");
    }
  }, []);

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
        <div></div>
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
            <Workout
              workout={workout}
              setCurrentId={setCurrentId}
              key={workout._id}
            />
          ))}
      </Grid>
      &nbsp;
      <Pagination page={page} />
    </div>
  );
};

export default Workouts;
