import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import ReactStars from 'react-rating-stars-component';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Navigation from '../components/Navigation';
import { useSelector } from 'react-redux';
import axios from 'axios';

import './RatingMessage.css';
import Footer from '../components/Footer';
import UserRating from './UserRating';

export default function RatingMessage() {
  var confirmation_num = 12314322324;
  var name = 'Eden';
  const ratings = useSelector((state) => state.userReducer.ratings);
  const cart = useSelector((state) => state.userReducer.cart);

  var filtered = [];
  console.log("RATE");

  var filtered_ratings = cart.filter(function(e, i) {
    if (filtered.includes(cart[i].name)) {
    } else {
      filtered.push(cart[i].name);
      return cart[i];
    }

  });

  console.log("newRATE");
  console.log(filtered_ratings);


  return (
    <div className="ratingmessage">
      <Navigation />
      <div className="main__container">
        <div className="ratingmessage__top">
          <h1 className="thankyou__text">Thank You for Placing your Order.</h1>

          <p className="confirmation__text">
            Hi <strong>{name}</strong>, your confirmation number is #
            {confirmation_num}. A confirmation has been sent to your email.
          </p>
          <p className="confirmation__text2">
            Please rate one or more sellers if you liked their services.
          </p>
        </div>

        {/* {cart &&
          cart.map((item, i) => {
            return <UserRating key={i} id={item.id} username={item.username} />;
          })} */}
        <div className="user__rating">
          {ratings &&
            filtered_ratings.map((rating, i) => {
              console.log(rating);
              return (
                <UserRating key={i} id={rating.id} name={rating.name} />
              );

            })}
        </div>
      </div>

      <div>
        {/* <Container component="main" maxWidth="xs">
          <CssBaseline />
        </Container> */}

        <Footer />
      </div>
    </div>
  );
}
