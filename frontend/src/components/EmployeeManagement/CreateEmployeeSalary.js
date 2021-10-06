import React, {Component} from 'react';
import axios from 'axios';
import ImageBoxAnimation from './ImageBoxAnimated5';
import Particle from './Particles2';
import GradientButton from 'react-linear-gradient-button';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import moment from 'moment';

const Wrapper = styled.div``;

export default class CreateEmployeeSalary extends Component{
    constructor(props) {
        super(props);
        this.onChangeNICNumber = this.onChangeNICNumber.bind(this);
        this.onChangeMonth = this.onChangeMonth.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeSalaryID = this.onChangeSalaryID.bind(this);
        this.onChangeBasicSalary = this.onChangeBasicSalary.bind(this);
        this.onChangeOTHrs = this.onChangeOTHrs.bind(this);
        this.onChangeOTRate = this.onChangeOTRate.bind(this);
        this.onChangeOTTotal = this.onChangeOTTotal.bind(this);
        this.onChangeTotSalary = this.onChangeTotSalary.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            NICNumber: '',
            Month: '',
            Year: '',
            SalaryID: '',
            BasicSalary: '',
            OTHrs: '',
            OTRate: '',
            OTTotal: '',
            TotSalary: '',
            details: [],
        }
    }


    onChangeNICNumber(e) {
        this.setState({
            NICNumber: e.target.value
        });
    }

    onChangeMonth(e) {
        this.setState({
            Month: e.target.value
        });
    }
           
    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }

    onChangeSalaryID(e) {
        this.setState({
            SalaryID: e.target.value
        });
    }
  
    onChangeBasicSalary = e => {
      let BasicSalary = e.target.value;

      if (!Number(BasicSalary)) {
          return;
      }
      this.setState({
          [e.target.name]: BasicSalary
      });
  };

    onChangeOTHrs = e => {
      let OTHrs = e.target.value;

      if (!Number(OTHrs)) {
          return;
      }
      this.setState({
          [e.target.name]: OTHrs
      });
  };

    onChangeOTRate = e => {
      let OTRate = e.target.value;

      if (!Number(OTRate)) {
          return;
      }
      this.setState({
          [e.target.name]: OTRate
      });
  };

    onChangeOTTotal(e) {
        this.setState({
            OTTotal: e.target.value
        });
    }

    onChangeTotSalary(e) {
        this.setState({
            TotSalary: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        const Salary = {
            NICNumber: this.state.NICNumber,
            Month: this.state.Month,
            Year: this.state.Year,
            SalaryID: this.state.NICNumber+this.state.Month+this.state.Year,
            BasicSalary: this.state.BasicSalary,
            OTHrs: this.state.OTHrs,
            OTRate: this.state.OTRate,
            OTTotal: this.state.OTHrs * this.state.OTRate,
            TotSalary: parseFloat(this.state.BasicSalary) + parseFloat((this.state.OTHrs)*(this.state.OTRate))
        }

        axios.post('http://localhost:5000/Employee_Salary/admin/salary/add', Salary).then(()=>{
            alert("Salary assigned successfully!")
            window.location = `/admin/ViewSalaries/${moment().format('MMMM').toUpperCase()}`;
        }).catch((err)=>{
          alert("The salary for this employee has been assigned already!")
          window.location = '/admin/CreateSalary';
        })
      }

    componentDidMount() {
        this.retrieveTrainers();
      }
    
      retrieveTrainers() {
        axios.get("/trainerDetails").then((res) => {
          if (res.data.success) {
            this.setState({
              details: res.data.existingDetails,
            });
    
            console.log(this.state.details);
          }
        });

        
      }

    render(){
        return (
          <div>
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
                        <h3 style = {headingStyles}>ASSIGN TRAINER SALARIES</h3>
                        <div style = {formStyles}>
                        <div className="input-group">
                                <select  
                                    required 
                                    style = {dropdownStyles}
                                    value = {this.state.NICNumber} 
                                    onChange = {this.onChangeNICNumber}>           
                                    
                                        <option value="select">SELECT NIC NUMBER</option>
                                    {this.state.details.map((details) => (
                                        <option >{details.nic}</option>
                                    ))}
                                    </select></div>

                                    <br></br>
                                    
                                <div className = "input-group" >
                            <select 
                            style = {dropdownStyles}
                            value={this.state.Month} onChange={this.onChangeMonth} required>           
                                <option value="select">SELECT THE MONTH</option>
                                <option value="JANUARY">JANUARY</option>
                                <option value="FEBRUARY">FEBRUARY</option>
                                <option value="MARCH">MARCH</option>
                                <option value="APRIL">APRIL</option>
                                <option value="MAY">MAY</option>
                                <option value="JUNE">JUNE</option>
                                <option value="JULY">JULY</option>
                                <option value="AUGUST">AUGUST</option>
                                <option value="SEPTEMBER">SEPTEMBER</option>
                                <option value="OCTOBER">OCTOBER</option>
                                <option value="NOVEMBER">NOVEMBER</option>
                                <option value="DECEMBER">DECEMBER</option>
                            </select>
                        </div>
                        <br></br>

<div className = "input-group" >
    <select 
    style = {dropdownStyles}
     value={this.state.Year} onChange={this.onChangeYear} required>           
        <option value="select">SELECT THE YEAR</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
        <option value="2028">2028</option>
        <option value="2029">2029</option>
        <option value="2030">2030</option>
        <option value="2031">2031</option>
        <option value="2032">2032</option>
    </select>
</div>
<br></br>
                        <hr
                            style={{
                                color: 'white',
                                height: 5
                            }}
                        />
                        <br></br>
              <div className = "input-group">
                <label style = {labelStyles}> SALARY ID :  </label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type = "text"
                    required
                    className = "form-control"
                    style = {inputStyles}
                    value = {this.state.NICNumber+this.state.Month+this.state.Year}
                    onChange = {this.onChangeSalaryID} 
                  />
              </div>
              <br></br>
              <div className = "input-group">
                <label style = {labelStyles}> BASIC SALARY :</label>
                &nbsp;
                  <input
                    type = "text"
                    required
                    name = "BasicSalary"
                    className = "form-control"
                    style = {inputStyles}
                    value = {this.state.BasicSalary} 
                    onChange = {this.onChangeBasicSalary} 
                  />
              </div>
              <br></br>
              <div className = "input-group">
                <label style = {labelStyles}> OT HOURS :</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type = "text"
                    required
                    name = "OTHrs"
                    className = "form-control"
                    style = {inputStyles}
                    value = {this.state.OTHrs} 
                    onChange = {this.onChangeOTHrs} 
                  />
              </div>
              <br></br>
              <div className = "input-group">
                <label style = {labelStyles}> OT RATE :</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;
                  <input
                    type = "text"
                    required
                    name = "OTRate"
                    className = "form-control"
                    style = {inputStyles}
                    value = {this.state.OTRate} 
                    onChange = {this.onChangeOTRate} 
                  />
              </div>
              <br></br>
              <div className = "input-group">
                <label style = {labelStyles}> OT TOTAL :  </label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type = "text"
                    required
                    className = "form-control"
                    style = {inputStyles}
                    value = {this.state.OTRate * this.state.OTHrs} 
                    onChange = {this.onChangeOTTotal} 
                  />
              </div>
              <br></br>
              <div className = "input-group">
                <label style = {labelStyles}>TOTAL SALARY : </label>
                  <input
                    type = "text"
                    required
                    className = "form-control"
                    style = {inputStyles}
                    value = {parseFloat(this.state.BasicSalary) + parseFloat((this.state.OTHrs)*(this.state.OTRate))} 
                    onChange = {this.onChangeTotSalary} 
                  />
              </div>
              <br></br>
              </div>
              <br></br>
                        <div className = "input-group">
                        <GradientButton type="submit" className="CheckButton" style = {linkStyles}>
                            ASSIGN SALARY
                        </GradientButton>

                        <Link to = {`/admin/ViewSalaries/${moment().format('MMMM').toUpperCase()}`}><GradientButton className="CheckButton" style = {linkStyles2}>
                            CURRENT SALARIES
                        </GradientButton></Link>

                        <Link to = {"/admin/ViewSalaries/" }><GradientButton className="CheckButton" style = {linkStyles3}>
                           VIEW ALL SALARIES
                        </GradientButton></Link>
                        </div>
                        <br></br>
                        <br></br>
            </form>
            
                        <br></br>
            <br></br>
            </div>
            <br></br>
            
            </div>
             </div>
        )
    }
}

const dropdownStyles = {
  width: '300px',
  height: '35px',
  textAlign: 'center',
  marginLeft: '190px',
  backgroundColor: 'black',
  color: 'white'
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
  marginLeft: '90px',
  fontSize: '18px',

}

const inputStyles = {
  backgroundColor: 'black',
  border:'1px solid white',
  color: 'white',
  width: '200px',
  marginLeft: '30px',
  marginRight: '90px',
  marginTop: '-10px'
}

const linkStyles = {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    marginLeft: '300px',
    width: '200px',
    marginTop: '30px'
}

const linkStyles2 = {
  textDecoration: 'none',
  color: 'black',
  fontWeight: 'bold',
  marginLeft: '40px',
  marginTop: '30px'
}

const linkStyles3 = {
  textDecoration: 'none',
  color: 'black',
  fontWeight: 'bold',
  marginLeft: '40px',
  marginTop: '30px'
}