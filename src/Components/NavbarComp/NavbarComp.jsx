import React from 'react'
import './NavbarComp.css';
import { Navbar,Nav,NavDropdown,Container,Form,Button } from 'react-bootstrap'
export default function NavbarComp() {
  return (
    <>
    <Navbar expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: '#f60838', fontSize:'20px'}}>Spitfire motors</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='link-color'>Home</Nav.Link>
            <Nav.Link href="#action2" className='link-color'>About Us</Nav.Link>
            <Nav.Link href="#action2" className='link-color'>Awards</Nav.Link>
            <Nav.Link href="#action2" className='link-color'>Customer Stories</Nav.Link>
            <Nav.Link href="#action2" className='link-color'>Contact Us</Nav.Link>
            <Nav.Link href="#action2" className='link-color'>Track Delivery</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='search-btn'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
