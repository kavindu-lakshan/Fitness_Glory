import React from "react";
import { Component } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ImageBoxAnimation from "./ImageBoxAnimated7";
import ScrollToTop from "react-scroll-to-top";

const Wrapper = styled.div``;

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
            Status: '',
            errors: {}
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
        .then(()=>{
            alert("The leave has been approved/ rejected!")
            window.location = '/admin/EmployeeHome';
        }).catch((err)=>{
            alert("Error in approving/rejecting leave!")
        })

        
        }

    render(){
        return (
            <div>
                 <br></br>     
          <Wrapper>
                <ImageBoxAnimation/>
            </Wrapper>
            <div style = {backgroundStyles}>
              <br></br>
            <h1 style = {topicStyles}>DECLINE/ APPROVE LEAVE REQUESTS</h1>
            </div>
            <ScrollToTop smooth style = {scrollStyles} />
            <div style = {backStyles}>
            <br></br>
                <form onSubmit = {this.onSubmit}>
                      
                    <div className = "form-group">
                        <label style= {labelStyles}> NIC NUMBER : </label>
                        <div>
                        <input  
                            type = "text"
                            required
                            className = "form-control"
                            value = {this.state.NICNumber}
                            onChange = {this.onChangeNICNumber}
                            style = {inputStyles}
                            disabled
                        />
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className = "form-group">
                        <label style= {labelStyles}> REQUEST : </label>
                        <input 
                            type = "text"
                            required
                            className = "form-control"
                            value = {this.state.Request}
                            onChange = {this.onChangeRequest}
                            style = {inputStyles}
                            disabled
                        />
                    </div>
                    <div className = "form-group">
                        <label style= {labelStyles}> LEAVE DATE: </label>
                        <div style = {DateStyles}>
                            <DatePicker
                                disabled
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
                                disabled
                                selected = {this.state.ReturnDate}
                                onChange = {this.onChangeReturnDate}
                            />
                        </div>
                    </div>
                    <br></br>
                    <div className = "form-group">
                        <label style= {labelStyles}> LEAVE TIME : </label>
                        <input
                            type = "text"
                            required
                            className = "form-control"
                            value = {this.state.LeaveTime}
                            onChange = {this.onChangeLeaveTime}
                            style = {inputStyles}
                            disabled
                        />
                    </div>
                    <div className = "form-group">
                        <label style= {labelStyles}> RETURN TIME : </label>
                        <input
                            type = "text"
                            required
                            className = "form-control"
                            value = {this.state.ReturnTime}
                            onChange = {this.onChangeReturnTime}
                            style = {inputStyles}
                            disabled
                        />
                    </div>
                    
                    <div className = "form-group">
                            <label style= {labelStyles}> STATUS: </label>
                            <div onChange = {this.onChangeStatus} required>
                                <span>
                                    <input style = {radioStyles1} type="radio" value="approve" name="gender" required/>
                                        <span 
                                            style = {label2Styles} class="to-be-red">APPROVE
                                        </span>
                                </span>
                                <span>
                                    <input style = {radioStyles2} type="radio" value="reject" name="gender" />
                                        <span 
                                            style = {label2Styles}  class="to-be-red">REJECT
                                        </span>
                                </span>
                            </div>
                        </div>

                    
                    <br></br>
                    <br></br>
                    <div className = "form-group" >
                        <input type = "submit" value = "ACCEPT/REJECT" className = "btn btn-primary" style = {submitStyles}/>
                    </div>
                </form>
                </div>
                </div>
            
        )
    }
}


const fafaStyles = {
    marginLeft: '870px',
    marginBottom: '30px',
    color: 'white'
}

const StatusStyles = {
    marginLeft: '86px',
    height: '30px',
    width: '240px'
}

const backgroundStyles = {
  backgroundColor: 'black',
  height: '80px',
  width: '1229px',
  marginLeft: '55px'
}

const scrollStyles = {
    color: 'black',
    backgroundColor: 'grey'
}

const submitStyles = {
    marginTop: '-60px',
    marginLeft: '500px',
    textDecoration: 'none',
    width: '240px',
    height: '50px',
    color: 'black',
    fontSize: '16px',
    animation: 'glowing 1300ms infinite',
    background: 'linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)'
}

const backStyles = {
    backgroundColor: 'black',
    width: '1229px',
    marginLeft: '55px'
}
  
const topicStyles = {
    color: 'white',
    textAlign: 'center',
    marginLeft: '45px'
}

const inputStyles = {
    borderTop: 'hidden',
    borderRight: 'hidden',
    borderLeft: 'hidden',
    borderBottom: 'groove',
    borderBottomColor:'grey',
    backgroundColor: 'black',
    width: '360px',
    marginLeft: '540px',
    color: 'white',
    textAlign: 'left',
    fontSize: '18px',
    marginTop: '-50px'
}

const labelStyles = {
    color: 'white',
    fontSize: '18px',
    marginLeft: '350px'
}

const DateStyles = {
    marginLeft: '540px',
    marginTop: '-25px'
}

const radioStyles1 = {
    marginLeft: '540px',
    marginTop: '-150px',
    height: '20px',
    width: '20px',
    textColor: 'white'
}

const radioStyles2 = {
    marginLeft: '45px',
    marginTop: '-30px',
    height: '20px',
    width: '20px',
    textColor: 'white'
}

const label2Styles = {
    color: 'white',
    marginLeft: '10px',
    marginTop: '-10px'
}