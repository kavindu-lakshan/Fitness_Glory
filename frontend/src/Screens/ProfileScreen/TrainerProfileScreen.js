import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../actions/trainerActions";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import TrainerMainScreen from "../../components/TrainerMainScreen";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import "./TrainerProfileScreen.css";
const TrainerProfileScreen = ({ location, history }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [yrsexp, setYrsExp] = useState("");
  const [pic, setPic] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [picMessage, setPicMessage] = useState();

  const dispatch = useDispatch();

  const trainerLogin = useSelector((state) => state.trainerLogin);
  const { trainerInfo } = trainerLogin;

  const trainerUpdate = useSelector((state) => state.trainerUpdate);

  const { loading, error, success } = trainerUpdate;

  useEffect(() => {
    if (!trainerInfo) {
    } else {
      setFname(trainerInfo.fname);
      setLname(trainerInfo.lname);
      setUsername(trainerInfo.username);
      setNic(trainerInfo.nic);
      setDob(trainerInfo.dob);
      setGender(trainerInfo.gender);
      setMobile(trainerInfo.mobile);
      setAddress(trainerInfo.address);
      setQualifications(trainerInfo.qualifications);
      setYrsExp(trainerInfo.yrsexp);
      setPic(trainerInfo.pic);
    }
  }, [history, trainerInfo]);

  const postDetails = (pics) => {
    if (!pics) {
      return setPicMessage("Please select an Image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics); //cloudinary fields to save image
      data.append("upload_preset", "trainerfg"); //trainerfg is the path preset
      data.append("cloud_name", "fitness-glory"); //username of cloudinary
      fetch("https://api.cloudinary.com/v1_1/fitness-glory/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert("Your Account Updated Successfuly!");
    dispatch(
      updateProfile({
        fname,
        lname,
        username,
        nic,
        dob,
        gender,
        mobile,
        address,
        qualifications,
        yrsexp,
        password,
        pic,
      })
    );
  };

  return (
    //     <TrainerMainScreen><br/><br/>
    //     <div class="container">

    // <div class="row gutters">
    // 	<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
    // 		<div class="card h-100" style={{background:'transparent',boxShadow:'0 0 5px 5px green', borderRadius: '10px',color:'white'}}>
    // 			<div class="card-body">
    // 				<div class="account-settings">
    // 					<div class="user-profile"><br/><br/>
    // 						<div class="user-avatar">
    // 							<img src={pic} alt="Maxwell Admin"/>
    // 						</div>
    // 						<h5 class="user-name">{fname} {lname}</h5>
    // 						<h6 class="user-username">@{username}</h6>
    // 					</div><hr/>
    // 					<div class="about">
    // 						<h5  style={{color:'white'}}>About</h5><hr/><br/>
    // 						<p>NIC Number : {nic} </p>
    //             <p>Date of Birth : {dob} </p>
    //             <p>Gender : {gender} </p>
    //             <p>Address : {address} </p>
    //             <p>Qualifications : {qualifications} </p>
    //             <p>Experience Years : {yrsexp} </p>
    // 					</div>
    // 				</div>
    // 			</div>
    // 		</div>
    // 	</div>

    // 	<div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12" >
    // 		<div class="card h-100" style={{background:'transparent',boxShadow:'0 0 5px 5px green', borderRadius: '10px',}}>
    // 			<div class="card-body">
    //       <Form onSubmit={submitHandler}>
    //                {loading && <Loading />}
    //               {success && (
    //                  <ErrorMessage variant="success">
    //                    Updated Successfully
    //                  </ErrorMessage>
    //                )}

    //                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
    // 				<div class="row gutters" >
    // 					<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><br/>
    // 						<h6 style={{color:'white'}}>Personal Details</h6><hr/>
    // 					</div>
    // 					<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">

    // 						<div class="form-group">
    // 							<label for="firstname" className="label-title">First name *</label>
    //             <input type="text" id="firstname" className="form-control" placeholder="enter your first name" value={fname} onChange={(e) => setFname(e.target.value)} required="required" />
    // 						</div>
    // 					</div>
    // 					<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
    // 						<div class="form-group">
    //             <label for="lastname" className="label-title">Last name</label>
    //             <input type="text" id="lastname" className="form-control" placeholder="enter your last name" value={lname} onChange={(e) => setLname(e.target.value)}/>
    // 						</div>
    // 					</div>
    // 					<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
    // 						<div class="form-group">
    // 						<label for="username" className="label-title">Username</label>
    //             <input type="text" id="username" className="form-control" placeholder="enter your last name" value={username} onChange={(e) => setUsername(e.target.value)}/>
    // 						</div>
    // 					</div>
    // 					<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
    // 						<div class="form-group">
    //             <label for="nic" className="label-title">NIC</label>
    //             <input type="text" id="nic" className="form-control" placeholder="enter your NIC" value={nic} onChange={(e) => setNic(e.target.value)}/>
    // 						</div>
    // 					</div>
    //           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
    // 						<div class="form-group">
    //             <label for="dob" className="label-title">Date of Birth</label>
    //             <input type="date" id="dob" className="form-control" placeholder="enter your birth year" value={dob} onChange={(e) => setDob(e.target.value)}/>
    // 						</div>
    // 					</div>
    //           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
    // 						<div class="form-group">
    //             <label for="gender" className="label-title">Gender</label>
    //             <input  style={{background:'#1A233A'}} type="text" id="gender" className="form-control" placeholder="enter your gender" value={gender} onChange={(e) => setGender(e.target.value)} disabled/>
    // 						<Form.Check
    //                             type="radio"
    //                             label="Female"
    //                             name="formHorizontalRadios"
    //                             value="Female"
    //                             onChange={(e) => setGender(e.target.value)}
    //                             style={{color:'white'}}
    //                           />
    //                           <Form.Check
    //                             type="radio"
    //                             label="Male"
    //                             name="formHorizontalRadios"
    //                             value="Male"
    //                             onChange={(e) => setGender(e.target.value)}
    //                             style={{color:'white'}}
    //                           />
    //             </div>
    // 					</div>
    // 				</div>
    // 				<div class="row gutters">
    // 					<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
    // 						<h6 style={{color:'white'}}>Additional Details</h6><hr/>
    // 					</div>
    // 					<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
    // 						<div class="form-group">
    //             <label for="mobilee" className="label-title">Mobile Phone</label>
    //             <input type="text" id="mobile" className="form-control" placeholder="enter your mobile" value={mobile} onChange={(e) => setMobile(e.target.value)}/>
    // 						</div>
    // 					</div>
    // 					<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
    // 						<div class="form-group">
    //             <label for="address" className="label-title">Address</label>
    //             <input type="text" id="address" className="form-control" placeholder="enter your address" value={address} onChange={(e) => setAddress(e.target.value)}/>
    // 						</div>
    // 					</div>
    // 					<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
    // 						<div class="form-group">
    //             <label for="qualifications" className="label-title">Qualifications *</label>
    //             <input type="text" id="qualifications" className="form-control" placeholder="enter your qualifications" required="required" value={qualifications} onChange={(e) => setQualifications(e.target.value)}/>
    // 						</div>
    // 					</div>
    // 					<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
    // 						<div class="form-group">
    //             <label for="experience" class="label-title">Experience Years</label>
    //             <input type="number" min="1" max="50"  class="form-control" value={yrsexp} onChange={(e) => setYrsExp(e.target.value)}/>
    // 						</div>
    // 					</div>
    //           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
    // 						<div class="form-group">
    //             <label for="password" class="label-title">Password *</label>
    //     <input type="password" id="password" class="form-control" placeholder="enter your password" required="required" value={password} onChange={(e) => setPassword(e.target.value)}/>
    // 						</div>
    // 					</div>
    //           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
    // 						<div class="form-group">
    //               <label for="confirm-password" class="label-title">Confirm Password *</label>
    //               <input type="password" class="form-control" id="confirm-password" placeholder="enter your password again" required="required" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
    // 						</div>
    // 					</div>
    //           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
    // 						<div class="form-group">
    //             <label for="choose-file" class="label-title">Upload Profile Picture</label>
    //     <input type="file" id="choose-file" size="80" onChange={(e) => postDetails(e.target.files[0])} />
    //     {/* //0 means if you select more than one image, then this will select the first image we upload */}
    // 						</div>
    // 					</div>
    // 				</div>
    // 				<div class="row gutters">
    // 					<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
    // 						<div class="text-right">
    // 							<button type="button" id="submit" name="submit" class="btn btn-secondary">Cancel</button>
    // 							<button type="button" id="submit" name="submit" class="btn btn-primary">Update</button>
    // 						</div>
    // 					</div>
    // 				</div></Form>
    // 			</div>
    // 		</div>
    // 	</div>
    // </div>
    // </div><br/><br/>
    // </TrainerMainScreen>

    <div style={bgProf}>
      {/* <div class="row gutters">
 	<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
 		<div class="card h-100" style={{background:'transparent',boxShadow:'0 0 5px 5px green', borderRadius: '10px',color:'white'}}>
 			<div class="card-body">
 				<div class="account-settings">
 					<div class="user-profile"><br/><br/>
 						<div class="user-avatar">
							<img src={pic} alt="Maxwell Admin"/>
 						</div>
 						<h5 class="user-name">{fname} {lname}</h5>
 						<h6 class="user-username">@{username}</h6>
 					</div><hr/>
 					<div class="about">
 						<h5  style={{color:'white'}}>About</h5><hr/><br/>
 						<p>NIC Number : {nic} </p>
             <p>Date of Birth : {dob} </p>
             <p>Gender : {gender} </p>
          <p>Address : {address} </p>
             <p>Qualifications : {qualifications} </p>
             <p>Experience Years : {yrsexp} </p>
 					</div>
 				</div>
 			</div>
 		</div>
 	</div>
</div>
<div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12" >
 		<div class="card h-100" style={{background:'transparent',boxShadow:'0 0 5px 5px green', borderRadius: '10px',padding:'20px',width:'400px'}}>
 			<div class="card-body">

            <Form onSubmit={submitHandler}>
              {loading && <Loading />}
              {success && (
                <ErrorMessage variant="success">
                  Updated Successfully
                </ErrorMessage>
              )}

              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
             
                    <Form.Group controlId="name">
                      <Form.Label style={{color:'white'}}>First Name</Form.Label>
                      <hr style={{marginTop:-2}}/>
                        <Form.Control
                          type="name"
                          value={fname}
                          
                          onChange={(e) => setFname(e.target.value)}
                          style={{background:'transparent', border:'1px solid', color:'white'}}
                        />
                    </Form.Group>
                
                    <Form.Group controlId="name" style={{marginLeft:'20px'}}>
                      <Form.Label style={{color:'white'}}>Last Name</Form.Label>
                      <hr style={{marginTop:-2}}/>
                        <Form.Control
                          type="name"
                          value={lname}
                        
                          onChange={(e) => setLname(e.target.value)}
                          style={{background:'transparent', border:'1px solid', color:'white'}}
                        />
                    </Form.Group><br/>
             
                    <Form.Group controlId="name">
                      <Form.Label style={{color:'white'}}>Username</Form.Label>
                      <hr style={{marginTop:-2}}/>
                        <Form.Control
                          type="name"
                          value={username}
                    
                          onChange={(e) => setUsername(e.target.value)}
                          style={{background:'transparent', border:'1px solid', color:'white'}}
                        />
                    </Form.Group>
              
                    <Form.Group controlId="name" style={{marginLeft:'20px'}}>
                      <Form.Label style={{color:'white'}}>NIC</Form.Label>
                      <hr style={{marginTop:-2}}/>
                        <Form.Control
                          type="name"
                          value={nic}
                         
                          onChange={(e) => setNic(e.target.value)}
                          style={{background:'transparent', border:'1px solid', color:'white'}}
                        />
                    </Form.Group>
               <br/>

               
                 
                    <Form.Group controlId="name">
                      <Form.Label style={{color:'white'}}>Date of Birth</Form.Label>
                      <hr style={{marginTop:-2}}/>
                        <Form.Control
                          type="date"
                          value={dob}
                          
                          onChange={(e) => setDob(e.target.value)}
                          style={{background:'transparent', border:'1px solid', color:'white'}}
                        />
                      </Form.Group>
              

                    <Form.Group controlId="name" style={{marginLeft:'135px'}}>
                      <Form.Label style={{color:'white'}}>Mobile</Form.Label>
                      <hr style={{marginTop:-2}}/>
                        <Form.Control
                          type="name"
                          value={mobile}
                   
                          onChange={(e) => setMobile(e.target.value)}
                          style={{background:'transparent', border:'1px solid', color:'white'}}
                        />
                    </Form.Group>
                  <br/>
          
                
                    <Form.Group controlId="name">
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
                    </Form.Group>

                    <Form.Group controlId="name">
                      <Form.Label style={{color:'white'}}>Address</Form.Label>
                      <hr style={{marginTop:-2}}/>
                        <Form.Control
                          type="name"
                          value={address}
                       
                          onChange={(e) => setAddress(e.target.value)}
                          style={{background:'transparent', border:'1px solid', color:'white'}}
                        />
                    </Form.Group><br/>

             
                    <Form.Group controlId="name">
                      <Form.Label style={{color:'white'}}>Qualifications</Form.Label>
                      <hr style={{marginTop:-2}}/>
                        <Form.Control
                          type="name"
                          value={qualifications}
                         
                          onChange={(e) => setQualifications(e.target.value)}
                          style={{background:'transparent', border:'1px solid',width:'430px', color:'white'}}
                        />
                    </Form.Group>
                 
                    <Form.Group controlId="name" style={{marginLeft:'10px'}}>
                      <Form.Label style={{color:'white'}}>Experience Years</Form.Label>
                      <hr style={{marginTop:-2}}/>
                        <Form.Control
                          type="number"
                          value={yrsexp}
                         
                          onChange={(e) => setYrsExp(e.target.value)}
                          style={{background:'transparent', border:'1px solid',maxWidth:'100px', color:'white'}}
                        />
                    </Form.Group>
                 <br/>

              
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label style={{color:'white'}}>Password</Form.Label>
                      <hr style={{marginTop:-2}}/>
                        <Form.Control
                          type="password"
                          value={password}
                         
                          onChange={(e) => setPassword(e.target.value)}
                          style={{background:'transparent', border:'1px solid', color:'white'}}
                        />
                    </Form.Group>
                
                    <Form.Group controlId="confirmPassword" style={{marginLeft:'20px'}}>
                      <Form.Label style={{color:'white'}}>Confirm Password</Form.Label>
                      <hr style={{marginTop:-2}}/>
                        <Form.Control
                          type="password"
                          value={confirmPassword}
                          
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          style={{background:'transparent', border:'1px solid', color:'white'}}
                        />
                    </Form.Group>
                  <br/>

              {picMessage &&(
                <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
              )}

                    <Form.Group controlId="pic" > */}
      {/* <Form.Label style={{width:'200px'}}>Profile Picture</Form.Label> */}
      {/* <Form.File style={{width:'300px'}}
                        onChange={(e) => postDetails(e.target.files[0])} //0 means if you select more than one image, then this will select the first image we upload
                          id="custom-file"
                          type="image/png"
                          label="Upload Profile Picture"
                          custom
                          style={{color:'white'}}
                        />
                    </Form.Group><br/>

                    <Button type="submit" varient="primary" style={{width:'200px', color:'black', background:'red'}}>
                      Update Profile
                    </Button>
            
            </Form></div></div></div>
         
         
       */}
      <br />
      <br />
      <div class="container">
        <div class="row gutters">
          <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div
              class="card h-100"
              style={{
                background: "transparent",
                boxShadow: "7px 7px 60px #D3D3D3",
                borderRadius: "50px",
              }}
            >
              <div class="card-body">
                <div class="account-settings">
                  <div class="user-profile">
                    <div class="user-avatar">
                      <br />
                      <br />
                      <img
                        src={pic}
                        alt="Maxwell Admin"
                        style={{ border: "3px solid #D3D3D3" }}
                      />
                    </div>
                    <h5 class="user-name" style={{ color: "#bcd0f7" }}>
                      {fname} {lname}
                    </h5>
                    <h6 class="user-email" style={{ color: "#bcd0f7" }}>
                      @{username}
                    </h6>
                  </div>
                  <div class="about" style={{ color: "#bcd0f7" }}>
                    <h5 style={{ color: "#D3D3D3" }}>About</h5>
                    <hr />
                    <br />
                    <p style={{ color: "#D3D3D3" }}>NIC Number : {nic} </p>
                    <p style={{ color: "#D3D3D3" }}>Date of Birth : {dob} </p>
                    <p style={{ color: "#D3D3D3" }}>Gender : {gender} </p>
                    <p style={{ color: "#D3D3D3" }}>Address : {address} </p>
                    <p style={{ color: "#D3D3D3" }}>
                      Qualifications : {qualifications}{" "}
                    </p>
                    <p style={{ color: "#D3D3D3" }}>
                      Experience Years : {yrsexp}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div
              class="card h-100"
              style={{
                background: "transparent",
                boxShadow: "7px 7px 60px #D3D3D3",
                borderRadius: "50px",
              }}
            >
              <Form onSubmit={submitHandler}>
                {loading && <Loading />}
                {success && (
                  <ErrorMessage variant="success">
                    Updated Successfully
                  </ErrorMessage>
                )}
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                <div class="card-body">
                  <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <br />
                      <br />
                      <center>
                        <h6
                          style={{
                            color: "white",
                            fontSize: "15px",
                            marginLeft: "10px",
                          }}
                        >
                          Main Details
                        </h6>
                        <hr style={{ color: "white" }} />
                      </center>
                    </div>

                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="fullName" style={{ color: "#bcd0f7" }}>
                          First Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="fullName"
                          placeholder="Enter full name"
                          value={fname}
                          onChange={(e) => setFname(e.target.value)}
                          style={{
                            color: "white",
                            background: "transparent",
                            boxShadow: "7px 7px 20px black",
                          }}
                          required="required"
                        />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="fullName" style={{ color: "#bcd0f7" }}>
                          Last Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="fullName"
                          placeholder="Enter full name"
                          value={lname}
                          onChange={(e) => setLname(e.target.value)}
                          style={{
                            color: "white",
                            background: "transparent",
                            boxShadow: "7px 7px 20px black",
                          }}
                          required="required"
                        />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="eMail" style={{ color: "#bcd0f7" }}>
                          Username
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="eMail"
                          placeholder="Enter email ID"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          style={{
                            color: "white",
                            background: "transparent",
                            boxShadow: "7px 7px 20px black",
                          }}
                          required="required"
                        />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="phone" style={{ color: "#bcd0f7" }}>
                          NIC
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="phone"
                          placeholder="Enter phone number"
                          value={nic}
                          onChange={(e) => setNic(e.target.value)}
                          style={{
                            color: "white",
                            background: "transparent",
                            boxShadow: "7px 7px 20px black",
                          }}
                          required="required"
                        />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="website" style={{ color: "#bcd0f7" }}>
                          DOB
                        </label>
                        <input
                          type="date"
                          class="form-control"
                          id="website"
                          placeholder="Date of Birth"
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                          style={{
                            color: "white",
                            background: "transparent",
                            boxShadow: "7px 7px 20px black",
                          }}
                          required="required"
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <center>
                        <h6
                          style={{
                            color: "white",
                            fontSize: "15px",
                            marginLeft: "10px",
                          }}
                        >
                          Sub Details
                        </h6>
                        <hr style={{ color: "white" }} />
                      </center>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="Street" style={{ color: "#bcd0f7" }}>
                          Qualifications
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="Street"
                          placeholder="Enter Street"
                          value={qualifications}
                          onChange={(e) => setQualifications(e.target.value)}
                          style={{
                            color: "white",
                            background: "transparent",
                            boxShadow: "7px 7px 20px black",
                          }}
                          required="required"
                        />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="ciTy" style={{ color: "#bcd0f7" }}>
                          Experience Years
                        </label>
                        <input
                          type="number"
                          class="form-control"
                          id="ciTy"
                          placeholder="Enter City"
                          value={yrsexp}
                          onChange={(e) => setYrsExp(e.target.value)}
                          style={{
                            color: "white",
                            background: "transparent",
                            boxShadow: "7px 7px 20px black",
                          }}
                          required="required"
                        />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="sTate" style={{ color: "#bcd0f7" }}>
                          Mobile Number
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="sTate"
                          placeholder="Enter State"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          style={{
                            color: "white",
                            background: "transparent",
                            boxShadow: "7px 7px 20px black",
                          }}
                          required="required"
                        />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <Form.Group controlId="name">
                          <Form.Label style={{ color: "#bcd0f7" }}>
                            Gender
                          </Form.Label>
                          <hr style={{ marginTop: -2 }} />
                          <Form.Control
                            type="name"
                            value={gender}
                            placeholder="Enter name"
                            onChange={(e) => setGender(e.target.value)}
                            style={{
                              background: "transparent",
                              boxShadow: "7px 7px 20px black",
                              color: "white",
                            }}
                            disabled
                            required="required"
                          />
                          <Form.Check
                            type="radio"
                            label="Female"
                            name="formHorizontalRadios"
                            value="Female"
                            onChange={(e) => setGender(e.target.value)}
                            style={{ color: "white" }}
                          />
                          <Form.Check
                            type="radio"
                            label="Male"
                            name="formHorizontalRadios"
                            value="Male"
                            onChange={(e) => setGender(e.target.value)}
                            style={{ color: "white" }}
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="sTate" style={{ color: "#bcd0f7" }}>
                          Password
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="sTate"
                          placeholder="Enter Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          style={{
                            color: "white",
                            background: "transparent",
                            boxShadow: "7px 7px 20px black",
                          }}
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="sTate" style={{ color: "#bcd0f7" }}>
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="sTate"
                          placeholder="Enter Password again"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          style={{
                            color: "white",
                            background: "transparent",
                            boxShadow: "7px 7px 20px black",
                          }}
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        {picMessage && (
                          <ErrorMessage variant="danger">
                            {picMessage}
                          </ErrorMessage>
                        )}

                        <Form.Group controlId="pic">
                          <Form.Label style={{ width: "200px" }}>
                            Profile Picture
                          </Form.Label>
                          <Form.File
                            style={{ width: "300px" }}
                            onChange={(e) => postDetails(e.target.files[0])} //0 means if you select more than one image, then this will select the first image we upload
                            id="custom-file"
                            type="image/png"
                            label="Upload Profile Picture"
                            custom
                            style={{ color: "white" }}
                            style={{
                              color: "white",
                              background: "transparent",
                              boxShadow: "7px 7px 20px black",
                            }}
                          />
                        </Form.Group>
                        <br />
                      </div>
                    </div>
                  </div>
                  <center>
                    <div class="row gutters">
                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="text-right">
                          <button
                            type="button"
                            id="submit"
                            name="submit"
                            class="btn btn-secondary"
                          >
                            Cancel
                          </button>
                          &nbsp;&nbsp;&nbsp;
                          <button
                            type="submit"
                            id="submit"
                            name="submit"
                            class="btn btn-primary"
                            style={{ background: "red" }}
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </center>
                </div>
              </Form>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>{" "}
      <br />
      <br />
    </div>
  );
};

export default TrainerProfileScreen;

const bgProf = {
  // background:`url("https://res.cloudinary.com/fitness-glory/image/upload/v1631593901/young-woman-drinking-water-gym-exercise-concept_fomgjh.jpg")`
  background: `linear-gradient( rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)) ,url(${"https://res.cloudinary.com/fitness-glory/image/upload/v1631668582/woman-gym-body-building_1_u86fhp.jpg"})`,
  backgroundSize: "cover",
  position: "center",
  width: "100%",
  height: "100%",
  opacity: "1",
};
