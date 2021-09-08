import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";

const TrainerLandingPage = ({ history }) => {
  useEffect(() => {
    const trainerInfo = localStorage.getItem("trainerInfo");

    if (trainerInfo) {
      history.push("/employee/trainerHome");
    }
  }, [history]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">WELCOME TO FITNESS GLORY</h1>
              <p className="subtitle">YOUR BODY BELONGS TO US.</p>
            </div>
            <div className="buttonContainer">
              <a href="/employee/trainer-login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </a>
              <a href="/employee/trainer-register">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-primary"
                >
                  Signup
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default TrainerLandingPage;
