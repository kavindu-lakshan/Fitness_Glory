import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { createWorkout, updateWorkout } from "../../../actions/workouts";
import { useHistory } from "react-router-dom";
import "./style.css";

const Form = ({ currentId, setCurrentId }) => {
  const [workoutData, setWorkoutData] = useState({
    workout_name: "",
    workout_category: "",
    muscle_group: "",
    starting_position_img: "",
    mid_position_img: "",
    instructions: "",
    action: "",
    tips: "N/A",
  });

  const [nameError, setNameError] = useState({});
  const [categoryError, setCategoryError] = useState({});
  const [muscleError, setMuscleError] = useState({});
  const [instructionError, setInstructionError] = useState({});
  const [actionError, setActionError] = useState({});

  const workout = useSelector((state) =>
    currentId ? state.workouts.workouts.find((p) => p._id === currentId) : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (workout) setWorkoutData(workout);
  }, [workout]);

  useEffect(() => {
    if (!localStorage.getItem("trainerInfo")) {
      history.push("/employee");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = formValidation();

    if (isValid) {
      if (currentId) {
        dispatch(updateWorkout(currentId, workoutData));
        alert("Workout Updated Successfully");
        history.push("/employee/workouts");
      } else {
        dispatch(createWorkout(workoutData));
        alert("Workout Created Successfully");
        history.push("/employee/workouts");
      }
      clear();
    }
  };

  const formValidation = () => {
    let nameError = {};
    let categoryError = {};
    let muscleError = {};
    let instructionError = {};
    let actionError = {};

    let isValid = true;

    if (workoutData.workout_name === "") {
      nameError.workoutName = "Workout name is required";
      isValid = false;
    } else {
      nameError.workoutName = null;
      isValid = true;
    }

    if (workoutData.workout_category === "") {
      categoryError.workoutCategory = "Workout Category is required";
      isValid = false;
    }

    if (workoutData.muscle_group === "") {
      muscleError.muscleGroup = "Muscle Group is required";
      isValid = false;
    }

    if (workoutData.instructions === "") {
      instructionError.instruction = "Instruction is required";
      isValid = false;
    }

    if (workoutData.action === "") {
      actionError.action = "Action is required";
      isValid = false;
    }

    setNameError(nameError);
    setCategoryError(categoryError);
    setMuscleError(muscleError);
    setInstructionError(instructionError);
    setActionError(actionError);
    return isValid;
  };

  const clear = () => {
    setCurrentId(null);
    setWorkoutData({
      workout_name: "",
      workout_category: "",
      muscle_group: "",
      starting_position_img: "",
      mid_position_img: "",
      instructions: "",
      action: "",
      tips: "",
    });

    setNameError({});
    setCategoryError({});
    setMuscleError({});
    setInstructionError({});
    setActionError({});
  };

  const add = () => {
    setWorkoutData({
      workout_name: "Ab Rollout (Ball)",
      workout_category: "Cardio",
      muscle_group: "Abs",
      starting_position_img: "",
      mid_position_img: "",
      instructions:
        "Lie on your knees, place your hands on top of the ball in front of you, arms extended and back straight.",
      action:
        "Keeping your back and arms extended, roll on top of the ball until your upper arms are pressed against it and pull yourself back up after a short pause.",
      tips: "Keep your arms extended and your back straight throughout.",
    });
  };

  return (
    <div className="wrapper">
      <div className="title">{currentId ? "Edit" : "Create New"} Workout</div>
      <div className="form">
        <div className="input_field">
          <label>Workout Name *</label>
          <input
            type="text"
            className="input"
            value={workoutData.workout_name}
            onChange={(e) =>
              setWorkoutData({ ...workoutData, workout_name: e.target.value })
            }
          />
        </div>
        {Object.keys(nameError).map((key) => {
          return <div className="error">{nameError[key]}</div>;
        })}

        <div className="input_field">
          <label>Workout Category *</label>
          <div className="custom_select">
            <select
              value={workoutData.workout_category}
              onChange={(e) =>
                setWorkoutData({
                  ...workoutData,
                  workout_category: e.target.value,
                })
              }
            >
              <option value="">Select</option>
              <option value="Cardio">Cardio</option>
              <option value="Weights">Weights</option>
            </select>
          </div>
        </div>
        {Object.keys(categoryError).map((key) => {
          return <div className="error">{categoryError[key]}</div>;
        })}

        <div className="input_field">
          <label>Muscle Group *</label>
          <input
            type="text"
            className="input"
            value={workoutData.muscle_group}
            onChange={(e) =>
              setWorkoutData({ ...workoutData, muscle_group: e.target.value })
            }
          />
        </div>
        {Object.keys(muscleError).map((key) => {
          return <div className="error">{muscleError[key]}</div>;
        })}

        <div className="input_field">
          <label>Instructions *</label>
          <textarea
            className="textarea"
            value={workoutData.instructions}
            onChange={(e) =>
              setWorkoutData({ ...workoutData, instructions: e.target.value })
            }
          />
        </div>
        {Object.keys(instructionError).map((key) => {
          return <div className="error">{instructionError[key]}</div>;
        })}

        <div className="input_field">
          <label>Action *</label>
          <textarea
            className="textarea"
            value={workoutData.action}
            onChange={(e) =>
              setWorkoutData({ ...workoutData, action: e.target.value })
            }
          />
        </div>
        {Object.keys(actionError).map((key) => {
          return <div className="error">{actionError[key]}</div>;
        })}

        <div className="input_field">
          <label>Tips</label>
          <textarea
            className="textarea"
            value={workoutData.tips}
            onChange={(e) =>
              setWorkoutData({ ...workoutData, tips: e.target.value })
            }
          />
        </div>

        <div className="input_field">
          <label>Starting Position Image *</label>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setWorkoutData({
                ...workoutData,
                starting_position_img: base64,
              })
            }
          />
        </div>

        <div className="input_field">
          <label>Mid Position Image *</label>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setWorkoutData({ ...workoutData, mid_position_img: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          onClick={handleSubmit}
          fullWidth
        >
          Submit
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          size="large"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={add}
          fullWidth
        >
          DEMO
        </Button>
      </div>
    </div>
  );
};

export default Form;
