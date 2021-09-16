import React, { Component } from "react";
import axios from "axios";
import "./AllTrainers.css";
import GradientButton from 'react-linear-gradient-button';

export default class AllTrainers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: [],
    };
  }

  componentDidMount() {
    this.retrieveTrainers();
  }

  retrieveTrainers() {
    axios.get("/trainerDetails").then((res) => {
      if (res.data.success) {
        this.setState({
          details: res.data.existingDetails,
        });

        console.log(this.state.details);
      }
    });
  }

  render() {
    return (
      // <div className="bg"style={{background: `linear-gradient( rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)) ,url(${"https://res.cloudinary.com/fitness-glory/image/upload/v1631205142/Screenshot_2021-09-09_220204_ziwlrv.png"})`, backgroundPosition:'relative',backgroundRepeat:'no-repeat',backgroundSize:'cover', height:'100%',width:'auto'}}>
      <div>
        <div style={bstyles}>
          <div className="bg">
            <br />
            <br />
            <div className="container">
              <div className="content contact-list">
                <div
                  className="card card-default"
                  style={{
                    background: "transparent",
                    border: "1px solid grey",
                    boxShadow: "7px 7px 60px white",
                  }}
                >
                  <div className="card-header align-items-center px-3 px-md-5">
                    <h2 style={{ color: "#e3e3e3" }}>All Trainers</h2>
                    {/* <div className="btn">
                  <a href="/employee/trainer-register"><button type="button" ><span>Add Trainer</span></button></a>
                </div> */}
                    <div className="btnAdd">
                      {" "}
                      <a href="/employee/trainer-register">
                        <span>Add Trainer</span>
                      </a>{" "}
                    </div>
                  </div>
                  <hr style={{ color: "white" }} />
                  <div className="card-body px-3 px-md-5">
                    <div className="row">
                      {this.state.details.map((details) => (
                        <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12">
                          <div
                            className="card card-default p-4"
                            style={{
                              background: `linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75))`,
                              boxShadow: "7px 7px 60px grey",
                              border: "2px solid #c9c9c9",
                            }}
                          >
                            <img
                              src={details.pic}
                              className="mr-3 img-fluid rounded"
                              style={{ border: "2px solid #c9c9c9" }}
                            />
                            <div className="media-body">
                              <div
                                style={{
                                  marginLeft: "115px",
                                  marginTop: "-100px",
                                  color: "#dcdcdc",
                                  fontSize: 14,
                                }}
                              >
                                {details.fname} {details.lname}
                              </div>
                              <hr
                                style={{
                                  marginLeft: "115px",
                                  color: "#c9c9c9",
                                  marginTop: "10px",
                                }}
                              />
                              <ul className="list-unstyled text-smoke text-smoke">
                                <li
                                  className="d-flex"
                                  style={{
                                    marginLeft: "115px",
                                    color: "#c9c9c9",
                                  }}
                                >
                                  <i className="mdi mdi-map mr-1"></i>
                                  <span style={{ fontSize: 11 }}>
                                    Address : {details.address}
                                  </span>
                                </li>
                                <li
                                  className="d-flex"
                                  style={{
                                    marginLeft: "115px",
                                    color: "#c9c9c9",
                                  }}
                                >
                                  <i className="mdi mdi-email mr-1"></i>
                                  <span style={{ fontSize: 11 }}>
                                    Gender&nbsp; : {details.gender}
                                  </span>
                                </li>
                                <li
                                  className="d-flex"
                                  style={{
                                    marginLeft: "115px",
                                    color: "#c9c9c9",
                                  }}
                                >
                                  <i className="mdi mdi-email mr-1"></i>
                                  <span style={{ fontSize: 11 }}>
                                    DOB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span style={{ marginLeft: "-2px" }}>
                                      {" "}
                                      : {details.dob}
                                    </span>
                                  </span>
                                </li>
                                <li
                                  className="d-flex"
                                  style={{
                                    marginLeft: "115px",
                                    color: "#c9c9c9",
                                  }}
                                >
                                  <i className="mdi mdi-email mr-1"></i>
                                  <span style={{ fontSize: 11 }}>
                                    ExpYrs&nbsp;{" "}
                                    <span style={{ marginLeft: "4px" }}>
                                      : {details.yrsexp}
                                    </span>
                                  </span>
                                </li>
                                <li
                                  className="d-flex"
                                  style={{
                                    marginLeft: "115px",
                                    color: "#c9c9c9",
                                  }}
                                >
                                  <i classNames="mdi mdi-phone mr-1"></i>
                                  <span style={{ fontSize: 11 }}>
                                    Contact&nbsp;: {details.mobile}
                                  </span>
                                </li>
                                <li
                                  className="d-flex"
                                  style={{
                                    marginLeft: "",
                                    marginTop: "-25px",
                                    color: "#848482",
                                  }}
                                >
                                  <i className="mdi mdi-email mr-1"></i>
                                  <span style={{ fontSize: 9 }}>
                                    @{details.username}
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                
                    </div>
                    <GradientButton style = {btnStyles}><a href = "/admin/EmployeeHome">BACK TO HOME</a></GradientButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

const bstyles = {
  background:
    'linear-gradient( rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url("https://res.cloudinary.com/fitness-glory/image/upload/v1631340068/portrait-young-healthy-woman-running-treadmill-she-smile-during-workout-gym-healthy-lifestyle-concept-copy-space-vertical-image_1_armoex.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "relative",
  height: "100%",
  width: "100%",
  marginTop: "-30px",
};

const btnStyles = {
  marginLeft: '440px',
  color: 'black'
}