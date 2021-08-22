import React, { useState } from 'react';
import {useForm} from 'react-hook-form'


export const QDeleteForm = ({questions, onSubmit}) =>{
    
    const {register, handleSubmit} = useForm({defaultValues: {
        mUsername: questions ? questions.mUsername: "",
        qTopic: questions ? questions.qTopic: "",
        question: questions ? questions.question: "",
        date: questions ? questions.date: ""
    }})

    const submitHandler = handleSubmit((data) =>{
        onSubmit(data)
    })
   
    return(
        <form onSubmit={submitHandler}>
        <h4>Question Details</h4>
        <div className="form-group">
        <div className="form-group col-md-100">
            <label for="cUsername" className="form-label">Member Username</label>
            <input className="form-control" {...register("mUsername", { required: true })} type ="text" name="mUsername" id="mUsername" disabled = "true"/>
        <br/>
        </div>
        <div className="form-group col-md-100">
            <label for="qTopic" className="form-label">Question Topic</label>
            <input className="form-control" {...register("qTopic", { required: true })} type ="text" name="qTopic" id="qTopic" disabled="true"/>
        <br/>
        </div>

        <div className="form-group col-md-100">
            <label for="question" className="form-label">Question Description</label>
            <input className="form-control" {...register("question", { required: true })} type ="text" name="question" id="question" disabled="true"/>
        <br/>
        </div>
        <div className="form-group col-md-100">
        <label for="date" className="form-label">Select Date</label>
            <input className="form-control" {...register("date", { required: true })} type ="text" name="date" id="date" disabled="true"/>
        </div>
        <br/>
        </div>
            <button type="submit" className="btn btn-primary">Confirm Delete</button><br/><br/>
        </form>
    )

}