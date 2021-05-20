/**
 * Filename: RatingMessage.js
 *  Description: This file create a rating pages that shows rating
 *  boxes of different seller whose books have been selected by the buyer.
 *  All dulicated seller rating boxes are removed and only allow a seller
 *  to be rated once.
 */

import React from 'react';
import Navigation from '../components/Navigation';
import { useSelector } from 'react-redux';
import './RatingMessage.css';
import Footer from '../components/Footer';
import UserRating from './UserRating';

export default function RatingMessage() {
  // generating receipt id
  var confirmation_num = Math.floor(Math.random() * 1000000000000 + 1);

  // importing objects from redux
  const ratings = useSelector((state) => state.userReducer.ratings);
  const username = useSelector((state) => state.userReducer.username);
  const ratingSeller = useSelector((state) => state.userReducer.ratingSeller);

  console.log('Rating danish ' + ratingSeller);
  // console.log('ohhh ratings ' + JSON.parse(ratings));

  // creating array to store distinct seller names
  var filtered = [];

  // filter duplilcate sellers and add distinct seller to a new array
  var filtered_ratings = ratings.filter(function (e, i) {
    if (filtered.includes(ratings[i].name)) {
    } else {
      filtered.push(ratings[i].name);
      return ratings[i];
    }
  });

  // console.log('ohhh ratings ' + JSON.parse(filtered_ratings));

  return (
    <div className="ratingmessage">
      <Navigation />
      <div className="main__container">
        <div className="ratingmessage__top">
          <h1 className="thankyou__text">Thank You for Placing your Order.</h1>

          <p className="confirmation__text">
            Hi{' '}
            <strong>
              {username.charAt(0).toUpperCase() + username.slice(1)}
            </strong>
            , your confirmation number is #{confirmation_num}. A confirmation
            has been sent to your email.
          </p>
          <p className="confirmation__text2">
            Please rate one or more sellers if you liked their services.
          </p>
        </div>
        <div className="user__rating">
          {ratings &&
            filtered_ratings.map((rating, i) => {
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
