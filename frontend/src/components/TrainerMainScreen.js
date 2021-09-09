import React from "react";
import { Container, Row } from "react-bootstrap";
import "./MainScreen.css";

const TrainerMainScreen = ({ title, children }) => {
  return (
    <div className="mainback"  style={{  
      backgroundImage: "url(" + "https://res.cloudinary.com/fitness-glory/image/upload/v1630854420/outlook-photography-and-studio-CvvF9lPJy6U-unsplash_cmxfi8.jpg" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <Container>
        <Row>
          <div className="page">
            {title && (
              <>
                <h1 style={{color:'white'}} className="heading">{title}</h1>
                <hr style={{color:'white'}}/>
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
};


export default TrainerMainScreen;
