import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import { allQuestionsT } from '../../api/apiFBQA'
import { NavBar } from './NavBar';
// import otherQuestionBg from './ImagesD/otherQuestionBg.png'

export const OtherQuestionsM = () => {
    const [questions, setQuestions] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(()=>{
        const displayQuestion = async()=>{
            const question = await allQuestionsT()
            setQuestions(question);
        }
        displayQuestion();
    },[])
    
    return (
        <div>
            <div style={bgImg}>
            <div className="container">
            <div className="mt-3"><br/>
                <NavBar/>
            </div>
            <br/>
            <div>
                <input style={se} type="text"  class="form-control rounded" placeholder="Search" aria-label="Search"
                    onChange={(e)=>{
                        setSearch(e.target.value);
                    }}/>
            </div>

            </div>
            <div className="container">
            <div className="mt-3">
                <br/>
                <h3 style={labelStyle} className = "text-center">ALL QUESTIONS</h3>
                <div style={hideScroll}>
                <div style={scrollable}>
                <table style ={textStyle} class="table">
                <thead>
                    <tr>
                        <th scope="col">Topic of Question</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    questions.filter((row)=>{
                        if(search == ""){
                            return row
                        }else if(row.qTopic.toLowerCase().includes(search.toLowerCase())){
                            return row
                        }
                    }).map((row)=>(
                    <tr>   
                    <td>
                        {row.qTopic}
                    </td>
                    <td>
                    <Link to={`/member/a/createA/${row._id}`} style={{ textDecoration: 'none' }}><Button style={btn} color="Secondary" variant="contained">Select Question</Button></Link>
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
const otherQuestionBg = 'https://res.cloudinary.com/dulshan/image/upload/v1631385893/otherQuestionBg_hdwn2x.png'

const bgImg ={
    background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.58)) ,url(${otherQuestionBg})`,
    backgroundSize: 'cover',
    position: 'center',
    marginTop:'-20px',
    width: '100%',
    height: '100%',
    opacity:'1'
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

const btn ={
    backgroundColor: '#04938b', 
    border: '2px solid #04938b',
    color:'white'
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

const se ={
    margin:'0 auto',
    width:'500px'
}
