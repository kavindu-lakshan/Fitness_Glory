import React, { Component } from "react";
import VideoBg from "reactjs-videobg";
import { Button } from "@material-ui/core";
import "./landing.css";
export default function EventLandingPage() {
  return (
    <div style={{ marginTop: "700px" }}>
      <div className="vid">
        <VideoBg autoplay loop>
          <VideoBg.Source
            src={
              "https://res.cloudinary.com/fitness-glory/video/upload/v1629833334/EventsVid_0_k9w8n0.3gp"
            }
            type="video/mp4"
          />
        </VideoBg>
      </div>
      <center>
        <div
          className="text-center"
          style={{
            textTransform: "uppercase",
            textAlign: "center",
            fontSize: "50px",
            fontFamily: "Arial",
            marginTop: "-500px",
          }}
        >
          <span style={{ textShadow: "7px 7px 60px black", color: "	red" }}>
            "w
          </span>
          {/* <span style={{textShadow:'7px 7px 60px black',color:'silver'}}>e</span>&nbsp; */}
          <span style={{ textShadow: "7px 7px 60px black", color: "white" }}>
            e
          </span>
          &nbsp;
          <span style={{ textShadow: "7px 7px 60px black", color: "white" }}>
            g
          </span>
          <span style={{ textShadow: "7px 7px 60px black", color: "red" }}>
            i
          </span>
          <span style={{ textShadow: "7px 7px 60px black", color: "white" }}>
            v
          </span>
          <span style={{ textShadow: "7px 7px 60px black", color: "white" }}>
            e
          </span>
          &nbsp;
          <span style={{ textShadow: "7px 7px 60px black", color: "red" }}>
            y
          </span>
          <span style={{ textShadow: "7px 7px 60px black", color: "white" }}>
            o
          </span>
          <span style={{ textShadow: "7px 7px 60px black", color: "white" }}>
            u
          </span>
          &nbsp;
          <span style={{ textShadow: "7px 7px 60px black", color: "red" }}>
            t
          </span>
          <span style={{ textShadow: "7px 7px 60px black", color: "white" }}>
            h
          </span>
          <span style={{ textShadow: "7px 7px 60px black", color: "white" }}>
            e
          </span>
          &nbsp;
          <span style={{ textShadow: "7px 7px 60px black", color: "red" }}>
            b
          </span>
          <span style={{ textShadow: "7px 7px 60px black", color: "white" }}>
            e
          </span>
          <span style={{ textShadow: "7px 7px 60px black", color: "white" }}>
            s
          </span>
          <span style={{ textShadow: "7px 7px 60px black", color: "red" }}>
            t.
          </span>
          &nbsp;
          <span style={{ textShadow: "7px 7px 60px black", color: "white" }}>
            j
          </span>
          <span style={{ textShadow: "7px 7px 60px black", color: "white" }}>
            o
          </span>
          <span style={{ textShadow: "7px 7px 60px black", color: "red" }}>
            i
          </span>
          <span style={{ textShadow: "7px 7px 60px black", color: "white" }}>
            n
          </span>
          &nbsp;
          <span style={{ textShadow: "7px 7px 60px black", color: "white" }}>
            t
          </span>
          <span style={{ textShadow: "7px 7px 60px black", color: "red" }}>
            o
          </span>
          <span style={{ textShadow: "7px 7px 60px black", color: "white" }}>
            d
          </span>
          <span style={{ textShadow: "7px 7px 60px black", color: "white" }}>
            a
          </span>
          <span style={{ textShadow: "7px 7px 60px black", color: "red" }}>
            y
          </span>
          <span style={{ textShadow: "7px 7px 60px black", color: "white" }}>
            .
          </span>
        </div>
        <div
          className="intro-text"
          style={{ color: "silver", fontFamily: "Agency FB Bold" }}
        >
          “An event is not over until everyone is tired of talking about it.”
        </div>
        <Button
          className="myBtn"
          style={{
            color: "white",
            marginTop: "80px",
            borderRadius: "50px",
            background: "transparent",
            boxShadow: "7px 7px 60px red",
            fontSize: "14px",
          }}
        >
          <a style={{ textDecoration: "none" }} href="/member/allevents-member">
            Join Events
          </a>
        </Button>
        <br />
        <br />
        <br />
        <br />
      </center>
    </div>
  );
}
