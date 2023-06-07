import React, { useState } from "react";
import "./mycard.scss";


const CardDesign = (props) => {
  const [rating, setRating] = useState(0);
  const img = require(`../../assets/img/${props.image}`);
  const profileImage = {
    backgroundImage: `url(${img})`,
  };
  return (
    <div className="profile-card">
      <div className="header" style={profileImage}></div>
      <div className="content">
        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={index < rating ? "star filled" : "star"}
              onClick={() => setRating(index + 1)}
            >
              ★
            </span>
          ))}
        </div>
        <div className="title">
          <h3>{props.title}</h3>
        </div>
        <div className="price">
           <p>{props.price}</p>
           <p>{props.discounted_price}</p>
        </div>
        <span className="discount">
          {props.discount}
        </span>
        
        
      </div>
    </div>
  );
};

export default CardDesign;
