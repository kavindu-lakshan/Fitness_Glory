const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require ('dotenv');
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();

const workoutRoutes = require("./routes/workouts.js");
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.get("/test", (req, res) => {
    res.send("It works"); 
});

app.use(express.json());
app.use(cookieParser());
 
//connect to mongoDB
const URL= process.env.MONGODB_URL;

mongoose.connect(URL,{
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

app.use("/workouts", workoutRoutes);

//B Shehan

//Dulshan

//Amantha

//Janudi

//Manushi

//Sandani

app.listen(PORT,()=>{
    console.log(`Server running on PORT: ${PORT}`)
})
