import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreens/memberLogin";
import "./LoginScreen.css";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { adminlogin } from "../../actions/adminActions";

const AdminLoginScreen = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { loading, error, adminInfo } = adminLogin;

  useEffect(() => {
    if (adminInfo) {
      history.push("/admin/adminHome");
    }
  }, [history, adminInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(adminlogin(username, password));
  };

  return (
    <MainScreen title="Admin Login">
      <div className="frame">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler} className="form-login">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              className="form-styling"
              type="text"
              value={username}
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <FormGroup controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="form-styling"
              type="Password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <div className="btn-animate">
            <Button variant="primary" type="submit" className="btn-signin ">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </MainScreen>
  );
};

export default AdminLoginScreen;
