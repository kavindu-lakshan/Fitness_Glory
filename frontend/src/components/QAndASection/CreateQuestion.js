import React, { useState, useEffect } from 'react';
import {useRouteMatch, useHistory } from 'react-router-dom'
import axios from 'axios';
import { NavBar } from './NavBar';
import Button from '@material-ui/core/Button';
import { getQuestion } from '../../api/apiFBQA';
import createQuestionBg from './ImagesD/createQuestionBg.png'

export const CreateQuestion = () =>{
    const match = useRouteMatch();
    const history = useHistory();
    const [data, setData] = useState([]);
  
    const [mUsername, setMUsername] = useState("");
    const [qTopic, setTopic] = useState("");
    const [question, setQuestion] = useState("");
    const [date, setDate] = useState("")

    useEffect(() => {
        const fetchData = async () =>{
            setData(await getQuestion(match.params.mUsername))
        }
        fetchData()
    }, [])
    
    function sendData(e){
        e.preventDefault();
        const newQuestion={
            mUsername,
            qTopic,
            question,
            date
        }
        axios.post(`http://localhost:5000/qu/q/createQ`, newQuestion).then(()=>{
            history.push('/QandA/:cUsername?Question Added');
        }).catch((err)=>{
            alert(err)
            history.push('/member/QandA/:cUsername?Question not Added')
        })
    }
    
    return(
            <div>
            <div style={bgImg}>
            <div className="container">
            <div className="mt-3"><br/>
                <NavBar/>
            </div>
            </div><br/><br/>
            <h3 style={{color:'white'}}className = "text-center">Provide Question</h3><br/>
            {
                data.map((row) =>(
                    <div>
                        <div className="row justify-content-center">
                        <div className="row justify-content-center text-center">
                        <div className="col-lg-6 ml-auto">

                        <form onSubmit={sendData}>
                        <div className="form-group">
                        <div className="form-group col-md-100">
                            <label style={labelStyle} for="mUsername" className="form-label">Member Username</label>
                            <input style={inputFieldStyle} type="text" className="form-control" id="mUsername" name="mUsername" placeholder={row.mUsername}
                                onChange={(e) =>{
                                    setMUsername(e.target.value);
                                }}/>
                        <br/>
                        </div>

                        <div className="form-group col-md-100">
                            <label style={labelStyle} for="qTopic" className="form-label">Question Topic</label>
                            <input style={inputFieldStyle} type="text" className="form-control" id="qTopic" name="qTopic" placeholder="Question Topic"
                                onChange={(e) =>{
                                    setTopic(e.target.value);
                                }}/>
                        <br/>
                        </div>

                        <div className="form-group col-md-100">
                            <label style={labelStyle} for="question" className="form-label">Question Description</label>
                            <input style={inputFieldStyle} type="text" className="form-control" id="question" name="question" placeholder="Question Description"
                                onChange={(e) => {
                                    setQuestion(e.target.value);
                                }}/>
                        <br/>
                        </div>
                        
                        <div className="form-group col-md-100">
                            <label style={labelStyle} for="date" className="form-label">Select Date</label><br/>
                            <input style={inputFieldStyle} type="date" className="form-control" id="date" name="date" placeholder="Question Date"
                                onChange={(e) => {
                                    setDate(e.target.value);
                                }}/>
                        <br/>
                        </div>
                    
                        </div>
                        <center><Button style={btn} size="large" type="submit" className="btn btn-primary">Submit</Button></center><br/><br/>
                        </form>

                        </div>
                        </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    ) 
}

const bgImg ={
    background: `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)) ,url(${createQuestionBg})`,
    position: 'absolutely',
    marginTop:'-20px',
    width: '100%',
    height:'100%',
    minHeight: '650px',
    opacity:'1'
}

const labelStyle={
    color:'white',
    fontFamily: 'Helvetica',
    fontWeight:'bold',
    fontSize:'15pt'
}

const inputFieldStyle={
    border:'2px solid white',
    background:'transparent',
    color:'white',
    fontFamily: 'Helvetica',
    fontWeight:'bold',
}

const btn ={
    backgroundColor: 'transparent', 
    border: '2px solid #04938b',
    color:'#04d0c4'
}

