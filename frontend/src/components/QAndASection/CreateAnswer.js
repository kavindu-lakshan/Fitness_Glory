import React, {useState, useEffect} from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom';
import { createAnswer, selectQuestionDetailsA } from '../../api/apiFBQA';
import { AnswerForm } from './Forms/AnswerForm';
import createAnswerBg from './ImagesD/createAnswerBg.png'
 
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
        history.push("/member/myAnswers/:mUsername");
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
    background: `linear-gradient( rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)) ,url(${createAnswerBg})`,
    backgroundSize: 'cover',
    position: 'center',
    width: '100%',
    height: '100%',
    opacity:'1'
}

