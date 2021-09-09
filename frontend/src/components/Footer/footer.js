import React from "react";
import Logo from "../../logo.png";
import "./Footer.css";

const footer = () => {
  return (
    <footer>
    <div style={bg}>
      <div class="row">
          <div class="col-md-6">
            <div class="row">
                <div class="col-md-6 ">
                  <div style={{marginTop:'-20px'}}>
                      <img style={im} src={Logo}/><br/><br/>
                  </div>
                </div>
            </div>
          </div>
          <div style={{marginLeft:'-40px'}} class="col-md-6">
                <div style={{width:'550px', marginLeft:'-100px'}}>
                  <div class="row ">
                      <div style={{ marginTop:'20px',marginLeft:'-120px'}}>
                      <p style={para} className="text-center">
                        ‘Fitness Glory’ is a well-equipped gym managed by a well-qualified instructor with experienced trainers.
                        Located in the heart of FITNESS Town, it is specially recommended for women looking for a decent place for 
                        physical personal trainings, to maintain fitness and good health.
                      </p>
                      </div>
                  </div>
                </div>
                <div style={navBtnSet}>
                    <a href="#" style={navBtn1}> About Us </a><br/>
                    <a href="#" style={navBtn2}> Contact Us </a><br/>
                    <a href="/member/OtherQ/" style={navBtn3}> Q and A Section</a>
                </div>
          </div>
      </div>
    </div>

    </footer>
  );
};

export default footer;

const bg = {
  backgroundColor: "black",
  opacity:'0.95',
  padding:'10px'
};

const im = {
  marginTop:'30px',
  height:'85%',
  width:'85%',
};

const navBtn3 = {
  justifyContent: 'center',
  marginLeft: '160px',
  justifyContent: 'center',
  marginLeft: '200px',
  color: 'white',
  textDecoration: 'none',
  border: '2px solid',
  fontSize: '13px',
  padding: '10px 31px',
  lineHeight: '47px',
};

const navBtn2={
  justifyContent: "center",
  marginLeft: "190px",
  justifyContent: "center",
  marginLeft: "200px",
  color: 'white',
  textDecoration: 'none',
  border: '2px solid',
  fontSize: '13px',
  padding: '9px 48px',
  lineHeight: '47px',
};

const navBtn1={
  justifyContent: "center",
  marginLeft: "200px",
  color: 'white',
  textDecoration: 'none',
  border: '2px solid',
  fontSize: '13px',
  padding: '9px 55px',
  lineHeight: '47px',
}


const txt  ={
  marginLeft:'50px',
  color:'white'
}

const heading ={
  color:'white'
}

const para ={
  color:'white',
  marginTop:'20px'
}

const navBtnSet ={
  marginTop:'-120px',
  marginLeft:'350px',
}