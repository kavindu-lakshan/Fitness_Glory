import React, { useState } from "react";

import {
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";
import { Form } from "react-bootstrap";
import axios from "axios";
import "../StylesA/Events.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddEvents() {
  const [tagline, setTagline] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [date, setDate]= useState("");
  const [details, setDetails] = useState("");
  const [members, setMembers] = useState("");
  const [crslimg, setCrslimg] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);

  function sendData(e) {
    e.preventDefault();
    const newEvent = {
      tagline,
      title,
      description,
      date,
      details,
      members,
      crslimg,
    };
    axios
      .post("http://localhost:5000/event/addEvent", newEvent)
      .then(() => {
        alert("Event Added Successfully!");
      })
      .catch((err) => {
        alert(err);
      });
  }
  const postDetails = (pics) => {
    if (!pics) {
      return setPicMessage("Please Select an Image");
    }

    setPicMessage(null);

    //define image types
    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/png" ||
      pics.type === "image/jpg" ||
      pics.type === "image/gif"
    ) {
      const data = new FormData();
      data.append("file", pics); //cloudinary fields to save image
      data.append("upload_preset", "trainerfg"); //trainerfg is the path preset
      data.append("cloud_name", "fitness-glory"); //username of cloudinary
      fetch("https://api.cloudinary.com/v1_1/fitness-glory/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCrslimg(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      //if image is not an above mentioned types(jpeg,jpg,png)
      return setPicMessage("Please select jpg,png or jpeg type image");
    }
  };
  const [date, setselectedDate] = useState("");
  const minDate = new Date(Date.now());

  return (
    <div style={bgimage}>
      <br />
      <div className="form1">
        <center>
          <div
            style={{
              width: "600px",
              padding: "20px",
              boxShadow: "7px 7px 60px #D3D3D3",
              borderRadius: "50px",
            }}
          >
            <br />
            <center>
              <h2 style={{ color: "	#D3D3D3" }}>Add an Event</h2>
              <hr style={{ color: "	#D3D3D3" }} />
            </center>
            <Form onSubmit={sendData}>
              <div class="row">
                <div class="col-6 col-sm-6">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ color: "#C0C0C0" }}>
                      Enter Event Tagline
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Tagline"
                      required="required"
                      maxlength="25"
                      minLength="5"
                      style={{
                        background: "transparent",
                        border: "2px solid #808080",
                        color: "#D3D3D3",
                      }}
                      onChange={(e) => {
                        setTagline(e.target.value);
                      }}
                    />
                  </Form.Group>
                </div>{" "}
                <div class="col-6 col-sm-6">
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{ color: "#C0C0C0" }}>
                      Enter Event Title
                    </Form.Label>
                    <Form.Control
                      type="text"
                      // defaultValue="hey"
                      placeholder="Event Title"
                      required="required"
                      maxlength="40"
                      minLength="8"
                      style={{
                        width: "200px",
                        border: "2px solid #808080",
                        background: "transparent",
                        color: "#D3D3D3",
                      }}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </Form.Group>
                </div>
              </div>
              <br />
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ color: "#C0C0C0" }}>
                  Enter Event Description
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Event Description(Max 300)"
                  style={{
                    border: "2px solid 	#808080",
                    background: "transparent",
                    color: "#D3D3D3",
                  }}
                  maxlength="300"
                  minLength="25"
                  required="required"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </Form.Group>
              <br />
              <div class="row">
                <div class="col-6 col-sm-6">
                  <div className="form-group col-md-100">
                    <label for="date" className="form-label">
                      Select Date
                    </label>
                    <DatePicker
                      selected={date}
                      onChange={(date) => setselectedDate(date)}
                      minDate={minDate}
                      required="required"
                    />
                  </div>
                </div>
                <div class="col-6 col-sm-6">
                  <FormControl
                    component="fieldset"
                    style={{
                      border: "2px solid #808080",
                      background: "transparent",
                    }}
                  >
                    <Form.Label style={{ color: "#C0C0C0", padding: "10px" }}>
                      Member Type
                    </Form.Label>
                    <hr />
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      onChange={(e) => {
                        setMembers(e.target.value);
                      }}
                    >
                      <FormControlLabel
                        style={{ color: "#C0C0C0" }}
                        value="Females Only"
                        control={<Radio />}
                        label="Females Only"
                      />
                      <FormControlLabel
                        style={{ color: "#C0C0C0" }}
                        value="Male only"
                        control={<Radio />}
                        label="Males Only"
                      />
                      <FormControlLabel
                        style={{ color: "#C0C0C0" }}
                        value="Both Male Female"
                        control={<Radio />}
                        label="Both"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ color: "#C0C0C0" }}>
                  Enter Event Details
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Event Details"
                  required="required"
                  style={{
                    border: "1px solid #808080",
                    background: "transparent",
                    color: "#D3D3D3",
                  }}
                  onChange={(e) => {
                    setDetails(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group controlId="crslimg">
                <Form.Label style={{ color: "#C0C0C0" }}>
                  Event Picture
                </Form.Label>
                <Form.File
                  required="required"
                  onChange={(e) => postDetails(e.target.files[0])} //0 means if you select more than one image, then this will select the first image we upload
                  id="custom-file"
                  type="image/png"
                  // label="Upload Profile Picture"
                  custom
                />
              </Form.Group>
              <Button
                className="button"
                variant="secondary"
                type="submit"
                style={{ color: "white", background: "green" }}
              >
                Submit
              </Button>
            </Form>
            <br />
          </div>
        </center>
      </div>
      <br />
      <br />
    </div>
  );
}

const bgimage = {
  // background:`url("https://res.cloudinary.com/fitness-glory/image/upload/v1631593901/young-woman-drinking-water-gym-exercise-concept_fomgjh.jpg")`
  background: `linear-gradient( rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)) ,url(${"https://res.cloudinary.com/fitness-glory/image/upload/v1631593901/young-woman-drinking-water-gym-exercise-concept_fomgjh.jpg"})`,
  backgroundSize: "cover",
  position: "center",
  width: "100%",
  height: "100%",
  opacity: "1",
};
