import axios from "axios";

import React, { Component } from "react";

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tname: "",
      time: "",
      date: " ",
      pack: " ",
      status: "pending",
    };

    //radio
    this.onValueChange = this.onValueChange.bind(this);
    this.handleChangeOne = this.handleChangeOne.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  //radio
  onValueChange(event) {
    this.setState({
      pack: event.target.value,
    });
  }
  //selection
  handleChangeOne(event) {
    this.setState({ time: event.target.value });
  }
  handleChange(event) {
    this.setState({ pack: event.target.value });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  //
  validate() {
    let nameError = "";
    //let emailError = "";
    let passwordError = "";
    if (!this.state.name) {
      nameError = "Name field is required";
    }

    {
      /*}
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!this.state.tname || reg.test(this.state.tname) === false) {
    emailError = "Email Field is Invalid ";
  }
  {
  }*/
      if (!this.state.tname) {
        passwordError = "Password field is required";
      }
    }
    if (nameError || passwordError) {
      this.setState({ nameError, passwordError });
      return false;
    }
    return true;
  }
  //

  onSubmit = (e) => {
    if (this.validate()) {
      console.warn(this.state);
      //this.setState(defaultState);
    }
    e.preventDefault();

    const { name, tname, time, date, pack, status } = this.state;

    const data = {
      name: name,
      tname: tname,
      time: time,
      date: date,
      pack: pack,
      status: status,
    };
    console.log(this.state.pack);
    console.log(data);

    axios.post("http://localhost:5000/post/save", data).then((res) => {
      if (res.data.success) {
        this.setState({
          name: "",
          tname: "",
          time: "",
          date: "",
          pack: "",
        });
      }
    });
  };
  render() {
    return (
      <div style={backImg}>
        <div style={font}>
          <h1 style={editpostti}>
            {" "}
            JOIN WITH US <br />
            <br />
            CREATE YOUR REQURSTS HERE!
          </h1>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="col-md-8 mt-4 mx-auto">
          <h1 style={title} className="h3 mb-3 font-weight-normal">
            Create new post
          </h1>
          <form style={fmem} className="needs-validation" noValidate>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}> Your Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter your Name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
              <span className="text-danger">{this.state.nameError}</span>
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>
                {" "}
                Your Personal Trainer's Name
              </label>

              <input
                type="text"
                className="form-control"
                name="tname"
                placeholder="Enter Personl Trainers Name"
                value={this.state.tname}
                onChange={this.handleInputChange}
                required
              />
              <span className="text-danger">{this.state.nameError}</span>
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              {/*<label style={{ marginBottom: "5px" }}> Your Time slot</label>
            <input
              type="Text"
              className="form-control"
              name="time"
              placeholder="Enter time"
              value={this.state.time}
              onChange={this.handleInputChange}
              required
    />*/}
              <label style={{ marginBottom: "5px" }}>
                Pick your time slot{" "}
              </label>
              &nbsp;
              <select
                className="form-control"
                value={this.state.time}
                onChange={this.handleChangeOne}
              >
                <option name="time" value="--" selected>
                  --time slots--
                </option>
                <option name="time" value="8.30am-10.30am">
                  8.30am-10.30am
                </option>
                <option name="time" value="10.30am-12.30am">
                  10.30am-12.30am
                </option>
                <option name="time" value="2.30am-4.30am">
                  2.30am-4.30am
                </option>
                <option name="time" value="4.30am-6.30am">
                  4.30am-6.30am
                </option>
              </select>
            </div>
            <br />

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Your Training Day</label>

              <input
                type="date"
                data-date-format="mm/dd/yyyy"
                className="form-control"
                name="date"
                placeholder="Enter Day"
                value={this.state.date}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <br />
            {
              /*<div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Your Training Package</label>
            <input
              type="text"
              className="form-control"
              name="pack"
              placeholder="Enter Training package"
              value={this.state.pack}
              onChange={this.handleInputChange}
              required
            />
    </div>*/
              //radio
            }
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>
                Pick your Package
                <select
                  className="form-control"
                  value={this.state.pack}
                  onChange={this.handleChange}
                >
                  <option name="pack" value="--">
                    --select Package--
                  </option>
                  <option name="pack" value="Starter">
                    Starter
                  </option>
                  <option name="pack" value="Premium">
                    Premium
                  </option>
                  <option name="pack" value=" Ellite">
                    Ellite
                  </option>
                </select>
              </label>
            </div>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}> status</label>

              <input
                type="text"
                className="form-control"
                name="status"
                placeholder="status"
                value={this.state.status}
                /* onChange={this.handleInputChange}*/
                disabled={true}
              />
            </div>
            <br />
            <br />
            <button
              className="btn btn-success"
              type="submit"
              style={{ marginTop: "15px", marginBottom: "40px" }}
              onClick={this.onSubmit}
            >
              <i className="far fa-check-square"></i>
              submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
const backiImg =
  "https://res.cloudinary.com/maldeniya99/image/upload/v1631621169/anastase-maragos-4dlhin0ghOk-unsplash_mwpe9l.jpg";
const backImg = {
  background: `linear-gradient( rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)) ,url(${backiImg})`,
  backgroundSize: "cover",
  position: "center",
  width: "100%",
  height: "100%",
  opacity: "10",
};
const title = {
  color: "black",
};
const fmem = {};
const font = {
  color: "white",
  fontspacing: "3",
  height: "1000",
};
const editpostti = {
  fontSize: 50,
  color: "white",
  letterSpacing: 20,
  textAlign: "center",

  paddingTop: "150px",
};
