import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { deleteAnswer } from '../../api/apiFBQA';
import { getAnswers } from '../../api/apiFBQA';
import {DeleteAnswerForm} from '../QAndASection/Forms/DeleteAnswerForm';

export const DeleteAnswer = () =>{
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
        await deleteAnswer(data, match.params.id)
        history.push("/myAnswers/:mUsername");
    }

    return answer ?(
        <div className="container">
        <div className="mt-3">
            <h3 className = "text-center">Delete Answer</h3><br/>
            <DeleteAnswerForm answers={answer} onSubmit={onSubmit}/>
        </div>
        </div>
    ):(<div>Loading Data .......</div>)
}