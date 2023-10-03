import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Pagenavbar from "./Components/Navbar/Navbar";
import Counter from "./Components/Counter/Counter";
import Register from "./Components/Registration/Registration";
import Userlist from "./Components/Users/userLIst";
import Product from "./Components/Productcart/Product";
import CartModal from "./Components/Modal/Modal";
import CartProvider from "./Context/CartProvider";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [showCartModal, setShowCartModal] = useState(false);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const openCartModal = () => {
    setShowCartModal(true);
  };

  const closeCartModal = () => {
    setShowCartModal(false);
  };

  return (
    <CartProvider>
      <BrowserRouter>
        <Pagenavbar openCartModal={openCartModal} />
        <CartModal show={showCartModal} handleClose={closeCartModal} />

        <Routes>
          <Route path="/products" element={<Product addToCart={addToCart} />} />
          <Route path="/users" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

{
  /* <Counter/> */
}
{
  /* <Register/> */
}
{
  /* <Userlist/> */
}
