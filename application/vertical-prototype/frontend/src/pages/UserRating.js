import React from 'react';
import ReactStars from 'react-rating-stars-component';
import './RatingMessage.css';
import axios from 'axios';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';

const UserRating = ({ id, username }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);

    const ratingObject = {
      newRating: newRating,
    };

    store.addNotification({
      title: '',
      message: 'Thank you for rating the user.',
      type: 'success',
      insert: 'top',
      container: 'top-center',
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
    <div className="stars_container">
      <ReactNotification />
      <p className="stars__username">
        {username.charAt(0).toUpperCase() + username.slice(1)}
      </p>
      <div className="stars__class">
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
    // </div>
  );
};

export default UserRating;
