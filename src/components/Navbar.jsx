import React from "react";
import { NavLink} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Container,Nav } from "react-bootstrap";

const Navig = () => {
  return (
    <>
      <Navbar expand="lg" className="container-fluid primary-bg">
        <Container className="col-10 mx-auto">
          <Navbar.Brand href="/" className="navbar-brand">Portis</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink to="/" className="nav-link">Home</NavLink>
              <NavLink to="/about" className="nav-link">About</NavLink>
              <NavLink to="/service" className="nav-link">Services</NavLink>
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navig;