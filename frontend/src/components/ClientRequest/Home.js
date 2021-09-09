import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
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
      <div className="container">
        <br />
        <br />
        <button className="btn btn-success">
          <a
            href="/member/memberPTRequest/add"
            style={{ textDecoration: "none", color: "white" }}
          >
            Create New Request
          </a>
        </button>
        <br />
        <br />
        &nbsp;
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>All Requests</h4>
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
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
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
                  {/*}  <a
                    className="btn btn-dark"
                    href={`/member/memberPTRequest/edit/${posts._id}`}
                  >
                    <i className="btn btn-warning"></i>&nbsp;Edit
            </a>*/}
                  &nbsp; &nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(posts._id)}
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
