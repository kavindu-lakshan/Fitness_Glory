import React, { useEffect } from "react";
import { Paper, Typography, Divider } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getWorkout } from "../../../actions/workouts";
import useStyles from "./styles";

const WorkoutDetails = () => {
  const { workout, workouts } = useSelector((state) => state.workouts);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getWorkout(id));
  }, [id]);

  if (!workout) return null;

  return (
    <div className="container">
      &nbsp;
      <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={4}>
        <div className={classes.card}>
          <div className={classes.section}>
            <Typography variant="h6" component="h6">
              Workout Name - {workout.workout_name}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="h2"
            >
              Workout Category - {workout.workout_category}
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
            <Typography variant="body1">
              <strong>Muscle Group - {workout.muscle_group}</strong>
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
            <Typography variant="body1">
              <strong>Instructions - {workout.instructions}</strong>
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
            <Typography variant="body1">
              <strong>Action - {workout.action}</strong>
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
            <Typography variant="body1">
              <strong>Tips - {workout.tips}</strong>
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
          </div>
          <div className={classes.imageSection}>
            <img
              className={classes.media}
              src={workout.starting_position_img}
            />
            <img className={classes.media} src={workout.mid_position_img} />
          </div>
        </div>
      </Paper>
    </div>

    // <div className="container">
    //   <Grid item xs={6}>
    //     <br></br>
    //     <div className="card-header">
    //       {workout.workout_name}
    //       <br></br>
    //       <div style={{ fontSize: "12px" }}>
    //         Created {moment(workout.createdAt).fromNow()}
    //       </div>
    //     </div>
    //     <div className="card-body" style={{ fontSize: "14px" }}>
    //       <h6 className="card-title">
    //         Workout Category: {workout.workout_category}
    //       </h6>
    //       <p className="card-text">
    //         Main Targer Muscle Group: {workout.muscle_group}
    //       </p>
    //       <p className="card-text">Instruction: {workout.instructions}</p>
    //       <p className="card-text">Action: {workout.action}</p>
    //       <p className="card-text">Tips: {workout.tips}</p>
    //       <img
    //         src={workout.starting_position_img}
    //         style={{ height: "85px", width: "85px" }}
    //
    //       />
    //       &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    //       <img
    //         src={workout.mid_position_img}
    //         style={{ height: "85px", width: "85px" }}
    //
    //       />
    //     </div>
    //   </Grid>
    // </div>
  );
};

export default WorkoutDetails;
