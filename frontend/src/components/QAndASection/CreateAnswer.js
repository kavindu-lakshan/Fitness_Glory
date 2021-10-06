import React, {useState, useEffect} from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom';
import { createAnswer, selectQuestionDetailsA, updateQStatus} from '../../api/apiFBQA';
import { AnswerForm } from './Forms/AnswerForm';
import { useSelector } from "react-redux";
// import createAnswerBg from './ImagesD/createAnswerBg.png'
 
export const CreateAnswer = () =>{
    const history = useHistory();
    const match = useRouteMatch();
    const [question, setQuestion] = useState();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const member_email = userInfo.email;

    useEffect (() =>{
        const displayQuestions = async() =>{
            const questions = await selectQuestionDetailsA(match.params.id)
            setQuestion(questions)
        }
        displayQuestions()
    },[])

    const onSubmit = async (data) =>{
        await createAnswer(data)
        await updateQStatus(data, match.params.id)
        alert("Answer Entered Successfully");
        history.push(`/member/myAnswers/${member_email}`);
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

const createAnswerBg = 'https://res.cloudinary.com/dulshan/image/upload/v1631385890/createAnswerBg_e26csx.png'
const bgImg ={
    background: `linear-gradient( rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)) ,url(${createAnswerBg})`,
    backgroundSize: 'cover',
    position: 'center',
    width: '100%',
    height: '100%',
    opacity:'1'
}

