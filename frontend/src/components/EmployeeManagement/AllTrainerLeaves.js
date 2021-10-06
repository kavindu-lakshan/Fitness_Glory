import React, { useState,useEffect } from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { getLeaves } from './api';
import ImageBoxAnimation from './ImageBoxAnimated3';
import styled from 'styled-components';
import ScrollToTop from "react-scroll-to-top";

const Wrapper = styled.div``;

export const AllTrainerLeaves =() =>{
    const[leaves, setLeaves]= useState([]);
    const[search, setSearchTerm]= useState("");

    useEffect(()=>{
        const displayLeaves = async() =>{
            const leaves = await getLeaves()
            setLeaves(leaves)
        }
        displayLeaves()
    }, [])

    return (
        <div>
            <ScrollToTop smooth style = {scrollStyles} />
            <br></br>
            <Wrapper>
                <ImageBoxAnimation/>
            </Wrapper>
            <div>
                <br></br>
                <br></br>
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
                leaves.filter((row)=>{
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
                                <MDBCardImage src='https://res.cloudinary.com/djg9iitcl/image/upload/v1631301413/young-adult-woman-doing-strength-exercises-gym_2_jmabgm.jpg' alt='...' fluid  style = {imageStyles}/>
                            </MDBCol>
                            <MDBCol md='8'>
                                <MDBCardBody>
                                    <MDBCardTitle style = {headingStyles}>{row.NICNumber}</MDBCardTitle>
                                        <hr
                                        style={{
                                            color: 'white',
                                            height: 5
                                        }}
                                    />
                                        <MDBCardText>
                                            <div style = {textDesign}>
                                                REQUEST&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;{row.Request} <br></br>
                                                LEAVE DATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;{row.LeaveDate.substring(0,10)}<br></br>
                                                RETURN DATE&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;{row.ReturnDate.substring(0,10)}<br></br>
                                                LEAVE TIME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;{row.LeaveTime}<br></br>
                                                RETURN TIME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;{row.ReturnTime}<br></br>
                                                STATUS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;{row.Status}<br></br>
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
    lineHeight: '24px'
}

const imageStyles = {
    width: '270px',
    height: '200px',
    marginTop: '20px',
    marginLeft: '30px'
}

const cardStyles = {
    maxWidth: '1000px',
    background: 'black',
    opacity: 0.9,
    marginLeft: '180px',
    height: '245px'
}

const headingStyles = {
    color: 'white',
    fontSize: '24px'
}

const searchStyles = {
    marginTop: '-45px',
    marginLeft: '510px'
}

const fafaStyles = {
    marginTop: '-100px',
    marginLeft: '810px'
}

const scrollStyles = {
    color: 'black',
    backgroundColor: 'grey'
}