import React, { useState } from "react";
import { Grid, CircularProgress, Button, TextField } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import Workout from "./Workout/Workout";
import Filters from "../Filter/Filters";
import useStyles from "./styles";
import Pagination from "../Pagination";
import { useDispatch } from "react-redux";
import { getWorkoutsBySearch } from "../../actions/workouts";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Workouts = ({ setCurrentId }) => {
  const { workouts } = useSelector((state) => state.workouts);
  const classes = useStyles();
  const query = useQuery();
  const history = useHistory();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();

  // console.log(workouts);

  const searchWorkout = () => {
    if (search.trim()) {
      dispatch(getWorkoutsBySearch({ search }));
      history.push(`/workouts/search?searchQuery=${search || "none"}`);
    } else {
      history.push("/workouts");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchWorkout();
    }
  };

  return !workouts?.length ? (
    <CircularProgress />
  ) : (
    <div>
      {/* <div style={{ display: "flex" }}>
        <input
          className="form-control"
          name="search"
          type="text"
          placeholder="Search"
          aria-label="Search"
          style={{ width: "500px", marginTop: "20px" }}
          value={search}
          onKeyPress={handleKeyPress}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          onClick={searchWorkout}
          className={classes.searchButton}
          color="primary"
          style={{ height: "30px", marginTop: "27px" }}
        >
          Search
        </Button>
      </div> */}
      {/* <div style={{ display: "flex" }}>
        <TextField
          name="search"
          label="Search Workouts"
          onKeyPress={handleKeyPress}
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "500px", marginTop: "20px" }}
        />
        <Button
          onClick={searchWorkout}
          className={classes.searchButton}
          color="primary"
          style={{ height: "30px", marginTop: "27px" }}
        >
          Search
        </Button>
      </div> */}
      {/* <div style={{ textAlign: "center", fontSize: "25px" }}></div> */}
      <div className="container">
        <div class="input-group" style={{ marginTop: "20px" }}>
          <input
            type="search"
            name="search"
            onKeyPress={handleKeyPress}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            class="form-control rounded"
            placeholder="Search Workout"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={searchWorkout}
          >
            search
          </button>
        </div>
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
      &nbsp;
      {/* <div style={{ marginLeft: "83%" }}> */}
      <Pagination page={page} />
      {/* </div> */}
    </div>
  );
};

export default Workouts;
