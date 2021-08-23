import React, { useState } from 'react';
import {useForm} from 'react-hook-form'


export const AnswerForm = ({questions, onSubmit}) =>{
    
    const {register, handleSubmit} = useForm({defaultValues: {
        mUsernameQ: questions ? questions.mUsername: "",
        qTopic: questions ? questions.qTopic:"",
        date: questions ? questions.date: "",
        question: questions ? questions.question:"",
        QID:questions? questions.QID:"",
        answer: questions? questions.answer:"",
    }})

    const submitHandler = handleSubmit((data) =>{
        onSubmit(data)
    })
   
    return(
        <form onSubmit={submitHandler}>
            <h4>Question Details</h4>
            <div class="row">
                <div class="col-6 col-sm-6">
                    <label for="mUsernameQ" className="form-label">Posted By</label>
                    <input type="text" className="form-control" {...register("mUsernameQ", { required: true })} id="mUsernameQ" name="mUsernameQ" disabled="true"/>
                </div>
                <div class="w-100"></div>
                <br/>
                <div class="col-6 col-sm-3">
                    <label for="qTopic" className="form-label">Question Topic</label>
                    <input type="text" className="form-control" {...register("qTopic", { required: true })} id="qTopic" name="qTopic" disabled="true"/>
                </div>
                <div class="col-6 col-sm-3">
                    <label for="date" className="form-label">Date</label>
                    <input type="text" className="form-control"{...register("date", { required: true })} id="date" name="date" disabled="true"/>
                </div>
                <div class="w-100"></div>
                <br/>
                <div class="col-6 col-sm-6">
                    <label for="qDescription" className="form-label">Question Description</label>
                    <input type="text" className="form-control" {...register("question", { required: true })} id="question" name="question" disabled="true"/>
                </div>
            </div>
            <br/>
            <hr/>
            <h4>Provide Answer</h4>
            <div className="row">
                <div class="col-6 col-sm-3">
                    <label for="QID" className="form-label">Question ID</label>
                    <input type="text" className="form-control" {...register("QID", { required: true })} id="QID" name="QID"/>
                </div>
                <div class="col-6 col-sm-3">
                    <label for="mUsername" className="form-label">Member Username</label>
                    <input type="text" className="form-control"{...register("mUsername", { required: true })} id="mUsername" name="mUsername"/>
                </div>
                <div class="w-100"></div>
                <br/>
                <div class="col-6 col-sm-6">
                    <label for="qTopic" className="form-label">Question Topic</label>
                    <input type="text" className="form-control"{...register("qTopic", { required: true })} id="qTopic" name="qTopic"/>
                </div>
                <div class="w-100"></div>
                <div class="col-6 col-sm-6">
                    <label for="answer" className="form-label">Answer</label>
                    <input type="text" className="form-control" {...register("answer", { required: true })} id="answer" name="answer"/>
                </div>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary">Post Answer</button><br/><br/>
        </form>
    )
}