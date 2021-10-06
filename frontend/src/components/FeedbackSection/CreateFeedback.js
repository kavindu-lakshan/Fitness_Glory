import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { createFeedback, getTUsername } from '../../api/apiFBQA';
import { useRouteMatch } from 'react-router-dom';
import { FBForm } from './Forms/FBForm';
import { useSelector } from "react-redux";
// import createFeedbackBg from './ImagesD/createFeedbackBg.png'

export const CreateFeedback = () =>{
    const history = useHistory();
    const match = useRouteMatch();
    const [trainer, setTrainer] = useState();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const member_email = userInfo.email;

    useEffect (() =>{
        const displayQuestions = async() =>{
            const trainers = await getTUsername(match.params.id)
            setTrainer(trainers)
        }
        displayQuestions()
    },[])

    const onSubmit = async (data) =>{
        await createFeedback(data)
        alert("Feedback Added Successfully");
        history.push(`/member/feedback/${member_email}`);
    };
    
    return trainer ?(
        <div>
        <div style={bgImg}><br/>
        <h3 style={heading} className = "text-center">Provide Feedback</h3>
        <div className="container">
        <div className="mt-3">
            <FBForm feedbacks={trainer}onSubmit ={onSubmit}/>
        </div>
        </div>
        </div>
        </div>
    ):(<div>Loading...........</div>)
};


const heading={
    color:'white'
}

const createFeedbackBg = 'https://res.cloudinary.com/dulshan/image/upload/v1631385890/createFeedbackBg_kczpyk.png'
const bgImg ={
    background: `linear-gradient( rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)) ,url(${createFeedbackBg})`,
    backgroundSize: 'cover',
    position: 'center',
    width: '100%',
    height: '100%',
    opacity:'1'
}