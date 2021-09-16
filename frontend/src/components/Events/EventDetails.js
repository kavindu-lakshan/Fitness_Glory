import axios from "axios";
import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Form } from "react-bootstrap";
//`http://localhost:5000/event/eventdetails/${tagline}`
import "./AllEventsMember.css";

export default class EventDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event: {},
    };
  }

  componentDidMount() {
    const url =
      "http://localhost:5000/event/eventdetails/" + this.props.match.params.id;

    axios.get(url).then((res) => {
      if (res.data.success) {
        this.setState({
          event: res.data.event,
        });
      } else {
        console.log("error retrieving from database");
      }
    });
  }

  // componentDidMount(){
  //     const tagline=this.props.match.params.tagline;

  //     axios.get(`http://localhost:5000/event/eventdetails/${tagline}`)
  //     .then((res)=>{
  //         if(res.data.success){
  //             this.setState({
  //                 event:res.data.event
  //             });
  //             console.log(this.state.event);
  //         }
  //     }).catch((err)=>{
  //         alert(err.message);
  //     });
  // }

  render() {
    const { tagline, title, description, date, details, members, crslimg } =
      this.state.event;

    return (
      <div style={bgimage1}>
        <br />
        <div
          className="carbr"
          style={{
            width: "700px",
            height: "730px",
            background: "transparent",
            boxShadow: "7px 7px 60px #DC143C",
            borderRadius: "50px",
          }}
          className="container"
        >
          <br />
          <center>
            <h1
              style={{
                color: "#C0C0C0",
                fontFamily: "Georgia, Verdana, sans-serif",
              }}
            >
              {title} Event
            </h1>{" "}
          </center>
          <hr style={{ color: "white" }} />
          <div style={{ marginLeft: "40px" }}>
            <img
              style={{
                backgroundSize: "cover",
                height: "375px",
                width: "375px",
                boxShadow: "7px 7px 60px #DC143C",
              }}
              src={crslimg}
            />
            <br /> <br />
            <d1 className="row">
              <dt className="col-sm-3" style={{ color: "white" }}>
                Tagline
              </dt>
              <dd
                className="col-sm-9"
                style={{ color: "#C0C0C0", fontSize: "12px" }}
              >
                :&nbsp; #{tagline}
              </dd>

              <dt className="col-sm-3" style={{ color: "white" }}>
                Title
              </dt>
              <dd
                className="col-sm-9"
                style={{ color: "#C0C0C0", fontSize: "12px" }}
              >
                :&nbsp; {title}
              </dd>
              <div
                style={{
                  marginTop: "-400px",
                  marginLeft: "400px",
                  width: "300px",
                  padding: "10px",
                  border: "1px solid transparent",
                }}
              >
                <dt className="col-sm-3" style={{ color: "white" }}>
                  <u>Description</u>
                </dt>
                <hr />
                <dd
                  className="col-sm-9"
                  style={{
                    textJustify: " inter-word",
                    textAlign: "justify",
                    fontSize: "12px",
                    color: "#C0C0C0",
                  }}
                >
                  {description}
                </dd>
              </div>
              <dt className="col-sm-3" style={{ color: "white" }}>
                Date
              </dt>
              <dd
                className="col-sm-9"
                style={{ color: "#C0C0C0", fontSize: "12px" }}
              >
                :&nbsp; {date}
              </dd>

              <dt className="col-sm-3" style={{ color: "white" }}>
                Additional
              </dt>
              <dd
                className="col-sm-9"
                style={{ color: "#C0C0C0", fontSize: "12px" }}
              >
                :&nbsp; {details}
              </dd>

              <dt className="col-sm-3" style={{ color: "white" }}>
                Members
              </dt>
              <dd
                className="col-sm-9"
                style={{ color: "#C0C0C0", fontSize: "12px" }}
              >
                :&nbsp; {members}
              </dd>
            </d1>
          </div>

          <center>
            <br />
            <Button
              className="button"
              variant="secondary"
              type="submit"
              style={{ background: "green", color: "white" }}
            >
              <a href="/member/allevents-member">
                Show Your Interest to this {title} Event
              </a>
            </Button>
          </center>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

const bgimage1 = {
  // background:`url("https://res.cloudinary.com/fitness-glory/image/upload/v1631593901/young-woman-drinking-water-gym-exercise-concept_fomgjh.jpg")`
  background: `linear-gradient( rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)) ,url(${"https://res.cloudinary.com/fitness-glory/image/upload/v1631702026/Image7_u3wvmt.jpg"})`,
  backgroundSize: "cover",
  position: "center",
  width: "100%",
  height: "100%",
  opacity: "1",
};
