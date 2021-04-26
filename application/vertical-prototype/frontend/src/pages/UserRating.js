import React from 'react';
import ReactStars from 'react-rating-stars-component';
import './RatingMessage.css';

const UserRating = ({ id, username }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div>
      <div className="rating_container">
        <div className="stars_container">
          <p className="username">{username}</p>
          <ReactStars
            size={40}
            value={5}
            isHalf={false}
            edit={true}
            onChange={ratingChanged}
            numberOfStars={5}
            name="rating"
          />
        </div>
      </div>
    </div>
  );
};

export default UserRating;
