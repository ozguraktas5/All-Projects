import React from "react";
import { Card } from "react-bootstrap";
import "./scss/style.scss";

const Cards = ({ id, price, image, name, content }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <div className="name-price">
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{price} ₺</Card.Subtitle>
        </div>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
