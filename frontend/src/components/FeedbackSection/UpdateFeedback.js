import React, {useState, useEffect} from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useHistory } from 'react-router';
import {selectFeedback} from '../../api/apiFBQA';
import { updateFeedback } from '../../api/apiFBQA';
import { FBUpdateForm } from './Forms/FBUpdateForm';
import { useSelector } from "react-redux";
// import updateFeedbackBg from './ImagesD/updateFeedbackBg.png'

export const UpdateFeedback = () =>{
    const match = useRouteMatch()
    const [feedback, setFeedback] = useState()
    const history = useHistory();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const member_email = userInfo.email;

    useEffect(() =>{
        const displayFeedbacks = async() =>{
            const feedbacks = await selectFeedback(match.params.id)
            setFeedback(feedbacks)
        }
        displayFeedbacks()
    },[]);
    

    const onSubmit = async(data) =>{
        await updateFeedback(data, match.params.id)
        history.push(`/member/feedback/${member_email}`);
    }


    return feedback ?(
        <div>
        <div style={bgImg}><br/>
        <h3 style={heading} className = "text-center">Update Feedback</h3>
        <div className="container">
        <div className="mt-3">
            <FBUpdateForm feedbacks={feedback}onSubmit ={onSubmit}/>
        </div>
        </div>
        </div>
        </div>
    ):(<div>Loading...........</div>)
};

const heading={
    color:'white'
}
const updateFeedbackBg = 'https://res.cloudinary.com/dulshan/image/upload/v1631385894/updateFeedbackBg_o3hxjx.png'
const bgImg ={
    background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.70)) ,url(${updateFeedbackBg})`,
    backgroundSize: 'cover',
    position: 'center',
    width: '100%',
    height: '100%',
    opacity:'1'
}