import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from 'react-router-dom'
import { Button, AppBar, Tabs, Tab, } from '@material-ui/core';
import { getAnswer } from '../../api/apiFBQA';
import { NavBar } from './NavBar';
import myAnswerPg from '../ImagesD/myAnswerBg.png'

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
            <div style={bgImg}>
            <br/>
            <div className="container">
            <div className="mt-3">
            <NavBar/>
            </div>
            </div>
            <div className="container">
            <div className="mt-3">

                <h3 style={labelStyle} className = "text-center" >My Answers</h3>
                <table style={textStyle} class="table">
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
                            <Link to={`/updateA/${row._id}`} style={{ textDecoration: 'none' }}><Button style={btn} color="Secondary" variant="contained">Update Answer</Button></Link>
                            <Link to={`/deleteA/${row._id}`} style={{ textDecoration: 'none', marginLeft:'10pt'}}><Button style={btn} color="Secondary" variant="contained">Delete Answer</Button></Link>
                            </td>
                        </tr>                      
                        ))
                    }
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
    )
}

const btn ={
    backgroundColor: '#04938b', 
    border: '2px solid #04938b',
    color:'white'
}

const bgImg ={
    background: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.58)) ,url(${myAnswerPg})`,
    backgroundSize: 'cover',
    position: 'center',
    marginTop:'-20px',
    right:'0%',
    left:'0%',
    width: '100%',
    height: '100%',
    opacity:'1'
}

const labelStyle={
    color:'white',
    fontFamily: 'Helvetica',
    fontWeight:'bold',

}

const textStyle={
    background:'transparent',
    color:'white',
    fontFamily: 'Helvetica',
    fontWeight:'bold',

}