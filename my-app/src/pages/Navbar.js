import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'


function Navbar() {
  return (
    <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <ReactBootStrap.Navbar.Brand href='/'>Login</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
          <ReactBootStrap.Nav.Link href="/home">Home Sweet Home</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/shop">Shop</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/cart">Shopping Cart</ReactBootStrap.Nav.Link>
          <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Divider />
            <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
          </ReactBootStrap.NavDropdown>
        </ReactBootStrap.Nav>
        <ReactBootStrap.Nav>
          <ReactBootStrap.Nav.Link href="#deets">More deets</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link eventKey={2} href="/cart">
            Cart
      </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  );
}

export default Navbar;