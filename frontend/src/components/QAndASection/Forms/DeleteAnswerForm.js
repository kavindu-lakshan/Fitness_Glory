import React, { useState } from 'react';
import {useForm} from 'react-hook-form'


export const DeleteAnswerForm = ({answers, onSubmit}) =>{
    
    const {register, handleSubmit} = useForm({defaultValues: {
        mUsername: answers ? answers.mUsername: "",
        qTopic: answers ? answers.qTopic:"",
        question: answers ? answers.question:"",
        QID:answers? answers.QID:"",
        answer: answers? answers.answer:"",
    }})

    const submitHandler = handleSubmit((data) =>{
        onSubmit(data)
    })
   
    return(
        <form onSubmit={submitHandler}>
            <h4>Question Details</h4>
            <div class="row">
                <br/>
                <div class="col-6 col-sm-6">
                    <label for="qTopic" className="form-label">Question Topic</label>
                    <input type="text" className="form-control" {...register("qTopic", { required: true })} id="qTopic" name="qTopic" disabled="true"/>
                </div>
                <div class="w-100"></div>
                <br/>
            </div>
            <br/>
            <hr/>
            <h4>Provide Answer</h4>
            <div className="row">
                <div class="col-6 col-sm-6">
                    <label for="mUsername" className="form-label">Member Username</label>
                    <input type="text" className="form-control"{...register("mUsername", { required: true })} id="mUsername" name="mUsername" disabled="true"/>
                </div>
                <div class="w-100"></div>
                <br/>
                <div class="w-100"></div>
                <div class="col-6 col-sm-6">
                    <label for="answer" className="form-label">Answer</label>
                    <input type="text" className="form-control" {...register("answer", { required: true })} id="answer" name="answer" disabled="ture"/>
                </div>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary">Confirm Delete</button><br/><br/>
        </form>
    )
}