import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../actions/trainerActions";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import TrainerMainScreen from "../../components/TrainerMainScreen";
import "./ProfileScreen.css";
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
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
      data.append('file',pics) //cloudinary fields to save image
      data.append('upload_preset', 'trainerfg') //trainerfg is the path preset
      data.append('cloud_name', 'fitness-glory') //username of cloudinary
      fetch("https://api.cloudinary.com/v1_1/fitness-glory/image/upload",{
        method:"post",
        body:data,
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

    dispatch(updateProfile({ fname,lname,username,nic,dob,gender,mobile,address,qualifications,yrsexp,password,pic }));
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
    <TrainerMainScreen>
      <div>
      
      <div class="row gutters">
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
 		<div class="card h-100" style={{background:'transparent',boxShadow:'0 0 5px 5px green', borderRadius: '10px',}}>
 			<div class="card-body">

            <Form onSubmit={submitHandler}>
              {loading && <Loading />}
              {success && (
                <ErrorMessage variant="success">
                  Updated Successfully
                </ErrorMessage>
              )}

              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              <CardContent>
                <Grid container>
                  <Grid>
                    <Form.Group controlId="name">
                      <Form.Label style={{color:'white'}}>First Name</Form.Label>
                      <hr style={{marginTop:-2}}/>
                        <Form.Control
                          type="name"
                          value={fname}
                          placeholder="Enter name"
                          onChange={(e) => setFname(e.target.value)}
                          style={{background:'transparent', border:'1px solid', color:'white'}}
                        />
                    </Form.Group>
                  </Grid>
                  <Grid> 
                    <Form.Group controlId="name" style={{marginLeft:'20px'}}>
                      <Form.Label style={{color:'white'}}>Last Name</Form.Label>
                      <hr style={{marginTop:-2}}/>
                        <Form.Control
                          type="name"
                          value={lname}
                          placeholder="Enter name"
                          onChange={(e) => setLname(e.target.value)}
                          style={{background:'transparent', border:'1px solid', color:'white'}}
                        />
                    </Form.Group><br/>
                  </Grid>
                  <Grid>
                    <Form.Group controlId="name">
                      <Form.Label style={{color:'white'}}>Username</Form.Label>
                      <hr style={{marginTop:-2}}/>
                        <Form.Control
                          type="name"
                          value={username}
                          placeholder="Enter name"
                          onChange={(e) => setUsername(e.target.value)}
                          style={{background:'transparent', border:'1px solid', color:'white'}}
                        />
                    </Form.Group>
                  </Grid>
                  <Grid>
                    <Form.Group controlId="name" style={{marginLeft:'20px'}}>
                      <Form.Label style={{color:'white'}}>NIC</Form.Label>
                      <hr style={{marginTop:-2}}/>
                        <Form.Control
                          type="name"
                          value={nic}
                          placeholder="Enter name"
                          onChange={(e) => setNic(e.target.value)}
                          style={{background:'transparent', border:'1px solid', color:'white'}}
                        />
                    </Form.Group>
                  </Grid>
                </Grid><br/>

                <Grid container>
                  <Grid>
                    <Form.Group controlId="name">
                      <Form.Label style={{color:'white'}}>Date of Birth</Form.Label>
                      <hr style={{marginTop:-2}}/>
                        <Form.Control
                          type="date"
                          value={dob}
                          placeholder="Enter name"
                          onChange={(e) => setDob(e.target.value)}
                          style={{background:'transparent', border:'1px solid', color:'white'}}
                        />
                      </Form.Group>
                  </Grid>

                    <Form.Group controlId="name" style={{marginLeft:'135px'}}>
                      <Form.Label style={{color:'white'}}>Mobile</Form.Label>
                      <hr style={{marginTop:-2}}/>
                        <Form.Control
                          type="name"
                          value={mobile}
                          placeholder="Enter name"
                          onChange={(e) => setMobile(e.target.value)}
                          style={{background:'transparent', border:'1px solid', color:'white'}}
                        />
                    </Form.Group>
                  </Grid><br/>
          
                <Grid container>
                  <Grid style={{marginLeft:'200px'}}>
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
                  </Grid>
                </Grid>
                {/* <Form.Group controlId="name">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="name"
                    value={mobile}
                    placeholder="Enter name"
                    onChange={(e) => setMobile(e.target.value)}
                    style={{background:'transparent', border:'2px solid'}}
                  />
                </Form.Group> */}

                    <Form.Group controlId="name">
                      <Form.Label style={{color:'white'}}>Address</Form.Label>
                      <hr style={{marginTop:-2}}/>
                        <Form.Control
                          type="name"
                          value={address}
                          placeholder="Enter name"
                          onChange={(e) => setAddress(e.target.value)}
                          style={{background:'transparent', border:'1px solid', color:'white'}}
                        />
                    </Form.Group><br/>

                <Grid container>
                  <Grid>
                    <Form.Group controlId="name">
                      <Form.Label style={{color:'white'}}>Qualifications</Form.Label>
                      <hr style={{marginTop:-2}}/>
                        <Form.Control
                          type="name"
                          value={qualifications}
                          placeholder="Enter name"
                          onChange={(e) => setQualifications(e.target.value)}
                          style={{background:'transparent', border:'1px solid',width:'430px', color:'white'}}
                        />
                    </Form.Group>
                  </Grid>
                  <Grid>
                    <Form.Group controlId="name" style={{marginLeft:'10px'}}>
                      <Form.Label style={{color:'white'}}>Experience Years</Form.Label>
                      <hr style={{marginTop:-2}}/>
                        <Form.Control
                          type="number"
                          value={yrsexp}
                          placeholder="Enter name"
                          onChange={(e) => setYrsExp(e.target.value)}
                          style={{background:'transparent', border:'1px solid',maxWidth:'100px', color:'white'}}
                        />
                    </Form.Group>
                  </Grid>
                </Grid><br/>

                <Grid container>
                  <Grid>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label style={{color:'white'}}>Password</Form.Label>
                      <hr style={{marginTop:-2}}/>
                        <Form.Control
                          type="password"
                          value={password}
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                          style={{background:'transparent', border:'1px solid', color:'white'}}
                        />
                    </Form.Group>
                  </Grid>
                  <Grid>
                    <Form.Group controlId="confirmPassword" style={{marginLeft:'20px'}}>
                      <Form.Label style={{color:'white'}}>Confirm Password</Form.Label>
                      <hr style={{marginTop:-2}}/>
                        <Form.Control
                          type="password"
                          value={confirmPassword}
                          placeholder="Confirm Password"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          style={{background:'transparent', border:'1px solid', color:'white'}}
                        />
                    </Form.Group>
                  </Grid>
                </Grid><br/>

              {picMessage &&(
                <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
              )}

                    <Form.Group controlId="pic" >
                      {/* <Form.Label style={{width:'200px'}}>Profile Picture</Form.Label> */}
                        <Form.File style={{width:'300px'}}
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
              </CardContent>
            </Form></div></div></div>
         
         
      
           
          
       
      </div>
    </TrainerMainScreen>
  );
};

export default TrainerProfileScreen;
