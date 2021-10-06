import React, {useState, useEffect} from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Link } from "react-router-dom";
import {selectFeedbackT} from '../../api/apiFBQA';
import { FBViewFormT } from './Forms/FBViewFormT';
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
// import updateFeedbackBg from './ImagesD/updateFeedbackBg.png'

export const ViewFeedbackT = () =>{
    const match = useRouteMatch()
    const [feedback, setFeedback] = useState()

    const trainerLogin = useSelector((state) => state.trainerLogin);
    const { trainerInfo } = trainerLogin;
    const username = trainerInfo.username;

    useEffect(() =>{
        const displayFeedbacks = async() =>{
            const feedbacks = await selectFeedbackT(match.params.id)
            setFeedback(feedbacks)
        }
        displayFeedbacks()
    },[]);

    return feedback ?(
        <div>
        <div style={bgImg}><br/>
        <h3 style={heading} className = "text-center">Update Feedback</h3>
        <div className="container">
        <div className="mt-3">
            <FBViewFormT feedbacks={feedback}/>
            <Link to={`/employee/feedback/${username}`} style={{ textDecoration: "none" }}>
                <Button style={btn} color="Secondary" variant="contained">BACK</Button>
            </Link>
        </div>
        <br/>
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

const btn = {
    backgroundColor: "#04938b",
    border: "2px solid #04938b",
    color: "white",
  };