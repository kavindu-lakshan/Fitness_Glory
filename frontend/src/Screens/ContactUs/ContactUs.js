import React, { Component } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Card } from "@material-ui/core/";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import CallRoundedIcon from "@material-ui/icons/CallRounded";
import "./ContactUs.css";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
const mapStyles = {
  marginTop: "330px",

  marginLeft: "70px",

  width: "88%",
  height: "40%",
};
const conStyles = {
  position: "absolute",

  width: "100%",
  height: "90%",
};
const hStyle = { color: "Yellow" };
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
          <h1 style={hStyle}>CONTACT US</h1>
          <h3 style={hStyle}>
            <CallRoundedIcon />
            &nbsp; CALL US
          </h3>
          <h3 style={hStyle}>
            <EmailRoundedIcon />
            &nbsp;EMAIL US
          </h3>
          <h3 style={hStyle}>
            {" "}
            <LocationOnRoundedIcon />
            &nbsp; VISIT US
          </h3>
        </Container>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: -1.2884,
            lng: 36.8233,
          }}
        >
          <Marker onClick={this.onMarkerClick} name={"FitnessGlory"} />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBcCMoMxQJXem4kmEs3zSIxrO1kgyk1bsQ",
})(ContactUs);

/*
  apiKey: "AIzaSyBcCMoMxQJXem4kmEs3zSIxrO1kgyk1bsQ",
*/
