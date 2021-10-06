import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { updateQuestion, selectQuestion } from '../../api/apiFBQA'
import { QuestionFormUpdate } from './Forms/QuestionFormUpdate'
import { useSelector } from "react-redux";
// import updateQuestionBg from './ImagesD/updateQuestionBg.png';

export const UpdateQuestion = () =>{
    const match = useRouteMatch();
    const[question, setQuestion] = useState();
    const history = useHistory();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const member_email = userInfo.email;

    useEffect(() =>{
        const displayQuestion = async() =>{
            const questions = await selectQuestion(match.params.id)
            setQuestion(questions)
        }   
        displayQuestion()
    },[]);

    const onSubmit = async(data) =>{
        await updateQuestion(data, match.params.id)
        alert("Question Updated Successfully");
        history.push(`/member/QandA/${member_email}`);
    }
    
    return question ?(
            <div style={bgImg}><br/>
                <h3 style={{color:'white'}}className = "text-center">Update Question</h3><br/>
                <div className="row justify-content-center">
                <div className="row justify-content-center text-center">
                <div className="col-lg-6 ml-auto">
                    <QuestionFormUpdate questions={question} onSubmit={onSubmit}/>
                </div>
                </div>
                </div>
            </div>
    ) : (<div>Loading Data .......</div>
    )
}
const updateQuestionBg = 'https://res.cloudinary.com/dulshan/image/upload/v1631385895/updateQuestionBg_ohgsdv.png'
const bgImg ={
    background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.58)) ,url(${updateQuestionBg})`,
    backgroundSize: 'cover',
    position: 'center',
    width: '100%',
    height: '100%',
    opacity:'1'
}
