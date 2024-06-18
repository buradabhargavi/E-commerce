import React from "react";
//import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import CartIcon from "./CartIcon";

function NavigationBar() {
  return (
    <React.Fragment>
      <Navbar expand="lg" bg="dark">
        <Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-white"
          />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className=" m-auto gap-5">
              <Nav.Link
                href="#home"
                className="text-white p-3 text-decoration-none fs-10"
              >
                HOME
              </Nav.Link>
              <Nav.Link
                href="#store"
                className="text-white p-3 text-decoration-none fs-10"
              >
                STORE
              </Nav.Link>
              <Nav.Link
                href="#about"
                className="text-white p-3 text-decoration-none fs-10 "
              >
                ABOUT
              </Nav.Link>
            </Nav>

            <Button variant="primary" className="text-white">
              <CartIcon className="px-2" />
              <span className="px-2 fw-bold">Cart</span> <span>0</span>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}
export default NavigationBar;
