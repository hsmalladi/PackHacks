import React from 'react'
import image from "../images/whitelogo.png";
import havish from '../images/havish.jpeg';
//import * as ReactBootStrap from 'react-bootstrap'

import { Navbar, Nav, Dropdown } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav';
// import NavDropDown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="color-nav" style={{ fontFamily: "PingFang SC" }}>
      <Navbar.Brand href='/home'>
        <img src={image} alt="logo" width="40%" height="40%" margin="0" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/classes" style={{ fontWeight: "bold", fontSize: "22px" }}>Classes</Nav.Link>
          <Nav.Link href="/clubs" style={{ fontWeight: "bold", fontSize: "22px" }}>Clubs</Nav.Link>
          <Nav.Link href="/interests" style={{ fontWeight: "bold", fontSize: "22px"}}>Interests</Nav.Link>
          <Nav.Link href="/AboutUs" style={{ fontWeight: "bold", fontSize: "22px", marginRight: "15px"}}>About Us</Nav.Link>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" role="button" aria-haspopup=
              "true" aria-expanded="false">
              <img src={havish} width="40" height="40" class="rounded-circle" />
            </Dropdown.Toggle>

            <Dropdown.Menu align="right">
              <Dropdown.Item href="/profile">Edit Profile</Dropdown.Item>
              <Dropdown.Item href="/">Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
