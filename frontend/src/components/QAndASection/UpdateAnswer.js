import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { UpdateAnswerForm } from './Forms/UpdateAnswerForm'
import { getAnswers, updateAnswer } from '../../api/apiFBQA';
import { useSelector } from "react-redux";
// import updateAnswerBg from './ImagesD/updateAnswerBg.png';

export const UpdateAnswer = () =>{
    const match = useRouteMatch(); 
    const[answer, setAnswer] = useState();
    const history = useHistory(); 

    
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const member_email = userInfo.email;

    useEffect(() =>{
        const displayAnswer = async() =>{
            const answers = await getAnswers(match.params.id)
            setAnswer(answers)
        }   
        displayAnswer()
    },[]);  
 
    const onSubmit = async(data) =>{
        await updateAnswer(data, match.params.id)
        alert("Answer Updated Successfully");
        history.push(`/member/myAnswers/${member_email}`);
    }

    return answer ?(
        <div style={bgImg}>
            <div className="container">
            <div className="mt-3">
                <br/>
                <h3 style={{color:'white'}}className = "text-center">Update Answer</h3><br/>
                <UpdateAnswerForm answers={answer} onSubmit={onSubmit}/>
            </div>
            </div>
        </div>
    ): (<div>Loading Data .......</div>
    )

}
const updateAnswerBg = 'https://res.cloudinary.com/dulshan/image/upload/v1631385895/updateAnswerBg_nvwu8u.png'
const bgImg ={
    background: `linear-gradient( rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.58)) ,url(${updateAnswerBg})`,
    backgroundSize: 'cover',
    position: 'center',
    marginTop:'-20px',
    width: '100%',
    height: '100%',
    opacity:'1'
}
