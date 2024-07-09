import React, { useState, useEffect } from "react";
import CartContext from "./CartContext";

const apiUrl = "https://crudcrud.com/api/202e1963350746328511d7f54f7fa4a5/cart";

function CartProvider(props) {
  const [cartData, setCartData] = useState({ emailId: "", items: [] });

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      fetchCartData(userEmail);
    }
  }, []);

  const fetchCartData = async (emailId) => {
    try {
      const response = await fetch(`${apiUrl}/cart?emailId=${emailId}`);
      if (response.ok) {
        const cart = await response.json();
        setCartData(cart);
      } else {
        console.error("Failed to fetch cart data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  const saveCartData = async (emailId, items) => {
    try {
      const response = await fetch(`${apiUrl}/cart`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailId, items }),
      });
      if (response.ok) {
        const updatedCart = { emailId, items };
        setCartData(updatedCart);
      } else {
        console.error("Failed to save cart data:", response.statusText);
      }
    } catch (error) {
      console.error("Error saving cart data:", error);
    }
  };

  const addItemToCart = async (newItem) => {
    const updatedItems = [...cartData.items, { ...newItem, quantity: 1 }];
    saveCartData(cartData.emailId, updatedItems);
  };

  const removeItemFromCart = async (itemId) => {
    const updatedItems = cartData.items.filter((item) => item.id !== itemId);
    saveCartData(cartData.emailId, updatedItems);
  };

  const updateCartItemQuantity = async (itemId, newQuantity) => {
    const updatedItems = cartData.items.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    saveCartData(cartData.emailId, updatedItems);
  };

  const cartContext = {
    items: cartData.items,
    AddItem: addItemToCart,
    removeItemFromCart: removeItemFromCart,
    updateCartItemQuantity: updateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
