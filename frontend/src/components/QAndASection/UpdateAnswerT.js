import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { UpdateAnswerFormT } from './Forms/UpdateAnswerFormT'
import { getAnswersT, updateAnswerT } from '../../api/apiFBQA';
import { useSelector } from "react-redux";
// import updateAnswerBg from './ImagesD/updateAnswerBg.png';

export const UpdateAnswerT = () =>{
    const match = useRouteMatch(); 
    const[answer, setAnswer] = useState();
    const history = useHistory(); 

    const trainerLogin = useSelector((state) => state.trainerLogin);
    const { trainerInfo } = trainerLogin;
    const username = trainerInfo.username;

    useEffect(() =>{
        const displayAnswer = async() =>{
            const answers = await getAnswersT(match.params.id)
            setAnswer(answers)
        }   
        displayAnswer()
    },[]);  
 
    const onSubmit = async(data) =>{
        await updateAnswerT(data, match.params.id)
        history.push(`/employee/myAnswers/${username}`);
    }

    return answer ?(
        <div style={bgImg}>
            <div className="container">
            <div className="mt-3">
                <br/>
                <h3 style={{color:'white'}}className = "text-center">Update Answer</h3><br/>
                <UpdateAnswerFormT answers={answer} onSubmit={onSubmit}/>
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
