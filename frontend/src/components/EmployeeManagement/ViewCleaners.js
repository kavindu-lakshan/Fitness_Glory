import React, { useState,useEffect } from 'react';
import { getCleaners } from './api';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import GradientButton from 'react-linear-gradient-button';

export const AllCleaners =() =>{
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
            <div>
                <i style = {fafaStyles} class = "fa fa-search"></i>
                <div className = "Row">
                    <div className = "col-lg-3 mt-2 mb-2">
                        <div>
                            <input className = "form-control" type = "text" placeholder="SEARCH YOUR NIC" 
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
                    if(search === ""){
                        return row
                    }else if(row.NICNumber.toLowerCase().includes(search.toLowerCase())){
                        return row
                    }
                    }).map((row)=>(
                        <div>
                            <MDBCard style={cardStyles}>
                                <MDBRow className='g-0'>
                                    <MDBCol md='4'>
                                        <MDBCardImage src='https://res.cloudinary.com/djg9iitcl/image/upload/v1631205509/emily-sea-coiWR0gT8Cw-unsplash_jybqtd.jpg' alt='...' fluid  style = {imageStyles}/>
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
                                                        NIC NUMBER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{row.NICNumber} <br></br>
                                                        DATE OF BIRTH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{row.DOB.substring(0,10)} <br></br>
                                                        WORKING SHIFT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{row.Shift}<br></br>
                                                        GENDER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{row.Gender}<br></br>
                                                        MOBILE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{row.Mobile}<br></br>
                                                        ADDRESS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{row.Address}<br></br>
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
            
            <GradientButton style = {btnStyles}><a href = "/admin/EmployeeHome">BACK TO HOME</a></GradientButton>
        </div> 
    )
}

const textDesign = {
    fontSize: '16px',
    color: 'white',
    lineHeight: '26px'
}

const imageStyles = {
    width: '200px',
    height: '200px',
    marginTop: '25px',
    marginLeft: '30px'
}

const cardStyles = {
    background: 'black',
    opacity: 0.9,
    marginLeft: '150px',
    height: '250px',
    width: '1000px'
}

const headingStyles = {
    color: 'white',
    fontSize: '24px'
}

const searchStyles = {
    marginTop: '-45px',
    marginLeft: '475px'
}

const fafaStyles = {
    marginTop: '-100px',
    marginLeft: '770px'
}

const btnStyles = {
    marginLeft: '600px',
    color: 'black'
}