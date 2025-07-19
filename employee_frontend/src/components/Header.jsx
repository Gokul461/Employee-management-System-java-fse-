import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';  
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png'; 
function Header() {
  return (
    <Navbar style={{ backgroundColor: '#fa3d3dff' }} className='text-light' expand="lg">
        <Container>
          <Navbar.Brand className="text-light fw-bold fs-4" as={Link} to="/"> <img src={logo} alt="logo" width="80" height="70" style={{backgroundColor:"white", borderRadius:"100%", padding:"5px"}} className='rounded-full'/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto mb-2 mb-lg-0 justify-content-end w-100 py-3">
              <Nav.Link className="text-light fw-semibold" as={Link} to="/">Home</Nav.Link>
              <Nav.Link className="text-light fw-semibold" as={Link} to="/employee">Employees</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
  )
}

export default Header;
