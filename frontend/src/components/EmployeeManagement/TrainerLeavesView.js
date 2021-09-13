import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import ImageBoxAnimation from './ImageBoxAnimated4';
import styled from 'styled-components';
import ScrollToTop from "react-scroll-to-top";

const Wrapper = styled.div``;

const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'black',
      height: 48,
      width: '200px',
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      textAlign: 'center',
      marginLeft: '400px',
      marginTop: '-20px',
      fontWeight: 'bold',
      
    },
    label: {
      textTransform: 'capitalize'
    },
  })(Button);

const Leaves = props => (
    <div>
        <div>
        <MDBCard style={cardStyles}>
    <MDBRow className='g-0'>
      <MDBCol md='4'>
        <MDBCardImage src='https://res.cloudinary.com/djg9iitcl/image/upload/v1631303524/woman-gym-body-building_1_b2md5k.jpg' alt='...' fluid  style = {imageStyles}/>
      </MDBCol>
      <MDBCol md='8'>
        <MDBCardBody>
          <MDBCardTitle style = {headingStyles}>{props.leave.NICNumber}</MDBCardTitle>
          
          <hr
                style={{
                    color: 'white',
                    height: 5
                }}
            />
          
          <MDBCardText>
            <div style = {textDesign}>
                LEAVE REQUEST &nbsp;&nbsp;&nbsp;:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.leave.Request}<br></br>
                LEAVE DATE &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.leave.LeaveDate.substring(0,10)}<br></br>
                RETURN DATE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.leave.ReturnDate.substring(0,10)}<br></br>
                LEAVE TIME  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.leave.LeaveTime}<br></br>
                RETURN TIME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.leave.ReturnTime}<br></br>
                LEAVE STATUS  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.leave.Status}<br></br>
            </div>
          </MDBCardText>
          <StyledButton><Link to = {"/admin/updateL/"+props.leave._id} styles = {linkStyles}>APPROVE LEAVE</Link></StyledButton>
        </MDBCardBody>
      </MDBCol>
    </MDBRow>
    </MDBCard>
    </div>
    </div>
)

export default class LeavesList extends Component{
    constructor(props) {
        super(props);
        this.state = {Leaves: []};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/Leaves/leave/Pending')
        .then(response => {
            this.setState({Leaves: response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }


    LeavesList(){
        return this.state.Leaves.map(currentLeave => {
            return <Leaves leave = {currentLeave}  key={currentLeave._id}/>;
        
    })
}
    render(){
        return (
            <div>
               <br></br>     
          <Wrapper>
                <ImageBoxAnimation/>
            </Wrapper>
            <div style = {backgroundStyles}>
              <br></br>
            <h1 style = {topicStyles}>CLEANERS WITH PENDING REQUESTS</h1>
            </div>
        <ScrollToTop smooth style = {scrollStyles} />
        <div style = {backStyles}>
            <br></br>
            
            <br></br>
                        {this.LeavesList()}
                        <br></br>
                        <br></br>
          <StyledButton style = {bStyles}><Link to = {"/admin/leaves"}>VIEW ALL LEAVES</Link></StyledButton>
          <br></br>   
          <br></br>   
          <br></br>   
          </div>
          <br></br>   
            </div>
        )
    }
}

const textDesign = {
    fontSize: '14px',
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
    maxWidth: '1000px',
    background: 'black',
    opacity: 0.9,
    marginLeft: '120px',
    borderColor: 'grey',
    borderWidth: '3px'
}

const headingStyles = {
    color: '#f29a7b',
    fontSize: '24px'
}

const scrollStyles = {
  color: 'black',
  backgroundColor: 'grey'
}

const backgroundStyles = {
  backgroundColor: 'black',
  height: '80px',
  width: '1229px',
  marginLeft: '55px'
}

const topicStyles = {
  color: 'white',
  textAlign: 'center',
}

const linkStyles = {
  fontSize: '20px',
  fontWeight: 'bold'
}

const backStyles = {
  backgroundColor: 'black',
  width: '1229px',
  marginLeft: '55px'
}

const bStyles = {
  marginLeft: '520px',
  color: 'black',
  fontWeight: 'bold',
  fontSize: '24px'
}