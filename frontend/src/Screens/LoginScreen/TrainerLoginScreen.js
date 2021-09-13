import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import TrainerMainScreen from "../../components/TrainerMainScreen";
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
    <TrainerMainScreen title="LOGIN">
      <div style={container}>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <h1 style={{ color: "#929b94" }}>Trainer</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label style={{ color: "929b94" }}>Username</Form.Label>
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
          </Form.Group>
          <FormGroup controlId="formBasicPassword">
            <Form.Label style={{ color: "#929b94" }}>Password</Form.Label>
            <Form.Control
              style={control}
              type="Password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required
              // style={{background:'transparent', border:'2px solid'}}
            />
          </FormGroup>
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
    </TrainerMainScreen>
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
  borderRadius: "10px",
  boxShadow: "7px 7px 60px red",
  border: "1px solid red",
};

const control = {
  padding: "10px",
  fontSize: "16px",
  display: "block",
  width: "100%",
  color: "#000",
  background: "transparent",
  boxShadow: "7px 7px 20px red",
  border: "1px solid #929b94",
  outline: "none",
  border: "none",
  margin: "1em 0",
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
