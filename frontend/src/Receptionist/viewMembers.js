import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
import { Table } from "react-bootstrap";

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
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios.delete(`/memberDetail/delete/${id}`).then((res) => {
            swalWithBootstrapButtons.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
            this.retrieveUsers();
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "User hasn't been deleted.",
            "error"
          );
          this.retrieveUsers();
        }
      });
    // axios.delete(`/memberDetail/delete/${id}`).then((res) => {
    //   alert("Deleted Successfully");
    //   this.retrieveUsers();
    // });
  };

  // payment = (paid) => {
  //   if (paid) {
  //     return "Yes";
  //   } else return "No";
  // };

  formatDate = (date) => {
    return moment(date).format("DD/MM/YYYY");
  };

  filterData(details, searchKey) {
    const result = details.filter(
      (details) =>
        details.name.includes(searchKey) ||
        details.email.toLowerCase().includes(searchKey) ||
        details.createdAt.includes(searchKey) ||
        details.packageType.includes(searchKey)
    );
    this.setState({ details: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    console.log(e.currentTarget.value);

    axios.get("/memberDetails").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingDetails, searchKey);
      }
    });
  };

  render() {
    return (
      <div
        style={{ marginTop: "20px", backgroundColor: "#fffdd0" }}
        className="container"
      >
        &nbsp;
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h1>All Members</h1>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}
            />
          </div>
        </div>
        <button className="btn btn-success">
          {" "}
          <a
            href="/admin/adminPanel"
            style={{ textDecoration: "none", color: "white" }}
          >
            Summary
          </a>
        </button>
        <Table responsive="sm" className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Package</th>
              {/* <th scope="col">Paid</th> */}
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
                <td>{details.packageType}</td>
                {/* <td>{this.payment(details.isPaid)}</td> */}
                <td>{this.formatDate(details.createdAt)}</td>
                <td>
                  <a
                    className="btn btn-warning"
                    style={{ width: "70%", marginBottom: "1px" }}
                    href={`/admin/editDetails/${details._id}`}
                  >
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a
                    className="btn btn-danger"
                    style={{ width: "70%", marginBottom: "1px" }}
                    href="#"
                    onClick={() => this.onDelete(details._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
