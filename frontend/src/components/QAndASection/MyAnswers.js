import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from 'react-router-dom'
import { Button, AppBar, Tabs, Tab, } from '@material-ui/core';
import { getAnswer } from '../../api/apiFBQA';

export const MyAnswers = () => {
    const match = useRouteMatch()
    const [answer, setAnswer] = useState([]);

    useEffect(()=>{
        const displayAnswer = async()=>{
            const answer = await getAnswer(match.params.mUsername)
            setAnswer(answer);
        }
        displayAnswer();
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
                        <Tab label="Other Questions" href="/otherQ/"/>
                    </Tabs>
                </AppBar>
            </div>
            </Router>
            </div>
            </div>
            <div className="container">
            <div className="mt-3">
                <h3>My Answers</h3>
                <table class="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Topic of Question</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        answer.map((row)=>(
                        <tr>
                            <th scope="row">1</th>
                            <td>{row.qTopic}</td>
                            <td>
                            <Link to={`/updateA/${row._id}`} style={{ textDecoration: 'none' }}><Button  color="Secondary" variant="contained">Update Answer</Button></Link>
                            <Link to={`/deleteA/${row._id}`} style={{ textDecoration: 'none', marginLeft:'10pt'}}><Button  color="Secondary" variant="contained">Delete Answer</Button></Link>
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