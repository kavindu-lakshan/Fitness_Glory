import axios from "axios";
import React, { Component } from "react";
import {
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";
import { Form } from "react-bootstrap";

export default class UpdateEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tagline: "",
      title: "",
      description: "",
      date: "",
      members: "",
      details: "",
      crslimg: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;

    const { tagline, title, description, date, details, members, crslimg } =
      this.state;

    const data = {
      tagline: tagline,
      title: title,
      description: description,
      date: date,
      members: members,
      details: details,
      crslimg: crslimg,
    };
    axios
      .put(`http://localhost:5000/event/updateEvent/${id}`, data)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            tagline: "",
            title: "",
            description: "",
            date: "",
            members: "",
            details: "",
            crslimg: "",
          });
        }alert("Event Updated Successfully!");
      });
  };

  componentDidMount() {
    const url =
      "http://localhost:5000/event/eventdetails/" + this.props.match.params.id;

    axios.get(url).then((res) => {
      if (res.data.success) {
        this.setState({
          tagline: res.data.event.tagline,
          title: res.data.event.title,
          description: res.data.event.description,
          date: res.data.event.date,
          details: res.data.event.details,
          members: res.data.event.members,
          crslimg: res.data.event.crslimg,
        });
      } else {
        console.log("error retrieving from database");
      }
    });
  }

  render() {
    return (
      <div style={bgimage}>
        {/*<div className="vid">
                <VideoBg autoplay loop>
                <VideoBg.Source src={"./images-a/EventsVid.mp4"} type="video/mp4" />
                    </VideoBg>;
                </div> */}

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
                <h2 style={{ color: "	#D3D3D3" }}>
                  Event:{this.state.title}-Update
                </h2>
                <hr style={{ color: "	#D3D3D3" }} />
              </center>

              {/* 
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Event Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Event Title"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    required="required"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Event Tagline</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Tagline"
                    name="tagline"
                    value={this.state.tagline}
                    onChange={this.handleInputChange}
                    required="required"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Enter Event Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Event Descrption"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    required="required"
                    maxlength="300" 
                    minLength="25"
                  />
                </Form.Group>

                <form noValidate>
                  <TextField
                    id="datetime-local"
                    label="Next appointment"
                    type="date"
                    defaultValue="2021-05-24"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="date"
                    value={this.state.date}
                    onChange={this.handleInputChange}
                    required="required"
                  />
                </form>

                <FormControl>
                  <FormLabel component="legend">Member Type</FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    name="members"
                    value={this.state.members}
                    onChange={this.handleInputChange}
                    required="required"
                  >
                    <FormControlLabel
                      value="Females Only"
                      control={<Radio />}
                      label="Females Only"
                    />
                    <FormControlLabel
                      value="Males Only"
                      control={<Radio />}
                      label="Males Only"
                    />
                    <FormControlLabel
                      value="Both Male Female"
                      control={<Radio />}
                      label="Both Male Female"
                    />
                  </RadioGroup>
                </FormControl>

                <Form.Group className="mb-3">
                  <Form.Label>Enter Event Details</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Event Details"
                    name="details"
                    value={this.state.details}
                    onChange={this.handleInputChange}
                    required="required"
                  />
                </Form.Group> */}
              {/*     
                <Form.Group controlId="crslimg">
                <Form.Label style={{ color: "#C0C0C0" }}>
                  Event Picture
                </Form.Label>
                <Form.File
                value={this.state.details}
                  onChange={this.handleInputChange}//0 means if you select more than one image, then this will select the first image we upload
                  id="custom-file"
                  type="image/png"
                  // label="Upload Profile Picture"
                  custom
                />
              </Form.Group> */}

              {/* <Button
                  className="button"
                  variant="secondary"
                  type="submit"
                  onClick={this.onSubmit}
                >
                  Update Details
                </Button>
              </Form> */}
              <Form>
                <div class="row">
                  <div class="col-6 col-sm-6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label style={{ color: "#C0C0C0" }}>
                        Enter Event Tagline
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Tagline *"
                        style={{
                          background: "transparent",
                          border: "2px solid #808080",
                          color: "#D3D3D3",
                        }}
                        name="tagline"
                        value={this.state.tagline}
                        onChange={this.handleInputChange}
                        required="required"
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
                        placeholder="Event Title *"
                        required="required"
                        style={{
                          width: "200px",
                          border: "2px solid #808080",
                          background: "transparent",
                          color: "#D3D3D3",
                        }}
                        name="title"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </div>
                </div>
                <br />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label style={{ color: "#C0C0C0" }}>
                    Enter Event Description *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Event Descrption(Max 300) *"
                    style={{
                      border: "2px solid 	#808080",
                      background: "transparent",
                      color: "#D3D3D3",
                    }}
                    maxlength="300"
                    minLength="25"
                    required="required"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
                <br />
                <div class="row">
                  <div class="col-6 col-sm-6">
                    <div className="form-group col-md-100">
                      <form noValidate>
                        <TextField
                          id="datetime-local"
                          label="Select Date"
                          type="date"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          name="date"
                          value={this.state.date}
                          onChange={this.handleInputChange}
                          required="required"
                          style={{ background: "white" }}
                        />
                      </form>
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
                        Member Type *
                      </Form.Label>
                      <hr />
                      <RadioGroup
                        aria-label="gender"
                        name="members"
                        value={this.state.members}
                        onChange={this.handleInputChange}
                        required="required"
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
                    Enter Event Details *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Event Details"
                    name="details"
                    value={this.state.details}
                    onChange={this.handleInputChange}
                    required="required"
                    style={{
                      border: "1px solid #808080",
                      background: "transparent",
                      color: "#D3D3D3",
                    }}
                  />
                </Form.Group>
                {/* <Form.Group controlId="crslimg">
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
              </Form.Group> */}
                <Button
                  style={{background:'green', borderRadius:'20px'}}
                  type="submit"
                  onClick={this.onSubmit}
                >
                  Update Details
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
}

const bgimage = {
  // background:`url("https://res.cloudinary.com/fitness-glory/image/upload/v1631593901/young-woman-drinking-water-gym-exercise-concept_fomgjh.jpg")`
  background: `linear-gradient( rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)) ,url(${"https://res.cloudinary.com/fitness-glory/image/upload/v1631650827/portrait-beautiful-fitness-model-posing-holding-dumbbell-weight-disc-spacious-modern-gym-taking-care-her-abs_hxmncl.jpg"})`,
  backgroundSize: "cover",
  position: "center",
  width: "100%",
  height: "100%",
  opacity: "1",
};
