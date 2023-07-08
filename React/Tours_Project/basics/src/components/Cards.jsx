import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card";
import "../components/scss/style.scss";

const Cards = ({ id, price, image, tour, content, onDelete }) => {
  const [readMore, setReadMore] = useState(false);

  const handleDelete = () => {
    onDelete(id);
  }
  return (
    <Card className="card">
      <Card.Img className="card-img" variant="top" src={image} />
      <Card.Body className="card-body">
        <Card.Title className="card-tour">{tour}</Card.Title>
        <Card.Subtitle className="card-price">$ {price}</Card.Subtitle>
        <Card.Text>
          {readMore ? content : `${content.substring(0, 150)}...`}
          <Button className="card-button1" onClick={() => setReadMore((prev) => !prev)}>
            {readMore ? "Show Less" : "Read More"}
          </Button>
        </Card.Text>
        <Button className="card-button2" variant="outline-warning" onClick={handleDelete}>
          Not Interested
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
