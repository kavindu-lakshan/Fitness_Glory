const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
const adminRoutes = require("./routes/admin");
const enroll_programs = require("./routes/enroll_programs");
const workout_programs_routes = require("./routes/workout_programs");

// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import cors from 'body-cors';
// import dotenv from 'dotenv';
// import cookieParser from 'body-cookie';

require("dotenv").config();

const workoutRoutes = require("./routes/workouts.js");
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.get("/test", (req, res) => {
  res.send("It works");
});

app.use(express.json());
app.use(cookieParser());

//connect to mongoDB
/*const URL = process.env.MONGODB_URL;
mongoose.connect(URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("connection success");
});*/

//Lakshan

app.use("/FitnessGlory/users", userRoutes);

const memDetailsRoute = require("./routes/memberDetails");
app.use(memDetailsRoute);

//K shehan

app.use("/workouts", workoutRoutes);

//B Shehan
app.use(enroll_programs);
app.use(workout_programs_routes);

//Dulshan
const qRouter = require("./routes/Question.js");
app.use("/qu", qRouter);

const aRouter = require("./routes/Answer.js");
app.use("/an", aRouter);

const feedbackRouter = require("./routes/Feedback.js");
app.use("/fb", feedbackRouter);

const trainerRouter = require("./routes/Trainer.js");
app.use("/tr", trainerRouter);

//Amantha
const trainerRoutes = require("./routes/trainerRoutes");
app.use("/FitnessGlory/trainers", trainerRoutes);
const trainerDetailsRoute = require("./routes/trainerDetails");
app.use(trainerDetailsRoute);
const eventRouter = require("./routes/events.js");
//http://localhost:5000/event
app.use("/event", eventRouter);

const interest = require("./routes/interestRoutes.js");
app.use('/event-interest',interest);

/*Janudi ---> Start*/
const CleanersRouter = require("./routes/Cleaners");
app.use("/Cleaners", CleanersRouter);

const DeleteRoute = require("./routes/Employee_Delete");
app.use("/Employee_Delete", DeleteRoute);

const LeaveRouter = require("./routes/Leaves");
app.use("/Leaves", LeaveRouter);

const SalaryRouter = require("./routes/Employee_Salary");
app.use("/Employee_Salary", SalaryRouter);
/*Janudi ---> End*/

//Manushi
const zpostRoutes = require("./routes/zposts");
app.use(zpostRoutes);

//Sandani
const XpostRoutes = require("./routes/Xposts");
app.use(XpostRoutes);

//Admin
app.use("/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
