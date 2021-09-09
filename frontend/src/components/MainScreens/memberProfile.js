import React from "react";
import { Container, Row } from "react-bootstrap";
import "../../components/MainScreen.css";

const memberProfile = ({ title, children }) => {
  return (
    <div
      className="mainback"
      style={{
        backgroundImage:
          "url(" +
          "https://res.cloudinary.com/kavileocom/image/upload/v1631175915/daniel-apodaca-WdoQio6HPVA-unsplash_hta8vc.jpg" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <Row>
          <div className="page">
            {title && (
              <>
                <h1 className="heading1">{title}</h1>
                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default memberProfile;
