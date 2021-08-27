import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from 'react-router-dom'
import { Button, AppBar, Tabs, Tab, } from '@material-ui/core';
import { getQuestions } from '../../api/apiFBQA'
import { NavBar } from './NavBar';
import gymBg from '../ImagesD/testImg.png'

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
        <div style={bgImg}>
        <div className="container">
        <div className="mt-3"><br/>
            <NavBar/>
        </div>
        </div>
        <div className="container"> 
        <div className="mt-3">
            <br/>
            <h3 style={labelStyle}className = "text-center">My Questions</h3>
            <table style ={textStyle} class="table">
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
                    <Link to={`/updateQ/${row._id}`} style={{ textDecoration: 'none' }}><Button style={btn} color="Secondary" variant="contained">Update Question</Button></Link>
                    </td>
                    <td>
                    <Link to={`/deleteQ/${row._id}`} style={{ textDecoration: 'none'}}><Button style={btn} color="Secondary" variant="contained">Delete Question</Button></Link>
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

const bgImg ={
    background: `linear-gradient( rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.58)) ,url(${gymBg})`,
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

const btn ={
    backgroundColor: '#04938b', 
    border: '2px solid #04938b',
    color:'white'
}
