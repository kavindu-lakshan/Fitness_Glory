import React from 'react';
import {useForm} from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
        <div>
        <div style={head}>
        <h4 style={labelStyle}>Question Details</h4>
        </div>

        <form onSubmit={submitHandler} >
            <br/>
            <div>
            <div class="row">
                <div class="col-6 col-sm-6">
                    <label style={labelStyle} for="mUsernameQ" className="form-label">Posted By</label>
                    <input style={inputFieldStyle} type="text" className="form-control" {...register("mUsernameQ", { required: true })} id="mUsernameQ" name="mUsernameQ" disabled="true"/>
                </div>
                <div class="w-100"></div>
                <br/>
                <div class="col-6 col-sm-3">
                    <label style={labelStyle} for="qTopic" className="form-label">Question Topic</label>
                    <input style={inputFieldStyle} type="text" className="form-control" {...register("qTopic", { required: true })} id="qTopic" name="qTopic" disabled="true"/>
                </div>
                <div class="col-6 col-sm-3">
                    <label style={labelStyle} for="date" className="form-label">Date</label>
                    <input style={inputFieldStyle} type="text" className="form-control"{...register("date", { required: true })} id="date" name="date" disabled="true"/>
                </div>
                <div class="w-100"></div>
                <br/>
                <div class="col-6 col-sm-6">
                    <label style={labelStyle} for="qDescription" className="form-label">Question Description</label>
                    <input style={inputFieldStyle} type="text" className="form-control" {...register("question", { required: true })} id="question" name="question" disabled="true"/>
                </div>
            </div>
            <br/>
            </div>
            <hr/>
            <div style={head}>
                <h4 style={labelStyle}>Provide Answer</h4>
            </div>
            <br/>
            <div className="row">
                <div class="col-6 col-sm-3">
                    <label style={labelStyle} for="QID" className="form-label">Question ID</label>
                    <input style={inputFieldStyle} type="text" className="form-control" {...register("QID", { required: true })} id="QID" name="QID"/>
                </div>
                <div class="col-6 col-sm-3">
                    <label style={labelStyle} for="mUsername" className="form-label">Member Username</label>
                    <input style={inputFieldStyle} type="text" className="form-control"{...register("mUsername", { required: true })} id="mUsername" name="mUsername"/>
                </div>
                <div class="w-100"></div>
                <br/>
                <div class="col-6 col-sm-6">
                    <label style={labelStyle} for="qTopic" className="form-label">Question Topic</label>
                    <input  style={inputFieldStyle} type="text" className="form-control"{...register("qTopic", { required: true })} id="qTopic" name="qTopic"/>
                </div>
              
                <div class="w-100"></div>
                <br/>
                <div class="col-6 col-sm-6">
                    <label style={labelStyle} for="answer" className="form-label">Answer</label>
                    <input style={inputFieldStyle} type="text" className="form-control" {...register("answer", { required: true })} id="answer" name="answer"/>
                </div>
            </div>
            <br/>
            <br/>
            <center><Button style={btn} size="large" type="submit" className="btn btn-primary">Post Answer</Button></center><br/><br/>
        </form>
        </div>

    )
}

const inputFieldStyle={

    border:'3px solid white',
    background:'transparent',
    color:'white',
    fontFamily: 'Helvetica',
    fontWeight:'bold',

}

const labelStyle={
    color:'white',
    fontFamily: 'Helvetica',
    fontWeight:'bold',
    fontSize:'15pt'
}

const head ={
    padding: '10px',
    textAlignVertical: "center",
    textAlign: "center",
    background: '#04938b',
}

const btn ={
    backgroundColor: 'transparent', 
    border: '2px solid #04938b',
    color:'#04d0c4'
}
