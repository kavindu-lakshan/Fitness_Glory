import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from 'react-router-dom'
import { Button, AppBar, Tabs, Tab, } from '@material-ui/core';
import { color } from '@material-ui/system';
import { getQuestions } from '../../api/apiFBQA'

export const QandA = () =>{
    const match = useRouteMatch()
    const [questions, setQuestions] = useState([]);

    useEffect(()=>{
        const displayQuestions = async() =>{
            const question = await getQuestions(match.params.mUsername)
            setQuestions(question)
        }
        displayQuestions()
    }, [])
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
            <h3>My Questions</h3>
            <br/>
            <table class="table">
            <thead>
                <tr>
                    <th scope="col">Topic of Question</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
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
                    <Link to={`/updateQ/${row._id}`} style={{ textDecoration: 'none' }}><Button  color="Secondary" variant="contained">Update Question</Button></Link>
                    </td>
                    <td>
                    <Link to={`/deleteQ/${row._id}`} style={{ textDecoration: 'none'}}><Button  color="Secondary" variant="contained">Delete Question</Button></Link>
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