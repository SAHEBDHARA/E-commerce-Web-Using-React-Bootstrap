import React, { createContext, useContext, useState } from 'react';

// Create a CartContext
const CartContext = createContext();

// Custom hook to use the CartContext
export function useCart() {
  return useContext(CartContext);
}

// CartProvider component to wrap your app with
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove an item from the cart by index
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  // Function to clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
