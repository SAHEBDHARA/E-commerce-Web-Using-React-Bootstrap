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

      <ul>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    <span>
      Item: <strong>this is item</strong>
    </span>
    <span>
      Price: <strong>$300</strong>
    </span>
    <span>
      Quantity: <strong>3</strong>
    </span>
    <button className="btn btn-danger">Remove</button>
  </li>
</ul>

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
