import React, { Component } from 'react'
import axios from 'axios';

export default class ProgramDetailsAdmin extends Component {
    constructor(props){
        super(props);

        this.state={
            program:{}
        }
    }

    componentDidMount(){
        const url = 'http://localhost:5000/program/' + this.props.match.params.id;
 
         axios.get(url).then((res) => {
            if(res.data.success){
                    this.setState({
                        program: res.data.program
                    })
                } else {
                    console.log("error retrieving from database")
                }
            })
     }

     render() {

        const {name, description, conducted_by, fee, day, time } = this.state.program;

        return (
            <div style={{marginTop:'20px'}} className="container">
                <h4>{name}</h4>
                <hr/>
                <d1 className="row">
                <dt className="col-sm-3">Description</dt>
                <dd className="col-sm-9">{description}</dd>

                <dt className="col-sm-3">Conducted by</dt>
                <dd className="col-sm-9">{conducted_by}</dd>

                <dt className="col-sm-3">Monthly fee</dt>
                <dd className="col-sm-9">{fee}</dd>

                <dt className="col-sm-3">Weekly on</dt>
                <dd className="col-sm-9">{day}</dd>

                <dt className="col-sm-3">Time Duration</dt>
                <dd className="col-sm-9">{time}</dd>
                
                </d1>
            </div>
        )
    }
}
