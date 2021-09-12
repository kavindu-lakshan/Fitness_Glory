import React from "react";
import Logo from "../../logo.png";

const footer = () => {
  return (
    <footer className="pt-0">
      <div style={bg}>
        <div className="row">
          <div className="col-md-3">
            <div className="row">
              <div>
                <img className="" src={Logo} />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="row m-md-3">
              <h6 className="text-light">FitnessGlory</h6>
              <hr />
              <p className="text-muted">
                A well-equipped gym managed by a well-qualified instructor with
                experienced trainers.
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="row m-md-3">
              <h6 className="text-light">Contact us</h6>
              <hr />
              <p className="text-muted">
                <i className="fas fa-home mr-3"></i> Gampaha, GM 102
              </p>
              <p className="text-muted">
                <i className="fas fa-phone mr-3"></i> + 01 234 567 88
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="row m-md-3">
              <h6 className="text-light">Useful links</h6>
              <hr />
              <div className="text-muted">
                <a href="#"> About Us </a>
                <br />
                <a href="#"> Contact Us </a>
                <br />
                <a href="/member/OtherQ/"> Q and A Section</a>
              </div>
            </div>
          </div>
        </div>

        <hr className="pt-1" />

        <div className="row">
          <div className="col-md-8">
            <div className="container">
              © 2021 Copyright:
              <a className="text-muted" href="#">
                FitnessGlory.com
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="">
              <ul className="text-center">
                <li className="list-inline-item">
                  <a
                    className="btn btn-primary mx-2"
                    style={{ backgroundColor: "#3b5998" }}
                  >
                    <i className="fab fa-facebook"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn btn-primary mx-2"
                    style={{ backgroundColor: "#55acee" }}
                  >
                    <i className="fab fa-twitter"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn btn-primary mx-2"
                    style={{ backgroundColor: "#ac2bac" }}
                  >
                    <i className="fab fa-instagram"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn btn-primary mx-2"
                    style={{ backgroundColor: "#c61118" }}
                  >
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

export default footer;

const bg = {
  backgroundColor: "black",
};

const im = {
  height: "85%",
  width: "85%",
};

// const navBtn3 = {
//   justifyContent: 'center',
//   marginLeft: '160px',
//   justifyContent: 'center',
//   marginLeft: '200px',
//   color: 'white',
//   textDecoration: 'none',
//   border: '2px solid',
//   fontSize: '13px',
//   padding: '10px 31px',
//   lineHeight: '47px',
// };

// const navBtn2={
//   justifyContent: "center",
//   marginLeft: "190px",
//   justifyContent: "center",
//   marginLeft: "200px",
//   color: 'white',
//   textDecoration: 'none',
//   border: '2px solid',
//   fontSize: '13px',
//   padding: '9px 48px',
//   lineHeight: '47px',
// };

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
