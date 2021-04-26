import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
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

  return (
    <div>
      <Navigation />
      <div className="main__container">
        <h1 className="thankyou__text">Thank You for Placing your Order.</h1>

        <p className="confirmation__text">
          Hi <strong>{name}</strong>, your confirmation number is #
          {confirmation_num}. A confirmation has been sent to your email.
        </p>
        <p className="confirmation__text2">
          Please rate one or more sellers if you liked their services.
        </p>

        {ratings &&
          ratings.map((rating, i) => {
            return (
              <UserRating key={i} id={rating.id} username={rating.username} />
            );
          })}
      </div>

      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
        </Container>

        <Footer />
      </div>
    </div>
  );
}
