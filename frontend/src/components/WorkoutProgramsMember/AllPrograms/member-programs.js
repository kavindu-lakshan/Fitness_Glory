import React, { Component } from 'react'
import axios from 'axios';
import Workoutprogramcard from './workoutprogram-card';

export default class AllprogramsMemer extends Component {
    constructor(props){
        super(props);

        this.state={
            programs:[]
        }
    }

    componentDidMount(){
        this.retrievePrograms();
    }

    retrievePrograms(){
        axios.get("http://localhost:5000/programs").then(res => {
            console.log(res.data.success)
            if(res.data.success){
                this.setState({
                    programs: res.data.existingPrograms
                })
            }else {
                console.log("error retrieving from database")
            }
        })
    }

    render() {
        return (
          <div className="container">
            <p>All Programs</p>
            <div className="row">
                {this.state.programs.map((program, index) => (
                    <div className="col-md-4 col-sm-6" key={index}>
                        {console.log(program)}
                        <Workoutprogramcard
                            program={program}
                        />
                    </div>
                ))}            
            </div>
          </div>
        )
      }
    }
    