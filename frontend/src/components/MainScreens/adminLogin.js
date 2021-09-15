import React from "react";
import { Container, Row } from "react-bootstrap";
import "../../components/MainScreen.css";

const adminLogin = ({ title, children }) => {
  return (
    <div
      className="mainback"
      style={{
        backgroundImage:
          "url(" +
          "https://res.cloudinary.com/kavileocom/image/upload/v1631696080/sam-moqadam-0sa8D74iodI-unsplash_uz5hqi.jpg" +
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

export default adminLogin;
