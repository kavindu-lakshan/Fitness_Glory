import React, { useState } from 'react';
import {useForm} from 'react-hook-form'
import Button from '@material-ui/core/Button';


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
            <h4 style={head}>Question Details</h4><br/>
            <div class="row">
                <br/>
                <div class="col-6 col-sm-6">
                    <label style={labelStyle} for="qTopic" className="form-label">Question Topic</label>
                    <input style={inputFieldStyle} type="text" className="form-control" {...register("qTopic", { required: true })} id="qTopic" name="qTopic" disabled="true"/>
                </div>
                <div class="w-100"></div>
                <br/>
            </div>

            <hr style={hr}/>
            <h4 style={head}>Provide Answer</h4><br/>
            <div className="row">
                <div class="col-6 col-sm-6">
                    <label style={labelStyle} for="mUsername" className="form-label">Member Username</label>
                    <input style={inputFieldStyle} type="text" className="form-control"{...register("mUsername", { required: true })} id="mUsername" name="mUsername" disabled="true"/>
                </div>
                <div class="w-100"></div>
                <br/>
                <div class="w-100"></div>
                <div class="col-6 col-sm-6">
                    <label style={labelStyle} for="answer" className="form-label">Answer</label>
                    <input style={inputFieldStyle} type="text" className="form-control" {...register("answer", { required: true })} id="answer" name="answer" disabled="ture"/>
                </div>
            </div>
            <br/>
            <center><Button style={btn} size="large" type="submit" className="btn btn-primary">Confirm Delete</Button></center><br/><br/>
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

const hr={
    color:'white',
    backgroundColor: 'white',
    borderTop: "2px solid #fff "
}