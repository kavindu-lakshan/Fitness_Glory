import React from "react";
import { Container, Row } from "react-bootstrap";
import "../../components/MainScreen.css";

const memberLogin = ({ title, children }) => {
  return (
    <div
      className="mainback"
      style={{
        backgroundImage:
          "url(" +
          "https://res.cloudinary.com/kavileocom/image/upload/v1631175604/background5_r9q7ek.jpg" +
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
                <h1 className="heading">{title}</h1>
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

export default memberLogin;
