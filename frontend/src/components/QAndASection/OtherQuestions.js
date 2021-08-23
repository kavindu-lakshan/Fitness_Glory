import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from 'react-router-dom'
import { Button, AppBar, Tabs, Tab, } from '@material-ui/core';
import { allQuestions } from '../../api/apiFBQA'

export const OtherQuestions = () => {
    const match = useRouteMatch()
    const [questions, setQuestions] = useState([]);

    useEffect(()=>{
        const displayQuestion = async()=>{
            const question = await allQuestions()
            setQuestions(question);
        }
        displayQuestion();
    },[])

    return(
        <div>
            <div className="container">
            <div className="mt-3">
            <Router>
            <div>
                <AppBar position="static">
                    <Tabs  aria-label="simple tabs example">
                        <Tab label="My Questions" href="/QandA/:mUsername"/>
                        <Tab label="My Answers" href="/myAnswers/:mUsername"/>
                        <Tab label="New Questions" href="/q/createQ/:mUsername"/>
                        <Tab label="Other Questions" href="/"/>
                    </Tabs>
                </AppBar>
            </div>
            </Router>
            </div>
            </div>
            <div className="container">
            <div className="mt-3">
                <h3>All Questions</h3>
                <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Topic of Question</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    questions.map((row)=>(
                    <tr>   
                    <td>
                        {row.qTopic}
                    </td>
                    <td>
                    <Link to={`/a/createA/${row._id}`} style={{ textDecoration: 'none' }}><Button  color="Secondary" variant="contained">Select Question</Button></Link>
                    </td>
                    </tr>
                    ))
                }
               
                </tbody>
                </table>
            </div>
            </div>
        </div>
    )
}