import React from 'react'
import image from "../images/greenlogo.png";
import havish from '../images/havish.jpeg';
//import * as ReactBootStrap from 'react-bootstrap'

import { Navbar, Nav, Dropdown } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav';
// import NavDropDown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="color-nav" style={{ fontFamily: "PingFang SC" }}>
      <Navbar.Brand href='/'>atrium</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/classes" style={{ fontWeight: "bold", fontSize: "20px" }}>Classes</Nav.Link>
          <Nav.Link href="/clubs" style={{ fontWeight: "bold", fontSize: "20px" }}>Clubs</Nav.Link>
          <Nav.Link href="/interests" style={{ fontWeight: "bold", fontSize: "20px" }}>Interests</Nav.Link>
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


/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */