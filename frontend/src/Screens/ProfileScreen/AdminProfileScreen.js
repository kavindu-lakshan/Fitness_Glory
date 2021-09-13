import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateAdminProfile } from "../../actions/trainerActions";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import TrainerMainScreen from "../../components/TrainerMainScreen";
import "./ProfileScreen.css";

const AdminProfileScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState();
  const [picMessage, setPicMessage] = useState();

  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const adminUpdate = useSelector((state) => state.adminUpdate);

  const { loading, error, success } = adminUpdate;

  useEffect(() => {
    if (!adminInfo) {
      history.push("/member");
    } else {
      setPic(adminInfo.pic);
    }
  }, [history, adminInfo]);

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

    dispatch(
      updateAdminProfile({
        password,
        pic,
      })
    );
  };

  return (
    <TrainerMainScreen>
      <div>
        <Row className="profileContainer">
          <Col md={6}>
            <Form onSubmit={submitHandler}>
              {loading && <Loading />}
              {success && (
                <ErrorMessage variant="success">
                  Updated Successfully
                </ErrorMessage>
              )}
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              <Form.Group controlId="password">
                <Form.Label>Enter New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>{" "}
              {picMessage && (
                <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
              )}
              <Form.Group controlId="pic">
                <Form.Label>Change Profile Picture</Form.Label>
                <Form.File
                  onChange={(e) => postDetails(e.target.files[0])}
                  id="custom-file"
                  type="image/png"
                  label="Upload Profile Picture"
                  custom
                />
              </Form.Group>
              <Button type="submit" varient="primary">
                Update
              </Button>
            </Form>
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={pic} alt={name} className="profilePic" />
          </Col>
        </Row>
      </div>
    </TrainerMainScreen>
  );
};

export default AdminProfileScreen;
