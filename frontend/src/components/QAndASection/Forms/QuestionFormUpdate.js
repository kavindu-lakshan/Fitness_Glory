import React from 'react';
import {useForm} from 'react-hook-form'
import Button from '@material-ui/core/Button';


export const QuestionFormUpdate = ({questions, onSubmit}) =>{
    
    const {register, handleSubmit, formState:{errors}} = useForm({defaultValues: {
        email: questions ? questions.email: "",
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
            <label style={labelStyle} for="email" className="form-label">Member Email</label>
            <input style={disInputFieldStyle} className="form-control" {...register("email", { required: true })} type ="text" name="email" id="email" disabled = "true"/>
        <br/>
        </div>
        <div className="form-group col-md-100">
            <label style={labelStyle} for="qTopic" className="form-label">Question Topic</label>
            <input style={inputFieldStyle} className="form-control" {...register("qTopic", { required: true })} type ="text" name="qTopic" id="qTopic"/>
            {errors.qTopic && (<small style={{color:'red'}}>Please fill the Question Topic! You Cannot leave this field empty</small>)}
        <br/>
        </div>

        <div className="form-group col-md-100">
            <label style={labelStyle} for="question" className="form-label">Question Description</label>
            <input style={inputFieldStyle} className="form-control" {...register("question", { required: true })} type ="text" name="question" id="question"/>
            {errors.question && (<small style={{color:'red'}}>Please enter the Question! You Cannot leave this field empty</small>)}
        <br/>
        </div>
        <div className="form-group col-md-100">
            <label style={labelStyle} for="date" className="form-label">Select Date</label>
            <input style={disInputFieldStyle} className="form-control" {...register("date", { required: true })} type ="text" name="date" id="date" disabled="true"/>
        </div>
        <br/>
        </div>
        <center><Button style={btn} size="large" type="submit" className="btn btn-primary">Update Details</Button></center><br/><br/>
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
    color:'white'
}

const btn ={
    backgroundColor: 'transparent', 
    border: '2px solid #04938b',
    color:'#04d0c4'
}
