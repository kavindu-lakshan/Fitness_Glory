import React, { useState } from 'react';
import {useForm} from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


export const QuestionForm = ({questions, onSubmit}) =>{
    
    const {register, handleSubmit} = useForm({defaultValues: {
        mUsername: questions ? questions.mUsername: "",
        qTopic: questions ? questions.qTopic: "",
        question: questions ? questions.question: "",
        date: questions ? questions.date: ""
    }})
    const[selectedDate, setselectedDate] = useState("")

    const submitHandler = handleSubmit((data) =>{
        onSubmit(data)
    })
   
    return(
        <form onSubmit={submitHandler}>
        <h4>Question Details</h4>
        <div className="form-group">
        <div className="form-group col-md-100">
            <label for="mUsername" className="form-label">Member Username</label>
            <input className="form-control" {...register("mUsername", { required: true })} type ="text" name="mUsername" id="mUsername"/>
        <br/>
        </div>
        <div className="form-group col-md-100">
            <label for="qTopic" className="form-label">Question Topic</label>
            <input className="form-control" {...register("qTopic", { required: true })} type ="text" name="qTopic" id="qTopic"/>
        <br/>
        </div>

        <div className="form-group col-md-100">
            <label for="question" className="form-label">Question Description</label>
            <input className="form-control" {...register("question", { required: true })} type ="text" name="question" id="question"/>
        <br/>
        </div>
        <div className="form-group col-md-100">
            <label for="date" className="form-label">Select Date</label>
            <DatePicker selected={selectedDate} onChange={date => setselectedDate(date)}{...register("date", { required: true })}/>
        </div>
        <br/>
        </div>
            <button type="submit" className="btn btn-primary">Submit</button><br/><br/>
        </form>
    )

}