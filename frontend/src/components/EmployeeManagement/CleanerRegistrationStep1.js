import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Tooltip from '@material-ui/core/Tooltip';
import CleanerRegistrationFormCards from './CleanerRegistrationFormCards';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      marginLeft: '380px',
      marginBottom: '20px',
      marginTop: '-60px'
    },
    label: {
      textTransform: 'capitalize',
    },
})(Button);

export default class CleanerRegistration extends Component{
    
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
            errors: {}
        }
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
            errors.MobileLength = "The mobile number must contain 10 digits";
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

        axios.post('http://localhost:5000/Cleaners/cleaner/add', Cleaner).then(()=>{
            alert("Cleaner registered succesfully!")
        }).catch((err)=>{
            alert("Error in registering! This maybe because the cleaner NIC Number already exists or due to the error displayed below")
        })
    }

    render(){
        const {NICNumber, DOB, Shift, Gender, Mobile, errors} = this.state; 
        return (
            <div>
                <CleanerRegistrationFormCards/>
                <div style = {backStyles}>
                    <form onSubmit = {this.onSubmit} > 
                        <div style = {formStyles}>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        <br></br><br></br>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span style = {fafaStyles}  className="input-group-text" id="basic-addon">
                                        <i className="fa fa-user prefix"></i>
                                    </span>
                                </div>
                                <input style = {inputStyles} type="text" className="form-control" onChange = {this.onChangeFirstName} value = {this.state.FirstName} placeholder="First Name" aria-label="Firstname" aria-describedby="basic-addon" required/>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>

                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span style = {fafaStyles} className="input-group-text" id="basic-addon">
                                    <i className="fa fa-user prefix"></i>
                                </span>
                            </div>
                                <input style = {inputStyles} type="text" className="form-control" onChange = {this.onChangeLastName} value = {this.state.LastName} placeholder="Last Name" aria-label="Lastname" aria-describedby="basic-addon" required/>
                                <div style= {{color: 'red'}}>
                                        {this.state.LastNameError}
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>

                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span style = {fafaStyles} className="input-group-text" id="basic-addon">
                                    <i className="fa fa-user prefix"></i>
                                </span>
                            </div>
                            <Tooltip title="The NIC number should have atleast 10 digits and a maximum of 12 digits." interactive>
                                <input style = {inputStyles} type="text" className="form-control" onChange = {this.onChangeNICNumber} value = {this.state.NICNumber} placeholder="NIC Number" aria-label="NIC" aria-describedby="basic-addon" required/>
                            </Tooltip>
                        </div>

                        <br></br>
                        <br></br>
                        <br></br>
                        
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span style = {fafaStyles} className="input-group-text" id="basic-addon">
                                    <i className="fa fa-user prefix"></i>
                                </span>
                            </div>
                            <Tooltip title="The phone number should contain only 10 digits." interactive>
                                <input style = {inputStyles} type="text" className="form-control" onChange = {this.onChangeMobile} value = {this.state.Mobile} placeholder="Mobile Number" aria-label="mobile" aria-describedby="basic-addon" required/>
                            </Tooltip>
                        </div>

                        <br></br>
                        <br></br>
                        <br></br>
                        
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span style = {fafaStyles} className="input-group-text" id="basic-addon">
                                    <i className="fa fa-user prefix"></i>
                                </span>
                            </div>
                            <input style = {inputStyles} type="text" className="form-control" onChange = {this.onChangeAddress} value = {this.state.Address} placeholder="Address" aria-label="address" aria-describedby="basic-addon" required/>
                        </div>
                        
                        <div style = {DOBStyles}>
                            <DatePicker
                                selected = {this.state.DOB}
                                onChange = {this.onChangeDOB}
                                placeholder = "Select Date"
                                required
                            />
                        </div>

                        <br></br>
                        
                        <div className = "form-group" >
                            <select style = {ageStyles} value={this.state.Shift} onChange={this.onChangeShift} required>           
                                <option value="select">Select Your Shift</option>
                                <option value="Morning Shift">Morning Shift</option>
                                <option value="Afternoon Shift">Afternoon Shift</option>
                                <option value="Night Shift">Night Shift</option>
                            </select>
                        </div>

                        <br></br>

                        <div className = "form-group">
                            <label style = {GenderStyles}> GENDER: </label>
                            <div value = {this.state.Gender} onChange = {this.onChangeGender} required>
                                <span>
                                    <input style = {radioStyles1} type="radio" value="Male" name="gender" />
                                        <span 
                                            style = {MStyles} 
                                            class="to-be-red">MALE
                                        </span>
                                </span>
                                <span>
                                    <input style = {radioStyles2} type="radio" value="Female" name="gender" />
                                        <span 
                                            style = {FStyles}
                                            class="to-be-red">FEMALE
                                        </span>
                                </span>
                            </div>
                        </div>

                        <br></br>
                        <br></br>

                        <div className = "form-group">
                            <StyledButton type = "submit">REGISTER CLEANER</StyledButton>
                        </div>
                    </div>
                </form>
            </div>  
                <h1 style = {DStyles}>Date Of Birth : </h1>  
                <h1 style = {AStyles}>Shift : </h1>
                <h1 style = {IStyles}>Fill in the form below to register the cleaners. It is compulsory to fill all the respective fields in order to register him/her. </h1>
                
                {Object.keys(errors).map((key)=>{
                    return <div style = {errorStyles} key = {key}>ERROR: {errors[key]}</div>
                })}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
        </div>
        )
    }
}

const inputStyles = {
    marginRight: '300px',
    height: '35px',
    marginLeft: '0px',
    width: '205px',
    marginTop: '-280px'
}

const fafaStyles = {
    marginTop: '-280px',
    marginLeft: '310px',
    height: '35px'
}

const GenderStyles = {
    color: 'white',
    fontSize: '16px',
    marginTop: '-630px',
    marginLeft: '365px',
    letterSpacing: '0px'
}

const DOBStyles = {
    height: '40px',
    marginLeft: '550px',
    marginTop: '-200px',
    width: '300px',
    textAlign: 'center'
}

const radioStyles1 = {
    marginLeft: '580px',
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

const ageStyles = {
    height: '30px',
    marginLeft: '580px',
    width: '239px'
}

const DStyles = {
    color: 'white',
    fontSize: '16px',
    marginLeft: '450px',
    marginTop: '-375px',
    letterSpacing: '0px'
}

const AStyles = {
    color: 'white',
    fontSize: '16px',
    marginLeft: '450px',
    marginTop: '45px',
    letterSpacing: '0px'
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

const formStyles = {
    marginTop: '800px'
}

const IStyles = {
    color: 'white',
    fontSize: '18px',
    textAlign: 'center',
    marginLeft: '170px',
    marginTop: '-640px',
    width: '1000px',
    letterSpacing: '0px'
}

const errorStyles = {
    color: 'red',
    backgroundColor: 'grey',
    width: '800px',
    textAlign: 'center',
    marginLeft: '295px',
    height: '30px',
    marginTop: '0px'
}

const backStyles = {
    backgroundColor: 'black',
    height: '900px',
    marginTop: '-800px',
    width: '1218px',
    marginLeft: '70px'
}