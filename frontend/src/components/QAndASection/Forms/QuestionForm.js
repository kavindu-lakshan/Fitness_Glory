import React from 'react';
import {useForm} from 'react-hook-form'
import Button from '@material-ui/core/Button';

export const QuestionForm = ({questions, onSubmit}) =>{
    
    const {register, handleSubmit, formState:{errors}} = useForm({defaultValues: {
        email: questions.email ? questions.email: "",
        qTopic: questions.qTopic ? questions.qTopic: "Regarding Barbell Curls",
        question: questions.question ? questions.question: "Which grip is the most effective to train biceps?",
        date: questions.data ? questions.date: ""
    }})

    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    const submitHandler = handleSubmit((data) =>{
        onSubmit(data)
    })
    
    return(
        <form onSubmit={submitHandler}>
        <h4 style={head}>QUESTION DETAILS</h4>
        <div className="row justify-content-center">
        <div className="row justify-content-center text-center">
        <div className="col-md-6 ml-auto"><br/>
            <label style={labelStyle} for="name" className="form-label">Member Email</label>
            <input style={disInputFieldStyle} className="form-control" {...register("email", { required: true })} type ="text" name="email" id="email" disabled="true"/>
        <br/>
        </div>
        <div class="w-100"></div>
        <div className="col-md-6">
            <label style={labelStyle} for="qTopic" className="form-label">Question Topic</label>
            <input style={inputFieldStyle} className="form-control" {...register("qTopic", { required:true })} type ="text" name="qTopic" id="qTopic"/>
            {errors.qTopic && (<small style={{color:'red'}}>Fill the Question Topic field! You cannot submit with this field empty!</small>)}
        <br/>
        </div>
        <div class="w-100"></div>
        <div className="col-md-6">
            <label style={labelStyle} for="question" className="form-label">Question Description</label>
            <input style={inputFieldStyle} className="form-control" {...register("question", { required: true })} type ="text" name="question" id="question"/>
            {errors.question && (<small style={{color:'red'}}>Fill the Question field! You cannot submit with this field empty!</small>)}
        <br/>
        </div>
        <div class="w-100"></div>
        <div className="col-md-6">
            <label style={labelStyle} for="date" className="form-label">Select Date</label>
            <input style={inputFieldStyle} className="form-control" {...register("date", { required: true })} type ="date" name="date" id="date" min={disablePastDate()}/>
            {errors.date && (<small style={{color:'red'}}>Please select the current date! You Cannot leave this field empty</small>)}
            <br/><br/>
        </div>
        </div>
        <center><Button style={btn} size="large" type="submit" className="btn btn-primary">Submit Details</Button></center>
        </div>
        <br/>
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
    color:'white'
}

const btn ={
    backgroundColor: 'transparent', 
    border: '2px solid #04938b',
    color:'#04d0c4'
}
