import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import data from './data';
import "../components/scss/style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { id, image, name, job, content } = data[index];

  const previous = (prev) => {
    if (prev < 0) prev = data.length -1;
    setIndex(prev);
  }

  const next = (nxt) => {
    if (nxt > data.length - 1) nxt = 0;
    setIndex(nxt);
  }

  const random = () => {
    let rndm = Math.floor(Math.random() * data.length);
    setIndex(rndm);
  };

  return (
    <Container>
      <Card>
        <Card.Img className="card-image" src={image} />
        <Card.Body>
          <Card.Title className="card-title">{name}</Card.Title>
          <Card.Subtitle className="card-job">{job}</Card.Subtitle>
          <Card.Text className="card-content">{content}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button href="#" className="chevron-left" onClick={() => previous(index - 1)}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
          <Button href="#" className="chevron-right" onClick={() => next(index + 1)}>
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
          <Button className="card-button" onClick={random}>Surprise Me</Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Reviews;
