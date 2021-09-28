import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import Workoutprogramcard from './workoutprogram-card';

function AllprogramsMemer(props) {
        const [programs, setPrograms] = useState([]);

    useEffect(()=>{
        retrievePrograms();
      },[])

      const userLogin = useSelector((state) => state.userLogin);
      const { userInfo } = userLogin;
      console.log(userInfo)

    const filterData = (programs, searchKey) => {
        const result = programs.filter((program) =>
          program.name.toLowerCase().includes(searchKey) ||
          program.description.toLowerCase().includes(searchKey) ||
          program.conducted_by.toLowerCase().includes(searchKey) ||
          program.name.toLowerCase().includes(searchKey) ||
          program.day.toLowerCase().includes(searchKey)
        )
        setPrograms(result)
      }
      
  
      const handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value.toLowerCase();
  
          axios.get("http://localhost:5000/programs").then(res => {
              if(res.data.success){
                filterData(res.data.existingPrograms,searchKey)
              }
          })
      }

    const retrievePrograms = () =>{
        axios.get("http://localhost:5000/programs").then(res => {
            if(res.data.success){
                setPrograms(res.data.existingPrograms)
            }else {
                console.log("error retrieving from database")
            }
        })
    }

    const EnrollController = (id, programName) => {

        const myCurrentTime = new Date().toLocaleString()

        const data ={
            programName:programName,
            member_id:id,
            enroll_datetime:myCurrentTime,
            activeness:true
        }

        axios.post("http://localhost:5000/enroll-program/save",data).then((res) =>{
            if(res.data.success){
                alert('Enrolled successfully');
            }
        })
    
    }


        return (
            <div style={{  
                backgroundImage: "url(" + "https://res.cloudinary.com/fitness-glory/image/upload/v1630854420/outlook-photography-and-studio-CvvF9lPJy6U-unsplash_cmxfi8.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}>
          <div className="container">
            <div className="row">
                <div className="col-lg-9 mt-2 mb-2">
                    <h1 className="text-light">Workout Programs</h1>
                </div>
                <div className="col-lg-3 mt-2 mb-2">
                    <input className="form-control"
                    type="search"
                    placeholder="Search"
                    name="searchQuery"
                    onChange={handleSearchArea}
                    />
                </div>
                <hr/>
            </div>
            <div className="row" style={{marginTop:'30px'}} >
                {programs.map((program, index) => (
                    <div className="col-md-4 col-sm-6" key={index}>
                        <Workoutprogramcard
                            program={program}
                            EnrollController={EnrollController}
                        />
                    </div>
                ))}            
            </div>
          </div>
          </div>
        )

    
    }
    
    export default AllprogramsMemer