import React, {useState, useEffect} from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom';
import { createAnswerT, selectQuestionDetailsA } from '../../api/apiFBQA';
import { AnswerFormT } from './Forms/AnswerFormT';
import { useSelector } from "react-redux";
// import createAnswerBg from './ImagesD/createAnswerBg.png'
 
export const CreateAnswerT = () =>{
    const history = useHistory();
    const match = useRouteMatch();
    const [question, setQuestion] = useState();

    const trainerLogin = useSelector((state) => state.trainerLogin);
    const { trainerInfo } = trainerLogin;
    const username = trainerInfo.username;

    useEffect (() =>{
        const displayQuestions = async() =>{
            const questions = await selectQuestionDetailsA(match.params.id)
            setQuestion(questions)
        }
        displayQuestions()
    },[])

    const onSubmit = async (data) =>{
        await createAnswerT(data)
        history.push(`/employee/myAnswers/${username}`);
    };
    
    return question ?(
        <div>
        <div style={bgImg}><br/>
        <h3 style={heading} className = "text-center">Provide an Answer</h3><br/>
        <div className="container">
        <div className="mt-3">
            <AnswerFormT questions={question}onSubmit ={onSubmit}/>
        </div>
        </div>
        </div>
        </div>
    ):(<div>Loading...........</div>)
};


const heading={
    color:'white'
}

const createAnswerBg = 'https://res.cloudinary.com/dulshan/image/upload/v1631385890/createAnswerBg_e26csx.png'
const bgImg ={
    background: `linear-gradient( rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)) ,url(${createAnswerBg})`,
    backgroundSize: 'cover',
    position: 'center',
    width: '100%',
    height: '100%',
    opacity:'1'
}

