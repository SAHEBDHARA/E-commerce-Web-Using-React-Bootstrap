import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartIcon from '../Cart/CartIcon';

const Pagenavbar = ({  openCartModal }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">ShopingCart</Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link href="/users">Home</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav>
        <Nav>
          {/* Include the CartIcon component */}
          <CartIcon onTap={openCartModal} />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Pagenavbar;
