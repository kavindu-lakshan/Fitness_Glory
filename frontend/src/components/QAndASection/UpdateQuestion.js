import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { updateQuestion } from '../../api/apiFBQA'
import { QuestionFormUpdate } from './Forms/QuestionFormUpdate'
import { selectQuestion } from '../../api/apiFBQA'
import updateAnsBg from '../ImagesD/ansUpdate.png';



export const UpdateQuestion = () =>{
    const[selectedDate, setselectedDate] = useState(null)
    const match = useRouteMatch();
    const[question, setQuestion] = useState();
    const history = useHistory();

    useEffect(() =>{
        const displayQuestion = async() =>{
            const questions = await selectQuestion(match.params.id)
            setQuestion(questions)
        }   
        displayQuestion()
    },[]);

    const onSubmit = async(data) =>{
        await updateQuestion(data, match.params.id)
        history.push("/QandA/:mUsername");
    }
    
    return question ?(

            <div style={bgImg}>
                <br/>
            <h3 style={{color:'white'}}className = "text-center">Update Question</h3><br/>
            <div>
            <div className="row justify-content-center">
            <div className="row justify-content-center text-center">
            <div className="col-lg-6 ml-auto">
                <QuestionFormUpdate questions={question} onSubmit={onSubmit}/>
            </div>
            </div>
            </div>

            </div>
    </div>
    ) : (<div>Loading Data .......</div>
    )
}

const bgImg ={
    background: `linear-gradient( rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.58)) ,url(${updateAnsBg})`,
    backgroundSize: 'cover',
    position: 'realative',

    right:'0%',
    left:'0%',
    width: '100%',
    height: '100%',
    opacity:'1'
}
