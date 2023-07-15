import React, { useEffect, useState } from "react";
import "./scss/style.scss";
import { Container, Button, Row, Col } from "react-bootstrap";
import data from "./data.json";
import Cards from "./Cards";

const OurMenu = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCards(data);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Container>
      <h1>Our Menu</h1>
      <div className="buttons">
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Shakes</Button>
      </div>
      <div className="cards">
        <Row>
          <Col>
            {cards.map((item) => (
              <Cards key={item.id} {...item} />
            ))}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default OurMenu;
