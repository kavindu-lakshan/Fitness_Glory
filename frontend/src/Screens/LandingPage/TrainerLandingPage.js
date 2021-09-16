import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./TrainerLandingPage.css";

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
          <center>
            <div
              className="text-center"
              style={{
                textTransform: "uppercase",
                textAlign: "center",
                fontSize: "50px",
                fontFamily: "Arial",
              }}
            >
              <span
                style={{ textShadow: "7px 7px 60px black", color: "	#00CC00" }}
              >
                "M
              </span>
              <span
                style={{ textShadow: "7px 7px 60px black", color: "silver" }}
              >
                o
              </span>
              <span
                style={{ textShadow: "7px 7px 60px black", color: "silver" }}
              >
                t
              </span>
              <span
                style={{ textShadow: "7px 7px 60px black", color: "#00CC00" }}
              >
                i
              </span>
              <span
                style={{ textShadow: "7px 7px 60px black", color: "silver" }}
              >
                v
              </span>
              <span
                style={{ textShadow: "7px 7px 60px black", color: "silver" }}
              >
                a
              </span>
              <span
                style={{ textShadow: "7px 7px 60px black", color: "#00CC00" }}
              >
                t
              </span>
              <span
                style={{ textShadow: "7px 7px 60px black", color: "silver" }}
              >
                i
              </span>
              <span
                style={{ textShadow: "7px 7px 60px black", color: "silver" }}
              >
                o
              </span>
              <span
                style={{ textShadow: "7px 7px 60px black", color: "#00CC00" }}
              >
                n
              </span>
              &nbsp;
              <span
                style={{ textShadow: "7px 7px 60px black", color: "silver" }}
              >
                i
              </span>
              <span
                style={{ textShadow: "7px 7px 60px black", color: "silver" }}
              >
                s
              </span>
              &nbsp;
              <span
                style={{ textShadow: "7px 7px 60px black", color: "#00CC00" }}
              >
                w
              </span>
              <span
                style={{ textShadow: "7px 7px 60px black", color: "silver" }}
              >
                h
              </span>
              <span
                style={{ textShadow: "7px 7px 60px black", color: "silver" }}
              >
                a
              </span>
              <span
                style={{ textShadow: "7px 7px 60px black", color: "#00CC00" }}
              >
                t
              </span>
              &nbsp;
              <span
                style={{ textShadow: "7px 7px 60px black", color: "silver" }}
              >
                g
              </span>
              <span
                style={{ textShadow: "7px 7px 60px black", color: "silver" }}
              >
                e
              </span>
              <span
                style={{ textShadow: "7px 7px 60px black", color: "#00CC00" }}
              >
                t
              </span>
              <span
                style={{ textShadow: "7px 7px 60px black", color: "silver" }}
              >
                s
              </span>
              &nbsp;
              <span
                style={{ textShadow: "7px 7px 60px black", color: "silver" }}
              >
                y
              </span>
              <span
                style={{ textShadow: "7px 7px 60px black", color: "#00CC00" }}
              >
                o
              </span>
              <span
                style={{ textShadow: "7px 7px 60px black", color: "silver" }}
              >
                u
              </span>
              &nbsp;
              <span
                style={{ textShadow: "7px 7px 60px black", color: "silver" }}
              >
                s
              </span>
              <span
                style={{ textShadow: "7px 7px 60px black", color: "#00CC00" }}
              >
                t
              </span>
              <span
                style={{ textShadow: "7px 7px 60px black", color: "silver" }}
              >
                a
              </span>
              <span
                style={{ textShadow: "7px 7px 60px black", color: "silver" }}
              >
                r
              </span>
              <span
                style={{ textShadow: "7px 7px 60px black", color: "#00CC00" }}
              >
                t
              </span>
              <span
                style={{ textShadow: "7px 7px 60px black", color: "silver" }}
              >
                e
              </span>
              <span
                style={{ textShadow: "7px 7px 60px black", color: "silver" }}
              >
                d
              </span>
              <span
                style={{ textShadow: "7px 7px 60px black", color: "#00CC00" }}
              >
                !"
              </span>
            </div>
            <div
              className="intro-text"
              style={{ color: "silver", fontFamily: "Agency FB Bold" }}
            >
              Exercise is King. Nutrition is Queen. Put them together & you’ve
              got a kingdom
            </div>
            <div>
              <a href="/employee/trainer-login">
                <Button
                  style={{
                    width: "200px",
                    height: "45px",
                    background: "#00CC00",
                    borderRadius: "50px",
                    marginTop: "20px",
                  }}
                >
                  <center>
                    <span style={{ marginTop: "-10px" }}> Get started</span>
                  </center>
                </Button>
                {/* Exercise is King. Nutrition is Queen. Put them together & you’ve got a kingdom */}
              </a>
            </div>
          </center>
        </Row>
      </Container>
    </div>
  );
};

export default TrainerLandingPage;
