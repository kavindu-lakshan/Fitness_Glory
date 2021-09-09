import React, { Component } from "react";
import axios from "axios";

export default class PostDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`http://localhost:5000/post/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          post: res.data.post,
        });

        console.log(this.state.post);
      }
    });
  }
  render() {
    const { name, tname, time, date, pack, status } = this.state.post;
    return (
      <div style={{ marginTop: "20px" }}>
        <h4>{name}</h4>
        <hr />

        <dl className="row">
          <dt className="col-sm-3">tname</dt>
          <dd className="col-sm-9">{tname}</dd>
          <dt className="col-sm-3">time</dt>
          <dd className="col-sm-9">{time}</dd>
          <dt className="col-sm-3">date</dt>
          <dd className="col-sm-9">{date}</dd>
          <dt className="col-sm-3">package</dt>
          <dd className="col-sm-9">{pack}</dd>
          <dt className="col-sm-3">status</dt>
          <dd className="col-sm-9">{status}</dd>
        </dl>
      </div>
    );
  }
}
