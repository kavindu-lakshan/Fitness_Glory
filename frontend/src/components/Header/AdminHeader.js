import React, { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminlogout } from "../../actions/adminActions";
import "./Header.css";
import Logo from "../../logo.png";

const Header = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const logoutHandler = () => {
    dispatch(adminlogout());
    history.push("/admin/login");
  };

  useEffect(() => {}, [adminInfo]);

  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/admin/adminHome">
            <img className="nav-logo" src={Logo} alt="FitnessGlory Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto"></Nav>
          {adminInfo ? (
            <Nav className="me-auto">
              <Nav.Link href="/admin/adminHome">
                <Link to="/admin/adminHome">Home</Link>
              </Nav.Link>
              <Nav.Link href="/admin/memberDetails">
                <Link to="/admin/memberDetails">Members</Link>
              </Nav.Link>
              <Nav.Link href="/admin/ViewEmployeeInterface">
                <Link to="/admin/ViewEmployeeInterface">Employees</Link>
              </Nav.Link>
              <NavDropdown title={adminInfo?.name} id="basic-nav-dropdown">
                <NavDropdown.Item href="/admin/admin-profile">
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
                <Link to="/admin/admin-login">Login</Link>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
