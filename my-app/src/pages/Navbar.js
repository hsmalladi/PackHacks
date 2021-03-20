import React from 'react'
//import * as ReactBootStrap from 'react-bootstrap'

import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav';
// import NavDropDown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="color-nav">
      <Navbar.Brand href='/'>ATRIUM</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/classes">Classes</Nav.Link>
          <Nav.Link href="/clubs">Clubs</Nav.Link>
          <Nav.Link href="/interests">Interests</Nav.Link>
          <div class="nav-item dropdown">
            <a class="dropdown-toggle nav-link" href="#" id="collasible-nav-dropdown" role="button" aria-haspopup=
            "true" aria-expanded="false">
              <img src={'./havish.jpeg'} width="40" height="40" class="rounded-circle"/>
            </a>
            <div class="dropdown-menu" aria-labelledby="collasible-nav-dropdown" show>
              <a class="dropdown-item" href="/">Edit Profile</a>
              <a class="dropdown-item" href="/">Log Out</a>
            </div>
          </div>

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