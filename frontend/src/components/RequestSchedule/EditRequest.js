import React, {Component} from 'react';
import axios from 'axios';

export default class EditRequest extends Component {

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
        //radio updates1
        this.onValueChange = this.onValueChange.bind(this);
        //selection update
        this.handleChange = this.handleChange.bind(this);

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

      onSubmit = (e) => {
          
        e.preventDefault();
        console.log(this.state.rstatus)

        const id = this.props.match.params.id;
    
        const {  mname, age, gender, email, requirement, rstatus } = this.state;
    
        const data = {
          mname: mname,
          age: age,
          gender: gender,
          email:email,
          requirement:requirement,
          rstatus:rstatus,
        };
    
        console.log(data);

        axios.put(`http://localhost:5000/Xpost/update/${id}`, data).then((res) => {
            if (res.data.success) {
                alert("Post updated succesfully");
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



    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:5000/Xpost/${id}`).then((res)=> {
            if(res.data.success){
                this.setState({
                    mname:res.data.post.mname,
                    age:res.data.post.age,
                    email:res.data.post.email,
                    gender:res.data.post.gender,
                    requirement:res.data.post.requirement,
                    rstatus:res.data.post.rstatus

                });
                console.log(this.state.post);
            }
        });
    }



    render(){
        return(
             //background image
      <div
      className="mainback"
     style={{
       backgroundImage:
         "url(" +
         "https://res.cloudinary.com/dxnsjtp5n/image/upload/v1631515040/anastase-maragos-4dlhin0ghOk-unsplash_bftjmc.jpg" +
         ")",
     //  backgroundPosition: "center",
      backgroundSize: "cover",
       backgroundRepeat: "no-repeat",
     }} >
            <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal" style={{color:'white'}}>Edit request</h1>
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
                  disabled={true}
                />
              </div>

              <br />
    
              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Age</label>
                <input
                  type="text" 
                  className="form-control"
                  name="age"
                  placeholder="Enter age"
                  value={this.state.age}
                  onChange={this.handleInputChange}
                  disabled={true}
                />
              </div>
    
             { /*
              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Gender </label>
                <input
                  type="text" 
                  className="form-control"
                  name="gender"
                  placeholder="Enter gender "
                  value={this.state.gender}
                  onChange={this.handleInputChange}
                />
              </div>
             */}
             <br />
              <label style={{ marginBottom: '5px' }}>Gender
          <select value={this.state.gender} onChange={this.handleChange}>
            <option name= "gender" value="Male">Male</option>
            <option name= "gender"  value="Female">Female</option>
            <option name= "gender"  value="Other">Prefer Not to say</option>
            
          </select>
        </label>

        <br />
        <br />

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Email</label>
                <input
                  type="text" 
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  disabled={true}
                />
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
                  disabled={true}
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
                onClick={this.onSubmit}
              >
                <i className="far fa-check-square"></i>
                &nbsp;Update
              </button>
            </form>
          </div> 
          </div>
        )
        
    }
        
}