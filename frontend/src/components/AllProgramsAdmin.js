import React, { Component } from 'react'
import axios from 'axios';

export default class AllProgramsAdmin extends Component {
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
            <table className ="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Time</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.programs.map((program, index) => (
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>
                      <a href={'/admin-expand-program/' + program._id} style ={{textDecoration: 'none'}}>
                      {program.name}
                      </a>
                      </td>
                    <td>{program.description}</td>
                    <td>{program.time}</td>
                    <td>
                      <a className="btn btn-warning" href={'/admin-edit-program/' + program._id}>
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>
                      <a className="btn btn-danger" href='#'>
                        <i className="fas fa-trash-alt"></i>&nbsp;Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
    
            <button className="btn btn-success"> <a href="/admin-add-program" style ={{textDecoration: 'none', color: 'white'}}>Create New Post</a></button>
          </div>
        )
      }
    }
    