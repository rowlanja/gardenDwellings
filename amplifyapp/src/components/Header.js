import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import customStyles from "./Header.css"
import Logo from '../logo.png'

const Header = () => {
  return (
    <div className={customStyles.Container}>
      <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand>
            <img 
              src={Logo}
              width="200px"
              height="200px"
            />
            Garden Dwellings
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/home">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/info">
            <Nav.Link>How it works</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/specs">
            <Nav.Link>Customization</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header;
