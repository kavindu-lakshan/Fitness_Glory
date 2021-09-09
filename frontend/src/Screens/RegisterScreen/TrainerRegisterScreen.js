import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {  useHistory } from "react-router-dom";
import { register } from "../../actions/trainerActions";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import TrainerMainScreen from "../../components/TrainerMainScreen";
import "./TrainerRegisterScreen.css";

const TrainerRegisterScreen = () => {
  const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [username,setUsername]=useState("");
    const [nic,setNic]=useState("");
    const [dob,setDob]=useState("");
    const [gender,setGender]=useState("");
    const [mobile,setMobile]=useState("");
    const [address,setAddress]=useState("");
    const [qualifications,setQualifications]=useState("");
    const [yrsexp,setYrsExp]=useState("");
    const [password,setPassword]=useState("");
    const [pic,setPic]=useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [message,setMessage]=useState("null");
    const [picMessage,setPicMessage]=useState("null");

  const dispatch = useDispatch();

  const trainerRegister = useSelector((state) => state.trainerRegister);
  const { loading, error, trainerInfo } = trainerRegister;

  const history = useHistory();

  useEffect(() => {
    if (trainerInfo) {
      history.push("/employee/trainerHome");
    }
  }, [history, trainerInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Password do not match");
    } else {
      dispatch(register(fname,lname,username,nic,dob,gender,mobile,address,qualifications,yrsexp,password,pic));
    }
  };

  const postDetails = (pics) => {
    if (!pics) {
      return setPicMessage("Please select an Image");
    }
    setPicMessage(null);
    //define image types
    if(pics.type==='image/jpeg' || pics.type==='image/png' ||pics.type==='image/jpg' ){
      const data = new FormData();
      data.append('file',pics) //cloudinary fields to save image
      data.append('upload_preset', 'trainerfg') //trainerfg is the path preset
      data.append('cloud_name', 'fitness-glory') //username of cloudinary
      fetch("https://api.cloudinary.com/v1_1/fitness-glory/image/upload",{
        method:"post",
        body:data,

      })
      .then((res)=>res.json()).then((data)=>{
        console.log(data);
        setPic(data.url.toString());
      }).catch((err)=>{
        console.log(err);
      });

    } else{  //if image is not an above mentioned types(jpeg,jpg,png)
        return setPicMessage("Please select jpg,png or jpeg type image")
    }
  };

  return (
    <TrainerMainScreen>
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
          {loading && <Loading />}
    
    <Form onSubmit={submitHandler} className="signup-form" style={{background:'transparent',boxShadow:'7px 7px 60px green', borderRadius: '10px',}}>
      <div className="form-header">
  <h1>Trainer Registration</h1>
</div>
    <div className="form-body">

  
    <div className="horizontal-group">
        <div className="form-group left">
            <label for="firstname" className="label-title">First name *</label>
            <input type="text" id="firstname" className="form-input" placeholder="enter your first name" value={fname} onChange={(e) => setFname(e.target.value)} required="required" />
        </div>
        <div className="form-group right">
            <label for="firstname" className="label-title">Last name</label>
            <input type="text" id="firstname" className="form-input" placeholder="enter your last name" value={lname} onChange={(e) => setLname(e.target.value)}/>
        </div>
        <div className="form-group left">
            <label for="username" className="label-title">Username</label>
            <input type="text" id="username" className="form-input" placeholder="enter your last name" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="form-group right">
            <label for="nic" className="label-title">NIC</label>
            <input type="text" id="nic" className="form-input" placeholder="enter your NIC" value={nic} onChange={(e) => setNic(e.target.value)}/>
        </div>
        
        <div className="form-group left">
            <label for="dob" className="label-title">Date of Birth</label>
            <input type="date" id="dob" className="form-input" placeholder="enter your birth yeear" value={dob} onChange={(e) => setDob(e.target.value)}/>
        </div>
        <div className="form-group right">
        <label className="label-title">Gender:</label>
        <div className="input-group" value={gender} onChange={(e) => setGender(e.target.value)}>
        <Form.Check
                            type="radio"
                            label="Female"
                            name="formHorizontalRadios"
                            value="Female"
                            onChange={(e) => setGender(e.target.value)}
                            style={{color:'white'}}
                          />
                          <Form.Check
                            type="radio"
                            label="Male"
                            name="formHorizontalRadios"
                            value="Male"
                            onChange={(e) => setGender(e.target.value)}
                            style={{color:'white'}}
                          />
        </div>
    </div>
    <div className="form-group right" style={{marginTop:'10px'}}>
            <label for="mobilee" className="label-title">Mobile Phone</label>
            <input type="text" id="mobile" className="form-input" placeholder="enter your mobile" value={mobile} onChange={(e) => setMobile(e.target.value)}/>
        </div>
        <div className="form-group left"   style={{marginLeft:'-1px'}}>
            <label for="address" className="label-title">Address</label>
            <input type="text" id="address" className="form-input" placeholder="enter your address" value={address} onChange={(e) => setAddress(e.target.value)}/>
        </div>
        <div className="form-group left">
            <label for="qualifications" className="label-title">Qualifications *</label>
            <input type="text" id="qualifications" className="form-input" placeholder="enter your qualifications" required="required" value={qualifications} onChange={(e) => setQualifications(e.target.value)}/>
        </div>
        <div className="form-group right">
    <label for="experience" class="label-title">Experience Years</label>
    <input type="number" min="1" max="50"  class="form-input" value={yrsexp} onChange={(e) => setYrsExp(e.target.value)}/>
  </div>
  <div className="form-group left">
    <label for="password" class="label-title">Password *</label>
    <input type="password" id="password" class="form-input" placeholder="enter your password" required="required" value={password} onChange={(e) => setPassword(e.target.value)}/>
  </div>

  <div className="form-group right">
    <label for="confirm-password" class="label-title">Confirm Password *</label>
    <input type="password" class="form-input" id="confirm-password" placeholder="enter your password again" required="required" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
  </div>
  <div className="form-group left" >
    <label for="choose-file" class="label-title">Upload Profile Picture</label>
    <input type="file" id="choose-file" size="80" onChange={(e) => postDetails(e.target.files[0])} /> 
    {/* //0 means if you select more than one image, then this will select the first image we upload */}
  </div>
 
  </div> 
 
</div>
<div class="form-footer">
  <button type="submit" class="btn">Create</button>
</div>
</Form>

</TrainerMainScreen>
  );
};

