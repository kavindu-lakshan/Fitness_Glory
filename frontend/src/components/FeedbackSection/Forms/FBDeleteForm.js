import React from 'react';
import {useForm} from 'react-hook-form'
import Button from '@material-ui/core/Button';


export const FBDeleteForm  = ({feedbacks, onSubmit}) =>{
    
    const {register, handleSubmit} = useForm({defaultValues: {
        username: feedbacks ? feedbacks.username: "",
        email: feedbacks ? feedbacks.email: "",
        topic: feedbacks ? feedbacks.topic: "",
        feedback: feedbacks ? feedbacks.feedback: "",
        ratings: feedbacks ? feedbacks.ratings: ""
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
        <div className=" col-md-6">
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
            <input style={disInputFieldStyle} className="form-control" {...register("email", { required: true })} type ="text" name="email" id="email" disabled="true"/>
        </div>
        <div className=" col-md-4">
            <label style={labelStyle} for="text">Feedback Topic:</label>
            <input style={disInputFieldStyle} className="form-control" {...register("topic", { required: true })} type ="text" name="topic" id="topic" disabled="true"/>
        </div>
        </div>
        <br/>
        <div className=" col-md-6">
            <label style={labelStyle} for="text">Feedback:</label>
            <input style={disInputFieldStyle} className="form-control" {...register("feedback", { required: true })} type ="text" name="feedback" id="feedback" disabled="true"/>
        </div>
        </div>
        <br/>
        <div className=" col-md-3">
            <label style={labelStyle} for="text">Ratings:</label>
            <input style={disInputFieldStyle} className="form-control" {...register("ratings", { required: true })} type ="text" name="ratings" id="ratings" disabled="true"/>
        </div><br/>
        <div className="">
        <center><Button style={btn} size="large" type="submit" className="btn btn-primary">Delete Feedback</Button></center><br/><br/>
        </div>
        </form> 
    )

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