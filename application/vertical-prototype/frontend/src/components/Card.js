import React from 'react';
import './Trending.css';

const Card = ({ number, image }) => {
  return (
    <div className="card">
      <img
        src={image}
        alt="card_image"
        className="card__image"
        style={{ height: '250px' }}
      />
    </div>
  );
};

export default Card;
