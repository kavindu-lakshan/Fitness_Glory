import React, { Component } from "react";
import axios from "axios";

export default class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tname: "",
      time: "",
      date: "",
      pack: "",
      status: " ",
    };

    this.handleChangeOne = this.handleChangeOne.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //selection
  handleChangeOne(event) {
    this.setState({ status: event.target.value });
  }
  handleChange(event) {
    this.setState({ time: event.target.value });
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

    const { name, tname, time, date, pack, status } = this.state;

    const data = {
      name: name,
      tname: tname,
      time: time,
      date: date,
      pack: pack,
      status: status,
    };

    console.log(data);

    axios.put(`http://localhost:5000/post/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Post Updated Successfully");
        this.setState({
          name: "",
          tname: "",
          time: "",
          date: " ",
          pack: " ",
          status: " ",
        });
      }
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`http://localhost:5000/post/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          name: res.data.post.name,
          tname: res.data.post.tname,
          time: res.data.post.time,
          date: res.data.post.date,
          pack: res.data.post.pack,
          status: res.data.post.status,
        });

        console.log(this.state.post);
      }
    });
  }

  render() {
    return (
      <div style={backImg}>
        <div style={heading}>
          <h1 style={editpostti}>EDIT REQUEST STATUS</h1>
        </div>
        <div className="col-md-8 mt-4 mx-auto">
          {/*<h1 className="h3 mb-3 font-weight-normal">Edit Post</h1>*/}
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Your Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter your Name"
                value={this.state.name}
                onChange={this.handleInputChange}
                disabled={true}
              />
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
                disabled={true}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              {/*} <label style={{ marginBottom: "5px" }}>Your Time slot</label>
            <input
              type="text"
              className="form-control"
              name="time"
              placeholder="Enter time"
              value={this.state.time}
              onChange={this.handleInputChange}
    />*/}
              <label style={{ marginBottom: "5px" }}>
                Pick your favorite flavor:
              </label>
              &nbsp;
              <select
                className="form-control"
                value={this.state.time}
                onChange={this.handleChangeOne}
                disabled={true}
              >
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
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Your Training Day</label>
              <input
                type="date"
                className="form-control"
                name="date"
                placeholder="Enter day"
                value={this.state.date}
                onChange={this.handleInputChange}
                disabled={true}
              />
            </div>
            {/*}   <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Your Training Package</label>
            <input
              type="text"
              className="form-control"
              name="pack"
              placeholder="Training package"
              value={this.state.pack}
              onChange={this.handleInputChange}
            />
          </div>


         <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>
              Pick your Package
              <select
                className="form-control"
                value={this.state.pack}
                onChange={this.handleChangeTwo}
              >
                <option name="pack" value="Starter">
                  Starter
                </option>
                <option name="pack" value="Premium">
                  Premium
                </option>
                <option name="pack" value="Ellite">
                  Ellite
                </option>
              </select>
            </label>
        </div>*/}
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>package:</label>
              &nbsp;
              <select
                className="form-control"
                value={this.state.pack}
                onChange={this.handleChange}
                disabled={true}
              >
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
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              {/*} <label style={{ marginBottom: "5px" }}> status</label>
            <input
              type="text"
              className="form-control"
              name="status"
              placeholder="status"
              value={this.state.status}
              onChange={this.handleInputChange}
      disabled={true}
      />*/}
              <label style={{ marginBottom: "5px" }}>Request Status:</label>
              &nbsp;
              <select
                className="form-control"
                value={this.state.status}
                onChange={this.handleChangeOne}
              >
                <option name="status" value="pending">
                  Pending
                </option>
                <option name="status" value="Accepted">
                  Accepted
                </option>
                <option name="status" value="Rejected">
                  Rejected
                </option>
              </select>
            </div>

            <br />
            <br />

            <button
              className="btn btn-success"
              type="submit"
              style={{ marginTop: "15px" }}
              onClick={this.onSubmit}
            >
              <i className="far fa-check-square"></i>
              &nbsp; Update
            </button>
          </form>
        </div>
      </div>
    );
  }
}
const backiImg =
  "https://res.cloudinary.com/maldeniya99/image/upload/v1631461843/matthew-payne-4tHbsNGFp18-unsplash_teure1.jpg";
const backImg = {
  background: `linear-gradient( rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)) ,url(${backiImg})`,
  backgroundSize: "cover",
  position: "center",
  width: "100%",
  height: "100%",
  opacity: "10",
};
const heading = {
  height: 250,
};
const editpostti = {
  fontSize: 70,
  color: "white",
  textAlign: "center",
  paddingTop: "100px",
};
