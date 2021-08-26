import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { UpdateAnswerForm } from './Forms/UpdateAnswerForm'
import { getAnswers } from '../../api/apiFBQA';
import { updateAnswer } from '../../api/apiFBQA';
import updateAnsBg from '../ImagesD/ansUpdate.png';

export const UpdateAnswer = () =>{
    const match = useRouteMatch();
    const[answer, setAnswer] = useState();
    const history = useHistory(); 

    useEffect(() =>{
        const displayAnswer = async() =>{
            const answers = await getAnswers(match.params.id)
            setAnswer(answers)
        }   
        displayAnswer()
    },[]);  
 
    const onSubmit = async(data) =>{
        await updateAnswer(data, match.params.id)
        history.push("/myAnswers/:mUsername");
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

const bgImg ={
    background: `linear-gradient( rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.58)) ,url(${updateAnsBg})`,
    backgroundSize: 'cover',
    position: 'realative',
    marginTop:'-20px',
    right:'0%',
    left:'0%',
    width: '100%',
    height: '100%',
    opacity:'1'
}
