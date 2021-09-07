import React from "react";
import { Button, Grid, ButtonBase } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteWorkout } from "../../../actions/workouts";
import { useHistory } from "react-router";

const Workout = ({ workout, setCurrentId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const openWorkout = () => history.push(`/workouts/${workout._id}`);

  return (
    <Grid item xs={6} sm={3}>
      <br></br>
      <div class="card border-dark text-dark">
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
          <Button
            size="small"
            color="primary"
            onClick={() => {
              if (window.confirm("Are you sure you want to delete this")) {
                dispatch(deleteWorkout(workout._id));
                history.push("/trainer/workouts");
              }
            }}
          >
            <DeleteIcon fontSize="small" />
            &nbsp; Delete
          </Button>
        </div>
      </div>
    </Grid>
  );
};

export default Workout;
