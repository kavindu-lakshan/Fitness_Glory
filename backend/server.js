const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require ('dotenv');
const app = express();
const cookieParser = require("cookie-parser");

const workout_programs_routes = require('./routes/workout_programs');


// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import cors from 'body-cors';
// import dotenv from 'dotenv';
// import cookieParser from 'body-cookie';

require("dotenv").config();


const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}));
app.use(bodyParser.json());

app.use(workout_programs_routes); 

app.get("/test", (req, res) => {
    res.send("It works"); 
});

app.use(express.json());
app.use(cookieParser());
 
//connect to mongoDB
const URL= process.env.MONGODB_URL;

//shehan's testing DB url
const shehanBartholomeuszURL = 'mongodb+srv://Shehanx86:test123@cluster0.prwte.mongodb.net/fitness_glory_shehan?retryWrites=true&w=majority';

mongoose.connect(shehanBartholomeuszURL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})
const connection =mongoose.connection;
connection.once("open", ()=>{
    console.log("connection success")
})


//Lakshan

//K shehan

//B Shehan

//Dulshan

//Amantha

//Janudi

//Manushi

//Sandani

app.listen(PORT,()=>{
    console.log(`Server running on PORT: ${PORT}`)
})
