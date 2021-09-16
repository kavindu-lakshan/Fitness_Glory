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
      <div
        className="mainback"
        style={{
          backgroundImage:
            "url(" +
            "https://res.cloudinary.com/maldeniya99/image/upload/v1631718792/wee-lee-HOSjS6qIGAs-unsplash_cfvuho.jpg" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="detail"
          style={{
            marginTop: "20px",
            marginRight: "120px",
            fontSize: 35,
            color: "black",
          }}
        >
          <h4>{name}</h4>
          <hr />

          <dl className="row">
            <dt className="col-sm-3"> Trainer</dt>
            <dd className="col-sm-9"> {tname}</dd>
            <dt className="col-sm-3"> Time</dt>
            <dd className="col-sm-9"> {time}</dd>
            <dt className="col-sm-3"> Date</dt>
            <dd className="col-sm-9"> {date}</dd>
            <dt className="col-sm-3"> Package</dt>
            <dd className="col-sm-9"> {pack}</dd>
            <dt className="col-sm-3"> Status</dt>
            <dd className="col-sm-9"> {status}</dd>
          </dl>
        </div>
      </div>
    );
  }
}
const backiImg =
  "https://res.cloudinary.com/maldeniya99/image/upload/v1631718792/wee-lee-HOSjS6qIGAs-unsplash_cfvuho.jpg";
const backg = {
  background: `linear-gradient( rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)) ,url(${backiImg})`,
  backgroundSize: "cover",
  position: "center",
  width: "100%",
  height: "1500",
  opacity: "10",
};
