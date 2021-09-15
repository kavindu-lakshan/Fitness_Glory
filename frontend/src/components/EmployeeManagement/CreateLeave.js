import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ImageBoxAnimation from './ImageBoxAnimated3';
import styled from 'styled-components';
import Particle from './Particles2';
import GradientButton from 'react-linear-gradient-button';

const minDate = new Date(Date.now());

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const Wrapper = styled.div``;

export default class LeaveRegistration extends Component{
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

        axios.post('http://localhost:5000/Leaves/admin/leaves/add', Leave).then(()=>{
            alert("Leave requested successfully!")
        }).catch((err)=>{
        })

        window.location = '/admin/EmployeeHome';
    }

    render(){
        return (
            <div>
                <br></br>
                <Wrapper>
                    <ImageBoxAnimation/>
                </Wrapper>
                <div style = {bgStyles}>
                    <form onSubmit = {this.onSubmit}>
                        <div>
                            <Particle/> 
                        </div>
                        <br></br><br></br><br></br><br></br><br></br><br></br>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        <h3 style = {headingStyles}>APPLY FOR NEW LEAVE REQUEST</h3>
                        <div style = {formStyles}>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span style = {{height: "38px"}} className="input-group-text" id="basic-addon">
                                        <i className="fa fa-user prefix"></i>
                                    </span>
                                </div>
                                <input type="text" className="form-control" value = {this.state.NICNumber} onChange = {this.onChangeNICNumber} placeholder="NIC NUMBER" aria-label="NIC NUMBER" aria-describedby="basic-addon" required style = {inpStyles}/>
                            </div>
                            <br></br>
                            <br></br>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span style = {{height: "38px"}} className="input-group-text" id="basic-addon">
                                        <i className="fa fa-user prefix"></i>
                                    </span>
                                </div>
                                <input value = {this.state.Request} onChange = {this.onChangeRequest} type="text" className="form-control"  placeholder="REASON FOR LEAVE REQUEST" aria-label="REASON :" aria-describedby="basic-addon" required style = {inpStyles}/>
                            </div>
                        </div> 
                        <br></br>
                        <br></br>
                        <div className = "form-group">
                            <label style = {labelStyles}> LEAVE DATE : </label>
                            <br></br>
                            <div style = {dateStyles}>
                                <DatePicker
                                    selected = {this.state.LeaveDate}
                                    onChange = {this.onChangeLeaveDate}
                                    minDate={minDate}
                                />
                            </div>
                        </div>
                        <br></br>
                        <div className = "form-group">
                            <label style = {labelStyles}> RETURN DATE : </label>
                            <br></br>
                            <div style = {dateStyles}>
                                <DatePicker
                                    selected = {this.state.ReturnDate}
                                    onChange = {this.onChangeReturnDate}
                                    minDate={minDate}
                                />
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className = "form-group">
                        <label style = {labelStyles}> LEAVE TIME : </label>
                            <TextField
                                id="time"
                                type="time"
                                defaultValue="07:30"
                                style = {textStyles1}
                                required
                                value={this.state.LeaveTime}
                                onChange={this.onChangeLeaveTime}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                inputProps={{
                                step: 300, // 5 min
                                }}
                            />
                        </div>
                        <br></br>
                        <div className = "form-group">
                            <label style = {labelStyles2}> RETURN TIME : </label>
                                <TextField
                                    id="time"
                                    type="time"
                                    style = {textStyles2}
                                    required
                                    value={this.state.ReturnTime}
                                    onChange={this.onChangeReturnTime}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    inputProps={{
                                    step: 300, // 5 min
                                    }}
                                />
                        </div>
                        <br></br>
                        <br></br>
                        <div className = "form-group">
                            <label style = {labelStyles2}>STATUS :</label>
                                <div onChange = {this.onChangeStatus} required>
                                    <span><input style = {textStyles3} type="radio" value="Pending" name="Pending" required/><span style = {radioStyles} class="to-be-red">Pending</span></span>
                                </div>
                        </div>
                        <br></br>
                        <GradientButton type="submit" className="CheckButton" style = {linkStyles}>
                            REQUEST LEAVE
                        </GradientButton>
                        <br></br>
                        <br></br>
                    </form>
                </div>
                <br></br>
            </div>
        )
    }
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
    padding: '30px',
    marginTop: '-980px'
}

const formStyles = {
    marginTop: '-170px',
    width: '700px',
    marginTop: '30px',
    marginLeft: '270px'
}

const labelStyles = {
    color: 'white',
    marginLeft: '390px',
    fontSize: '18px'
}

const labelStyles2 = {
    color: 'white',
    marginLeft: '390px',
    fontSize: '18px'
}

const dateStyles = {
    marginLeft: '580px',
    height: '35px',
    marginTop: '-35px'
}

const textStyles1 = {
    color : 'white',
    backgroundColor: 'white',
    width: '235px',
    marginLeft: '40px',
    height: '28px'
}

const textStyles2 = {
    backgroundColor: 'white',
    width: '235px',
    marginLeft: '23px',
    height: '28px'
}

const textStyles3 = {
    width: '180px',
    marginLeft: '72px',
    height: '28px',
    marginTop: '-150px',
    marginLeft: '510px'
}

const linkStyles = {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    marginLeft: '540px'
}

const radioStyles = {
    color: 'white',
    fontSize: '18px',
    marginLeft: '-60px'
}

const inpStyles = {
    height: '38px'
}