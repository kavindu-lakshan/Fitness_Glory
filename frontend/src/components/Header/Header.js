import React, { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import "./Header.css";
import Logo from "../../logo.png";

const Header = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/member");
  };

  useEffect(() => {}, [userInfo]);

  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/member">
            <img className="nav-logo" src={Logo} alt="FitnessGlory Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto"></Nav>
          {userInfo ? (
            <Nav className="me-auto">
              <Nav.Link href="/member/Home">
                <Link to="/member/Home">Home</Link>
              </Nav.Link>
              <Nav.Link href="/member/workouts">
                <Link to="/member/workouts">Workouts</Link>
              </Nav.Link>
              <Nav.Link href="/member/workout-programs">
                <Link to="/member/workout-programs">Programs</Link>
              </Nav.Link>
              <Nav.Link href="/member/feedback/:email">
                <Link to="/member/feedback/:email">Feedback</Link>
              </Nav.Link>
              <NavDropdown title="Personal Trainer" id="basic-nav-dropdown">
                <NavDropdown.Item href="/member/memberPTRequest/home">
                  Request
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/member/trainerblog/MemForm">
                  Blogs
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Workout Schedules"
                id="basic-nav-dropdown"
                style={{ marginLeft: "-27px" }}
              >
                <NavDropdown.Item href="/member/scheduleR/MemHome">
                  Request
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">pre-defines</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={userInfo?.name}
                id="basic-nav-dropdown"
                style={{ marginRight: "-40px" }}
              >
                <NavDropdown.Item href="/member/profile">
                  My Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Nav>
              {""}
              <Nav.Link>
                <Link to="/member/login">Login</Link>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
