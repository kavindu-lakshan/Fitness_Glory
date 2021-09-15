import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import "./LoginScreen.css";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/trainerActions";

const TrainerLoginScreen = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const trainerLogin = useSelector((state) => state.trainerLogin);
  const { loading, error, trainerInfo } = trainerLogin;

  useEffect(() => {
    if (trainerInfo) {
      history.push("/employee/trainerHome");
    }
  }, [history, trainerInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(login(username, password));
  };

  return (
    <div style={bgLog}>
      <br />
      <br />
      <br />
      <br />
      <div class="container">
        <div style={container}>
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {loading && <Loading />}
          <h1 style={{ color: "silver" }}>
            <span style={{ color: "#DC143C" }}>T</span>r
            <span style={{ color: "#DC143C" }}>a</span>i
            <span style={{ color: "#DC143C" }}>n</span>e
            <span style={{ color: "#DC143C" }}>r</span>
          </h1>
          <hr style={{ border: "2px solid white" }} />
          <Form onSubmit={submitHandler}>
            <Form.Group>
              <Form.Label style={{ color: "silver" }}>Username</Form.Label>
              <Form.Control
                style={control}
                type="text"
                value={username}
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.target.value)}
                title="Please provide a Valid Username"
                required
                // style={{background:'transparent', border:'2px solid'}}
              />
              <br />
            </Form.Group>
            <FormGroup controlId="formBasicPassword">
              <Form.Label style={{ color: "silver" }}>Password</Form.Label>
              <Form.Control
                style={control}
                type="Password"
                value={password}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                // title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                required
                // style={{background:'transparent', border:'2px solid'}}
              />
            </FormGroup>
            <br />
            <Button style={btn} type="submit">
              Login
            </Button>
          </Form>
          <Row className="py-3">
            <Col style={{ color: "#fff", fontSize: "12px" }}>
              New Trainer? Please Contact us for more Information 0772211334
            </Col>
          </Row>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default TrainerLoginScreen;

const container = {
  position: "absolute",
  marginTop: "250px",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "380px",
  padding: "50px 30px",
  borderRadius: "50px",
  boxShadow: "7px 7px 60px #DC143C",
};

const control = {
  padding: "10px",
  fontSize: "16px",
  display: "block",
  width: "100%",
  color: "#000",
  background: "transparent",
  boxShadow: "7px 7px 20px #DC143C",
  border: "1px solid white",
  outline: "none",
  border: "none",
  margin: "1em 0",
  color: "white",
};

const btn = {
  color: "#fff",
  textTransform: "uppercase",
  background: "crimson",
  opacity: "0.7",
  transition: "opacity .3s ease",
};

const h1 = {
  color: "#ffffff",
  fontSize: "2em",
  textTransform: "uppercase",
  textAlign: "center",
  marginBottom: "2rem",
};
const bgLog = {
  // background:`url("https://res.cloudinary.com/fitness-glory/image/upload/v1631593901/young-woman-drinking-water-gym-exercise-concept_fomgjh.jpg")`
  background: `linear-gradient( rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)) ,url(${"https://res.cloudinary.com/fitness-glory/image/upload/v1631713944/achievement-muscle-gym-man-active_kwfep2.jpg"})`,
  backgroundSize: "cover",
  position: "center",
  width: "100%",
  height: "100%",
  opacity: "1",
};
