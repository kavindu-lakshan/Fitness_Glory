import React from "react";
import { Button, Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";
import { Link } from "react-router-dom";

const Workout = ({ workout, setCurrentId }) => {
  return (
    <Grid item xs={12} sm={6}>
      <br></br>
      <div className="card-header">
        {workout.workout_name}
        <br></br>
        <div style={{ fontSize: "12px" }}>
          Created {moment(workout.createdAt).fromNow()}
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">
          Workout Category: {workout.workout_category}
        </h5>
        <p className="card-text">
          Main Targer Muscle Group: {workout.muscle_group}
        </p>
        <p className="card-text">Action: {workout.action}</p>
        <p className="card-text">Tips: {workout.tips}</p>
        <img
          src={workout.starting_position_img}
          style={{ height: "100px", width: "100px" }}
          alt=""
        />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          src={workout.mid_position_img}
          style={{ height: "100px", width: "100px" }}
          alt=""
        />
        <br></br>
      </div>
      <div className="card-header">
        <Link
          to={"/trainer/workouts/update/" + workout._id}
          style={{ textDecoration: "none" }}
        >
          <Button
            size="small"
            color="primary"
            onClick={() => setCurrentId(workout._id)}
          >
            <EditIcon fontSize="small" />
            &nbsp; Update
          </Button>
        </Link>
        <Button size="small" color="primary" onClick={() => {}}>
          <DeleteIcon fontSize="small" />
          &nbsp; Delete
        </Button>
      </div>
    </Grid>
  );
};

export default Workout;
