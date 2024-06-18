import React from "react";

function CartItem({ cartItem }) {
  return (
    <li className="d-flex justify-content-between align-items-center border-bottom p-2 ms-4">
      <div>
        <p className="fw-bold text-muted mb-1">{cartItem.title}</p>
        <div>
          {cartItem.price} X {cartItem.quantity}
          <span className="border ms-2 p-2 bg-info">
            {cartItem.price * cartItem.quantity}
          </span>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
