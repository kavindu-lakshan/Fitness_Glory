import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

export default class viewMembers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: [],
    };
  }

  componentDidMount() {
    this.retrieveUsers();
  }

  retrieveUsers() {
    axios.get("/memberDetails").then((res) => {
      if (res.data.success) {
        this.setState({
          details: res.data.existingDetails,
        });

        console.log(this.state.details);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/memberDetail/delete/${id}`).then((res) => {
      alert("Deleted Successfully");
      this.retrieveUsers();
    });
  };

  payment = (paid) => {
    if (paid) {
      return "Yes";
    } else return "No";
  };

  formatDate = (date) => {
    return moment(date).format("DD/MM/YYYY");
  };

  render() {
    return (
      <div className="container">
        <h1>All Members</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Paid</th>
              <th scope="col">Registered Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.details.map((details, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{details.name}</td>
                <td>{details.email}</td>
                <td>{this.payment(details.isPaid)}</td>
                <td>{this.formatDate(details.createdAt)}</td>
                <td>
                  <a
                    className="btn btn-warning"
                    href={`/employee/editDetails/${details._id}`}
                  >
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(details._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
