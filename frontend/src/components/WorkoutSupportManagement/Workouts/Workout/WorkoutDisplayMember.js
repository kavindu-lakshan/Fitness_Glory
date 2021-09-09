import React from "react";
import { Grid, ButtonBase } from "@material-ui/core";
import moment from "moment";
import { useHistory } from "react-router";

const WorkoutDisplayMember = ({ workout, setCurrentId }) => {
  const history = useHistory();
  const openWorkout = () => history.push(`/member/workouts/${workout._id}`);

  return (
    <Grid item xs={6} sm={3}>
      <br></br>
      <div className="card border-dark text-dark">
        <div className="card-header">
          {workout.workout_name}
          <br></br>
          <div style={{ fontSize: "12px" }}>
            Created {moment(workout.createdAt).fromNow()}
          </div>
        </div>

        <ButtonBase onClick={openWorkout}>
          <div className="card-body" style={{ fontSize: "14px" }}>
            <h6 className="card-title">
              Workout Category: {workout.workout_category}
            </h6>
            <p className="card-text">
              Main Targert Muscle Group: {workout.muscle_group}
            </p>
            {/* <p className="card-text">Instruction: {workout.instructions}</p>
          <p className="card-text">Action: {workout.action}</p>
          <p className="card-text">Tips: {workout.tips}</p> */}
            <img
              src={workout.starting_position_img}
              style={{ height: "85px", width: "85px" }}
              alt=""
            />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <img
              src={workout.mid_position_img}
              style={{ height: "85px", width: "85px" }}
              alt=""
            />
            <br></br>
          </div>
        </ButtonBase>
      </div>
    </Grid>
  );
};

export default WorkoutDisplayMember;
