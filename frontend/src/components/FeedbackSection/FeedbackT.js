import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getFeedbackT } from '../../api/apiFBQA';
import { useRouteMatch } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { NavBarFB } from './NavBarFB';
// import feedbackBg from './ImagesD/feedbackBg.png'

export const FeedbackT = () => {
    const match = useRouteMatch()
    const [feedback, setFeedback] = useState([]); 

    useEffect(() =>{
        const displayFeedback = async() =>{
            const feedbacks =  await getFeedbackT(match.params.username)
            setFeedback(feedbacks)
        }
        displayFeedback()
    }, [])

    return(
        <div>
            <div style={bgImg}>
            <div className="container"> 
            </div>
            <div className="container"> 
            <div className="mt-3">
                <br/>
                <h3 style={labelStyle}className = "text-center">MY FEEDBACKS</h3>
                <div style={hideScroll}>
                <div style={scrollable}>
                <table style ={textStyle} class="table">
                <thead>
                    <tr>
                        <th scope="col">Topic of Feedback</th>
                        <th scope="col">View</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        feedback.map((row)=>(
                        <tr>
                        <td>
                            {row.topic}
                        </td>
                        <td>
                        <Link to={`/employee/viewF/${row._id}`} style={{ textDecoration: 'none' }}><Button style={btn} color="Secondary" variant="contained">View Feedback</Button></Link>
                        </td>
                        </tr>
                        ))
                    }
                </tbody>
                </table>
                <br/><br/>
                </div>
                </div>
            </div>
            </div>
            </div>
    </div>
    )
}

const feedbackBg = 'https://res.cloudinary.com/dulshan/image/upload/v1631385891/feedbackBg_fyyokz.png'
const bgImg ={
    background: `linear-gradient( rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.58)) ,url(${feedbackBg})`,
    backgroundSize: 'cover',
    position: 'center',
    marginTop:'-20px',
    right:'0%',
    left:'0%',
    width: '100%',
    height: '100%',
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
    height: '550px',
    overflowY: 'scroll',
    paddingRight:'20px'
}

const hideScroll ={
    height: '550px',
    overflow:'hidden'
}