import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>Garden Dwellings</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <LinkContainer to="/home">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/info">
          <Nav.Link>Info</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/specs">
          <Nav.Link>Specs</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/contact">
          <Nav.Link>Contact</Nav.Link>
        </LinkContainer>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;
