import React, { Component } from "react";
import { Container, Table } from "react-bootstrap";
import { Card } from "@material-ui/core/";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import CallRoundedIcon from "@material-ui/icons/CallRounded";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./ContactUs.css";

const conStyles = {
  position: "absolute",

  width: "100%",
  height: "90%",
};
const hStyle = { color: "yellow" };
export class ContactUs extends Component {
  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  render() {
    return (
      <div className="ctback">
        <Container style={conStyles}>
          <center>
            <Card
              className="customCard"
              style={{ width: "92rem", height: "50px", paddingTop: "10px" }}
            >
              <h1 style={hStyle}>CONTACT US</h1>
            </Card>
          </center>

          <center>
            <Card
              bg="primary"
              style={{ width: "92rem" }}
              className="customCard2"
            >
              <Table>
                <th>
                  <Card className="customCard">
                    <h3 style={hStyle}>
                      <CallRoundedIcon />
                      &nbsp; CALL US <br></br>
                      +94336667890
                    </h3>
                  </Card>
                </th>
                <br></br>
                <th>
                  <Card className="customCard">
                    <h3 style={hStyle}>
                      <EmailRoundedIcon />
                      &nbsp;EMAIL US <br></br>
                      fitnessglory@gmail
                    </h3>
                  </Card>
                </th>
                <br></br>
                <th>
                  <Card className="customCard">
                    <h3 style={hStyle}>
                      {" "}
                      <LocationOnRoundedIcon />
                      &nbsp; VISIT US <br></br>
                      NO 21,5th Lane,Gamapaha.
                    </h3>
                  </Card>
                </th>
                <th>
                  <Card className="customCard">
                    <h3 style={hStyle}>
                      <FacebookIcon />
                      &nbsp;FACEBOOK <br></br>
                      @fitnessGlory
                    </h3>
                  </Card>
                </th>
                <br></br>
              </Table>
            </Card>
          </center>
        </Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.2932549101865!2d79.99132271477387!3d7.091966094878323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fbecc982cf53%3A0x8834962e11c7cd18!2sFitness%20Glory%20Gym!5e0!3m2!1sen!2slk!4v1633522668004!5m2!1sen!2slk"
          width="100%"
          height="450"
          style={{ marginTop: "330px" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    );
  }
}
export default ContactUs;
