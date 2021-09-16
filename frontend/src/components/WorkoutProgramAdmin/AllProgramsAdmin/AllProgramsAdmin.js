import React, { Component } from 'react'
import axios from 'axios';
import ProgramDetailsView from '../ProgramDetailsAdmin/ProgramDetailsView';
import AllProgramsView from './AllProgramsView';

export default class AllProgramsAdmin extends Component {
    constructor(props){
        super(props);

        this.state={
            programs:[]
        }
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

    onDelete = (id, name) => {
      if(window.confirm('Are sre you want to delete '+name+'?')){
        axios.delete('http://localhost:5000/program/delete/'+id).then((res) => {
       
          if(res.data.success){
              alert(res.data.deletedProgram.name+' deleted successfully');
            }
          })
      }
    }

    render() {
        return (
          <div style={{  
            backgroundImage: "url(" + "https://res.cloudinary.com/fitness-glory/image/upload/v1630854420/outlook-photography-and-studio-CvvF9lPJy6U-unsplash_cmxfi8.jpg" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
            <AllProgramsView
              values={this.state.programs}
              onDelete={this.onDelete}
              handleSearchArea={this.handleSearchArea}
            />
            </div>
        )
      }
    }
    