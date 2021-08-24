import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from "react-router-dom";

export default class EditProgramAdmin extends Component {
    constructor(props){
        super(props);
        
        this.state={
            name:'',
            description:'',
            conducted_by:'',
            fee:'',
            day:'',
            time:''
        }
    }

    handleInputChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) => {
       
        e.preventDefault();
        const id = this.props.match.params.id;

        const {name,description,conducted_by,fee,day,time} = this.state;

        const data ={
            name:name,
            description:description,
            conducted_by:conducted_by,
            day:day,
            fee:fee,
            time:time
        }
        axios.put('http://localhost:5000/program/update/'+id, data).then((res) =>{
        
        if(res.data.success){
            alert(data.name+' updated successfully');
            window.location = '/admin-programs';

                this.setState({
                    name:'',
                    description:'',
                    conducted_by:'',
                    fee:'',
                    day:'',
                    time:''
                })
            }
            
        })
    }
    
    componentDidMount(){
        const url = 'http://localhost:5000/program/' + this.props.match.params.id;
 
         axios.get(url).then((res) => {
            if(res.data.success){
                
                    this.setState({
                        name: res.data.program.name,
                        description: res.data.program.description,
                        conducted_by: res.data.program.conducted_by,
                        fee: res.data.program.fee,
                        day: res.data.program.day,
                        time: res.data.program.time
                    })
                } else {
                    console.log("error retrieving from database")
                }
            })
     }

    render() {  
        return (
            <div className='col-md-8 mt-4 mx-auto'>
                <h1 className='h3 mb-3 font-weight-normal'>Edit Program {}</h1>
                    <form className='needs-validation' noValidate>
                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Name</label>
                            <input type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter name"
                            value={this.state.name}
                            onChange={this.handleInputChange}/>
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Description</label>
                            <input type="text"
                            className="form-control"
                            name="description"
                            placeholder="Enter description"
                            value={this.state.description}
                            onChange={this.handleInputChange}/>
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Conducted by</label>
                            <input type="text"
                            className="form-control"
                            name="conducted_by"
                            placeholder="Enter who's conducting"
                            value={this.state.conducted_by}
                            onChange={this.handleInputChange}/>
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Monthly Fee</label>
                            <input type="text"
                            className="form-control"
                            name="fee"
                            placeholder="Enter fee"
                            value={this.state.fee}
                            onChange={this.handleInputChange}/>
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Conducting Day</label>
                            <input type="text"
                            className="form-control"
                            name="day"
                            placeholder="Enter conducting day"
                            value={this.state.day}
                            onChange={this.handleInputChange}/>
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Time Duration</label>
                            <input type="text"
                            className="form-control"
                            name="time"
                            placeholder="Enter name"
                            value={this.state.time}
                            onChange={this.handleInputChange}/>
                        </div>

                        <button className='btn btn-success' type='submit' style={{marginTop:'15px'}} onClick={this.onSubmit}>
                            <i className='far fa-check-square'></i>
                            &nbsp; update
                        </button>
                    </form>
            </div>
        )
    }
}
