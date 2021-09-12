import React from "react";
import { Component } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class TrainerLeavesEdit extends Component{
        
    constructor(props) {
        super(props);

        this.onChangeNICNumber = this.onChangeNICNumber.bind(this);
        this.onChangeRequest = this.onChangeRequest.bind(this);
        this.onChangeLeaveDate = this.onChangeLeaveDate.bind(this);
        this.onChangeReturnDate = this.onChangeReturnDate.bind(this);
        this.onChangeLeaveTime = this.onChangeLeaveTime.bind(this);
        this.onChangeReturnTime = this.onChangeReturnTime.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            NICNumber: '',
            Request: '',
            LeaveDate: new Date(),
            ReturnDate: new Date(),
            LeaveTime: '',
            ReturnTime: '',
            Status: ''
        }
    }

    handleClick(e){

        this.setState({disable:!this.state.disable})
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Leaves/' + this.props.match.params.id)
        .then(response => {
            this.setState({
                NICNumber: response.data.NICNumber,
                Request: response.data.Request,
                LeaveDate: new Date(response.data.LeaveDate),
                ReturnDate: new Date(response.data.ReturnDate),
                LeaveTime: response.data.LeaveTime,
                ReturnTime: response.data.ReturnTime,
                Status: response.data.Status
            })
        })
        .catch(function (error){
            console.log(error);
        })
    }

    onChangeNICNumber(e) {
        this.setState({
            NICNumber: e.target.value
        });
    }

    onChangeRequest(e) {
        this.setState({
            Request: e.target.value
        });
    }

    onChangeLeaveDate(date) {
        this.setState({
            LeaveDate: date
        });
    }

    onChangeReturnDate(date) {
        this.setState({
            ReturnDate: date
        });
    }

    onChangeLeaveTime(e) {
        this.setState({
            LeaveTime: e.target.value
        });
    }

    onChangeReturnTime(e) {
        this.setState({
            ReturnTime: e.target.value
        });
    }
    
    onChangeStatus(e) {
        this.setState({
            Status: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        const Leave = {
            NICNumber: this.state.NICNumber,
            Request: this.state.Request,
            LeaveDate: this.state.LeaveDate,
            ReturnDate: this.state.ReturnDate,
            LeaveTime: this.state.LeaveTime,
            ReturnTime: this.state.ReturnTime,
            Status: this.state.Status
        }

        console.log(Leave);

        axios.post('http://localhost:5000/Leaves/admin/updateL/'+this.props.match.params.id, Leave)
        .then(res => console.log(res.data));

        window.location = '/';
    }

    render(){
        return (
            <div>
                
        
                <form onSubmit = {this.onSubmit}>
                      
                    <div className = "form-group">
                        <label > NIC NUMBER : </label>
                        <div>
                        <div>
                        <i style = {fafaStyles} class="fas fa-pencil-alt" value="" onClick={this.handleClick.bind(this)}></i>
                        </div>
                        <input  
                            type = "text"
                            required
                            className = "form-control"
                            value = {this.state.NICNumber}
                            onChange = {this.onChangeNICNumber}
                            style = {inputStyles}
                        />
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className = "form-group">
                        <label style= {labelStyles}> REQUEST : </label>
                        <div>
                        <i style = {fafaStyles} class="fas fa-pencil-alt" value="" onClick={this.handleClick.bind(this)}></i>
                        </div>
                        <input 
                            type = "text"
                            required
                            className = "form-control"
                            value = {this.state.Request}
                            onChange = {this.onChangeRequest}
                            style = {inputStyles}
                        />
                    </div>
                    <div className = "form-group">
                        <label style= {labelStyles}> LEAVE DATE: </label>
                        <div style = {DateStyles}>
                            <DatePicker
                                selected = {this.state.LeaveDate}
                                onChange = {this.onChangeLeaveDate}
                            />
                        </div>
                    </div>
                    <br></br>
                    <div className = "form-group">
                        <label style= {labelStyles}> RETURN DATE : </label>
                        <div style = {DateStyles}>
                            <DatePicker
                                selected = {this.state.ReturnDate}
                                onChange = {this.onChangeReturnDate}
                            />
                        </div>
                    </div>
                    <br></br>
                    <div className = "form-group">
                        <label style= {labelStyles}> LEAVE TIME : </label>
                        <div>
                        <i style = {fafaStyles} class="fas fa-pencil-alt" value="" onClick={this.handleClick.bind(this)}></i>
                        </div>
                        <input
                            type = "text"
                            required
                            className = "form-control"
                            value = {this.state.LeaveTime}
                            onChange = {this.onChangeLeaveTime}
                            style = {inputStyles}
                        />
                    </div>
                    <div className = "form-group">
                        <label style= {labelStyles}> RETURN TIME : </label>
                        <div>
                        <i style = {fafaStyles} class="fas fa-pencil-alt" value="" onClick={this.handleClick.bind(this)}></i>
                        </div>
                        <input
                            type = "text"
                            required
                            className = "form-control"
                            value = {this.state.ReturnTime}
                            onChange = {this.onChangeReturnTime}
                            style = {inputStyles}
                        />
                    </div>
                    <div className = "form-group">
                        <label style= {labelStyles}> STATUS : </label>
                        <div>
                        <i style = {fafaStyles} class="fas fa-pencil-alt" value="" onClick={this.handleClick.bind(this)}></i>
                        </div>
                        <input
                            type = "text"
                            required
                            className = "form-control"
                            value = {this.state.Status}
                            onChange = {this.onChangeStatus}
                            style = {inputStyles}
                        />
                    </div>
                    <br></br>
                    <br></br>
                    <div className = "form-group" >
                        <input type = "submit" value = "Accept/Reject" className = "btn btn-primary" />
                    </div>
                </form>
                </div>
        )
    }
}


const fafaStyles = {
    marginLeft: '860px',
    marginBottom: '30px',
    color: 'red'
}

const inputStyles = {
    borderTop: 'hidden',
    borderRight: 'hidden',
    borderLeft: 'hidden',
    borderBottom: 'groove',
    borderBottomColor:'grey',
    backgroundColor: 'black',
    width: '400px',
    marginLeft: '500px',
    color: 'red',
    textAlign: 'left',
    fontSize: '18px',
    marginTop: '-65px'
}

const labelStyles = {
    color: 'red',
    fontSize: '18px',
    marginLeft: '350px'
}

const DateStyles = {
    marginLeft: '500px',
    marginTop: '-25px'
}
