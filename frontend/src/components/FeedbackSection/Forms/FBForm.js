import React from 'react';
import {useForm} from 'react-hook-form'
import Button from '@material-ui/core/Button';
import { useSelector } from "react-redux";

export const FBForm = ({feedbacks, onSubmit}) =>{
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const member_email = userInfo.email;

    const {register, handleSubmit, formState:{errors}} = useForm({defaultValues: {
        username: feedbacks.username  ? feedbacks.username: "",
        email: `${member_email}`,
        topic: feedbacks.topic ? feedbacks.topic: "",
        feedback: feedbacks.feedback  ? feedbacks.feedback: "",
        ratings: feedbacks.ratings  ? feedbacks.ratings: ""
    }})

    const submitHandler = handleSubmit((data) =>{
        onSubmit(data)
    }) 
   
    return(
        <form onSubmit={submitHandler}>
        <div>
        <hr/>
        <div style={head}>
            <h4 style={labelStyle}>TRAINER DETAILS</h4>
        </div><br/>
        <div>
            <label style={labelStyle} for="text">Trainer Username:</label>
            <input style={disInputFieldStyle} className="form-control" {...register("username", { required: true })} type ="text" name="username" id="username" disabled="true"/>
        </div>

        <hr/>
        <div style={head}>
            <h4 style={labelStyle}>MEMBER DETAILS</h4>
        </div><br/>
        <div className=" row">
        <div className=" col-md-4">
            <label style={labelStyle} for="text">Member Email:</label>
            <input style={disInputFieldStyle} className="form-control" {...register("email", { required: true })} type ="text" name="email" id="email"/>
            {errors.email && (<small style={{color:'red'}}>Please enter your Email! You Cannot leave this field empty</small>)}
        </div>
        <div className=" col-md-4">
            <label style={labelStyle} for="text">Feedback Topic:</label>
            <input style={inputFieldStyle} className="form-control" {...register("topic", { required: true })} type ="text" name="topic" id="topic"/>
            {errors.topic && (<small style={{color:'red'}}>Please enter a topic for Feedback! You Cannot leave this field empty</small>)}
        </div>
        </div>
        <br/>
        <div className=" col-md-6">
            <label style={labelStyle} for="text">Feedback:</label>
            <input style={inputFieldStyle} className="form-control" {...register("feedback", { required: true })} type ="text" name="feedback" id="feedback"/>
            {errors.feedback && (<small style={{color:'red'}}>Please fill the feedback field! You Cannot leave this field empty</small>)}
        </div>
        </div>
        <br/>
        <div className=" col-md-3">
            <label style={labelStyle} for="text">Ratings:</label>
            <input style={inputFieldStyle} className="form-control" {...register("ratings", {required:true})} type ="number" name="ratings" id="ratings"/>
            {errors.ratings && (<small style={{color:'red'}}>Please fill the ratings field! You cannot leave this field empty</small>)}
        </div><br/>
        <div className="">
        <center><Button style={btn} size="large" type="submit" className="btn btn-primary">Submit Feedback</Button></center><br/><br/>
        </div>
        </form> 
    )

}

const inputFieldStyle={
    border:'3px solid white',
    background:'transparent',
    color:'white',
    fontFamily: 'Helvetica',
    fontWeight:'bold',
}

const disInputFieldStyle={
    border:'3px solid white',
    background:'transparent',
    color:'silver',
    fontFamily: 'Helvetica',
    fontWeight:'bold',
}

const labelStyle={
    color:'white',
    fontFamily: 'Helvetica',
    fontWeight:'bold',
    fontSize:'15pt',
    textTransform:'none' 
}

const head ={
    padding: '10px',
    textAlignVertical: "center",
    textAlign: "center",
    background: '#04938b',
    textTransform:'uppercase' 
}

const btn ={
    backgroundColor: 'transparent', 
    border: '2px solid #04938b',
    color:'#04d0c4'
}