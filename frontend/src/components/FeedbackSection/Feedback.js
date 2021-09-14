import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getFeedback } from '../../api/apiFBQA';
import { useRouteMatch } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { NavBarFB } from './NavBarFB';
// import feedbackBg from './ImagesD/feedbackBg.png'

export const Feedback = () => {
    const match = useRouteMatch()
    const [feedback, setFeedback] = useState([]); 

    useEffect(() =>{
        const displayFeedback = async() =>{
            const feedbacks =  await getFeedback(match.params.email)
            setFeedback(feedbacks)
        }
        displayFeedback()
    }, [])

    return(
        <div>
            <div style={bgImg}>
            <div className="container">
            <div className="mt-3"><br/>
                <NavBarFB/>
            </div> 
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
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
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
                        <Link to={`/member/updateF/${row._id}`} style={{ textDecoration: 'none' }}><Button style={btn} color="Secondary" variant="contained">Update Feedback</Button></Link>
                        </td>
                        <td>
                        <Link to={`/member/deleteF/${row._id}`} style={{ textDecoration: 'none'}}><Button style={btn} color="Secondary" variant="contained">Delete Feedback</Button></Link>
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
       
//         <div>
//             <div className="container">
//             <div className="mt-3">
//                <NavBarFB/>
//             </div>
//             </div>
//             <div className="container">
//             <div className="mt-3">
//                 <h3>All Feedbacks</h3>
//                 <table class="table">
//                 <thead>
//                     <tr>
//                         <th scope="col">Topic of Feedback</th>
//                         <th scope="col">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         feedback.map((row) =>(
//                             <tr>
//                             <td>
//                                     {row.topic}
//                             </td>
//                             <td>
//                                 <Link to={`/updateF/${row._id}`}>Edit</Link><br/>
//                                 <Link to={`/deleteF/${row._id}`}>Delete</Link>
//                             </td>
//                             </tr>
//                         ))
//                     }

//                 </tbody>
//                 </table>
//             </div>
//             </div>
//         </div>
//     )
// }