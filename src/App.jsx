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
    {/* <Router>
      <Pagenavbar openCartModal={openCartModal} />

      <Switch>
        <Route path="/" exact>
          <Product addToCart={addToCart} />
        </Route>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/userlist">
          <Userlist />
        </Route>
      </Switch>

      <CartModal show={showCartModal} handleClose={closeCartModal} />
    </Router> */}
    <BrowserRouter>
    <Pagenavbar/>
    <Routes>
    <Route path="/" element={<Product addToCart={addToCart} />}/>
    <Route path="/users" element={<Userlist/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/about" element={<About/>}/>
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
