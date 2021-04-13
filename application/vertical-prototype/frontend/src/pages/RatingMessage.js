import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import ReactStars from 'react-rating-stars-component';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Link as LinkR } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Navigation from '../components/Navigation';

import Axios from 'axios';
import ReactNotification from 'react-notifications-component';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './RatingMessage.css';
import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.info.dark,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RatingMessage() {
  var confirmation_num = 12314322324;
  var name = 'Eden';
  var seller_name = 'Abraham';

  return (
    <div>
      <Navigation />
      <div className="main__container">
        <h1>Thank You for Placing your Order</h1>
        <Box mt={10}></Box>
        <h2>
          Hi {name}, your confirmation number is <br></br>#{confirmation_num}. A
          confirmation <br></br>
          has been sent to your email
        </h2>
        <Box mt={10}></Box>
        <hr
          style={{
            color: 'red',
            backgroundColor: 'black',
            margin: 'auto',
            height: 2,
            width: '45%',
          }}
        />
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
