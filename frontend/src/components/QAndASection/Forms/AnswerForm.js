import React from 'react';
import {useForm} from 'react-hook-form'
import Button from '@material-ui/core/Button';
import { useSelector } from "react-redux";

export const AnswerForm = ({questions, onSubmit}) =>{
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const member_email = userInfo.email;
    
    const {register, handleSubmit, formState:{errors}} = useForm({defaultValues: {
        emailQ: questions.email ? questions.email: "",
        qTopic: questions.qTopic ? questions.qTopic:"",
        date: questions.date ? questions.date: "",
        question: questions.question ? questions.question:"",
        email: `${member_email}`,
        QID:questions.QID? questions.QID:"",
        answer: questions.answer? questions.answer:"",
        status:"Answered"
    }})

    const submitHandler = handleSubmit((data) =>{
        onSubmit(data)
    })

    return(
        <div>
        <div style={head}>
        <h4 style={labelStyle}>QUESTION DETAILS</h4>
        </div>

        <form onSubmit={submitHandler}>
            <br/>
            <div>
            <div class="row">
                <div class="col-6 col-sm-6">
                    <label style={labelStyle} for="emailQ" className="form-label">Posted By</label>
                    <input style={disInputFieldStyle} type="text" className="form-control" {...register("emailQ", { required: true })} id="emailQ" name="emailQ" disabled="true"/>
                </div>
                <div class="w-100"></div><br/>
                <div class="col-6 col-sm-3">
                    <label style={labelStyle} for="qTopic" className="form-label">Question Topic</label>
                    <input style={disInputFieldStyle} type="text" className="form-control" {...register("qTopic", { required: true })} id="qTopic" name="qTopic" disabled="true"/>
                </div>
                <div class="col-6 col-sm-3">
                    <label style={labelStyle} for="date" className="form-label">Date</label>
                    <input style={disInputFieldStyle} type="text" className="form-control"{...register("date", { required: true })} id="date" name="date" disabled="true"/>
                </div>
                <div class="w-100"></div><br/>
                <div class="col-6 col-sm-6">
                    <label style={labelStyle} for="qDescription" className="form-label">Question Description</label>
                    <input style={disInputFieldStyle} type="text" className="form-control" {...register("question", { required: true })} id="question" name="question" disabled="true"/>
                </div>
            </div><br/>
            </div>
            <hr/>
            <div style={head}>
                <h4 style={labelStyle}>PROVIDE ANSWER</h4>
            </div><br/>
            <div className="row">
                <div class="col-6 col-sm-3">
                    <label style={labelStyle} for="QID" className="form-label">Question ID</label>
                    <input style={disInputFieldStyle} type="text" className="form-control" {...register("QID", { required: true })} id="QID" name="QID" disabled="true"/>
                </div>
                <div class="col-6 col-sm-5">
                    <label style={labelStyle} for="email" className="form-label">Member Email</label>
                    <input style={disInputFieldStyle} type="text" className="form-control"{...register("email", { required: true })} id="email" name="email" disabled="true"/>
                    {errors.email && (<small style={{color:'red'}}>Enter your Email! Cannot leave this field empty</small>)}
                </div>
                <div class="w-100"></div><br/>
                <div class="col-6 col-sm-6">
                    <label style={labelStyle} for="qTopic" className="form-label">Question Topic</label>
                    <input  style={disInputFieldStyle} type="text" className="form-control"{...register("qTopic", { required: true })} id="qTopic" name="qTopic" disabled="true"/>
                </div>
                <div class="w-100"></div><br/>
                <div class="col-6 col-sm-9">
                    <label style={labelStyle} for="answer" className="form-label">Answer</label>
                    <input style={inputFieldStyle} type="text" className="form-control" {...register("answer", { required: true })} id="answer" name="answer"/>
                    {errors.answer && (<small style={{color:'red'}}>Fill the answer field! You Cannot leave this field empty</small>)}
                </div>
            </div>
            <br/><br/>
            <center><Button style={btn} size="large" type="submit" className="btn btn-primary">Post Answer</Button></center><br/><br/>
        </form>
        </div>
    )
}

const disInputFieldStyle={
    border:'3px solid white',
    background:'transparent',
    color:'silver',
    fontFamily: 'Helvetica',
    fontWeight:'bold',
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
    fontSize:'15pt',
    textTransform:'none' 
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
