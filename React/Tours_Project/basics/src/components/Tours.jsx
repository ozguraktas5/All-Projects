import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import data from "../components/data.json";
import { Container } from "react-bootstrap";

const Tours = () => {
  const [tours, setTours] = useState([]);
 
  const handleDeleteCard = (id) => {
    const updatedCards = tours.filter((item) => item.id !== id);
    setTours(updatedCards);
  } 

  useEffect(() => {
    const timer = setTimeout(() => {
      setTours(data);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Container className="container">
      <h2>Our Tours</h2>
      <div className="card-container">
        {tours.map((item) => (
          <Cards key={item.id} {...item} onDelete={handleDeleteCard}/>
        ))}
      </div>
    </Container>
  );
};

export default Tours;
