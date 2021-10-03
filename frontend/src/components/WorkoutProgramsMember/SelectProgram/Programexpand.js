import React, { Component } from 'react'
import axios from 'axios';
import Programexpandview from './Programexpandview.js';

export default class Programexpand extends Component {
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
            <div style={{  
                backgroundImage: "url(" + "https://res.cloudinary.com/fitness-glory/image/upload/v1630854420/outlook-photography-and-studio-CvvF9lPJy6U-unsplash_cmxfi8.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }} className="py-5 px-5">
            <Programexpandview
                values={this.state.program}
            />
            </div>
        )
    }
}
