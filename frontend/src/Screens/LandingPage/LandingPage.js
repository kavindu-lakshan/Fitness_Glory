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
      <header>
        <div className="overlay"></div>

        <video
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source
            src="https://res.cloudinary.com/dqsssnerw/video/upload/v1631288924/gym-fitness_kjoax4.mp4"
            type="video/mp4"
          />
        </video>
        <div class="hero-wrapper videohover">
          <div className="videoText">
            <div className="container">
              <div className="slidertext01">Welcome to Fitness Glory</div>
              <div className="slidertext02">YOUR BODY BELONGS TO US</div>
              <div className="slidertext03">
                <br />
              </div>
              <div className="slidertext04">
                <a href="/member/register">
                  Join Us{" "}
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="about-wrap">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="title">
                <h1>
                  <span>Welcome To</span> FITNESS PROGRAMME
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
              <div class="readmore">
                <a href="#">
                  Read More{" "}
                  <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="aboutImg">
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
