import React, { useRef } from "react";
import axios from "axios";
import ReactToPrint from "react-to-print";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBSimpleChart,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import { Pie, Bar, Doughnut, Line } from "react-chartjs-2";
import { Grid, Item } from "@material-ui/core/";
import { Card, CardGroup } from "react-bootstrap";
class ComponentToPrint extends React.Component {
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
  PackageCategorey(type) {
    const PackageCategorey = this.state.posts.filter(
      (pack) => pack.pack === type
    );
    return PackageCategorey.length;
  }
  Timeslot(type) {
    const Timeslot = this.state.posts.filter((time) => time.time === type);
    return Timeslot.length;
  }
  RequestStatus(type) {
    const RequestStatus = this.state.posts.filter(
      (status) => status.status === type
    );
    return RequestStatus.length;
  }

  render() {
    return (
      <div>
        <br />
        <br />

        <br />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Grid>
              <Card>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <img src="https://image.freepik.com/free-vector/set-couples-exercising_74855-1470.jpg " />
                  </Grid>

                  <Grid item xs={6}>
                    <Line
                      style={{
                        width: 500,
                        height: 600,
                        paddingTop: 20,
                      }}
                      data={{
                        labels: ["Starter", "Premium", "Ellite"],
                        datasets: [
                          {
                            label: "Posts",
                            backgroundColor: [
                              "rgba(255, 134,159,0.4)",
                              "rgba(98,  182, 239,0.4)",
                              "rgba(113, 205, 205,0.4)",
                            ],
                            fill: false,
                            borderColor: [
                              "rgba(255, 134, 159, 1)",
                              "rgba(98,  182, 239, 1)",
                              "rgba(113, 205, 205, 1)",
                            ],
                            borderWidth: 1,
                            data: [
                              this.PackageCategorey("Starter"),
                              this.PackageCategorey("Premium"),
                              this.PackageCategorey("Ellite"),
                            ],
                          },
                        ],
                      }}
                      options={{
                        title: {
                          display: true,
                          text: "Users of Packages",
                          fontSize: 20,
                        },
                        legend: {
                          display: true,
                          position: "right",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            <Grid>
              <Card>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    {" "}
                    <img src="https://image.freepik.com/free-vector/set-couples-exercising_74855-1470.jpg" />
                  </Grid>
                  <Grid item xs={6}>
                    <Bar
                      data={{
                        labels: ["8.30am", "10.30am", "2.30am", "4.30"],
                        datasets: [
                          {
                            label: ["time"],
                            backgroundColor: [
                              "rgba(255, 134,159,0.4)",
                              "rgba(98,  182, 239,0.4)",
                              "rgba(255, 218, 128,0.4)",
                              "rgba(113, 205, 205,0.4)",
                            ],
                            fill: false,
                            borderColor: [
                              "rgba(255, 134, 159, 1)",
                              "rgba(98,  182, 239, 1)",
                              "rgba(255, 218, 128, 1)",
                              "rgba(113, 205, 205, 1)",
                            ],
                            borderWidth: 1,
                            data: [
                              this.Timeslot("8.30am-10.30am"),
                              this.Timeslot("10.30am-12.30am"),
                              this.Timeslot("2.30am-4.30am"),
                              this.Timeslot("4.30am-6.30am"),
                            ],
                          },
                        ],
                      }}
                      options={{
                        title: {
                          display: true,
                          text: "Users of Packages",
                          fontSize: 20,
                        },
                        legend: {
                          display: true,
                          position: "left",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <h5>PERSONAL TRAINER QUEST ANALYSIS</h5> <br />
            <p>
              <Button>Accepted Requests </Button>
              &nbsp; &nbsp;
              <Button>{this.RequestStatus("Accepted")}</Button>
            </p>
            <p>
              <Button>Rejected Requests</Button>&nbsp; &nbsp;
              <Button>{this.RequestStatus("Rejected")}</Button>
            </p>
            <p>
              <Button>Pending Requests</Button>&nbsp; &nbsp;&nbsp;
              <Button> {this.RequestStatus("pending")}</Button>
            </p>
            <Card>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  {" "}
                  <img src="https://image.freepik.com/free-vector/set-couples-exercising_74855-1470.jpg" />
                </Grid>
                <Grid item xs={6}>
                  <Line
                    style={{ width: 50, height: 50, padding: 20 }}
                    data={{
                      labels: ["pending", "Accepted", "Rejected"],
                      datasets: [
                        {
                          label: "Posts",
                          backgroundColor: [
                            "rgba(255, 134,159,0.4)",
                            "rgba(98,  182, 239,0.4)",
                            "rgba(113, 205, 205,0.4)",
                          ],
                          fill: false,
                          borderColor: [
                            "rgba(255, 134, 159, 1)",
                            "rgba(98,  182, 239, 1)",
                            "rgba(113, 205, 205, 1)",
                          ],
                          borderWidth: 1,
                          data: [
                            this.RequestStatus("pending"),
                            this.RequestStatus("Accepted"),
                            this.RequestStatus("Rejected"),
                          ],
                        },
                      ],
                    }}
                    options={{
                      title: {
                        display: true,
                        text: "Users of Packages",
                        fontSize: 20,
                      },
                      legend: {
                        display: true,
                        position: "right",
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>

        <div className="container">
          <div className="row">
            <div className="col-lg-9 mt-2 mb-2"></div>
            <div className="col-lg-3 mt-2 mb-2"></div>
          </div>
          <table class="table table-borderless table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Trainer Name</th>
                <th scope="col">Time slot</th>
                <th scope="col">Training Day</th>
                <th scope="col">Package</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((posts, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{posts.name}</td>
                  <td>{posts.tname}</td>
                  <td>{posts.time}</td>
                  <td>{posts.date}</td>
                  <td>{posts.pack}</td>
                  <td>{posts.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
class Request_Report extends React.Component {
  render() {
    return (
      <div>
        <br />
        <ReactToPrint
          trigger={() => (
            <Button>
              <a href="#">Print this Report!</a>
            </Button>
          )}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Request_Report;
