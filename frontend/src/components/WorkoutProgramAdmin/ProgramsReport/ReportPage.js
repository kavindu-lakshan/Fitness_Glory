import React, { Component } from "react";
import axios from "axios";
import MemberCountPrograms from "./MemberCountPrograms";
import MemberCountPie from "./MemberCountPie";
import ExpectedIncome from "./ExpectedIncome";

export default class ReportPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      programs: [],
      enrolls: [],
      data: [],
      incomeTableData: [],
      count: 0,
      count1: 0,
    };
  }

  test1() {
    this.state.programs.map((program, id) => {
      this.setState({
        count: 0,
      });

      this.state.enrolls.map((enroll, index) => {
        if (enroll.programName === program._id && enroll.activeness) {
          this.setState({
            count: this.state.count + 1,
          });
        }
        if (index === this.state.enrolls.length - 1) {
          this.state.data.push({ x: program.name, y: this.state.count });
        }
      });
    });
  }

  test2() {
    this.state.programs.map((program, id) => {
      this.setState({
        count1: 0,
      });

      this.state.enrolls.map((enroll, index) => {
        if (enroll.programName === program._id) {
          this.setState({
            count1: this.state.count1 + 1,
          });
        }
        if (index === this.state.enrolls.length - 1) {
          this.state.incomeTableData.push({
            pname: program.name,
            total_income: this.state.count1 * program.fee,
            month: enroll.enroll_datetime.split("/")[0],
            year: enroll.enroll_datetime.split("/")[2].substring(0, 4),
          });
        }
      });
    });
  }

  componentDidMount() {
    this.retrievePrograms();
  }

  retrievePrograms() {
    axios.get("http://localhost:5000/programs").then((res) => {
      if (res.data.success) {
        this.setState({
          programs: res.data.existingPrograms,
        });
        this.retrieveEnrolls();
      } else {
        console.log("error retrieving from database");
      }
    });
  }

  retrieveEnrolls() {
    axios.get("http://localhost:5000/enroll-programs").then((res) => {
      if (res.data.success) {
        this.setState({
          enrolls: res.data.enrolls,
        });
        console.log(this.state.enrolls[0].member_id)
        this.test1();
        this.test2();
      } else {
        console.log("error retrieving from database");
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div class="col-md-6">
            <div className="card rounded shadow mt-4">
              <MemberCountPrograms data={this.state.data} />
            </div>
          </div>

          <div class="col-md-6">
            <div className="card rounded shadow mt-4">
              <MemberCountPie data={this.state.data} />
            </div>
          </div>
        </div>
        <div className="card rounded shadow " >
            <div className="container-fluid">
            <ExpectedIncome values={this.state.incomeTableData} />
            </div>

        </div>
      </div>
    );
  }
}
