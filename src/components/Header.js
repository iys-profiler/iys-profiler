import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png';
function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href='/iys-profile'>Search</Nav.Link>
            <Nav.Link  href='/iys-profile/category'>Category</Nav.Link>
            <Nav.Link href='/iys-profile/popular-category'>Popular Categories</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;