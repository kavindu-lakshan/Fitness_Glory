import React,{useState, useEffect} from 'react';

import { Button,TextField,classes,Radio, FormLabel, RadioGroup, FormControl,FormControlLabel } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import { Form } from 'react-bootstrap';
import axios from "axios";
import '../StylesA/Events.css';



export default function AddInterest(){

       const [interests, setInterests] = useState([]);

      useEffect(()=>{
          function getInterests(){
              axios.get("http://localhost:5000/event-interest/allInterests")
              .then((res)=>{
                  
                  setInterests(res.data);
              }).catch((err)=>{
                  alert(err.message);
              })
          }
          getInterests();
      }, [])
    
  const [eventName, setEventName]= useState("");
  const [memName, setMemName]= useState("");
  const [interestStatus, setInterestStatus]= useState("");

  function sendData(e){
    e.preventDefault();
    const newInterest={
      eventName,
      memName,
      interestStatus,
    }
    axios.post("http://localhost:5000/event-interest/addInterest",newInterest).then(()=>{
      alert("You are Interested to this Event :)")
    }).catch((err)=>{
      alert(err)
    })
  }

    // const [events, setEvents] = useState([]);

    // useEffect(()=>{
    //     function getEvents(){
    //         axios.get("http://localhost:5000/event/allevents")
    //         .then((res)=>{
                
    //             setEvents(res.data);
    //         }).catch((err)=>{
    //             alert(err.message);
    //         })
    //     }
    //     getEvents();
    // }, [])
    const[events, setEvents]= useState([]);
    const[search, setSearchTerm]= useState("");

    useEffect(()=>{
        const displayEvents = async() =>{
            const events = await displayEvents()
            setEvents(events)
        }
        displayEvents()
    }, [])
    return (
        <div><br/><br/><br/><br/><br/><br/><br/>
         <div className = "Row">
                    <div className = "col-lg-3 mt-2 mb-2">
                        <div>
                            <input className = "form-control" type = "text" placeholder="Search" 
                                onChange={(e)=>{
                                    setSearchTerm(e.target.value);
                                }}
                                style = {searchStyles}
                            />
                        </div>
                    </div>
                </div>
                <br></br>
                {
                events.filter((row)=>{
                    if(search == ""){
                        return row
                    }else if(row.eventName.toLowerCase().includes(search.toLowerCase())){
                        return row
                    }
                }).map((row)=>(
                <td>
                    {row.title}
                </td>
                  
                ))
              }
      <div className="form1">
        
      {/* {
            interests.map((row)=>(
              
               <p>{row.eventName}</p>
                                    
              ))
     } */}

            <Form onSubmit={sendData}>
            {/* <Form.Group controlId="name">
                      <Form.Label style={{color:'white'}}>Gender</Form.Label>
                      <hr style={{marginTop:-2}}/>
                        <Form.Control
                          type="name"
                          value={gender}
                          placeholder="Enter name"
                          onChange={(e) => setGender(e.target.value)}
                          style={{background:'transparent', border:'1px solid', color:'white'}}
                          disabled
                        />
             */}
           
              <select > 
              {
                events.map((row)=>(      
                  <td style={{textAlign:'center'}}>
                  {row.title}
              </td>
                ))
              }
                </select>
              
                
              
                
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Interested Event Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Event Name" 
                onChange={(e)=>{
                  setEventName(e.target.value);
                }}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Enter your Name</Form.Label>
              <Form.Control type="text" placeholder="Event Title" 
              onChange={(e)=>{
                setMemName(e.target.value);
              }}/>
            </Form.Group>
          

            <FormControl component="fieldset">
              <FormLabel component="legend">Status</FormLabel>
              <RadioGroup aria-label="gender" name="gender1"   onChange={(e)=>{
                  setInterestStatus(e.target.value);
                }}>
                <FormControlLabel style={{color:'black'}} value="Interested" control={<Radio />} label="Female" />
                <FormControlLabel style={{color:'black'}} value="Not Interested" control={<Radio />} label="Male" />
                <FormControlLabel style={{color:'black'}} value="Going" control={<Radio />} label="Both" />
                <FormControlLabel style={{color:'black'}} value="Not Going" control={<Radio />} label="Both" />
              </RadioGroup>
            </FormControl>
        
            <Button className="button" variant="secondary" type="submit">
              Submit
           
            </Button>
          </Form>
          </div>
      
         {/* <form noValidate>
  <TextField
    id="datetime-local"
    label="Next appointment"
    type="datetime-local"
    defaultValue="2021-05-24T10:30"
   
    InputLabelProps={{
      shrink: true,
    }}
  />
</form>*/} 

        
        
        </div>
    );
}

const searchStyles = {
  marginTop: '-45px',
  marginLeft: '510px'
}