export default TrainerRegisterScreen;

//     <TrainerMainScreen title="REGISTER">
//        <div className="loginContainer">

//          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
//          {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
//          {loading && <Loading />}
        
//          <Form onSubmit={submitHandler}>

//                  <Form.Group controlId="name">
//             <Form.Label>First Name</Form.Label>
//             <Form.Control
//              type="name"
//               value={fname}
//                placeholder="Enter name"
//                onChange={(e) => setFname(e.target.value)}
//                style={{background:'transparent', border:'2px solid'}}
//             />
//            </Form.Group>
      
//            <Form.Group controlId="name">
//              <Form.Label>Last Name</Form.Label>
//              <Form.Control
//                type="name"
//                value={lname}
//                placeholder="Enter name"
//                onChange={(e) => setLname(e.target.value)}
//                style={{background:'transparent', border:'2px solid'}}
//              />
//            </Form.Group>
     
//            <Form.Group controlId="name">
//              <Form.Label>Username</Form.Label>
//              <Form.Control
//                type="name"
//                value={username}
//                placeholder="Enter name"
//                onChange={(e) => setUsername(e.target.value)}
//                style={{background:'transparent', border:'2px solid'}}
//              />
//            </Form.Group>
       
      
//            <Form.Group controlId="name">
//              <Form.Label>NIC</Form.Label>
//              <Form.Control
//                type="name"
//                value={nic}
//                placeholder="Enter name"
//               onChange={(e) => setNic(e.target.value)}
//               style={{background:'transparent', border:'2px solid'}}
//             />
//           </Form.Group>

//           <Form.Group controlId="name">
//                       <Form.Label style={{color:'whte'}}>Date of Birth</Form.Label>
//                       <hr style={{marginTop:-2}}/>
//                         <Form.Control
//                           type="date"
//                           value={dob}
//                           placeholder="Enter name"
//                           onChange={(e) => setDob(e.target.value)}
//                           style={{background:'transparent', border:'1px solid', color:'white',marginTop:-15}}
//                         />
//                       </Form.Group>
      
//           <Form.Group controlId="name">
//             <Form.Label>Gender</Form.Label>
//             <Form.Control
//               type="name"
//               value={gender}
//               placeholder="Enter name"
//               onChange={(e) => setGender(e.target.value)}
//               style={{background:'transparent', border:'2px solid'}}
//             />
//           </Form.Group>

//           <Form.Group controlId="name">
//             <Form.Label>Mobile</Form.Label>
//             <Form.Control
//               type="name"
//               value={mobile}
//               placeholder="Enter name"
//               onChange={(e) => setMobile(e.target.value)}
//               style={{background:'transparent', border:'2px solid'}}
//             />
//           </Form.Group>
       
//           <Form.Group controlId="name">
//             <Form.Label>Address</Form.Label>
//             <Form.Control
//               type="name"
//               value={address}
//               placeholder="Enter name"
//               onChange={(e) => setAddress(e.target.value)}
//               style={{background:'transparent', border:'2px solid'}}
//             />
//           </Form.Group>

//           <Form.Group controlId="name">
//             <Form.Label>Qualifications</Form.Label>
//             <Form.Control
//               type="name"
//               value={qualifications}
//               placeholder="Enter name"
//               onChange={(e) => setQualifications(e.target.value)}
//               style={{background:'transparent', border:'2px solid'}}
//             />
//           </Form.Group>

//           <Form.Group controlId="name">
//             <Form.Label>Experience Years</Form.Label>
//             <Form.Control
//               type="name"
//               value={yrsexp}
//               placeholder="Enter name"
//               onChange={(e) => setYrsExp(e.target.value)}
//               style={{background:'transparent', border:'2px solid'}}
//             />
//           </Form.Group>

//           <Form.Group controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               value={password}
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//               style={{background:'transparent', border:'2px solid'}}
//             />
//           </Form.Group>

//           <Form.Group controlId="confirmPassword">
//             <Form.Label>Confirm Password</Form.Label>
//             <Form.Control
//               type="password"
//               value={confirmPassword}
//               placeholder="Confirm Password"
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               style={{background:'transparent', border:'2px solid'}}
//             />
//           </Form.Group>

//           {picMessage &&(
//             <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
//           )}
//           <Form.Group controlId="pic">
//             <Form.Label>Profile Picture</Form.Label>
//             <Form.File
//             onChange={(e) => postDetails(e.target.files[0])} //0 means if you select more than one image, then this will select the first image we upload
//               id="custom-file"
//               type="image/png"
//               label="Upload Profile Picture"
//               custom
//             />
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Register
//           </Button>
          
//         </Form>
//         <Row className="py-3">
//           <Col>
//             Have an Account ? <Link to="/trainer-login">Login</Link>
//           </Col>
//         </Row>
        
//       </div>
//     </TrainerMainScreen> 
//   );
// };

// export default TrainerRegisterScreen;
