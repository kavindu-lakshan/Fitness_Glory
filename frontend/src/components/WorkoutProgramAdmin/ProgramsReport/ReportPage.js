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
      incomeTableDataSendReady: [],
      MonthlyTotal: 0
    };
  }

  getChartsData() {
    this.state.programs.map((program, id) => {
      var count = 0

      this.state.enrolls.map((enroll, index) => {
        if (enroll.programName === program._id && enroll.activeness) {
            count = count + 1
        }
        if (index === this.state.enrolls.length - 1) {
          this.state.data.push({ x: program.name, y: count });
        }
      });
    });
  }

  getTabledata = (month, year) => {
    this.state.programs.map((program, indexProgram) => {
      var totalFee = 0;
      var enrolledCount = 0;

      this.state.enrolls.map((enroll, indexEnroll) => {
        if (enroll.programName === program._id) {
          totalFee = totalFee + Number(program.fee);
          enrolledCount = enrolledCount + 1;
        }
        if (
          this.state.enrolls.length === indexEnroll + 1 &&
          enroll.enroll_datetime.split("/")[0] == month &&
          enroll.enroll_datetime.split("/")[2].substring(0, 4) == year
        ) {
          if (this.state.incomeTableData.length !== 0) {
            this.setState({
              incomeTableData: [],
            });
          }
          this.state.incomeTableData.push({
            pname: program.name,
            total_income: totalFee,
            enrolledCount: enrolledCount,
            Fee: program.fee,
          });
        }
      });
    });
  };

  componentDidMount = async () => {
    await this.retrievePrograms();
    await this.retrieveEnrolls().then(() => {
      this.getChartsData();
    });

    
    this.setState({
      incomeTableDataSendReady: this.state.incomeTableData,
    });

  };

  retrievePrograms = async () => {
    await axios.get("http://localhost:5000/programs").then((res) => {
      if (res.data.success) {
        this.setState({
          programs: res.data.existingPrograms,
        });
        this.retrieveEnrolls();
      } else {
        console.log("error retrieving from database");
      }
    });
  };

  retrieveEnrolls = async () => {
    await axios.get("http://localhost:5000/enroll-programs").then((res) => {
      if (res.data.success) {
        this.setState({
          enrolls: res.data.enrolls,
        });
      } else {
        console.log("error retrieving from database");
      }
    });
  };

  filterIncomeTableByMonth = async (month, year) => {
    this.getTabledata(month, year);
    this.setState({
      incomeTableDataSendReady: this.state.incomeTableData,
    });
  };

  render() {
    return (
      <div className="bg-primary" >
        <div className="px-5 pb-3">
        <div className="row">
          <div className="col-md-4">
            <div className="card rounded bg-dark shadow mt-4">
              <MemberCountPrograms data={this.state.data} />
              <p class="card-title text-light text-center pb-2">Number of Active Members in Each Program</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-white bg-dark rounded shadow mt-4">
              <MemberCountPie data={this.state.data} />
              <p class="card-title text-light text-center pb-2">Distribution of Active Members in Programs </p>
            </div>
          </div>
        </div>

        <div className="card rounded bg-dark shadow">
          <div className="pt-3">
            <ExpectedIncome
              values={this.state.incomeTableDataSendReady}
              filterIncomeTableByMonth={this.filterIncomeTableByMonth}
            />
          </div>
        </div>
        </div>
      </div>
    );
  }
}
