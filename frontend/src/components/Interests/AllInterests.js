import React, { Component } from "react";
import moment from "moment";
import { Table } from "react-bootstrap";
import { Button } from "@material-ui/core";
import axios from "axios";
import "./Interest.css";
import "./scrollBar.css";

export default class AllInterests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interests: [],
    };
  }

  componentDidMount() {
    this.retrieveInterests();
  }

  retrieveInterests() {
    axios
      .get("http://localhost:5000/event-interest/allInterests")
      .then((res) => {
        if (res.data.success) {
          this.setState({
            interests: res.data.allInterests,
          });
        } else {
          console.log("error retrieving from database");
        }
      });
  }

  formatDate = (date) => {
    return moment(date).format("DD/MM/YYYY");
  };

  render() {
    const weeknumber = moment().week() - 1;
    return (
      <div style={interestBG}>
        <br />
        <br />
        <center>
          <h1 style={labelStyleA}>All event Interests</h1>
        </center>
        <div style={{ marginLeft: "1100px", marginTop: "-53px" }}>
          <a href={`/employee/interest-report/${weeknumber}`}>
            <Button style={{ border: "2px solid black", background: "red" }}>
              Generate Weekly Report
            </Button>
          </a>
        </div>
        <br />
        <br />
        <center>
          <div style={hideScroll}>
            <div className="carbrQ" style={scrollable}>
              <Table responsive="sm" style={tblBodyy}>
                <thead style={{ color: "#F0CF18" }}>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Event Name</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Requested Date</th>
                  </tr>
                </thead>
                <tbody style={{ background: "transparent", color: "white" }}>
                  {this.state.interests.map((row, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}.</th>
                      <td>{row.eventName}</td>
                      <td>{row.memName}</td>
                      <td>{row.interestStatus}</td>
                      <td>{this.formatDate(row.createdAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </center>
        <br />
        <br />
      </div>
    );
  }
}

const intBg =
  "https://res.cloudinary.com/fitness-glory/image/upload/v1633216239/young-woman-drinking-water-gym-exercise-concept_1_gtwi3b.jpg";
const interestBG = {
  background: `url(${intBg})`,
  backgroundSize: "cover",
  position: "center",
  marginTop: "-20px",
  right: "0%",
  left: "0%",
  width: "100%",
  height: "100%",
};

const scrollable = {
  height: "550px",
  overflowY: "scroll",
  paddingRight: "20px",
};

const hideScroll = {
  height: "550px",
  overflow: "hidden",
};
const tblBg = "white";
const tblBodyy = {
  width: "90%",
  color: "white",
  border: "2px solid black",
  background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) ,url(${tblBg})`,
};

const labelStyleA = {
  color: "white",
  fontWeight: "bold",
  textTransform: "none",
  background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) ,url(${tblBg})`,
  width: "100%",
  height: "50px",
};
