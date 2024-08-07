import React, { useState, useContext } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import CartIcon from "./Cart/CartIcon";
import ModalCart from "../UI/Modal";
import CartContext from "../Store/CartContext";
import { Link } from "react-router-dom";
import AuthContext from "../Store/AuthContent/Auth-Context";

function NavigationBar() {
  const { token, logout } = useContext(AuthContext); // Get authentication state and logout function
  const ctx = useContext(CartContext);
  const cartSize = ctx.items.length;
  const [showCart, setShowCart] = useState(false);

  const handleLogout = () => {
    logout(); // Call logout function from AuthContext
  };

  return (
    <React.Fragment>
      <Navbar expand="lg" bg="dark">
        <Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-white"
          />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="m-auto gap-5">
              <Nav.Link
                as={Link}
                to="/"
                className="text-white p-3 text-decoration-none fs-10"
              >
                HOME
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/store"
                className="text-white p-3 text-decoration-none fs-10"
              >
                STORE
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className="text-white p-3 text-decoration-none fs-10"
              >
                ABOUT
              </Nav.Link>
            </Nav>

            {token ? (
              <React.Fragment>
                <Button
                  as={Link}
                  to="/ForgotPassword"
                  variant="primary"
                  className="text-white"
                >
                  profile
                </Button>
                <Button
                  variant="primary"
                  className="text-white"
                  onClick={() => setShowCart(true)}
                >
                  <CartIcon className="px-2" />
                  <span className="px-2 fw-bold">Cart</span>{" "}
                  <span>{cartSize}</span>
                </Button>
                <Button
                  variant="primary"
                  className="ms-3 text-white"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </React.Fragment>
            ) : (
              <Button
                as={Link}
                to="/signin"
                variant="primary"
                className="text-white"
              >
                Login
              </Button>
            )}

            {showCart && (
              <ModalCart
                show={showCart}
                handleClose={() => setShowCart(false)}
              ></ModalCart>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default NavigationBar;
