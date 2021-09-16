import React, { useState, useEffect } from 'react';
import {useRouteMatch, useHistory } from 'react-router-dom'
import { NavBar } from './NavBar';
import { getQuestion, createQuestion } from '../../api/apiFBQA';
import { QuestionForm } from './Forms/QuestionForm';
// import createQuestionBg from './ImagesD/createQuestionBg.png'

export const CreateQuestion = () =>{
    const history = useHistory();
    const match = useRouteMatch();
    const [question, setQuestion] = useState();

    useEffect (() =>{
        const displayQuestions = async() =>{
            const questions = await getQuestion(match.params.email)
            setQuestion(questions)
        }
        displayQuestions()
    },[])

    const onSubmit = async (data) =>{
        await createQuestion(data)
        history.push("/member/QandA/:email");
    };
    
    return question ?(
        <div style={bgImg}>
        <div className="container">
        <div className="mt-3"><br/>
          <NavBar/>
        </div>
        </div><br/>
        <h3 style={heading} className = "text-center">Provide a Question</h3><br/>
        <div className="container">
        <div className="mt-3">
            <QuestionForm questions={question}onSubmit ={onSubmit}/>
        </div>
        </div>
        </div>
    ):(
        <div style={altBgImg}>  
        <div className="container">
        <div className="mt-3"><br/>
            <NavBar/>
        </div>
        </div><br/>
        <h3 style={heading} className = "text-center">Provide a Question</h3>
        <br/>
        </div>
    )
};


const heading={
    color:'white'
}

const createQuestionBg = 'https://res.cloudinary.com/dulshan/image/upload/v1631385889/createQuestionBg_jrb0ju.png'
const bgImg ={
    background: `linear-gradient( rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)) ,url(${createQuestionBg})`,
    backgroundSize: 'cover',
    position: 'center',
    width: '100%',
    height: '100%',
    opacity:'1',
    marginTop:'-20px'
}
const altBgImg ={
    background: `linear-gradient( rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)) ,url(${createQuestionBg})`,
    backgroundSize: 'cover',
    position: 'center',
    width: '100%',
    height: '700px',
    opacity:'1',
    marginTop:'-20px'
}