import React, { Component } from "react";
import axios from "axios";

export default class ptEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }
  retrievePosts() {
    axios.get("http://localhost:5000/posts").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts,
        });

        console.log(this.state.posts);
      }
    });
  }
  onDelete = (id) => {
    axios.delete(`http://localhost:5000/post/delete/${id}`).then((res) => {
      alert("Deleted Successfully");
      this.retrievePosts();
    });
  };

  filterData(posts, searchKey) {
    const result = posts.filter(
      (post) =>
        post.name.toLowerCase().includes(searchKey) ||
        post.tname.toLowerCase().includes(searchKey) ||
        post.time.toLowerCase().includes(searchKey) ||
        post.date.toLowerCase().includes(searchKey) ||
        post.pack.toLowerCase().includes(searchKey)
    );
    this.setState({ posts: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    console.log(e.currentTarget.value);

    axios.get("http://localhost:5000/posts").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey);
      }
    });
  };

  render() {
    return (
      <div className="container" style={backImg}>
        <br />
        <br />
        {/*<button className="btn btn-success">
          <a
            href="/member/memberPTRequest/add"
            style={{ textDecoration: "none", color: "white" }}
          >
            Create New Request
          </a>
    </button>*/}
        <br />
        <br />
        &nbsp;
        <button className="btn btn-success">
          <a
            href="/employee/memberPTRequest/Request_Report"
            style={{ textDecoration: "none", color: "white" }}
          >
            Report
          </a>
        </button>
        <div style={font}>
          <h1 style={editpostti}> member request status</h1>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2"></div>
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
        <table style={fdata} className="table">
          <thead>
            <tr>
              <th scope="col">REQ No</th>
              <th scope="col">Name</th>
              <th scope="col">Trainer Name</th>
              <th scope="col">Time slot</th>
              <th scope="col">Training Day</th>
              <th scope="col">Package</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a
                    href={`/member/memberPTRequest/post/${posts._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {posts.name}
                  </a>
                </td>
                <td>{posts.tname}</td>
                <td>{posts.time}</td>
                <td>{posts.date}</td>
                <td>{posts.pack}</td>
                <td>{posts.status}</td>
                <td>
                  <a
                    className="btn btn-dark"
                    href={`/employee/memberPTRequest/edit/${posts._id}`}
                  >
                    <i className="fas fa-dark"></i>&nbsp;Edit
                  </a>
                  &nbsp; &nbsp;
                  {/*} <a
                    className="btn btn-dark"
                    href="#"
                    onClick={() => this.onDelete(posts._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
            </a>*/}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={editpostti}></div>
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
  color: "white",
  width: "100%",
  height: "100%",
  opacity: "10",
};
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
const fdata = {
  color: "white",
};
