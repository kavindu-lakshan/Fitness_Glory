import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { UpdateAnswerForm } from './Forms/UpdateAnswerForm'
import { getAnswers } from '../../api/apiFBQA';
import { updateAnswer } from '../../api/apiFBQA';

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
        <div className="container">
        <div className="mt-3">
            <h3 className = "text-center">Update Answer</h3><br/>
            <UpdateAnswerForm answers={answer} onSubmit={onSubmit}/>
        </div>
        </div>
    ): (<div>Loading Data .......</div>
        )

}