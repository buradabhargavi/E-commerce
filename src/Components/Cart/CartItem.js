import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import CartContext from "../../Store/CartContext";

function CartItem({ cartItem }) {
  // console.log(cartItem.imageUrl);
  const ctx = useContext(CartContext);

  return (
    <li className="border-bottom p-2 ms-4">
      <div className="row">
        <div className="col-6 d-flex align-items-center">
          <Image
            src={cartItem.imageUrl}
            alt={cartItem.title}
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <div className="row">
          <p className="fw-bold text-muted mb-1">
            {cartItem.title}(${cartItem.price} per unit)
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-4 d-flex align-items-center">
          <Button
            variant="none"
            className="rounded-circle"
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            onClick={() => ctx.decQuantity(cartItem.id)}
          >
            -
          </Button>
          <input
            type="text"
            value={cartItem.quantity}
            className="form-control form-control-sm text-center"
            style={{ width: "40px", margin: "0 10px" }}
          />
          <Button
            variant="none"
            className="rounded-circle"
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            onClick={() => ctx.increaseQuantity(cartItem.id)}
          >
            +
          </Button>
        </div>

        <div className="col-4 d-flex align-items-center justify-content-end">
          <span className="border ms-2 p-2 bg-info">
            ${cartItem.price * cartItem.quantity}
          </span>
        </div>

        <div className="col-4 d-flex align-items-center justify-content-end">
          <Button variant="danger" onClick={() => ctx.removeItem(cartItem)}>
            Remove
          </Button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
