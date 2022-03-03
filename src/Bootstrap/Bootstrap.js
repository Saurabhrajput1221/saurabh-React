import React from "react";
// import './Bootsrap.css'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Bootsrap() {
  return (
    <>
      <Navbar bg="danger" Text="white" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstra</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Projects</Nav.Link>
              <Nav.Link href="#link">Skills</Nav.Link>
              <Nav.Link href="#link">Eductaion</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <h1>Welcome to Our site...</h1>
      </div>
    </>
  );
}

export default Bootsrap;
