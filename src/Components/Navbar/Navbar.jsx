import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartIcon from '../Cart/CartIcon';
import { useLocation } from 'react-router-dom'; // Import useLocation hook

const Pagenavbar = ({ openCartModal }) => {
  const location = useLocation(); // Get the current location

  // Custom styling for active link
  const activeLinkStyle = {
    color: 'white', // Change text color for active link
    fontWeight: 'bold', // Apply bold font weight
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">ShopingCart</Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link href="/" style={location.pathname === '/' ? activeLinkStyle : {}}>
            Home
          </Nav.Link>
          <Nav.Link href="/products" style={location.pathname.startsWith('/products') ? activeLinkStyle : {}}>
            Products
          </Nav.Link>
          <Nav.Link href="/about" style={location.pathname === '/about' ? activeLinkStyle : {}}>
            About
          </Nav.Link>
          <Nav.Link href="/register" style={location.pathname === '/register' ? activeLinkStyle : {}}>
            Register
          </Nav.Link>
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
