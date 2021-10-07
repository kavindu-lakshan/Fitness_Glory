import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { register } from "../../actions/userActions";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import MainScreen from "../../components/MainScreens/memberRegister";
import validator from "validator";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const history = useHistory();

  useEffect(() => {
    if (userInfo) {
      history.push("/member/Home");
    }
  }, [history, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (name == "") {
      setMessage("Name is required");
    } else if (email == "") {
      setMessage("Email is required");
    } else if (!validator.isEmail(email)) {
      setMessage("Enter Valid Email");
    } else if (password == "") {
      setMessage("Enter a password");
    } else if (
      !validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setMessage("Password is not strong enough");
    } else if (password !== confirmPassword) {
      setMessage("Password is not equal");
    } else {
      dispatch(register(name, email, password, pic));
    }
  };

  const postDetails = (pics) => {
    if (!pics) {
      return setPicMessage("Please select an Image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "dummyproj");
      data.append("cloud_name", "kavileocom");
      fetch("https://api.cloudinary.com/v1_1/kavileocom/image/upload", {
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

  return (
    <MainScreen title="REGISTER">
      <div className="frameRegister">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler} className="form-register">
          <Form.Group controlId="name">
            <Form.Label>
              Name <span style={{ color: "#c30101" }}>*</span>
            </Form.Label>
            <Form.Control
              className="form-styling"
              type="name"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>
              Email <span style={{ color: "#c30101" }}>*</span>
            </Form.Label>
            <Form.Control
              className="form-styling"
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              Password <span style={{ color: "#c30101" }}>*</span>
            </Form.Label>
            <Form.Control
              className="form-styling"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>
              Confirm Password <span style={{ color: "#c30101" }}>*</span>
            </Form.Label>
            <Form.Control
              className="form-styling"
              type="password"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          {picMessage && (
            <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
          )}
          <Form.Group controlId="pic">
            <Form.Label>Profile Picture</Form.Label>
            <Form.File
              onChange={(e) => postDetails(e.target.files[0])}
              id="custom-file"
              type="image/png"
              custom
            ></Form.File>
          </Form.Group>
          <div className="btn-animate">
            <Button variant="primary" type="submit" className="btn-signin ">
              Register
            </Button>
          </div>
        </Form>
        <Row className="py-3">
          <Col className="forgot">
            Have an Account ? <Link to="/member/login">Login</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default RegisterScreen;
