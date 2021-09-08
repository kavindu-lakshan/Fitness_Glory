import React, { Component } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Card, CardGroup } from "react-bootstrap";

export default class memberPannel extends Component {
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

  //   count() {
  //     const packageTypes = this.state.details.packageType
  //       .map((dataItem) => dataItem.packageType)
  //       .filter(
  //         (packageType, index, array) => array.indexOf(packageType) === index
  //       ); // filter out duplicates

  //     const counts = packageTypes.map((packageType) => ({
  //       type: packageType,
  //       count: this.state.details.packageType.filter(
  //         (item) => item.packageType === packageType
  //       ).length,
  //     }));

  //     console.log(counts);
  //   }

  countType(type) {
    const countTypes = this.state.details.filter(
      (packageType) => packageType.packageType === type
    );
    return countTypes.length;
  }

  render() {
    return (
      <div className="container">
        <CardGroup style={{ padding: 50 }}>
          <Card style={{ textAlign: "center" }}>
            Individual Male: {this.countType("Individual Male")}
          </Card>
          <Card style={{ textAlign: "center" }}>
            Individual Female: {this.countType("Individual Female")}
          </Card>
          <Card style={{ textAlign: "center" }}>
            Student: {this.countType("Student")}
          </Card>
          <Card style={{ textAlign: "center" }}>
            Family: {this.countType("Family")}
          </Card>
        </CardGroup>
        <Card style={{ padding: 50 }}>
          <Card.Title style={{ padding: 40 }}>Users of Packages</Card.Title>
          <div>
            <Bar
              width={10}
              height={5}
              data={{
                labels: [
                  "Individual Male",
                  "Individual Female",
                  "Student",
                  "Family",
                ],
                datasets: [
                  {
                    label: "Members",
                    backgroundColor: "rgba(75,192,192,1)",
                    borderColor: "rgba(0,0,0,1)",
                    borderWidth: 2,
                    data: [
                      this.countType("Individual Male"),
                      this.countType("Individual Female"),
                      this.countType("Student"),
                      this.countType("Family"),
                    ],
                  },
                ],
              }}
              options={{
                title: {
                  display: true,
                  text: "Users of Packages",
                  fontSize: 10,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
        </Card>
      </div>
    );
  }
}
