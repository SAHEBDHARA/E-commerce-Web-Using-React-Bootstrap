import React from 'react';
import Nav from 'react-bootstrap/Nav';

function CartIcon({count, onTap}) {
  const handleClick=()=>{
    onTap()
  }
  return (
    <Nav.Link onClick={handleClick} href="#cart">
    <i className="fa fa-shopping-cart fa-lg"></i>
    {count > 0 && <span className="badge badge-pill badge-danger">{count}</span>}
  </Nav.Link>
  );
}

export default CartIcon;
