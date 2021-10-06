import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <div className="abtMain">
      <Container>
        <Row>

          <center><br/>
            <div className="abtUs">
                <h2>About Us </h2>
                <hr/>
                <p>A well-equipped gym managed by a well-qualified instructor with experienced trainers.Located in the
                    heart of Fitness Town. We have recieved positive comments
                    from almost all our customers.it is specially recommended for women looking for a decent place for
                    physical personal trainings, to maintain fitness and good health.  
                </p>
            </div>
            <hr className="abtHr"/>
            <hr className="abtHr" style={{marginTop:'-16.4px'}}/>
            <div class="row">
                <div class="col-6 col-sm-5">
                <div className="abtMission" style={{marginLeft:"10px", marginRight:"-50px"}}>
                    <h3>Our Mission </h3>
                    <p>It is our mission to use health and fitness as a catalyst to help people from all walks
                    of life achieve their best, inside and outside of the gym. Whether they are completely
                        new to health and fitness or a seasoned athlete </p>
                </div>

                </div>
                <div class="col-2">
                <div class="abtvl"  style={{marginLeft:"75px"}}></div>
                </div>
                <div class="col-8 col-sm-5">
                <div className="abtVison" style={{marginRight:"10px", marginLeft:"-100px"}}>
                    <h3>Our Vision </h3>
                    <p>It is our mission to use health and fitness as a catalyst to help people from all walks
                        of life achieve their best, inside and outside of the gym. Whether they are completely
                        new to health and fitness or a seasoned athlete </p>
                </div>
                </div>
                <hr className="abtHr"/>
                <hr className="abtHr" style={{marginTop:'-16.4px'}}/>
                <br/><br/>
                <div className="abtOwner">
                    <div class="row" style={{marginLeft:"150px"}}>
                    <div class="col-6 col-sm-3">
                       <img src="https://res.cloudinary.com/dulshan/image/upload/v1631815226/avatar_bmbwov.png" height="160px" width="150px" style={{marginLeft:'100px'}}></img>
                    </div>
                    <div class="col-6 col-sm-6">
                        <h3>Owner</h3>
                        <p >It is our mission to use health and fitness as a catalyst to help people from all walks
                            of life achieve their best, inside and outside of the gym. </p>
                    </div>
                </div>
                <br/>
                </div>
                
            </div>
          </center>
        </Row>
      </Container>
    </div>
  );
};


