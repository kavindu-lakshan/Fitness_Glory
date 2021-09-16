import React, { Component } from 'react'
import axios from 'axios';
import Workoutprogramcard from './workoutprogram-card';
import Header from '../../Header/Header';

export default class AllprogramsMemer extends Component {
    constructor(props){
        super(props);

        this.state={
            programs:[]
        }
    }

    componentDidMount(){
        this.retrievePrograms();
        console.log(Header)
    }

    filterData(programs, searchKey){
        const result = programs.filter((program) =>
          program.name.toLowerCase().includes(searchKey) ||
          program.description.toLowerCase().includes(searchKey) ||
          program.conducted_by.toLowerCase().includes(searchKey) ||
          program.name.toLowerCase().includes(searchKey) ||
          program.day.toLowerCase().includes(searchKey)
        )
  
        this.setState({programs: result})
      }
      
  
      handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value.toLowerCase();
  
          axios.get("http://localhost:5000/programs").then(res => {
              if(res.data.success){
                this.filterData(res.data.existingPrograms,searchKey)
              }
          })
      }

    retrievePrograms(){
        axios.get("http://localhost:5000/programs").then(res => {
            if(res.data.success){
                this.setState({
                    programs: res.data.existingPrograms
                })
            }else {
                console.log("error retrieving from database")
            }
        })
    }

    EnrollController = (id, programName) => {

        const myCurrentTime = new Date().toLocaleString()

        const data ={
            programName:programName,
            member_id:id,
            enroll_datetime:myCurrentTime,
            activeness:true
        }

        axios.post("http://localhost:5000/enroll-program/save",data).then((res) =>{
            if(res.data.success){
                alert('Enrolled successfully');
            }
        })
    
    }

    render() {
        return (
          <div className="container" style={{marginTop:'20px'}}>
            <div className="row">
                <div className="col-lg-9 mt-2 mb-2">
                    <h1>Workout Programs</h1>
                </div>
                <div className="col-lg-3 mt-2 mb-2">
                    <input className="form-control"
                    type="search"
                    placeholder="Search"
                    name="searchQuery"
                    onChange={this.handleSearchArea}
                    />
                </div>
                <hr/>
            </div>
            <div className="row" style={{marginTop:'30px'}}>
                {this.state.programs.map((program, index) => (
                    <div className="col-md-4 col-sm-6" key={index}>
                        <Workoutprogramcard
                            program={program}
                            EnrollController={this.EnrollController}
                        />
                    </div>
                ))}            
            </div>
          </div>
        )
      }
    }
    