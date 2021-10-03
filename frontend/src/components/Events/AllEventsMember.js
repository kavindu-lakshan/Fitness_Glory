import axios from "axios";
import React, { Component } from "react";
import "./AllEventsMember.css";
import Carousel from "react-elastic-carousel";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import { Form } from "react-bootstrap";
import "../StylesA/Events.css";

export default class AllEventsMember extends Component {
  constructor(props) {
    super(props);
    this.state = { scrollTop: 0 };
    this.state = {
      eventName: "",
      memName: "",
      interestStatus: "",
      events: [],
    };
  }

  componentDidMount() {
    this.retrieveEvents();
  }

  retrieveEvents() {
    axios.get("http://localhost:5000/event/allevents").then((res) => {
      if (res.data.success) {
        this.setState({
          events: res.data.allEvents,
        });
      } else {
        console.log("error retrieving from database");
      }
    });
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
    alert(
      "Congratulations! You have Successfully Interested to this event. Reserve your time for this event :)"
    );
    const { eventName, memName, interestStatus } = this.state;
    const data = {
      eventName: eventName,
      memName: memName,
      interestStatus,
    };
    console.log(data);

    axios
      .post("http://localhost:5000/event-interest/addInterest", data)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            eventName: "",
            memName: "",
            interestStatus: "",
          });
        }
      });
  };

  filterData(events, searchKey) {
    const result = events.filter(
      (event) =>
        event.title.toLowerCase().includes(searchKey) ||
        event.tagline.toLowerCase().includes(searchKey)
    );
    this.setState({ events: result });
  }
  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get("http://localhost:5000/event/allevents").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.allEvents, searchKey);
      }
    });
  };

  render() {
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 768, itemsToShow: 3.4 },
    ];

    function myFunction() {
      document.getElementById("mySelect").selectedIndex = "2";
    }

    return (
      <div style={bg}>
        <br />
        <center>
          <h1
            style={{
              color: "white",
              fontFamily: "Georgia, Verdana, sans-serif",
              fontSize: "40px",
            }}
          >
            All Events
          </h1>
        </center>

        <hr style={{ color: "white" }} />
        <div className="col-lg-9 mt-2 mb-2">
          <input
            className="form-control"
            type="search"
            placeholder="Search by Event by title/tagline"
            name="searchQuery"
            onChange={this.handleSearchArea}
            style={{
              width: "300px",
              height: "30px",
              background: "transparent",
              border: "2px solid grey",
              borderRadius: "20px",
              marginLeft: "1100px",
              marginTop: "-10px",
              fontSize: "12px",
              color: "white",
            }}
          ></input>
        </div>
        {
          <Carousel
            style={{ marginTop: 40, height: 700 }}
            breakPoints={breakPoints}
          >
            {this.state.events.map((row) => (
              <div
                className="carousel_border"
                style={{
                  height: "650px",
                  width: "390px",
                  width: "350px",
                  height: "600px",
                  overflowX: "hidden",
                }}
              >
                <div
                  className="carsl"
                  style={{
                    marginLeft: 10,
                    marginTop: 40,
                    fontSize: 12,
                    fontWeight: 100,
                  }}
                >
                  <a
                    href={`/member/eventdetails/${row._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <center>
                      <img
                        style={{
                          backgroundSize: "cover",
                          height: "350px",
                          width: "350px",
                          marginTop: "-35px",
                          borderRadius: "20px",
                          marginLeft: "-10px",
                        }}
                        src={row.crslimg}
                      />
                    </center>
                  </a>

                  <p
                    style={{
                      color: "white",
                      marginTop: "13px",
                      textAlign: "center",
                      fontSize: "28px",
                      fontFamily: "Copperplate, Papyrus, fantasy",
                    }}
                  >
                    {row.title}
                  </p>
                  <hr />
                  <center>
                    <p
                      style={{
                        color: "#ffa700",
                        border: "2px solid #ffa700",
                        width: "130px",
                        textAlign: "center",
                        borderRadius: "20px",
                        fontSize: "15px",
                      }}
                    >
                      <b>
                        <u>Date</u>
                        <br />
                      </b>{" "}
                      {row.date.substring(0, 10)}
                    </p>
                  </center>
                  <p
                    style={{
                      color: "grey",
                      fontSize: "13px",
                      wordWrap: "break-word",
                      marginLeft: "10px",
                    }}
                  >
                    Time/Details :{" "}
                    <span style={{ color: "#d3d3d3" }}>{row.details}</span>
                  </p>
                  <p
                    style={{
                      color: "grey",
                      fontSize: "13px",
                      marginTop: "-10px",
                      wordWrap: "break-word",
                      marginLeft: "10px",
                    }}
                  >
                    Allow&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    :<span style={{ color: "#d3d3d3" }}> {row.members}</span>
                  </p>

                  <p
                    style={{
                      color: "grey",
                      fontSize: "13px",
                      marginTop: "-10px",
                      marginLeft: "10px",
                    }}
                  >
                    Tagline&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                    <span style={{ color: "#d3d3d3" }}>#{row.tagline}</span>
                  </p>

                  <p
                    style={{
                      color: "grey",
                      fontSize: "13px",
                      marginTop: "-10px",
                      marginLeft: "10px",
                      wrap: "hard",
                      justifyContent: "justify",
                    }}
                  >
                    Description &nbsp;&nbsp;:
                    <span style={{ color: "#d3d3d3" }}> {row.description}</span>
                  </p>
                  <hr />
                  <div class="widget-26-job-starred">
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </a>
                  </div>
                  <center>
                    <div className="btnView" style={{ marginTop: "-28px" }}>
                      {" "}
                      <a href={`/member/eventdetails/${row._id}`}>
                        <span>View Event</span>
                      </a>{" "}
                    </div>
                  </center>
                  <br />
                </div>
              </div>
              // <br/><div>{row.title}</div>
            ))}
          </Carousel>
        }
        <div
          style={{
            minWidth: "100px",
            minHeight: "100%",
            width: "100%",
            background: `linear-gradient( rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)) ,url(${"https://res.cloudinary.com/fitness-glory/image/upload/v1631568453/handsome-athletic-man-pumping-up-arm-muscles_xfflbt.jpg"})`,
            backgroundSize: "cover",
            position: "center",
          }}
        >
          <br />
          <div
            className="box"
            style={{
              border: "2px solid white",
              minWidth: "100px",
              minHeight: "100%",
              height: "570px",
              width: "20%",
              marginLeft: "1100px",
              background: "transparent",
            }}
          >
            <CardContent>
              <Grid container>
                <Grid>
                  <center>
                    <h1
                      className="h3 mb-3 font-weight-normal"
                      style={{ fontSize: "18px", color:"white" }}
                    >
                      Add Your Interest
                    </h1>
                    <hr style={{ color: "white" }} />
                  </center>
                  <form onSubmit={this.onSubmit}>
                    <div
                      className="form-group"
                      style={{ marginBottom: "15px" }}
                    >
                      <label style={{ marginBottom: "5px" }}>
                        {" "}
                        Enter Event Name
                      </label>
                      <select
                        className="form-control"
                        name="eventName"
                        placeholder="Enter Event Name"
                        value={this.state.eventName}
                        onChange={this.handleInputChange}
                        required={"required"}
                      >
                        <option value="select">Select Event</option>
                        {this.state.events.map((row) => (
                          <option>{row.title}</option>
                        ))}
                      </select>
                    </div>

                    <div
                      className="form-group"
                      style={{ marginBottom: "15px" }}
                    >
                      <label style={{ marginBottom: "5px" }}>
                        {" "}
                        Enter Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="memName"
                        placeholder="Enter Your Name"
                        value={this.state.memName}
                        onChange={this.handleInputChange}
                        required
                      />
                    </div>
                    <hr style={{ color: "white" }} />

                    <div className="form-group right">
                      <label className="label-title">Status</label>
                      <div
                        value={this.state.interestStatus}
                        onChange={this.handleInputChange}
                      >
                        <Form.Check
                          type="radio"
                          label="Interested"
                          name="interestStatus"
                          value="Interested"
                          onChange={this.handleInputChange}
                          style={{ color: "white" }}
                        />
                        <Form.Check
                          type="radio"
                          label="Not Interested"
                          name="interestStatus"
                          value="Not Interested"
                          onChange={this.handleInputChange}
                          style={{ color: "white" }}
                        />
                        <Form.Check
                          type="radio"
                          label="Going"
                          name="interestStatus"
                          value="Going"
                          onChange={this.handleInputChange}
                          style={{ color: "white" }}
                        />
                        <Form.Check
                          type="radio"
                          label="Not Going"
                          name="interestStatus"
                          value="Not Going"
                          onChange={this.handleInputChange}
                          style={{ color: "white" }}
                        />
                      </div>
                    </div>
                    <center>
                      <button
                        className="btn btn-success"
                        type="submit"
                        style={{ marginTop: "-15px" }}
                        onClick={this.onSubmit}
                      >
                        <i className="far fa-check-square"></i>
                        submit
                      </button>
                    </center>
                  </form>
                </Grid>
              </Grid>
            </CardContent>
            <br />
            <br />
          </div>
          <br /><br /><br /><br />
        </div>
      </div>
    );
  }
}

const bg = {
  // background: `linear-gradient( rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)) ,url(${"https://res.cloudinary.com/fitness-glory/image/upload/v1631553936/eenjxizchrhkxndh6yho.jpg"})`,
  backgroundColor: "black",
  backgroundSize: "cover",
  position: "relative",
};

const dropdownStyles = {
  width: "300px",
  height: "35px",
  textAlign: "center",
  marginLeft: "190px",
  backgroundColor: "black",
  color: "white",
};
