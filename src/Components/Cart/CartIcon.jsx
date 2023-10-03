import React from 'react';
import Nav from 'react-bootstrap/Nav';
import CartContext from '../../Context/cart-context';
import { useContext } from 'react';

function CartIcon({count, onTap}) {

  const cartCtx = useContext(CartContext)
  const numberofCartItems = cartCtx.items.reduce((currNum, item)=>{
    return currNum + item.amount; 
  },0 )

  const handleClick=()=>{
    onTap()
  }
  return (
    <Nav.Link onClick={handleClick} href="#cart">
    <i className="fa fa-shopping-cart fa-lg"></i>
   <span className="badge badge-pill badge-danger">{numberofCartItems}</span>
  </Nav.Link>
  );
}

export default CartIcon;
