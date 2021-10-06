import React from "react";
import Logo from "../../logo.png";

const FooterTrainer = () => {
  return (
    <footer className="pt-0">
      <div style={bg}>
        <div className="row">
          <div className="col-md-3">
            <div className="row">
              <div>
                <img className="" src={Logo} alt="logo" style={im} />
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{marginTop:'10px'}}>
            <div className="row m-md-3">
              <h5 style={{color:'silver'}}>FitnessGlory</h5>
              <hr />
              <p style={para} >
                A well-equipped gym managed by a well-qualified instructor with experienced trainers.
              </p>
            </div>
          </div>

          <div className="col-md-3" style={{marginTop:'10px'}}>
            <div className="row m-md-3">
            <h5 style={{color:'silver'}}>Contact us</h5>
              <hr />
              <p style={para}>
                <i className="fas fa-home mr-3" style={{marginLeft:'5px'}} ></i> FitnessTown, FT 102
              </p>
              <p style={para}>
                <i className="fas fa-phone mr-3"></i> + 94 234 567 88
              </p>
            </div>
          </div>

          <div className="col-md-3" style={{marginTop:'10px'}}>
            <div className="row m-md-3">
            <h5 style={{color:'silver'}}>Useful links</h5>
              <hr />
              <div>
                    <a href="/employee/AboutUs/" style={navBtn1}> About Us </a><br/>
                    <a href="#" style={navBtn2}> Contact Us </a><br/>
                    <a href="/employee/OtherQ/" style={navBtn2}> Q and A Section</a>
                </div>
              </div>
              <div>
            </div>
          </div>
        </div>

        <hr className="pt-1" />

        <div className="row">
          <div className="col-md-8">
            <div className="container" style={foot}> © 2021 Copyright: <a href="#" style={footLink}> FitnessGlory.com </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="">
              <ul className="text-center">
                <li className="list-inline-item">
                  <a className="btn btn-primary mx-2" style={{ backgroundColor:'transparent', border: "2px solid silver" }} >
                    <i className="fab fa-facebook"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-primary mx-2" style={{ backgroundColor:'transparent', border: "2px solid silver" }}> 
                    <i className="fab fa-twitter"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-primary mx-2" style={{ backgroundColor:'transparent', border: "2px solid silver" }}>
                    <i className="fab fa-instagram"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-primary mx-2" style={{ backgroundColor:'transparent', border: "2px solid silver" }}>
                    <i className="fab fa-pinterest"> </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTrainer;

const bg = {
  backgroundColor: "black",
  opacity:'0.92'
};

const im = {
  height: "100%",
  width: "100%",
};

const para ={
  fontWeight: "5pt",
  fontSize: "19px",
  fontFamily: "calibri",
  color: "#c0bdbd",
  textAlign: 'justify',
  lineHeight:1.3
}

const navBtn1={
  justifyContent: 'center',
  marginLeft:'10px',
  marginTop:'5px',
  color: 'silver',
  fontFamily: "calibri",
  textDecoration: 'none',
  fontSize: '19px',
  fontWeight: "bold",

}

const navBtn2={
  justifyContent: 'center',
  marginLeft:'10px',
  marginTop:'5px',
  color: 'silver',
  fontFamily: "calibri",
  textDecoration: 'none',
  fontSize: '19px',
  fontWeight: "bold",
};

const foot ={
  fontWeight: "8pt",
  fontSize: "19px",
  color: 'silver',
  fontFamily: "calibri",
}

const footLink ={
  fontWeight: "bold",
  fontSize: "22px",
  fontFamily: "calibri",
  textTransform:'none' 
}

// const navBtn1={
//   justifyContent: "center",
//   marginLeft: "200px",
//   color: 'white',
//   textDecoration: 'none',
//   border: '2px solid',
//   fontSize: '13px',
//   padding: '9px 55px',
//   lineHeight: '47px',
// }

// const txt  ={
//   marginLeft:'50px',
//   color:'white'
// }

// const heading ={
//   color:'white'
// }

// const para ={
//   color:'white',
//   marginTop:'20px'
// }
