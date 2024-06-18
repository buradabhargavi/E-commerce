import React from "react";
import CartItem from "./CartItem";

const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];
function CartItems() {
  const TotalUpdatedAmount = cartElements.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
      <ul className="list-unstyled">
        {cartElements.map((item) => {
          return <CartItem cartItem={item} key={item.id}></CartItem>;
        })}
      </ul>

      <div className="mt-3 fw-bold text-muted p-2 ms-4 border border-bottum border-info rounded d-flex justify-content-between">
        Total Amount :-{" "}
        <span>
          {" "}
          <strong>$</strong> {TotalUpdatedAmount}
        </span>
      </div>
    </>
  );
}

export default CartItems;
