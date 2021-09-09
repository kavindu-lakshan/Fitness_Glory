import React, { Component } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Card, CardGroup } from "react-bootstrap";
import jspdf from "jspdf";
import "jspdf-autotable";
import Logo from "../logo.png";

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

  generatePDF(details) {
    const doc = new jspdf();
    const tableColumn = ["Name", "Email", "Package"];
    const tableRows = [];

    details.map((detail) => {
      const memberDetail = [detail.name, detail.email, detail.packageType];
      tableRows.push(memberDetail);
    });
    doc.text("Members Report", 14, 15).setFontSize(12);
    doc.addImage(Logo, "JPEG", 115, 5, 80, 30);
    doc.autoTable(tableColumn, tableRows, {
      styles: { fontSize: 8 },
      startY: 35,
    });
    doc.save("Member_Report.pdf");
  }

  generatePDFFamily(type) {
    const doc = new jspdf();
    const tableColumn = ["Name", "Email", "Package"];
    const tableRows = [];
    const countTypes = this.state.details.filter(
      (packageType) => packageType.packageType === type
    );

    countTypes.map((detail) => {
      const memberDetail = [detail.name, detail.email, detail.packageType];
      tableRows.push(memberDetail);
    });
    doc.text("Members Report", 14, 15).setFontSize(12);
    doc.addImage(Logo, "JPEG", 190, 5, 15, 15);
    doc.autoTable(tableColumn, tableRows, {
      styles: { fontSize: 8 },
      startY: 35,
    });
    doc.save("Member_Report.pdf");
  }

  render() {
    return (
      <div className="container">
        <CardGroup style={{ padding: 50 }}>
          <Card style={{ padding: 50 }}>
            <Card.Title>
              <h1>Number of Users</h1>
            </Card.Title>
            <br />
            <Card.Text>
              <h4> Individual Male: {this.countType("Individual Male")}</h4>
              <h4>Individual Female: {this.countType("Individual Female")}</h4>
              <h4>Student: {this.countType("Student")}</h4>
              <h4>Family: {this.countType("Family")}</h4>
              <br />
              <h1>Reports</h1>
              <br />
              <button
                type="button"
                className="btn btn-success"
                style={{ width: 200 }}
                onClick={() => this.generatePDF(this.state.details)}
              >
                All Users
              </button>
              <br />
              <br />
              <button
                type="button"
                className="btn btn-success"
                style={{ width: 200 }}
                onClick={() => this.generatePDFFamily("Individual Male")}
              >
                Individual Male
              </button>
              <br />
              <br />
              <button
                type="button"
                className="btn btn-success"
                style={{ width: 200 }}
                onClick={() => this.generatePDFFamily("Individual Female")}
              >
                Individual Female
              </button>
              <br />
              <br />
              <button
                type="button"
                className="btn btn-success"
                style={{ width: 200 }}
                onClick={() => this.generatePDFFamily("Student")}
              >
                Student
              </button>
              <br />
              <br />
              <button
                type="button"
                className="btn btn-success"
                style={{ width: 200 }}
                onClick={() => this.generatePDFFamily("Family")}
              >
                Family
              </button>
            </Card.Text>
          </Card>

          <Card bg="primary" text="white" style={{ width: "30rem" }}>
            <Card.Title style={{ padding: 40 }}>Users of Packages</Card.Title>
            <div>
              <Pie
                style={{ width: 900, height: 500, padding: 10 }}
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
                      backgroundColor: [
                        "#B21F00",
                        "#C9DE00",
                        "#2FDE00",
                        "#00A6B4",
                        "#6800B4",
                      ],
                      hoverBackgroundColor: [
                        "#501800",
                        "#4B5000",
                        "#175000",
                        "#003350",
                        "#35014F",
                      ],
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
                    fontSize: 20,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                }}
              />
            </div>
          </Card>
        </CardGroup>
      </div>
    );
  }
}
