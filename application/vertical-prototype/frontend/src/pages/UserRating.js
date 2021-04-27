import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import './RatingMessage.css';
import axios from 'axios';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import { useSelector } from 'react-redux';


const UserRating = ( { id, username }) => {
  const ratings = useSelector((state) => state.userReducer.ratings);

  const [clickedStyle, setClickedStyle] = useState({});

  const ratingChanged = (newRating) => {


    setClickedStyle({
      "pointer-events": "none",
      "opacity": "0.5",
      "background-color": "#f0f0f0",
      "transition": "0.5s",
    });

    const ratingObject = {
      newRating: newRating,
    };

    store.addNotification({
      title: '',
      message: 'Thank you for rating the user.',
      type: 'success',
      insert: 'top',
      container: 'top',
      dismiss: {
        duration: 2000,
        showIcon: true,
      },
    });

    axios
      .post(
        `http://${window.location.hostname}:3001/update_rating/${id}`,
        ratingObject
      )
      .then((response) => {
        if (response.data.succeed) {
          console.log(response.data);
          console.log(response.data.message);
        } else {
          console.log(response.data);
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    // <div className="rating_container">
    
    <div className="stars_container" style={clickedStyle}>
      <ReactNotification  />
      <p className="stars__username">
        {username.charAt(0).toUpperCase() + username.slice(1)}
      </p>
      <div className="stars__class" >
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
    // </div>
  );
};

export default UserRating;
