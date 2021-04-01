import React from 'react';
import './Trending.css';

const Card = ({ key, number, image }) => {
  return (
    <div>
      {image && (
        <div className="card">
          <img
            src={`data:image/jpeg;base64,${image}`}
            alt="card_image"
            className="card__image"
            style={{ height: '300px', width: '100%' }}
          />
        </div>
      )}
    </div>
  );
};

export default Card;
