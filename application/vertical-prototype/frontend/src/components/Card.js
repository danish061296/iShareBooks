import React from 'react';
import './Trending.css';

const Card = ({ key, number, image, defaultImage }) => {
  return (
    <div>
      {image && (
        <div className="card">
          <img
            src={`data:image/*;base64,${image}`}
            alt="card_image"
            className="card__image"
            style={{ height: '300px', width: '100%' }}
          />
        </div>
      )}
      <div className="testCard">
        TEST
      </div>
    </div>
    
  );
};

export default Card;
