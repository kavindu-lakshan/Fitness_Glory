import React, {useState, useEffect} from 'react';
import { FBDeleteForm } from './Forms/FBDeleteForm';
import { useRouteMatch } from 'react-router-dom';
import { useHistory } from 'react-router';
import { selectFeedback, deleteFeedback } from '../../api/apiFBQA';
import { useSelector } from "react-redux";
// import deleteFeedbackBg from './ImagesD/deleteFeedbackBg.png'

export const DeleteFeedback = () =>{
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
        await deleteFeedback(data, match.params.id)
        history.push(`/member/feedback/${member_email}`);
    }
    return feedback ?(
        <div>
        <div style={bgImg}><br/>
        <h3 style={heading} className = "text-center">DELETE FEEDBACK</h3>
        <div className="container">
        <div className="mt-3">
            <FBDeleteForm feedbacks={feedback}onSubmit ={onSubmit}/>
        </div>
        </div>
        </div>
        </div>
    ):(<div>Loading...........</div>)
} 

const heading={
    color:'white'
}

const deleteFeedbackBg = 'https://res.cloudinary.com/dulshan/image/upload/v1631385891/deleteFeedbackBg_nd5c1w.png'
const bgImg ={
    background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.70)) ,url(${deleteFeedbackBg})`,
    backgroundSize: 'cover',
    position: 'center',
    width: '100%',
    height: '100%',
    opacity:'1'
}