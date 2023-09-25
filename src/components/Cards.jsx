import React from "react";

const Cards = ({ name, image_url }) => {
  return (
    <div className="Cards">
      <div className="cards-img">
        <img className="img" src={image_url} alt="name" />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default Cards;
