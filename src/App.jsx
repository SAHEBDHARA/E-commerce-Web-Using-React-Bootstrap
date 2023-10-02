import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';

import Counter from './Components/Counter/Counter';
import Register from './Components/Registration/Registration';
import Userlist from './Components/Users/userLIst';
import Product from './Components/Productcart/Product';
import CartIcon from './Components/Cart/CartIcon';
import CartModal from './Components/Modal/Modal';




function App() {

  const [cartCount, setCartCount] = useState(0);
  const [showCartModal, setShowCartModal] = useState(true);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const openCartModal = () => {
    setShowCartModal(true);
    console.log('cart is clicked ')
  };

  const closeCartModal = () => {
    setShowCartModal(false);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShopingCart</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            {/* Include the CartIcon component */}
            <CartIcon count={cartCount} onTap={openCartModal} />
          </Nav>
        </Container>
      </Navbar>
      {/* <Counter/> */}
      {/* <Register/> */}
      {/* <Userlist/> */}
      <Product addToCart={addToCart} />
      <CartModal show={showCartModal} handleClose={closeCartModal} />
    </>
  );
}

export default App;
