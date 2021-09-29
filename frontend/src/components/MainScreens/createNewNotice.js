import React from "react";
import { Container, Row } from "react-bootstrap";
import "../../components/MainScreen.css";

const createNewNotice = ({ title, children }) => {
  return (
    <div
      className="mainback"
      style={{
        backgroundImage:
          "url(" +
          "https://res.cloudinary.com/kavileocom/image/upload/v1632201162/gina-lin-m27OTMegUyA-unsplash_o6tvpy.jpg" +
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

export default createNewNotice;
