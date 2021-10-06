import React, { Component } from 'react';
import './ThankYou.css'

export default class ThankYou extends Component {
    render(){
        return(
            <div >
            <section class="content-item grey" id="gallery-item">
                    <div class="container">
                    <div class="row">
                        <div class="col-sm-8">
                            <img src="https://res.cloudinary.com/djg9iitcl/image/upload/v1631736949/shirtless-sportsman-posing-gym_mgwhha.jpg" class="img-responsive" alt=""></img>
                            </div>
                            <div class="col-sm-4">
                            <h2 style = {thankStyles}>THANK YOU!</h2>
                                <div class="box">
                                    The cleaner registration has been completed successfully. You can view, update or remove the details through the Employee Home.
                                </div>
                                <br></br>
                                <br></br>
                                <a style = {btnStyles} href="/admin/EmployeeHome" class="btn btn-normal scroll">BACK TO HOME</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const thankStyles = {
    color: 'white',
    marginLeft: '140px',
    marginTop: '50px'
}

const btnStyles = {
    marginLeft: '150px'
}