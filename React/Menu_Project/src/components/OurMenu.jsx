import React, { useEffect, useState } from "react";
import "./scss/style.scss";
import { Container, Button } from "react-bootstrap";
import data from "./data.json";
import Cards from "./Cards";

const OurMenu = () => {
  const [cards, setCards] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [showBreakfast, setShowBreakfast] = useState(false);
  const [showLunch, setShowLunch] = useState(false);
  const [showShakes, setShowShakes] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
    setShowShakes(false)
  };

  const handleShowBreakfast = () => {
    setShowAll(false);
    setShowBreakfast(true);
    setShowLunch(false);
    setShowShakes(false)
  };

  const handleShowLunch = () => {
    setShowAll(false);
    setShowBreakfast(false);
    setShowLunch(true)
    setShowShakes(false)

  }

  const handleShowShakes = () => {
    setShowAll(false);
    setShowBreakfast(false);
    setShowLunch(false);
    setShowShakes(true)
  }

  const breakfastCards = data.filter((item) => item.category === "breakfast");
  const lunchCards = data.filter((item) => item.category === "lunch");
  const shakesCards = data.filter((item) => item.category === "shakes");
  

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
        <Button onClick={handleShowAll}>All</Button>
        <Button onClick={handleShowBreakfast}>Breakfast</Button>
        <Button onClick={handleShowLunch}>Lunch</Button>
        <Button onClick={handleShowShakes}>Shakes</Button>
      </div>
      <div className="cards">
        {showAll && cards.map((item) => <Cards key={item.id} {...item} />)}
        {showBreakfast && breakfastCards.map((item) => <Cards key={item.id} {...item} />)}
        {showLunch && lunchCards.map((item) => <Cards key={item.id} {...item} />)}
        {showShakes && shakesCards.map((item) => <Cards key={item.id} {...item} />)}
      </div>
      
    </Container>
  );
};

export default OurMenu;
