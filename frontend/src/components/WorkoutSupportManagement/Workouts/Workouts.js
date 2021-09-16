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
  }, [history]);

  // console.log(workouts);

  return !workouts?.length ? (
    <CircularProgress />
  ) : (
    <div
      style={{
        backgroundImage:
          "url(" +
          "https://res.cloudinary.com/maldeniya99/image/upload/v1631461843/matthew-payne-4tHbsNGFp18-unsplash_teure1.jpg" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "10px 20px",
      }}
    >
      <div className="container">
        <h1 style={{ textAlign: "center", marginTop: "10px", color: "white" }}>
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
