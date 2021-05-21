import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
   return (
      <div className="header-container">
         <div className="container">
         <Navbar>
         <Navbar.Brand href="#home">Hotello</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mx-auto">
                  <Nav.Link href="#home" className="me-4">HOME</Nav.Link>
                  <Nav.Link href="#link" className="me-4">ROOM</Nav.Link>
                  <Nav.Link href="#link" className="me-4">SERVICES</Nav.Link>
                  <Nav.Link href="#link" className="me-4">NEWS</Nav.Link>
                  <Nav.Link href="#link" className="me-4">GALLERY</Nav.Link>
                  <Nav.Link href="#link" className="me-4">ABOUT</Nav.Link>
                  <Nav.Link href="#link">CONTACT</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
         </div>
      </div>
   );
};

export default Header;