import React,{useState, useEffect} from 'react';

import { Button } from '@material-ui/core';
import axios from "axios";
import "./Interest.css";
export default function AllInterest(){

    const [interests, setInterests] = useState([]);

      useEffect(()=>{
          function getInterests(){
              axios.get("http://localhost:5000/event-interest/allInterests")
              .then((res)=>{
                  
                  setInterests(res.data);
              }).catch((err)=>{
                  alert(err.message);
              })
          }
          getInterests();
      }, [])

      const [eventName, setEventName]= useState("");
      const [memName, setMemName]= useState("");
      const [interestStatus, setInterestStatus]= useState("");
      

    return (
        <div class="container">
            <center>
                <h2>Event Interest Report</h2>
                <Button style={{background:'green',color:'white'}}>
Generate Report
            </Button></center>
            <div class="row">
                <div class="col-lg-12">
                    <div class="main-box clearfix">
                        <div class="table-responsive">
                            <table class="table user-list">
                                <thead>
                                    <tr>
                                        <th><span>#</span></th>
                                        <th><span>User</span></th>
                                        <th><span>Event Name</span></th>
                                        <th class="text-center"><span>Status</span></th>
                                    
                                        <th>&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                
                                {
                                interests.map((row,index)=>( 
                                    <tr key={index}>
                                        <th scope ="row"> {index+1}  </th>
                                        
                                        <td>
                                        {row.eventName}
                                        </td>
                                        <td>
                                        {row.memName}
                                        </td>
                                        <td class="text-center">
                                            <span class="label label-default">{row.interestStatus}</span>
                                        </td>
                                      
                                        </tr>
                                          ))
                                        }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            </div>
						
						
    );
}