import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { getTrainers } from '../../api/apiFBQA';
import { Button } from '@material-ui/core';
import { NavBarFB } from './NavBarFB';
import './scrollBar.css'
// import trainersBg from './ImagesD/trainersBg.png'

export const Trainers = () =>{
    const [trainer, setTrainer] = useState([]);

    useEffect(() =>{
        const displayTrainer = async() =>{
            const trainers =  await getTrainers()
            setTrainer(trainers)
        }
        displayTrainer()
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
                <h3 style={labelStyle}className = "text-center">TRAINERS</h3>
                <div style={hideScroll}>
                <div className="carbrQ" style={scrollable}>
                <table style ={textStyle} class="table">
                <thead>
                    <tr>                       
                        <th scope="col">Avatar</th>
                        <th scope="col">Trainer Name</th>
                        <th scope="col">Action</th>
                     </tr>
                </thead>
                <tbody>
                {
                    trainer.map((row) =>(
                        <tr key={row._id}>
                        <td>
                            <img src={row.pic} height='100px' width='100px' alt="Trainer Profile Pic"/>
                        </td>
                        <td>
                            {row.username} 
                        </td>
                        <td>
                            <Link to={`/member/trainer/${row.username}`} style={{ textDecoration: 'none'}}><Button style={btn} color="Secondary" variant="contained" >Select</Button></Link>
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
const trainersBg = 'https://res.cloudinary.com/dulshan/image/upload/v1631385893/trainersBg_w0fnle.png'
const bgImg ={
    background: `linear-gradient( rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.58)) ,url(${trainersBg})`,
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
//     return(
//         <div>
//             <div className="container">
//             <div className="mt-3">
//                 <h3>All Trainers</h3>
//                 <table class="table">
//                 <thead>
//                     <tr>
//                         <th scope="col">TID</th>
//                         <th scope="col">Trainer Name</th>
//                         <th scope="col">Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {
//                         trainer.map((row) =>(
//                             <tr key={row._id}>
//                             <td>
//                                     {row.tID}
//                             </td>
//                             <td>
//                                     {row.tUsername} 
//                             </td>
//                             <td>
//                                 <Link to={`/member/trainer/${row.tUsername}`}>Select</Link><br/>
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

