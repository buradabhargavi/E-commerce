import React from "react";
//import Cart from "../../components/Cart/Cart";
import { Modal, Button } from "react-bootstrap";
import CartItems from "../Components/Cart/CartItems";

function ModalCart(props) {
  return (
    <React.Fragment>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-muted fw-bold">Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CartItems />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.handleClose}>
            PURCHAGE
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
export default ModalCart;
