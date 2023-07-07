import React, { useState } from "react";
import "./scss/style.scss";




const Birthday = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      imageUrl: '../assets/person-1.jpeg',
      name: "Bertie Yates",
      age: "29",
    },
    {
      id: 2,
      imageUrl: '../assets/person-2.jpeg',
      name: "Hester Hogan",
      age: "32",
    },
    {
      id: 3,
      imageUrl: '../assets/person-3.jpeg',
      name: "Larry Little",
      age: "36",
    },
    {
      id: 4,
      imageUrl: '../assets/person-4.jpeg',
      name: "Sean Walsh",
      age: "34",
    },
    {
      id: 5,
      imageUrl: '../assets/person-5.jpeg',
      name: "Lola Gardner",
      age: "29",
    },
  ]);

  const clearAllCards = () => {
    setCards([]);
  };

  return (
    <div className="card">
      <h3>{cards.length} Birthdays Today</h3>
      {cards.map((card) => (
        <div className="profile" key={card.id}>
          <img src={card.imageUrl}/>
          <div>
            <h4>{card.name}</h4>
            <p>{card.age} years</p>
          </div>
        </div>
      ))}

      <button onClick={clearAllCards}>Clear All</button>
    </div>
  );
};

export default Birthday;
