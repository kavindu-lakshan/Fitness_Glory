import React, { useEffect, useState } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { selectQuestion, deleteQuestion } from '../../api/apiFBQA'
import { QDeleteForm } from './Forms/QDeleteForm'
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
// import deleteQuestionBg from './ImagesD/deleteQuestionBg.png';

export const DeleteQuestion = () =>{
    const match = useRouteMatch();
    const [question, setQuestion] = useState();
    const history = useHistory();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const member_email = userInfo.email;
 

    useEffect(() =>{
        const displayQuestions = async() => {
            const questions = await selectQuestion(match.params.id)
            setQuestion(questions)
        }
        displayQuestions()
    },[])
 
    const onSubmit = async(data) =>{
        
        Swal.fire({
            title: 'Confirm the delete process!',
            showCancelButton: true,
            confirmButtonText: 'Delete',
          }).then((result) => {
            if (result.isConfirmed) {
                deleteQuestion(data, match.params.id)
                    Swal.fire('The Question has been deleted!', '', 'success')
                    history.push(`/member/QandA/${member_email}`);
            } else {
              Swal.fire('The delete process has been canceled!', '', 'info')
            }
          })
    }

    return question ?(
            <div style={bgImg}>
                <br/>
                <h3 style={{color:'white'}}className = "text-center">Delete Question Confirmation</h3><br/>
                    <div>
                    <div className="row justify-content-center">
                    <div className="row justify-content-center text-center">
                    <div className="col-lg-6 ml-auto">
                        <QDeleteForm questions={question} onSubmit={onSubmit}/>
                    </div>
                    </div>
                    </div>
                    </div>
            </div>
    ) : (<div>Loading Data ........</div>)
}

const deleteQuestionBg = 'https://res.cloudinary.com/dulshan/image/upload/v1631385891/deleteQuestionBg_j0vrle.png'
const bgImg ={
    background: `linear-gradient( rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.58)) ,url(${deleteQuestionBg})`,
    backgroundSize: 'cover',
    position: 'center',
    width: '100%',
    height: '100%',
    opacity:'1'
}
