import React from 'react';
import {useForm} from 'react-hook-form'
import Button from '@material-ui/core/Button';

export const QuestionForm = ({questions, onSubmit}) =>{
    
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
        <h4 style={head}>Question Details</h4>
        <div className="form-group">
        <div className="form-group col-md-100">
            <label style={labelStyle} for="mUsername" className="form-label">Member Username</label>
            <input style={inputFieldStyle} className="form-control" {...register("mUsername", { required: true })} type ="text" name="mUsername" id="mUsername"/>
        <br/>
        </div>
        <div className="form-group col-md-100">
            <label style={labelStyle} for="qTopic" className="form-label">Question Topic</label>
            <input style={inputFieldStyle} className="form-control" {...register("qTopic", { required: true })} type ="text" name="qTopic" id="qTopic"/>
        <br/>
        </div>

        <div className="form-group col-md-100">
            <label style={labelStyle} for="question" className="form-label">Question Description</label>
            <input style={inputFieldStyle} className="form-control" {...register("question", { required: true })} type ="text" name="question" id="question"/>
        <br/>
        </div>
        <div className="form-group col-md-100">
            <label style={labelStyle} for="date" className="form-label">Select Date</label>
            <input style={inputFieldStyle} className="form-control" {...register("date", { required: true })} type ="date" name="date" id="date"/>
        </div>
        <br/>
        </div>
        <center><Button style={btn} size="large" type="submit" className="btn btn-primary">Submit Details</Button></center><br/><br/>
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
    color:'white'
}

const btn ={
    backgroundColor: 'transparent', 
    border: '2px solid #04938b',
    color:'#04d0c4'
}
