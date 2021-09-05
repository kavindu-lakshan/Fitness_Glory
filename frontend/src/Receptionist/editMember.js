import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router";

export default class editMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      isPaid: false,
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

    const { name, email } = this.state;
    let isPaid = this.state;
    if ((isPaid = "Yes") || (isPaid = "yes")) {
      isPaid = true;
    } else {
      isPaid = false;
    }

    const data = {
      name: name,
      email: email,
      isPaid: isPaid,
    };
    console.log(data);

    axios.put(`/memberDetail/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Post Updated Successfully");
        this.setState({
          name: "",
          email: "",
          isPaid: "",
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
          isPaid: res.data.user.isPaid,
        });

        console.log(this.state.user);
      }
    });
  }

  payment = (paid) => {
    if (!paid) {
      return "No";
    } else return "Yes";
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={{ pathname: "/employee/memberDetails" }} />;
    }
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Edit Member Details</h1>
        <form className="needs-validation" noValidate>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Name</label>
            <input
              type="text"
              className="form-control"
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
              className="form-control"
              name="email"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Paid</label>
            <input
              type="text"
              className="form-control"
              name="isPaid"
              placeholder="Paid"
              value={this.payment(this.state.isPaid)}
              onChange={this.handleInputChange}
            />
          </div>

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
    );
  }
}
