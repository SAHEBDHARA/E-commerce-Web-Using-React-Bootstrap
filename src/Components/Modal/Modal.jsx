import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function CartModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Add content here to display cart items */}
        {/* You can map through the cart items and display them */}
        {/* Example: */}
        <p>Product 1 - $10</p>
        <p>Product 2 - $20</p>
        {/* ... */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">
          Proceed to Checkout
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CartModal;
