import React, {Component} from 'react'
import axios from 'axios';





export default class CreatePost extends Component {
    constructor(props){
        super(props);
        this.state = {
            mname:"",
            age:"",
            gender:"",
            email:"",
            requirement:"",
            rstatus:""
        };
        //default state
       // this.state = defaultState;
        //radio updates1
        this.onValueChange = this.onValueChange.bind(this);
        //selection update
        this.handleChange = this.handleChange.bind(this);
        //validations
        this.handleInputChange = this.handleInputChange.bind(this);
        
    }

    

    //radio updates2
    onValueChange(event) {
      this.setState({
        rstatus: event.target.value
        
      });
    }

    //selection update
    handleChange(event) {
      this.setState({gender: event.target.value});
    }


    handleInputChange = (e) => {
        const { name, value } = e.target;
    
        this.setState({
          ...this.state,
          [name]: value,
        });
      };

      //validations
      validate(){
        let nameError = "";
        let emailError = "";
        //let passwordError = "";
        if(!this.state.mname){
        nameError = "Name field is required";
        }
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!this.state.email || reg.test(this.state.email) === false){
        emailError = "Email Field is Invalid ";
        }
        {/*if(!this.state.password){
        passwordError = "Password field is required";
        } */}
        if(emailError || nameError ){
        this.setState({nameError,emailError});
        return false;
        }
        return true;
        }


        //change with validations
      onSubmit = (e) => {
        if(this.validate()){
          console.warn(this.state);
         // this.setState(defaultState);
          }
        e.preventDefault();
        console.log(this.state.rstatus)
        
    
        const { mname, age, gender, email, requirement, rstatus } = this.state;
    
        const data = {
          mname: mname,
          age: age,
          gender: gender,
          email:email,
          requirement:requirement,
          rstatus:rstatus,
        };
    
        console.log(data);

        axios.post("http://localhost:5000/post/save", data).then((res) => {
            if (res.data.success) {
              this.setState({
                mname: "",
                age: "",
                gender: "",
                email:"",
                requirement:"",
                rstatus:"",
              });
            }
          });
    };
    render(){
        return(
            <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Create New Request</h1>
            <form className="needs-validation" noValidate>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="mname"
                  placeholder="Enter Name"
                  value={this.state.mname}
                  onChange={this.handleInputChange}
                />
                <span className="text-danger">{this.state.nameError}</span>
              </div>
                <br />
              <div className="form-group" style={{ marginBottom: '15px'}}>
                <label style={{ marginBottom: '5px' }}>Age</label>
                <input
                  type="text"
                  className="form-control"
                  name="age"
                  placeholder="Enter age"
                  value={this.state.age}
                  onChange={this.handleInputChange}
                  maxLength={2}
                />
              </div>
    
              <br />
              <label style={{ marginBottom: '5px' }}>Gender
          <select value={this.state.gender} onChange={this.handleChange}>
            <option name= "gender" value="select">--Select--</option>
            <option name= "gender"  value="Female">Female</option>
            <option name= "gender"  value="Male">Male</option>
            <option name= "gender"  value="Other">Prefer Not to say</option>
            
          </select>
        </label>

        <br />
        <br />
              
             {/* <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Gender</label>
                <input
                  type="text"
                  className="form-control"
                  name="gender"
                  placeholder="Enter gender"
                  value={this.state.gender}
                  onChange={this.handleInputChange}
                />
        </div> */ }
              

              {/*radio 

              <div className="radio">
          <label>
            <input
              type="radio"
              value="Male"
              checked={this.state.gender === "Male"}
              onChange={this.onValueChange}
            />
            Male
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Female"
              checked={this.state.gender === "Female"}
              onChange={this.onValueChange}
            />
            Female
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Other"
              checked={this.state.gender === "Other"}
              onChange={this.onValueChange}
            />
            Other
          </label>
        </div>
        <div>
          Selected option is : {this.state.gender}
        </div>
        */}

              {/**old */}

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
                <span className="text-danger">{this.state.emailError}</span>
              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Requirement</label>
                <input
                  type="text"
                  className="form-control"
                  name="requirement"
                  placeholder="Enter requirement"
                  value={this.state.requirement}
                  onChange={this.handleInputChange}
                />
              </div>

              {/*
              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Status</label>
                <input
                  type="text"
                  className="form-control"
                  name="rstatus"
                  placeholder="Enter rstatus"
                  value={this.state.rstatus}
                  onChange={this.handleInputChange}
                />
              </div>
              */}

<div className="radio">
<label style={{ marginBottom: '5px' }}>Status <br />
            <input
              type="radio"
              value="Pending"
              checked={this.state.rstatus === "Pending"}
              onChange={this.onValueChange}
            />
            Pending
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Accpeted"
              checked={this.state.rstatus === "Accpeted"}
              onChange={this.onValueChange}
            />
            Accepted
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Rejected"
              checked={this.state.rstatus === "Rejected"}
              onChange={this.onValueChange}
            />
            Rejected
          </label>
        </div>
        <div>
          Schedule request status is : {this.state.rstatus}
        </div>




    
              <button
                className="btn btn-success"
                type="submit"
                style={{ marginTop: '15px' }}
                onClick={this.onSubmit}>
                <i className="far fa-check-square"></i>
                &nbsp;Save
              </button>
            </form>
          </div>
        );
        
    }
        
}