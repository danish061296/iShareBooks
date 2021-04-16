import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import ReactStars from 'react-rating-stars-component';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Link as LinkR } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Axios from 'axios';
import ReactNotification from 'react-notifications-component';

import './RatingMessage.css';
import Footer from '../components/Footer';

export default function RatingMessage() {
  var confirmation_num = 12314322324;
  var name = 'Eden';
  var seller_name = 'Abraham';

  return (
    <div>
      <Navigation />
      <div className="main__container">
        <h1 className="thankyou__text">Thank You for Placing your Order</h1>
        <Box mt={10}></Box>
        <h2 className="confirmation__text">
          Hi <strong>{name}</strong>, your confirmation number is <br></br>#
          {confirmation_num}. A confirmation <br></br>
          has been sent to your email
        </h2>
        {/* <Box mt={10}></Box> */}
        {/* <hr
          style={{
            color: 'red',
            backgroundColor: 'black',
            margin: 'auto',
            height: 2,
            width: '45%',
          }}
        /> */}
        <Box mt={10}></Box>
        <h2>Rate your transaction with {seller_name}?</h2>
        <Box mt={10}></Box>
        <div className="rating_container">
          <div className="stars_container">
            <ReactStars
              size={70}
              value={5}
              isHalf={true}
              edit={true}
              numberOfStars={5}
              name="rating"
            />
          </div>
        </div>
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
