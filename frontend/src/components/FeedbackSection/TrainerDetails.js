import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router";
import { getTrainer } from "../../api/apiFBQA";
import { Button } from "@material-ui/core";
// import trainerDetailsBg from './ImagesD/trainerDetailsBg.png'

export const TrainerDetails = () => {
  const match = useRouteMatch();
  const [trainer, setTrainer] = useState([]);

  useEffect(() => {
    const displayTrainer = async () => {
      const trainers = await getTrainer(match.params.username);
      setTrainer(trainers);
    };
    displayTrainer();
  }, []);

  return (
    <div>
      <div style={bgImg}>
        <br />
        <div>
          <div className="container">
            <div className="mt-3">
              <div style={b}>
                <br />
                <h3 style={head} className="text-center">
                  Trainer Details
                </h3>
                <br />

                <div className="container">
                  {trainer.map((row) => (
                    <p>
                      <br />
                      <div>
                        <img style={imgStyle} src={row.pic} height="200px" width="200px" class="center"  alt="Trainer Profile Pic" />
                        <h5 style={{ color: "white", textAlign: "center", paddingTop: "10px", }} >
                          {row.fname} {row.lname}
                        </h5>
                      </div>
                      <br />
                      <br />
                      <br />
                      <div style={det}>
                        <div style={detAlignset}>
                          <div>
                            <h4 style={detAlign}>First Name</h4>
                          </div>
                          <div>
                            <h5 style={val}>: {row.fname}</h5>
                          </div>
                          <div>
                            <h4 style={detAlign}>UserName </h4>
                          </div>
                          <div>
                            <h5 style={val}>: {row.username}</h5>
                          </div>
                          <div>
                            <h4 style={detAlign}>Qualifications</h4>
                          </div>
                          <div>
                            <h5 style={val}>: {row.qualifications}</h5>
                          </div>
                          <div>
                            <h4 style={detAlign}>Last Name</h4>
                          </div>
                          <div>
                            <h5 style={val}>: {row.lname}</h5>
                          </div>
                          <div>
                            <h4 style={detAlign}>NIC</h4>
                          </div>
                          <div>
                            <h5 style={val}>: {row.nic}</h5>
                          </div>
                          <div>
                            <h4 style={detAlign}>Experience</h4>
                          </div>
                          <div>
                            <h5 style={val}>: {row.yrsexp}yrs</h5>
                          </div>
                        </div>
                        <div>
                          <br />
                          <br />
                          <Link to={`/member/trainer/createF/${row._id}`} style={{ textDecoration: "none" }}>
                            <Button style={btn} color="Secondary" variant="contained">
                              Provide Feedback
                            </Button>
                          </Link>
                          <br />
                          <br />
                        </div>
                      </div>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

const trainerDetailsBg = "https://res.cloudinary.com/dulshan/image/upload/v1631385895/trainerDetailsBg_xspvfv.png";
const bgImg = {
  background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) ,url(${trainerDetailsBg})`,
  backgroundSize: "cover",
  position: "center",
  marginTop: "-20px",
  width: "100%",
  height: "100%",
  opacity: "1",
};

const b = {
  border: "4px solid white",
  marginTop: "20px",
  padding: "30px",
};

const btn = {
  backgroundColor: "#04938b",
  border: "2px solid #04938b",
  color: "white",
};

const det = {
  textAlign: "center",
};

const detAlignset = {
  textAlign: "left",
  marginLeft: "300px",
};

const detAlign = {
  marginLeft: "110px",
  color: "white",
  fontFamily: "Helvetica",
  fontWeight: "bold",
  fontSize: "15pt",
  textTransform: "none",
};

const val = {
  marginLeft: "350px",
  marginTop: "-30px",
  color: "white",
  fontSize: "15pt",
  fontFamily: "Helvetica",
  fontWeight: "2",
  textTransform: "none",
};

const imgStyle = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "200px",
  height: "200px",
};

const head = {
  padding: "10px",
  textAlignVertical: "center",
  textAlign: "center",
  background: "#04938b",
  textTransform: "uppercase",
  color: "white",
};
