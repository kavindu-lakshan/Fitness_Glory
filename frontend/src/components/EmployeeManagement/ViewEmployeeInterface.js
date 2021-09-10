import React from 'react';
import Fade from 'react-reveal/Fade';
import CenteredTabs from './AppBar';

class ViewEmployeeInterface extends React.Component {
  render() {
    return (
      <div>
        <div style = {bgStyles}>
          <Fade left>
            <img src = "https://res.cloudinary.com/djg9iitcl/image/upload/v1631102075/Slide2_kstbbs.jpg" alt = "Carousel image failed to load" style = {imageStyles}></img>
            <h1 style = {headingStyles}>EMPLOYEE INFORMATION</h1>
          </Fade>
        </div>
        <br></br>
        <div style = {AppBarStyles}>
          <CenteredTabs/>
        </div>
      </div>
    );
  }
}

export default ViewEmployeeInterface;

const imageStyles = {
  marginLeft: '560px',
  height: '480px',
  width: '725px',
  marginTop: '10px'
}

const headingStyles = {
  color: 'white',
  fontSize: '28px',
  marginLeft: '60px',
  marginTop: '-300px'
}

const bgStyles = {
  width: '98%',
  marginTop: '30px',
  height: '500px',
  backgroundColor: 'black',
  marginLeft: '15px'
}

const AppBarStyles = {
  marginTop: '30px',
  marginLeft: '35%'
}