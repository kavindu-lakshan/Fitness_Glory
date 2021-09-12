import React, { Component } from "react";
import axios from "axios";
import jspdf from "jspdf";
import "jspdf-autotable";
import Logo from "../../../logo.png";
import { Table } from "react-bootstrap";

export default class ReportWorkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workouts: [],
    };
  }

  componentDidMount() {
    this.retrieveWorkouts();
  }

  retrieveWorkouts() {
    axios.get("/workouts").then((res) => {
      if (res.data.success) {
        this.setState({
          workouts: res.data.data,
        });

        console.log(this.state.workouts);
      }
    });
  }

  generatePDFWorkout(workouts) {
    const doc = new jspdf();
    const tableColumn = ["Workout Name", "Workout Category", "Number of Views"];
    const tableRows = [];
    workouts
      .sort((a, b) => b.viewCount - a.viewCount)
      .slice(0, 10)
      .map((workout) => {
        const workoutDetails = [
          workout.workout_name,
          workout.workout_category,
          workout.viewCount,
        ];
        tableRows.push(workoutDetails);
      });
    doc.text("Workout Report", 14, 20).setFontSize(12);
    doc.addImage(Logo, "JPEG", 135, 2, 60, 30);
    doc.autoTable(tableColumn, tableRows, {
      styles: { fontSize: 12, halign: "center" },
      startY: 35,
    });
    window.open(URL.createObjectURL(doc.output("blob")));
    doc.save("workout_Report.pdf");
  }

  render() {
    return (
      <div style={{ marginTop: "20px" }} className="container">
        &nbsp;
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h1>Top 10 viewd workouts</h1>
          </div>
        </div>
        <Table
          responsive="sm"
          className="table"
          striped
          bordered
          hover
          variant="dark"
        >
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th scope="col" style={{ width: "10%" }}>
                #
              </th>
              <th scope="col" style={{ width: "40%" }}>
                Workout Name
              </th>
              <th scope="col" style={{ width: "30%" }}>
                Workout Category
              </th>
              <th scope="col">Views</th>
            </tr>
          </thead>
          <tbody>
            {this.state.workouts
              .sort((a, b) => b.viewCount - a.viewCount)
              .slice(0, 10)
              .map((workouts, index) => (
                <tr key={index} style={{ textAlign: "center" }}>
                  <th scope="row">{index + 1}</th>
                  <td>{workouts.workout_name}</td>
                  <td>{workouts.workout_category}</td>
                  <td>{workouts.viewCount}</td>
                </tr>
              ))}
          </tbody>
        </Table>
        <div
          className="container"
          style={{ marginBottom: "10px", textAlign: "right" }}
        >
          <button
            type="button"
            className="btn btn-success"
            style={{ width: 200 }}
            onClick={() => this.generatePDFWorkout(this.state.workouts)}
          >
            Generate PDF
          </button>
        </div>
      </div>
    );
  }
}
