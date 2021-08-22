import React, {useState, useEffect} from 'react'
import { useRouteMatch } from 'react-router-dom';
import { createAnswer } from '../../api/apiFBQA';
import { useHistory } from 'react-router';
import { AnswerForm } from './Forms/AnswerForm';
import {selectQuestionDetailsA} from '../../api/apiFBQA'


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
        history.push("/myAnswers/");
        // alert(JSON.stringify(data));
    };
    
    return question ?(
    <div className ="container">
        <div className="mt-3">
            <h3>Create Todo Item</h3>
            <AnswerForm questions={question}onSubmit ={onSubmit}/>
        </div>
        </div>
    ):(<div>Loading...........</div>)
};