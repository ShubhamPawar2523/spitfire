import React from 'react';
import './NavbarBuy.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavbarBuy() {
  return (
    <>
      <Navbar expand="lg" className="bg-dark">
        <Container fluid>
          <Navbar.Brand href="#" style={{ color: '#f60838', fontSize: '20px' }}>
            Spitfire motors
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="#home" className="link-color">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="link-color">
                About Us
              </Nav.Link>
              <Nav.Link href="#contact" className="link-color">
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav className="d-flex">
              <Nav.Link href="#signup" className="link-color">
                Sign-Up
              </Nav.Link>
              <span className="divider"></span>
              <Nav.Link href="#signin" className="link-color">
                Sign-In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
