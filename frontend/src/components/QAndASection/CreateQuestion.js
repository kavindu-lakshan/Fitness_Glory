import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch, useHistory } from 'react-router-dom'
import axios from 'axios';
import { AppBar, Tabs, Tab, } from '@material-ui/core';
import { color } from '@material-ui/system';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { getQuestion } from '../../api/apiFBQA';

export const CreateQuestion = () =>{
    const match = useRouteMatch();
    const history = useHistory();
    const [data, setData] = useState([]);
  
    const [mUsername, setMUsername] = useState("");
    const [qTopic, setTopic] = useState("");
    const [question, setQuestion] = useState("");
    const [date, setselectedDate] = useState("")

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
            history.push('/QandA/:cUsername?Question not Added')
        })
    }
    return(
        <div>
        <div className="container">
        <div className="mt-3">
        <Router>
            <div>
                <AppBar position="static">
                    <Tabs  aria-label="simple tabs example">
                        <Tab label="My Questions" href="/QandA/:mUsername"/>
                        <Tab label="My Answers" href="/myAnswers/"/>
                        <Tab label="New Questions" href="/q/createQ/:mUsername"/>
                        <Tab label="Other Questions" href="/otherQ/"/>
                    </Tabs>
                </AppBar>
            </div>
        </Router>
        </div>
        </div>
        <br/>
        <h3 className = "text-center">Provide Question</h3><br/>
        {
                data.map((row) =>(
                    <div>
                    <div className="row justify-content-center">
                     <div className="row justify-content-center text-center">
                     <div className="col-lg-6 ml-auto">

                    <form onSubmit={sendData}>
                    <div className="form-group">
                    <div className="form-group col-md-100">
                        <label for="mUsername" className="form-label">Member Username</label>
                        <input type="text" className="form-control" id="mUsername" name="mUsername" placeholder={row.mUsername}
                            onChange={(e) =>{
                                setMUsername(e.target.value);
                            }}/>
                    <br/>
                    </div>
                    <div className="form-group col-md-100">
                        <label for="qTopic" className="form-label">qTopic</label>
                        <input type="text" className="form-control" id="qTopic" name="qTopic" placeholder="Feedback Topic"
                            onChange={(e) =>{
                                setTopic(e.target.value);
                            }}/>
                    <br/>
                    </div>

                    <div className="form-group col-md-100">
                        <label for="question" className="form-label">question</label>
                        <input type="text" className="form-control" id="question" name="question" placeholder="question"
                            onChange={(e) => {
                                setQuestion(e.target.value);
                            }}/>
                    <br/>
                    </div>
                    <div className="form-group col-md-100">
                        <label for="date" className="form-label">Select Date</label>
                        <DatePicker selected={date} onChange={date => setselectedDate(date)}/>
                    </div>
                    <br/>
                    </div>
                        <button type="submit" className="btn btn-primary">Submit</button><br/><br/>
                    </form>
                    </div>
                    </div>
                    </div>
                    </div>
                ))
            }
    </div>
    ) 
}