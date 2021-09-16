import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = ({ history }) => {
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      history.push("/member/Home");
    }
  }, [history]);

  return (
    // <div className="main">
    //   <Container>
    //     <Row>
    //       <div className="intro-text">
    //         <div>
    //           <h1 className="title">WELCOME TO FITNESS GLORY</h1>
    //           <p className="subtitle">YOUR BODY BELONGS TO US.</p>
    //         </div>
    //         <div className="buttonContainer">
    //           <a href="/member/login">
    //             <Button size="md" className="landingbutton">
    //               Login
    //             </Button>
    //           </a>
    //           <a href="/member/register">
    //             <Button
    //               size="md"
    //               className="landingbutton"
    //               variant="outline-light"
    //             >
    //               Signup
    //             </Button>
    //           </a>
    //         </div>
    //       </div>
    //     </Row>
    //   </Container>
    // </div>
    <div>
      <header
        style={{
          position: "relative",
          backgroundColor: "black",
          height: "85vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div className="overlay"></div>

        <video
          playsInline="playsInline"
          autoPlay="autoPlay"
          muted="muted"
          loop="loop"
        >
          <source
            src="https://res.cloudinary.com/dqsssnerw/video/upload/v1631288924/gym-fitness_kjoax4.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-wrapper videohover">
          <div className="videoText">
            <div className="container">
              <div className="slidertext01">Welcome to Fitness Glory</div>
              <div className="slidertext02">YOUR BODY BELONGS TO US</div>
              <div className="slidertext03">
                <br />
              </div>
              <div className="slidertext04">
                <a href="/member/register">
                  Join Us <i className="fa fa-arrow-right" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="about-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="title-1">
                <h1>
                  <span>Welcome To</span> FITNESS GLORY
                </h1>
              </div>
              <p style={{ fontSize: "20px" }}>
                <strong>
                  ‘Fitness Glory’ is a well-equipped gym managed by a
                  well-qualified instructor with experienced trainers. Located
                  in the heart of Gampaha Town, it is specially recommended for
                  women looking for a decent place for physical personal
                  trainings, to maintain fitness and good health.
                </strong>
              </p>
              <div className="readmore">
                <a href="#">
                  Read More{" "}
                  <i
                    className="fa fa-arrow-circle-o-right"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="aboutImg">
                <img src="https://res.cloudinary.com/dqsssnerw/image/upload/v1631294082/aboutImg_yjz9fn.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
