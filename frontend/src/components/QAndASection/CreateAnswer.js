import React, {useState, useEffect} from 'react'
import { useRouteMatch } from 'react-router-dom';
import { createAnswer } from '../../api/apiFBQA';
import { useHistory } from 'react-router';
import { AnswerForm } from './Forms/AnswerForm';
import {selectQuestionDetailsA} from '../../api/apiFBQA';
import squat from '../ImagesD/squat1.png'

export const CreateAnswer = () =>{
    const history = useHistory();
    const match = useRouteMatch();
    const [question, setQuestion] = useState();

    useEffect (() =>{
        const displayQuestions = async() =>{
            const questions = await selectQuestionDetailsA(match.params.id)
            setQuestion(questions)
        }
        displayQuestions()
    },[])

    const onSubmit = async (data) =>{
        await createAnswer(data)
        history.push("/myAnswers/:mUsername");
    };
    
    return question ?(
        <div>
        <div style={bgImg}><br/>
        <h3 style={heading} className = "text-center">Provide an Answer</h3><br/>
        <div className="container">
        <div className="mt-3">
            <AnswerForm questions={question}onSubmit ={onSubmit}/>
        </div>
        </div>
        </div>
        </div>
    ):(<div>Loading...........</div>)
};


const heading={
    color:'white'
}

const bgImg ={
    background: `linear-gradient( rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)) ,url(${squat})`,
    backgroundSize: 'cover',
    position: 'relative',
    right:'0%',
    left:'0%',
    width: '100%',
    height: '100%',
    opacity:'1'
}

