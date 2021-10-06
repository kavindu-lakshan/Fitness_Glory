import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import "./scrollBar.css";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Logo from "../.././logo.png";
import axios from "axios";
import moment from "moment";
import { Bar } from "react-chartjs-2";

export default function InterestReport() {
  const [data, setInterests] = useState([]);
  const weeknumber = moment().week() - 1;
  useEffect(() => {
    function getInterests(data) {
      axios
        .get(`http://localhost:5000/event-interest/employee/${weeknumber}`)
        .then((res) => {
          setInterests(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getInterests(data);
  }, []);

  let countInterest = 0;
  let countNotInterest = 0;
  let countGoing = 0;
  let countnotGoing = 0;

  data.map((row) => {
    if (row.interestStatus === "Interested") {
      countInterest = countInterest + 1;
    }
  });
  data.map((row) => {
    if (row.interestStatus === "Not Interested") {
      countNotInterest = countNotInterest + 1;
    }
  });
  data.map((row) => {
    if (row.interestStatus === "Going") {
      countGoing = countGoing + 1;
    }
  });
  data.map((row) => {
    if (row.interestStatus === "Not Going") {
      countnotGoing = countnotGoing + 1;
    }
  });

  const columns = data[0] && Object.keys(data[0]);

  const pdf = () => {
    var doc = new jsPDF();
    const tableColumn = ["", "Event Name", "Member's Name", "Status"];
    const tableRows = [];
    data.map((row, index) => {
      const getInterests = [
        index + 1,
        row.eventName,
        row.memName,
        row.interestStatus,
      ];
      tableRows.push(getInterests);
    });
    doc.text("Event Interest", 14, 20).setFontSize(12);
    doc.setFillColor(204, 204, 204, 0);
    doc.rect(0, 0, 400, 50, "F");
    doc.addImage(Logo, "JPEG", 75, 2, 60, 30);
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(15);
    doc.text(
      60,
      40,
      "Event Interest Status for" + " " + `${weeknumber}` + " " + "Week"
    );
    doc.autoTable(tableColumn, tableRows, {
      styles: {
        fontSize: 12,
        halign: "center",
        backgroundColor: "transparent",
      },
      startY: 55,
    });
    doc.save("Event-Interest-Report.pdf");
  };

  const state = {
    labels: ["Interest", "Not Interest", "Going", "Not Going"],
    datasets: [
      {
        label: "Event Interest",
        backgroundColor: "#F0CF18",
        borderColor: "#F0CF18",
        borderWidth: 1,
        barThickness: 80,
        width: 2,
        data: [countInterest, countNotInterest, countGoing, countnotGoing],
      },
    ],
  };

  return (
    <div>
      <div style={bgImgA}>
        <div className="container">
          <div className="mt-3">
            <br />
            <br />
            <br />
            <center>
              <h3 style={labelStyle} className="text-center">
                Event Interest Report(Week-{weeknumber})
              </h3>
              <div style={chartA}>
                <Bar
                  data={state}
                  options={{
                    title: {
                      display: true,
                      text: "Event interest status of the week",
                      fontSize: 12,
                    },
                    legend: {
                      display: true,
                    },
                  }}
                />
              </div>
              <br />
              <div style={hideScrollA}>
                <div className="carbrQ" style={scrollableA}>
                  <table style={textStyle} class="table">
                    <thead style={{ color: "#F0CF18" }}>
                      <tr>
                        <th> </th>
                        <th>Event Name</th>
                        <th>Member Name</th>
                        <th>Event Interest Status</th>
                      </tr>
                    </thead>
                    <tbody style={{ color: "white" }}>
                      {data.map((row, index) => (
                        <tr key={index}>
                          <td scope="row">{index + 1}.</td>
                          <td>{row.eventName}</td>
                          <td>{row.memName}</td>
                          <td>{row.interestStatus}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <br />
              <Button
                color="Secondary"
                variant="contained"
                onClick={() => pdf()}
              >
                Export as PDF
              </Button>

              <br />
              <br />
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}
const intBg =
  "https://res.cloudinary.com/fitness-glory/image/upload/v1633216239/young-woman-drinking-water-gym-exercise-concept_1_gtwi3b.jpg";
const bgImgA = {
  background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)) ,url(${intBg})`,
  backgroundSize: "cover",
  position: "center",
  marginTop: "-20px",
  right: "0%",
  left: "0%",
  width: "100%",
  height: "100%",
};
const tblBg = "white";
const labelStyle = {
  color: "white",
  fontWeight: "bold",
  textTransform: "none",
  background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) ,url(${tblBg})`,
  width: "87%",
};

const textStyle = {
  width: "90%",
  color: "white",
  border: "2px solid black",
  background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) ,url(${tblBg})`,
};

const scrollableA = {
  height: "400px",
  overflowY: "scroll",
  paddingRight: "20px",
};

const hideScrollA = {
  height: "400px",
  overflow: "hidden",
};

const chartA = {
  height: "50%",
  width: "50%",
  color: "white",
  border: "2px solid black",
  background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) ,url(${tblBg})`,
};
