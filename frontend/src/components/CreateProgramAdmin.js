import React, { Component } from 'react'
import axios from 'axios';

export default class CreateProgramAdmin extends Component {

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

        const {name,description,conducted_by,fee,day,time} = this.state;

        const data ={
            name:name,
            description:description,
            conducted_by:conducted_by,
            day:day,
            fee:fee,
            time:time
        }
        axios.post("http://localhost:5000/program/save",data).then((res) =>{
            if(res.data.success){
                //resetting states to use for another time
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

    render() {  
        return (
            <div className='col-md-8 mt-4 mx-auto'>
                <h1 className='h3 mb-3 font-weight-normal'>Create new program</h1>
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
                            &nbsp; save
                        </button>
                    </form>
            </div>
        )
    }
}
