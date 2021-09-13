import { Card } from "@material-ui/core";
import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router";
import Swal from "sweetalert2";
import "../Screens/LoginScreen/LoginScreen.css";
import MainScreen from "../components/MainScreens/receptionistEdit";

export default class editMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      // isPaid: false,
      packageType: "",
      redirect: false,
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

    const { name, email, packageType } = this.state;
    // let isPaid = this.state;
    // if ((isPaid = "Yes") || (isPaid = "yes")) {
    //   isPaid = true;
    // } else {
    //   isPaid = false;
    // }

    const data = {
      name: name,
      email: email,
      packageType: packageType,
      // isPaid: isPaid,
    };
    console.log(data);

    axios.put(`/memberDetail/update/${id}`, data).then((res) => {
      if (res.data.success) {
        // alert("Post Updated Successfully");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        this.setState({
          name: "",
          email: "",
          packageType: "",
          // isPaid: "",
        });
      }
    });
    this.setState({ redirect: true });
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/memberDetails/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          name: res.data.user.name,
          email: res.data.user.email,
          packageType: res.data.user.packageType,
          // isPaid: res.data.user.isPaid,
        });

        console.log(this.state.user);
      }
    });
  }

  // payment = (paid) => {
  //   if (!paid) {
  //     return "No";
  //   } else return "Yes";
  // };

  render() {
    if (this.state.redirect) {
      return <Redirect to={{ pathname: "/employee/memberDetails" }} />;
    }
    return (
      <MainScreen title="Edit Member Details">
        <div className="col-md-8 mt-4 mx-auto">
          <Card className="frame">
            <form className="form-login" noValidate>
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Name</label>
                <input
                  type="text"
                  className="form-styling"
                  name="name"
                  placeholder="Enter Name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Email</label>
                <input
                  type="text"
                  className="form-styling"
                  name="email"
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Package</label>
                <select
                  type="text"
                  className="form-styling"
                  name="packageType"
                  value={this.state.packageType}
                  onChange={this.handleInputChange}
                >
                  <option selected>Null</option>
                  <option value="Individual Male">Individual Male</option>
                  <option value="Individual Female">Individual Female</option>
                  <option value="Student">Student</option>
                  <option value="Family">Family</option>
                </select>
              </div>

              {/* <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Paid</label>
            <input
              type="text"
              className="form-control"
              name="isPaid"
              placeholder="Paid"
              value={this.payment(this.state.isPaid)}
              onChange={this.handleInputChange}
            />
          </div> */}

              <button
                className="btn-animate"
                type="submit"
                style={{ marginTop: "15px" }}
                onClick={this.onSubmit}
              >
                <i className="far fa-check-square"></i>
                &nbsp; Update
              </button>
            </form>
          </Card>
          <br />
          <br />
        </div>
      </MainScreen>
    );
  }
}
