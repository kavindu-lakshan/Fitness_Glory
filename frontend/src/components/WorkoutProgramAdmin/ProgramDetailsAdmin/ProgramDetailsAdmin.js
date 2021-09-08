import React, { Component } from 'react'
import axios from 'axios';
import ProgramDetailsView from './ProgramDetailsView';

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
        return (
            <ProgramDetailsView
                values={this.state.program}
            />
        )
    }
}
