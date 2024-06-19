import React, { useContext } from "react";
import CartItem from "./CartItem";
import CartContext from "../../Store/CartContext";

/* const cartElements = [
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
]; */

function CartItems() {
  const ctx = useContext(CartContext);
  const cartElements = ctx.items;

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

      <div className="fw-bold text-muted p-2 ms-4 d-flex align-items-end justify-content-end">
        TOTAL :{" "}
        <span>
          {" "}
          <strong>$</strong>
          {TotalUpdatedAmount}
        </span>
      </div>
    </>
  );
}

export default CartItems;
