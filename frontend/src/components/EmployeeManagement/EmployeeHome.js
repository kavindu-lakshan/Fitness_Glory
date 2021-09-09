import React, {useState, useEffect} from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import GradientButton from 'react-linear-gradient-button';

export default function EmployeeHome(props){
    var items = [
        {
            img: "https://res.cloudinary.com/djg9iitcl/image/upload/v1631102078/Slide1_itcr0t.jpg",
            name: "REGISTER NEW EMPLOYEES",
            description: "The web based online registration system for the employees at Fitness Glory. Here you are eligible to maintain a list of everyone who works at Fitness Glory Gymnasium. Register the cleaners and trainers here and the registration information is only accessible by the system admin.",
            btnlink: "/admin/RegisterMenu"
        },
        {
            img: "https://res.cloudinary.com/djg9iitcl/image/upload/v1631102075/Slide2_kstbbs.jpg",
            name: "VIEW CURRENT EMPLOYEES",
            description: "You can view the current information of the employees at Fitness Glory. The employees are categorized into cleaners and trainers. Please note that the information can only be viewed here and changes or any updates to the information cannot be done here. If required, navigate to update information page.",
            btnlink: "/DesignFade"
        },
        {
            img: "https://res.cloudinary.com/djg9iitcl/image/upload/v1631102458/woman-gym-body-building_ddfg1z.jpg",
            name: "UPDATE EMPLOYEE DETAILS",
            description: "The updating of employees is limited to cleaner information as the trainers have their own priviledges to access their account and edit their information at anytime. As the cleaners do not have access to the system, the system admin is entitled to maintain their profiles, on behalf of them.",
            btnlink: "/EditCleanerInterface"
        },
        {
            img: "https://res.cloudinary.com/djg9iitcl/image/upload/v1631102139/Slide4_vvdajv.jpg",
            name: "REMOVE CURRENT EMPLOYEES",
            description: "Employees can be removed from the system with the permission of the gym owner only. Therefore, the reason for the dismissal has to be entered and permission will only be granted if the owner has approved the dismissal of the particular employee. Only the system admin and gym owner have access.",
            btnlink: "/DeleteCleanerInterface"
        },
        {
            img: "https://res.cloudinary.com/djg9iitcl/image/upload/v1631102058/Card9_claleu.jpg",
            name: "MANAGE EMPLOYEE SALARY",
            description: "The employee salary can be managed here. The system admin is priviledged to access this interface and do any modifications in regard to employee salaries which includes the cleaners' and trainers' salaries. A report based on the monthly salary distribution, for reviewing will be generated for the gym owner.",
            btnlink: `/leave/Pending`
        },
        {
            img: "https://res.cloudinary.com/djg9iitcl/image/upload/v1631103208/sule-makaroglu-8opGXsff3uc-unsplash_ihi4tt.jpg",
            name: "MANAGE EMPLOYEE LEAVES",
            description: "Trainers can apply for leaves for a particular number of times each month and these requests will either be approved or declined according to the trainer's schedule and the number of leaves the trainer had already taken out in that month. This does not apply for the cleaners at the gym.",
            btnlink: "/Leaves"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
       
        <Paper style = {carouselStyles}> <hr/>
            <img src = {props.item.img} style = {imageStyles}></img>
            <h2 style = {headingStyles}>{props.item.name}</h2>
            <p style = {paraStyles}>{props.item.description}</p>

            <GradientButton className="CheckButton" style = {btnStyles}>
               <a href={props.item.btnlink} style = {linkStyles}> VIEW MORE </a>
            </GradientButton>
        </Paper>
    )
}

const imageStyles = {
    marginLeft: '605px',
    height: '480px',
    width: '715px',
    marginTop: '-7px'
}

const carouselStyles = {
    marginTop: '0px',
    height: '500px',
    backgroundColor: 'black'
}

const headingStyles = {
    color: 'white',
    marginTop: '-400px',
    fontSize: '27px',
    marginLeft: '65px'
}

const paraStyles = {
    width: '400px',
    color: 'white',
    textAlign: 'justify',
    marginTop: '40px',
    marginLeft: '90px',
    textStyles: 'none'
}

const btnStyles = {
    marginLeft: '190px',
    marginTop: '30px',
    fontWeight: 'bold',
    fontSize: '16px',
    padding: '5px',
    textDecoration: 'none',
    width: '200px',
    animation: 'glowing 1300ms infinite',
    background: 'linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)'
}

const linkStyles = {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold'
}