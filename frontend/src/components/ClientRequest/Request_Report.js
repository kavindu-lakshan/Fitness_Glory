import React, { useRef } from "react";
import axios from "axios";
import ReactToPrint from "react-to-print";
import PrintIcon from "@material-ui/icons/Print";
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
                <h5>PACKAGE</h5>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <img src="https://cdn2.vectorstock.com/i/thumb-large/48/31/team-tiny-business-people-doing-marketing-vector-33294831.jpg " />
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
                              "rgba(232, 56, 115,1)",
                              "rgba(59, 56, 232,1)",
                              "rgba(216, 240, 0,1)",
                            ],
                            fill: false,
                            borderColor: [
                              "rgba(232, 56, 115,1)",
                              "rgba(59, 56, 232,1)",
                              "rgba(216, 240, 0,1)",
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
                <h5> TIMESLOT</h5>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    {" "}
                    <img src="https://cdn4.vectorstock.com/i/thumb-large/53/88/office-scene-with-business-people-working-vector-33325388.jpg" />
                  </Grid>
                  <Grid item xs={6}>
                    <Bar
                      data={{
                        labels: ["8.30am", "10.30am", "2.30am", "4.30"],
                        datasets: [
                          {
                            label: ["time"],
                            backgroundColor: [
                              "rgba(10, 109, 207,1)",
                              "rgba(10, 207, 200,1)",
                              "rgba(191, 207, 10,1)",
                              "rgba(162, 56, 232,1)",
                            ],
                            fill: false,
                            borderColor: [
                              "rgba(10, 109, 207,1)",
                              "rgba(10, 207, 200,1)",
                              "rgba(191, 207, 10,1)",
                              "rgba(162, 56, 232,1)",
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
            <h1 style={{ color: "Purple" }}>
              PERSONAL TRAINER REQUEST ANALYSIS
            </h1>{" "}
            <br />
            <br />
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
              <h5> STATUS</h5>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  {" "}
                  <img src="https://cdn4.vectorstock.com/i/thumb-large/04/43/finance-presentation-business-information-vector-31600443.webp" />
                </Grid>
                <Grid item xs={6}>
                  <Doughnut
                    style={{ width: 50, height: 50, padding: 20 }}
                    data={{
                      labels: ["pending", "Accepted", "Rejected"],
                      datasets: [
                        {
                          label: "Posts",
                          backgroundColor: [
                            "rgba(141, 10, 207,1)",
                            "rgba(15, 99, 184,1)",
                            "rgba(10, 207, 115,1)",
                          ],
                          fill: false,
                          borderColor: [
                            "rgba(141, 10, 207,1)",
                            "rgba(15, 99, 184, 1)",
                            "rgba(10, 207, 115, 1)",
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
              <a href="#">
                {" "}
                <PrintIcon />
                &nbsp; Print this Report
              </a>
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
