import React, { useState,useEffect } from 'react';
import { getSalary } from './api';
import axios from 'axios';
import { useRouteMatch } from 'react-router';
import styled from 'styled-components';
import './ViewSalaries.css';
import ImageBoxAnimation from './ImageBoxAnimated6';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import moment from 'moment';
import jsPDF from "jspdf";
import "jspdf-autotable";
import Logo from "../.././logo.png";
import Chart from './graph';
import Swal from "sweetalert2";

const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'black',
      height: 48,
      width: '200px',
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      textAlign: 'center',
      marginLeft: '400px',
      marginTop: '-20px',
      fontWeight: 'bold',
      
    },
    label: {
      textTransform: 'capitalize'
    },
  })(Button);


const Wrapper = styled.div``;

export const AllSalaries =() =>{
    
    const[salaries, setSalaries] = useState([]);
    const match = useRouteMatch();
    const year = moment().year();

    useEffect(()=>{
        const displaySalaries = async() => {
        const salaries = await getSalary(match.params.Month)
            setSalaries(salaries)
        }
        displaySalaries()
    }, [])

    // salaries.map((row)=>{
    //     const filteredS = salaries.filter(salaries =>salaries.Year === '2021')
    //     setSalaries(filteredS)
    // })
    
    const filter = (button) =>{
        const filteredS = salaries.filter(salaries =>salaries.Year === button)
        setSalaries(filteredS)
 
    }
  

    const onDelete = (id) => {
        Swal.fire({
            title: 'ARE YOU SURE THAT YOU WANT TO DELETE THE RECORD?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: `Don't Delete`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/Employee_Salary/admin/delete/${id}`).then((res)=>{
                    Swal.fire('The record has been deleted!', '', 'success')
                    window.location.reload('/ViewSalaries/OCTOBER');
                    });
                    
            } else if (result.isDenied) {
              Swal.fire('The record has not been deleted', '', 'info')
            }
          })

        
        }


    const pdf = () =>{
        var doc = new jsPDF();
        const tableColumn = ["NIC NUMBER", "OT RATE", "OT HOURS", "OT TOTAL", "BASIC SALARY", "TOTAL SALARY"];

        const tableRows = [];
        salaries.map((row) => {
            const questionDetails = [
              row.NICNumber,
              row.OTRate,
              row.OTHrs,
              row.OTTotal,
              row.BasicSalary,
              row.TotSalary
            ];
            tableRows.push(questionDetails);
          });
          doc.text("Salary Report", 14, 20).setFontSize(12);
            doc.setFillColor(204, 204, 204, 0);
            doc.rect(0,0, 400, 60, "F");
            doc.addImage(Logo, "JPEG", 75, 2, 60, 30);
            doc.setTextColor(255,255,255);
            doc.setFontSize(15);
            doc.text(55, 45, 'SALARY DISTRIBUTION OF THE MONTH');
            doc.setFontSize(10);
            doc.autoTable(tableColumn, tableRows, {
            styles: { fontSize: 12, halign: "center", backgroundColor:"black"},
            startY: 65,}
            
    );
    doc.save("SalaryReport.pdf");
}

   
    return (
        <div>
            <br></br>
            <Wrapper>
                    <ImageBoxAnimation/>
                </Wrapper>
            <div style = {bgStyles}>
                <br></br>
                <h3 style = {headingStyles}>ASSIGN TRAINER SALARIES</h3>
                <br></br>
                <br></br>
                <div>
                        <MDBTable style = {tableStyles}>
                        <MDBTableHead>
                                <tr style = {tableheadingStyles}>
                                <th style = {{width: '70px'},{marginTop: '-70px'}}>NIC NUMBER</th>
                                <th style = {{width: '40px'},{marginLeft: '-100px'}}>MONTH</th>
                                <th>YEAR</th>
                                <th style = {{width: '70px'}}>OT RATE</th>
                                <th>OT HOURS</th>
                                <th>OT TOTAL</th>
                                <th>BASIC SALARY</th>
                                <th>TOTAL SALARY </th>
                                <th>DELETE</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                {
                salaries.map((row)=>(
                                <tr style = {dataStyles}>
                                <td>{row.NICNumber}</td>
                                <td>{row.Month}</td>
                                <td>{row.Year}</td>
                                <td>{row.OTRate}</td>
                                <td>{row.OTHrs}</td>
                                <td>{row.OTTotal}</td>
                                <td>{row.BasicSalary}</td>
                                <td>{row.TotSalary}</td>
                                <td>
                                <div class="job-right my-4 flex-shrink-0">
                            <button onClick={()=>onDelete(row._id)} value = "DELETE" class="btn d-block w-100 d-sm-inline-block btn-light">
                              DELETE
                        
                            </button>
                            
                            </div>
                                </td>
                                </tr>
                                

                    ))
                    
                }
                <hr style = {{backgroundColor: 'white'}}></hr>
            </MDBTableBody>
            </MDBTable>
            <hr style = {{color: "red"},{height: 5}}></hr>
            
            <br></br>
            <br></br>
            <br></br>
            
            <Chart data={salaries}/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <StyledButton style = {btnStyles3} onClick={()=>filter(`${year}`)}>CURRENT SALARIES</StyledButton>
            <StyledButton style = {btnStyles}><Link to = {"/admin/EmployeeHome"}>BACK TO HOME</Link></StyledButton>
            <StyledButton style = {btnStyles2} onClick={()=>pdf()}>GENERATE PDF</StyledButton>
            <br></br>
            <br></br>
                            </div>
                            </div>
            <br></br>
          
        </div> 
    )
}

const bgStyles = {
    backgroundColor: 'black',
    marginLeft: '55px',
    width: '92.5%'
  }

const headingStyles = {
    color: 'white',
    fontSize: '30px',
    textAlign: 'center',
}


const tableheadingStyles = {
    backgroundColor: 'white',
    opacity: 0.5,
    color: 'black'
}

const tableStyles = {
    marginLeft: '38px',
    marginRight: '20px',
    width: '1150px'
}

const dataStyles = {
    color: 'white'
}

const btnStyles = {
    marginLeft: '80px',
    marginTop: '-72px'
}

const btnStyles2 = {
    marginLeft: '80px',
    marginTop: '-72px'
}

const btnStyles3 = {
    marginLeft: '230px',
    marginTop: '-72px',
    width: '215px'
}