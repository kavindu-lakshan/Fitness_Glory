import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { getCleaners } from './api';
import Fade from 'react-reveal/Fade';
import ScrollToTop from "react-scroll-to-top";
import CreateDismissal from './CreateDismissalConnection';

const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      width: '500px',
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      textAlign: 'center'
    },
    label: {
      textTransform: 'capitalize',
    },
})(Button);

export const DeleteCleaners =() =>{
    const[cleaners, setCleaners] = useState([]);
    const[search, setSearchTerm] = useState("");

    useEffect(()=>{
        const displayCleaners = async() => {
        const cleaners = await getCleaners()
            setCleaners(cleaners)
        }
        displayCleaners()
    }, [])

    return (
        <div>
            <ScrollToTop  style = {scrollStyles}/>
            <div>
                <div style = {bgStyles}>
                    <Fade left>
                        <img src = "https://res.cloudinary.com/djg9iitcl/image/upload/v1631102139/Slide4_vvdajv.jpg" alt = "Carousel image failed to load" style = {imageStyles2}></img>
                        <h1 style = {headingStyles2}>REMOVE EMPLOYEES</h1>
                    </Fade>
                    </div>
                    <br></br><br></br><br></br>
                </div>
            <div>
                <i style = {fafaStyles} class = "fa fa-search"></i>
                <div className = "Row">
                    <div className = "col-lg-3 mt-2 mb-2">
                        <div>
                            <input className = "form-control" type = "text" placeholder="Search" 
                                onChange={(e)=>{
                                    setSearchTerm(e.target.value);
                                }}
                                style = {searchStyles}
                    
                            />
                        </div>
                    </div>
                </div>
                <br></br>
                {
                cleaners.filter((row)=>{
                    if(search == ""){
                        return row
                    }else if(row.NICNumber.toLowerCase().includes(search.toLowerCase())){
                        return row
                    }
                    }).map((row)=>(
                        <div>
                            <MDBCard style={cardStyles}>
                                <MDBRow className='g-0'>
                                    <MDBCol md='4'>
                                        <MDBCardImage src='https://res.cloudinary.com/djg9iitcl/image/upload/v1631133107/EmployeeMenu1_eprtgo.jpg' alt='...' fluid  style = {imageStyles}/>
                                    </MDBCol>
                                    <MDBCol md='8'>
                                        <MDBCardBody>
                                            <MDBCardTitle style = {headingStyles}>{row.FirstName} {row.LastName}</MDBCardTitle>
                                            <hr
                                                style={{
                                                    color: 'white',
                                                    height: 5
                                                }}
                                            />
                                                <MDBCardText>
                                                    <div style = {textDesign}>
                                                        NIC NUMBER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{row.NICNumber} <br></br>
                                                        DATE OF BIRTH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{row.DOB.substring(0,10)} <br></br>
                                                        WORKING SHIFT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{row.Shift}<br></br>
                                                        GENDER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{row.Gender}<br></br>
                                                        MOBILE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{row.Mobile}<br></br>
                                                        ADDRESS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{row.Address}<br></br>
                                                        <br></br>
                                                        <StyledButton style = {btnStyles}><Link to = {"/admin/delete/"+row._id}  style = {linkStyles}>DELETE INFORMATION</Link></StyledButton>
                                                    </div>
                                                </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCard>
                            <br></br>
                        </div>
                    ))
                }
            </div>
        </div> 
    )
}

const textDesign = {
    fontSize: '16px',
    color: 'white',
    lineHeight: '26px'
}

const imageStyles = {
    width: '270px',
    height: '200px',
    marginTop: '30px',
    marginLeft: '30px'
}

const cardStyles = {
    background: 'black',
    opacity: 0.9,
    height: '330px',
    width: '1000px',
    marginLeft: '170px'
}

const headingStyles = {
    color: 'white',
    fontSize: '24px'
}

const searchStyles = {
    marginTop: '-45px',
    marginLeft: '490px'
}

const fafaStyles = {
    marginTop: '-100px',
    marginLeft: '790px'
}

const btnStyles = {
    marginTop: '0px',
    marginLeft: '360px',
    textDecoration: 'none',
    width: '270px',
    textColor: 'black',
    fontSize: '16px',
    animation: 'glowing 1300ms infinite',
    background: 'linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)'
}

const linkStyles = {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold'
}

const bgStyles = {
    width: '98%',
    marginTop: '20px',
    height: '500px',
    backgroundColor: 'black',
    marginLeft: '15px'
}


const imageStyles2 = {
    marginLeft: '560px',
    height: '480px',
    width: '725px',
    marginTop: '10px'
}

const headingStyles2 = {
    color: 'white',
    marginTop: '-280px',
    fontSize: '28px',
    marginLeft: '30px',
    width: '500px',
    textAlign: 'center',
    lineHeight: '50px'
}

const scrollStyles = {
    color: 'black',
    backgroundColor: 'grey'
}


