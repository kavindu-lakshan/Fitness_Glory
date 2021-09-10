import React from "react";
import { Component } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import styled from 'styled-components';
import ImageBoxAnimation from './ImageBoxAnimated';
import Tooltip from '@material-ui/core/Tooltip';

const Wrapper = styled.div``;

export default class EditCleaner extends Component{

        
    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeNICNumber = this.onChangeNICNumber.bind(this);
        this.onChangeDOB = this.onChangeDOB.bind(this);
        this.onChangeShift = this.onChangeShift.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            FirstName: '',
            LastName: '',
            NICNumber: '',
            DOB: new Date(),
            Shift: '',
            Gender: '',
            Mobile: '',
            Address: '',
            disable:true,
            errors: {}
        }
    }

    handleClick(e){

        this.setState({disable:!this.state.disable})
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Cleaners/' + this.props.match.params.id)
        .then(response => {
            this.setState({
                FirstName: response.data.FirstName,
                LastName: response.data.LastName,
                NICNumber: response.data.NICNumber,
                DOB: new Date(response.data.DOB),
                Shift: response.data.Shift,
                Gender: response.data.Gender,
                Mobile: response.data.Mobile,
                Address: response.data.Address,
            })
        })
        .catch(function (error){
            console.log(error);
        })
    }

    onChangeFirstName(e) {
        this.setState({
            FirstName: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            LastName: e.target.value
        });
    }

    onChangeNICNumber(e) {
        this.setState({
            NICNumber: e.target.value
        });
    }

    onChangeDOB(date) {
        this.setState({
            DOB: date
        });
    }

    onChangeShift(e) {
        this.setState({
            Shift: e.target.value
        });
    }

    onChangeGender(e) {
        this.setState({
            Gender: e.target.value
        });
    }
    
    onChangeMobile(e) {
        this.setState({
            Mobile: e.target.value
        });
    }

    onChangeAddress(e) {
        this.setState({
            Address: e.target.value
        });
    }

    formValidation = () => {
        const {NICNumber, DOB, Shift, Gender, Mobile} = this.state; 
        let isValid = true;
        const errors = {};

        if((NICNumber.trim().length < 10)||(NICNumber.trim().length > 12)){
            errors.NICNumberLength = "The NIC number should have atleast 10 digits and at most 12 digits";
            isValid = false;
        }

        if((Mobile.trim().length < 10)||(NICNumber.trim().length > 10)){
            errors.MobileLength = "The mobile number should contain 10 digits";
            isValid = false;
        }

        if(DOB.length < 1){
            errors.DOBLength = "Selecting the date of birth is required";
            isValid = false;
        }

        if(Shift.length < 1){
            errors.ShiftLength = "Selecting the shift is a required field";
            isValid = false;
        }

        if(Gender.length < 1){
            errors.GenderLength = "Selecting the gender is required";
            isValid = false;
        }

        this.setState({errors});
        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();
        
        const isValid = this.formValidation();

        const Cleaner = {
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            NICNumber: this.state.NICNumber,
            DOB: this.state.DOB,
            Shift: this.state.Shift,
            Gender: this.state.Gender,
            Mobile: this.state.Mobile,
            Address: this.state.Address
        }

        axios.post('http://localhost:5000/Cleaners/admin/update/'+this.props.match.params.id, Cleaner)
        .then(() => {
            alert("Cleaner details have been update successfully!")
        }).catch((err) => {
            alert("Error in registering! This is due to the error displayed below")
        })
    }

    render(){
        const {NICNumber, DOB, Shift, Gender, Mobile, errors} = this.state; 
        return (
            <div>
                <Wrapper>
                    <ImageBoxAnimation />
                </Wrapper>
                <div style = {bgStyles}>
                <h3 style = {headingStyles}>EDIT CLEANER INFORMATION</h3>
                <br></br>
                <form onSubmit = {this.onSubmit}>
                    {Object.keys(errors).map((key)=>{
                    return <div style = {errorStyles} key = {key}>ERROR: {errors[key]}</div>
                    })}
                    <br></br>
                    <div className = "form-group">
                        <label style= {labelStyles}> First Name : </label>
                        <div>
                        <div>
                        <i style = {fafaStyles} class="fas fa-pencil-alt" value="" onClick={this.handleClick.bind(this)}></i>
                        </div>
                        <input  
                            type = "text"
                            required
                            className = "form-control"
                            value = {this.state.FirstName}
                            onChange = {this.onChangeFirstName}
                            style = {inputStyles}
                            disabled={this.state.disable}
                        />
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className = "form-group">
                        <label style= {labelStyles}> Last Name : </label>
                        <div>
                        <i style = {fafaStyles} class="fas fa-pencil-alt" value="" onClick={this.handleClick.bind(this)}></i>
                        </div>
                        <input 
                            type = "text"
                            required
                            className = "form-control"
                            value = {this.state.LastName}
                            onChange = {this.onChangeLastName}
                            style = {inputStyles}
                            disabled={this.state.disable}
                        />
                    </div>
                    <div className = "form-group">
                        <label style= {labelStyles}> NIC Number : </label>
                        <div>
                        <i style = {fafaStyles} class="fa fa-ban" value=""></i>
                        </div>
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
                    <br></br>
                    <div className = "form-group">
                        <label style= {labelStyles}> Date Of Birth : </label>
                        <div style = {DateStyles}>
                            <DatePicker
                                selected = {this.state.DOB}
                                onChange = {this.onChangeDOB}
                            />
                        </div>
                    </div>
                    <br></br>
                    <div className = "form-group" >
                    <label style= {labelStyles}> Shift : </label>
                            <select style = {AgeStyles} value={this.state.Shift} onChange={this.onChangeShift} required>           
                            <option value="select">Select Your Shift</option>
                                <option value="Morning Shift">Morning Shift</option>
                                <option value="Afternoon Shift">Afternoon Shift</option>
                                <option value="Night Shift">Night Shift</option>
                            </select>
                    </div>
                    <br></br>
                    <div className = "form-group">
                        <label style= {labelStyles}> Gender : </label>
                        <br></br>
                            <input
                                type = "text"
                                required
                                className = "form-control"
                                value = {this.state.Gender}
                                onChange = {this.onChangeGender}
                                style = {GenderinputStyles}
                                disabled
                            />
                            <br></br>
                            <div value = {this.state.Gender} onChange = {this.onChangeGender} required>
                                <span>
                                    <input style = {radioStyles1} type="radio" value="Male" name="gender"/>
                                        <span 
                                            style = {MStyles} 
                                            class="to-be-red">MALE
                                        </span>
                                </span>
                                <span>
                                    <input style = {radioStyles2} type="radio" value="Female" name="gender"/>
                                        <span 
                                            style = {FStyles}
                                            class="to-be-red">FEMALE
                                        </span>
                                </span>
                            </div>
                    </div>
                    <div className = "form-group">
                        
                    </div>
                    <div className = "form-group">
                        <label style= {labelStyles}> Mobile : </label>
                        <div>
                        <i style = {fafaStyles} class="fas fa-pencil-alt" value="" onClick={this.handleClick.bind(this)}></i>
                        </div>
                        <Tooltip title="The phone number should contain only 10 digits." interactive>
                        <input
                            type = "text"
                            required
                            className = "form-control"
                            value = {this.state.Mobile}
                            onChange = {this.onChangeMobile}
                            style = {inputStyles}
                            disabled={this.state.disable}
                        />
                        </Tooltip>
                    </div>
                    <div className = "form-group">
                        <label style= {labelStyles}> Address : </label>
                        <div>
                        <i style = {fafaStyles} class="fas fa-pencil-alt" value="" onClick={this.handleClick.bind(this)}></i>
                        </div>
                        <input
                            type = "text"
                            required
                            className = "form-control"
                            value = {this.state.Address}
                            onChange = {this.onChangeAddress}
                            style = {inputStyles}
                            disabled={this.state.disable}
                        />
                    </div>
                    <br></br>
                    <br></br>
                    <div className = "form-group" >
                        <input type = "submit" value = "Edit Cleaner" className = "btn btn-primary" style = {submitStyles}/>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

const errorStyles = {
    color: 'red',
    backgroundColor: 'grey',
    width: '800px',
    textAlign: 'center',
    marginLeft: '200px',
    height: '30px',
    marginTop: '-40px'
}

const fafaStyles = {
    marginLeft: '860px',
    marginBottom: '40px',
    color: 'white'
}

const bgStyles = {
    backgroundColor: 'black',
    width: '91%',
    height: '1000px',
    marginLeft: '65px',
    margintop: '0px',
    marginBottom: '20px'
}

const headingStyles = {
    color: 'white',
    fontSize: '30px',
    textAlign: 'center',
    padding: '30px'
}

const inputStyles = {
    borderTop: 'hidden',
    borderRight: 'hidden',
    borderLeft: 'hidden',
    borderBottom: 'groove',
    borderBottomColor:'grey',
    backgroundColor: 'black',
    width: '350px',
    marginLeft: '500px',
    color: 'white',
    textAlign: 'left',
    fontSize: '18px',
    marginTop: '-95px'
}

const GenderinputStyles = {
    borderTop: 'hidden',
    borderRight: 'hidden',
    borderLeft: 'hidden',
    borderBottom: 'groove',
    borderBottomColor:'grey',
    backgroundColor: 'black',
    width: '350px',
    marginLeft: '500px',
    color: 'white',
    textAlign: 'left',
    fontSize: '18px',
    marginTop: '-40px'
}

const labelStyles = {
    color: 'white',
    fontSize: '18px',
    marginLeft: '320px'
}

const DateStyles = {
    marginLeft: '520px',
    marginTop: '-37px',
}

const AgeStyles = {
    marginLeft: '112px',
    height: '30px',
    width: '240px'
}

const submitStyles = {
    marginTop: '-10px',
    marginLeft: '480px',
    textDecoration: 'none',
    width: '240px',
    height: '50px',
    color: 'black',
    fontSize: '16px',
    animation: 'glowing 1300ms infinite',
    background: 'linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)'
}

const radioStyles1 = {
    marginLeft: '500px',
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

const MStyles = {
    color: 'white',
    fontSize: '18px',
    marginLeft: '10px'
}

const FStyles = {
    color: 'white',
    fontSize: '18px',
    marginLeft: '10px'
}
