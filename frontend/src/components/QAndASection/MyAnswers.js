import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import { Button } from '@material-ui/core';
import { NavBar } from './NavBar';
import { getAnswer } from '../../api/apiFBQA';
// import myAnswerBg from './ImagesD/myAnswerBg.png'

export const MyAnswers = () => {
    const match = useRouteMatch()
    const [answer, setAnswer] = useState([]);

    useEffect(()=>{
        const displayAnswer = async()=>{
            const answer = await getAnswer(match.params.email)
            setAnswer(answer);
        }
        displayAnswer();
    },[])

    return(
        <div>
            <div style={bgImg}><br/>
            <div className="container">
            <div className="mt-3">
                <NavBar/>
            </div>
            </div>
            <div className="container">
            <div className="mt-3">
                <br/>
                <h3 style={labelStyle} className = "text-center" >MY ANSWERS</h3>
                <div style={hideScroll}>
                <div style={scrollable}>
                <table style={textStyle} class="table">
                <thead>
                    <tr>
                        <th scope="col">Topic of Question</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        answer.map((row)=>(
                        <tr>
                            <td>{row.qTopic}</td>
                            <td>
                                <Link to={`/member/updateA/${row._id}`} style={{ textDecoration: 'none' }}><Button style={btn} color="Secondary" variant="contained">Update Answer</Button></Link>
                                <Link to={`/member/deleteA/${row._id}`} style={{ textDecoration: 'none', marginLeft:'10pt'}}><Button style={btn} color="Secondary" variant="contained">Delete Answer</Button></Link>
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
            </div>
        </div>
    )
}

const myAnswerBg = 'https://res.cloudinary.com/dulshan/image/upload/v1631385892/myAnswerBg_yil2en.png'

const bgImg ={
    background: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.58)) ,url(${myAnswerBg})`,
    backgroundSize: 'cover',
    position: 'center',
    marginTop:'-20px',
    width: '100%',
    height: '100%',
    opacity:'1'
}

const btn ={
    backgroundColor: '#04938b', 
    border: '2px solid #04938b',
    color:'white'
}

const labelStyle={
    color:'white',
    fontFamily: 'Helvetica',
    fontWeight:'bold',
    textTransform:'none' 
}

const textStyle={
    background:'transparent',
    color:'white',
    fontFamily: 'Helvetica',
    fontWeight:'bold',
}

const scrollable ={
    height: '600px',
    overflowY: 'scroll',
    paddingRight:'20px'
}

const hideScroll ={
    height: '600px',
    overflow:'hidden'
}