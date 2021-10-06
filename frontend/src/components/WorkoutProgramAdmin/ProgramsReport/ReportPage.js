import React, { Component } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import jspdf from "jspdf";
import "jspdf-autotable";
import Logo from "../../../logo.png";
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

  generatePDFWorkout(programs) {
    const doc = new jspdf();
    const tableColumn = ["Program Name", "Conducted By","Fee", "Day", "Time"];
    const tableRows = [];
    programs
      .map((program) => {
        const programDetails = [
          program.name,
          program.conducted_by,
          program.fee,
          program.day,
          program.time
        ];
        tableRows.push(programDetails);
      });
    doc.text("Workout Program List", 14, 20).setFontSize(12);
    doc.addImage(Logo, "JPEG", 135, 2, 60, 30);
    doc.autoTable(tableColumn, tableRows, {
      styles: { fontSize: 12, halign: "center" },
      startY: 35,
    });
    window.open(URL.createObjectURL(doc.output("blob")));
    doc.save("workout_Report.pdf");
  }

  generatePDFprogramMembers(data) {
    const doc = new jspdf();
    const tableColumn = ["Program Name", "No of Members"];
    const tableRows = [];
    data
      .map((program) => {
        const programDetails = [
          program.x,
          program.y,
        ];
        tableRows.push(programDetails);
      });
    doc.text("Workout Program List", 14, 20).setFontSize(12);
    doc.addImage(Logo, "JPEG", 135, 2, 60, 30);
    doc.autoTable(tableColumn, tableRows, {
      styles: { fontSize: 12, halign: "center" },
      startY: 35,
    });
    window.open(URL.createObjectURL(doc.output("blob")));
    doc.save("workout_Report.pdf");
  }

  generatePDFprogramIncome(data) {
    const doc = new jspdf();
    const tableColumn = ["Program Name", "No of Members","Income for the Month"];
    const tableRows = [];
    data
      .map((program) => {
        const programDetails = [
          program.pname,
          program.enrolledCount,
          program.total_income,
        ];
        tableRows.push(programDetails);
      });
    doc.text("Workout Program List", 14, 20).setFontSize(12);
    doc.addImage(Logo, "JPEG", 135, 2, 60, 30);
    doc.autoTable(tableColumn, tableRows, {
      styles: { fontSize: 12, halign: "center" },
      startY: 35,
    });
    window.open(URL.createObjectURL(doc.output("blob")));
    doc.save("workout_Report.pdf");
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
      console.log(program)
      this.state.enrolls.map((enroll, indexEnroll) => {
        if (enroll.programName === program._id && enroll.enroll_datetime.split("/")[0] == month) {
          totalFee = totalFee + Number(program.fee);
          enrolledCount = enrolledCount + 1;
        }
        
        if (
          this.state.enrolls.length === indexEnroll + 1 &&
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
    AOS.init();
    AOS.refresh();
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
    console.log(this.state.incomeTableDataSendReady)
  };

  render() {
    return (
      <div className="bg-primary" >
        <div className="px-5 pb-3">
        <div className="row">

        <div className="col-md-4">
            <div  data-aos="fade-top" className="card rounded bg-primary shadow mt-4 px-4">
              <h2 className="text-light text-center mb-5">Download PDF</h2>
              <button className="btn btn-info mb-3 " onClick={() => this.generatePDFWorkout(this.state.programs)}>Download Programs List</button>
              <button className="btn btn-info mb-3" onClick={() => this.generatePDFprogramMembers(this.state.data)}>Download Active Members data</button>
              <br/>
              <p className="text-light">Please choose a month below, before download monthly income PDF </p>
              <button className="btn btn-info mb-3" onClick={() => this.generatePDFprogramIncome(this.state.incomeTableDataSendReady)}>Download Selected month's Income data</button>
            </div>
          </div>

          <div className="col-md-4">
            <div  data-aos="fade-top" className="card rounded bg-dark shadow mt-4">
              <MemberCountPrograms data={this.state.data} />
              <p class="card-title text-light text-center pb-2">Number of Active Members in Each Program</p>
            </div>
          </div>

          <div className="col-md-4">
            <div  data-aos="fade-top" className="card text-white bg-dark rounded shadow mt-4">
              <MemberCountPie data={this.state.data} />
              <p class="card-title text-light text-center pb-2">Distribution of Active Members in Programs </p>
            </div>
          </div>
        </div>

        <div className="card rounded bg-dark shadow">
          <div  data-aos="fade-top" className="pt-3">
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
