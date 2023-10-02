import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ProductCart = ({ title, price, imageUrl, quantity }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardHover = () => {
    setIsHovered(true);
  };

  const handleCardLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    position: 'relative',
    overflow: 'hidden',
  
  };

  const imageStyle = {
    width: '100%',
    height: '250px',
    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
    transition: 'transform 0.7s',
  };

  const bodyStyle = {
    position: 'relative',
    zIndex: 1, // Set a higher z-index to keep it above the image
  };

  return (
    <Col xs={4}>
      <Card
        className="w-75"
        style={cardStyle}
        onMouseEnter={handleCardHover}
        onMouseLeave={handleCardLeave}
      >
        <div style={{ position: 'relative' }}>
          <Card.Img
            variant="top"
            src={imageUrl}
            alt={title}
            style={imageStyle}
          />
        </div>
        <Card.Body style={bodyStyle}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCart;
