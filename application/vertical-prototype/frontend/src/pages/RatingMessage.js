import React from 'react';

import Navigation from '../components/Navigation';
import { useSelector } from 'react-redux';

import './RatingMessage.css';
import Footer from '../components/Footer';
import UserRating from './UserRating';

export default function RatingMessage() {
  // generating receipt id
  var confirmation_num = Math.floor(Math.random() * 1000000000000 + 1);
  console.log(confirmation_num);

  // importing objects from redux
  const ratings = useSelector((state) => state.userReducer.ratings);
  const username = useSelector((state) => state.userReducer.username);
  const cart = useSelector((state) => state.userReducer.cart);

  // creating array to store distinct seller names
  var filtered = [];



  // filter duplilcate sellers
  var filtered_ratings = ratings.filter(function (e, i) {
    if (filtered.includes(ratings[i].name)) {
    } else {
      filtered.push(ratings[i].name);
      return ratings[i];
    }
  });

  return (
    <div className="ratingmessage">
      <Navigation />
      <div className="main__container">
        <div className="ratingmessage__top">
          <h1 className="thankyou__text">Thank You for Placing your Order.</h1>

          <p className="confirmation__text">
            Hi <strong>{username}</strong>, your confirmation number is #
            {confirmation_num}. A confirmation has been sent to your email.
          </p>
          <p className="confirmation__text2">
            Please rate one or more sellers if you liked their services.
          </p>
        </div>
        <div className="user__rating">
          {ratings &&
            filtered_ratings.map((rating, i) => {
              console.log(rating);
              return <UserRating key={i} id={rating.id} name={rating.name} />;
            })}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
