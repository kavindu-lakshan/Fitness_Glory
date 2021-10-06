import React, { useState,useEffect } from 'react';
import { getAllSalaries } from './api';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import './ViewSalaries.css';
import ImageBoxAnimation from './ImageBoxAnimated6';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
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

export const ViewAllSalaries =() =>{
    const[salaries, setSalaries] = useState([]);
    const[search, setSearchTerm] = useState("");

    useEffect(()=>{
        const displaySalaries = async() => {
        const salaries = await getAllSalaries()
            setSalaries(salaries)
        }
        displaySalaries()
    }, [])

    // const onDelete=(id)=>{
    //     axios.delete(`http://localhost:5000/Employee_Salary/admin/delete/${id}`).then((res)=>{
    //         alert("Salary Deleted Successfully");

    //         window.location.reload('/ViewSalaries');
    //     })
    // }

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
                    window.location.reload('/ViewSalaries');
                    });
                    
            } else if (result.isDenied) {
              Swal.fire('The record has not been deleted', '', 'info')
            }
          })

        
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
                <br></br>
                <i style = {fafaStyles} class = "fa fa-search"></i>
                <div className = "Row">
                    <div className = "col-lg-3 mt-2 mb-2">
                        <div>
                            <input className = "form-control" type = "text" placeholder="TYPE MONTH" 
                                onChange={(e)=>{
                                    setSearchTerm(e.target.value);
                                }}
                                style = {searchStyles}
                    
                            />
                        </div>
                    </div>
                </div>
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
                salaries.filter((row)=>{
                    if(search === ""){
                        return row
                    }else if(row.Month.toLowerCase().includes(search.toLowerCase())){
                        return row
                    }
                    }).map((row)=>(
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
            <br></br>
            <StyledButton style = {btnStyles}><Link to = {"/admin/EmployeeHome"}>BACK TO HOME</Link></StyledButton>
            <StyledButton style = {btnStyles2}><Link to = {""}>PRINT REPORT</Link></StyledButton>
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

const searchStyles = {
    marginTop: '-45px',
    marginLeft: '475px'
}

const fafaStyles = {
    marginTop: '-100px',
    marginLeft: '750px'
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
    marginLeft: '400px'
}

const btnStyles2 = {
    marginLeft: '650px',
    marginTop: '-72px'
}