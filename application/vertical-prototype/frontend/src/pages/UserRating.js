import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import './RatingMessage.css';
import axios from 'axios';

import { useSelector } from 'react-redux';

const UserRating = ({ id, name }) => {
  const [clickedStyle, setClickedStyle] = useState({});

  const ratingChanged = (newRating) => {
    setClickedStyle({
      'pointer-events': 'none',
      opacity: '0.5',
      'background-color': '#f0f0f0',
      transition: '0.5s',
    });

    const ratingObject = {
      newRating: newRating,
    };

    axios
      .post(
        `http://${window.location.hostname}:3001/update_rating/${id}`,
        ratingObject
      )
      .then((response) => {
        if (response.data.succeed) {
          console.log(response.data.message);
        } else {
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="stars_container" style={clickedStyle}>
      <p className="stars__username">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </p>
      <div className="stars__class">
        <ReactStars
          size={40}
          value={0}
          isHalf={false}
          edit={true}
          onChange={ratingChanged}
          numberOfStars={5}
          name="rating"
        />
      </div>
    </div>
  );
};

export default UserRating;
