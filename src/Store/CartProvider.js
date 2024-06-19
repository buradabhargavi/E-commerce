import React, { useState } from "react";
import CartContext from "./CartContext";

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
function CartProvider(props) {
  const [items, setItems] = useState([]);

  const AddItem = (newItem) => {
    console.log(newItem);
    setItems((items) =>
      items.some((item) => item.id === newItem.id)
        ? items.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...items, { ...newItem, quantity: 1 }]
    );
  };

  const removeItem = (removedItem) => {
    setItems(items.filter((item) => item.id !== removedItem.id));
    //console.log(item.id);
  };

  const increaseQuantity = (itemId) => {
    setItems(
      items.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decQuantity = (itemId) => {
    setItems(
      items.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const cartContext = {
    items: items,
    AddItem: AddItem,
    removeItem: removeItem,
    increaseQuantity: increaseQuantity,
    decQuantity: decQuantity,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
