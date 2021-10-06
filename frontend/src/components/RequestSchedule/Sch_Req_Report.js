import React, { Component } from 'react';
import axios from 'axios';
//import { Pie } from "react-chartjs-2";
import { Bar} from "react-chartjs-2";
import { Card } from "react-bootstrap";
import jspdf from "jspdf";

import "jspdf-autotable";



export default class Sch_Req_Report extends Component{
  constructor(props){
    super(props);

    this.state = {
      posts:[]
    };


  }

componentDidMount(){
  this.retrievePosts();
}


  retrievePosts(){
    axios.get("http://localhost:5000/Xposts").then(res => {
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });

        console.log(this.state.posts)
      }
    });
  } 

  RequestType(type) {
    const RequestTypes = this.state.posts.filter(
      (rstatus) => rstatus.rstatus === type
    );
    return RequestTypes.length;
  }

  generatePDFFamily(type) {
    const doc = new jspdf();
    const tableColumn = ["Name", "Age", "Gender", "Email", "Requirement"];
    const tableRows = [];
    const RequestTypes = this.state.posts.filter(
      (rstatus) => rstatus.rstatus === type
    );

    RequestTypes.map((posts) => {
      const ReqDetails = [posts.mname, posts.age, posts.gender, posts.email, posts.requirement];
      tableRows.push(ReqDetails);
    });
    doc.text("Rejected Request Report", 14, 15).setFontSize(12);
    // doc.addImage(Logo, "JPEG", 115, 5, 80, 30);
    doc.autoTable(tableColumn, tableRows, {
      styles: { fontSize: 8 },
      startY: 35,
    });
    doc.save("Rejected_req__Report.pdf");
  }







  filterData(posts,searchKey){
    const result = posts.filter((post) =>
    post.mname.toLowerCase().includes(searchKey)||
    post.age.toLowerCase().includes(searchKey)||
    post.gender.toLowerCase().includes(searchKey)||
    post.email.toLowerCase().includes(searchKey)||
    post.requirement.toLowerCase().includes(searchKey)||
    post.rstatus.toLowerCase().includes(searchKey)
    )
    this.setState({posts:result})
  }

  handleSearchArea = (e) => {
    //e.currentTarget.value = ("Pending");
    const searchKey = e.currentTarget.value;
    axios.get("http://localhost:5000/Xposts").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey)
      }
    });
  };

  render(){
    return (
      <div className="container">
         <h4>Workout schedule requests report</h4>
         <br></br>

        <p> Click here to download Rejected requests report</p>


        <button
                type="button"
                className="btn btn-success"
                style={{ width: 200 }}
                onClick={() => this.generatePDFFamily("Rejected")}
              >
                Rejected Requests
          </button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

       {/* charts starts from here */}

       {/* <Card> 
        text="white" style={{ width: "30rem" }}>
            <Card.Title style={{ padding: 40 }}>Schedule Requests</Card.Title>
            <div>
              <Bar
                style={{ width: 900, height: 500, padding: 10 }}
                data={{
                  labels: [
                    "Accpeted",
                    "Rejected",
                    "Pending",
                  ],
                  datasets: [
                    {
                      label: "Members",
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                      ],
                      hoverBackgroundColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                      ],
                      data: [
                        this.RequestType("Accpeted"),
                        this.RequestType("Rejected"),
                        this.RequestType("Pending"),
                       
                      ],
                    },
                  ],
                }}
                options={{
                  responsive: false,
                  scales: {
                    xAxes: [{
                      ticks: {
                        maxRotation: 90,
                        minRotation: 80
                      },
                        gridLines: {
                        offsetGridLines: true // à rajouter
                      }
                    },
                    {
                      position: "top",
                      ticks: {
                        maxRotation: 90,
                        minRotation: 80
                      },
                      gridLines: {
                        offsetGridLines: true // et matcher pareil ici
                      }
                    }],
                    yAxes: [{
                      ticks: {
                        beginAtZero: true
                      }
                    }]
                  }
                }}
              />
            </div>
          </Card> */}
          <div>
            <Card>
              <Bar
              style={{ width: 500, height: 500, padding: 20 }}
               data={{
                labels: [
                  "Accpeted",
                  "Rejected",
                  "Pending",
                ],
                datasets: [
                  {
                    label: "Status",
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
                      this.RequestType("Accpeted"),
                      this.RequestType("Rejected"),
                      this.RequestType("Pending"),
                     
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
              </Card>    
          </div>
          <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>Workout schedule requests report</h4>
          </div>
          {/* <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}
            ></input>
          </div> */}
        </div>

        <table className="table table-hover" style={{ marginTop: '40px' }}>
        <thead>
          <tr>
            <th scope = "col">#</th>
            <th scope = "col">Name</th>
            <th scope = "col">Age</th>
            <th scope = "col">Gender</th>
            <th scope = "col">Email</th>
            <th scope = "col">Requirement</th>
            <th scope = "col">Status</th>
          
          
          </tr>
        </thead>
            <tbody>
              {this.state.posts.map((posts,index ) => (

                  <tr key={index}>
                      <th scope ="row"> {index+1}  </th>
                      <td>{posts.mname}</td>
                      <td>{posts.age}</td>
                      <td>{posts.gender}</td>
                      <td>{posts.email}</td>
                      <td>{posts.requirement}</td>
                      <td>{posts.rstatus}</td>

                      <td>
                       
                      </td>

                  </tr>
              ) )}
            </tbody>

        </table>
        
        
      </div>

    )
  }
}