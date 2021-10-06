import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { deleteAnswerT, getAnswersT } from '../../api/apiFBQA';
import { DeleteAnswerFormT } from './Forms/DeleteAnswerFormT';
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
// import deleteAnswerBg from './ImagesD/deleteAnswerBg.png';

export const DeleteAnswerT = () =>{
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
        Swal.fire({
            title: 'Confirm the delete process!',
            showCancelButton: true,
            confirmButtonText: 'Delete',
          }).then((result) => {
            if (result.isConfirmed) {
                deleteAnswerT(data, match.params.id)
                    Swal.fire('The Answer has been deleted!', '', 'success')
                    history.push(`/employee/myAnswers/${username}`);
            } else {
              Swal.fire('The delete process has been canceled!', '', 'info')
            }
          })
        
    }

    return answer ?(
        <div style={bgImg}>
        <div className="container">
        <div className="mt-3">
        <br/>
            <h3 style={{color:'white'}}className = "text-center">Delete Answer</h3><br/>
            <DeleteAnswerFormT answers={answer} onSubmit={onSubmit}/>
        </div>
        </div>
        </div>
    ):(<div>Loading Data .......</div>)
}

const deleteAnswerBg = 'https://res.cloudinary.com/dulshan/image/upload/v1631385890/deleteAnswerBg_yw2piq.png'
const bgImg ={
    background: `linear-gradient( rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.58)) ,url(${deleteAnswerBg})`,
    backgroundSize: 'cover',
    position: 'center',
    marginTop:'-20px',
    width: '100%',
    height: '100%',
    opacity:'1'
}
