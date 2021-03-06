import React, { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/trainerActions";
import "./Header.css";
import Logo from "../../logo.png";

const TrainerHeader = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const trainerLogin = useSelector((state) => state.trainerLogin);
  const { trainerInfo } = trainerLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/employee/");
  };

  useEffect(() => {}, [trainerInfo]);

  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/employee/">
            <img className="nav-logo" src={Logo} alt="FitnessGlory Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto"></Nav>
          {trainerInfo ? (
            <Nav className="me-auto">
              <Nav.Link href="/employee/trainerHome">
                <Link to="/employee/trainerHome">Home</Link>
              </Nav.Link>

              <NavDropdown title="Events" id="basic-nav-dropdown">
                <NavDropdown.Item href="/employee/eventspage">Create Events</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/employee/allevents">Manage Events</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Workouts" id="basic-nav-dropdown">
                <NavDropdown.Item href="/employee/workouts/add">
                  Add Workouts
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/employee/workouts">
                  Workout Library
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Requests" id="basic-nav-dropdown">
                <NavDropdown.Item href="/employee/memberPTRequest/ptEdit">
                  Trainer Requests
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/employee/scheduleR/HomeRequest">
                  Schedule Requests
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/employee/CreateLeave">
                  Leave Requests
                </NavDropdown.Item>
              </NavDropdown>

              {/* <Nav.Link href="/employee/trainerHome">
                <Link to="/employee/trainerblog/Admin">View Blogs</Link>
              </Nav.Link> */}

              <NavDropdown title="View" id="basic-nav-dropdown">
                <NavDropdown.Item href="/employee/trainerblog/Admin">
                  Trainer Blogs
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/employee/PreAdmin">
                  Pre-defined Schedules
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
              </NavDropdown>

              <NavDropdown title={trainerInfo?.username} id="basic-nav-dropdown">
                <NavDropdown.Item href="/employee/trainer-profile">
                My Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href={`/employee/feedback/${trainerInfo?.username}`}>
                My Feedback
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
                <Link to="/employee/trainer-login">Login</Link>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TrainerHeader;
