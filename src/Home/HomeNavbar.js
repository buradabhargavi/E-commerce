import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";

function HomeNavbar() {
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
              <NavLink
                href="home"
                className="text-white p-3 text-decoration-none fs-10"
              >
                HOME
              </NavLink>
              <Nav.Link
                href="store"
                className="text-white p-3 text-decoration-none fs-10"
              >
                STORE
              </Nav.Link>
              <Nav.Link
                href="About"
                className="text-white p-3 text-decoration-none fs-10 "
              >
                ABOUT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}
export default HomeNavbar;
