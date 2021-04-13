import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import ReactStars from 'react-rating-stars-component';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Link as LinkR } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Navigation from '../components/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import {
  setEmail,
  setPassword,
  setIsLoggedIn,
} from '../redux/actions/userActions';
import Axios from 'axios';
import ReactNotification from 'react-notifications-component';
import * as Yup from 'yup';
import './Profile.css';
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

export default function Profile() {
  var rating = 3.7;

  return (
    <div>
      <Navigation />

      <div className="profile__Container">
        <div className="top">
          <div className="image_container">
            <img
              className="image_circle"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96cmVJnAqOtv-ps5qnH-62RLVBh_ULqMD4PmBh1J6n7FTxlc7o4ZowyZT3C5v8Np_DKU&usqp=CAU"
            ></img>
          </div>
        </div>

        <div className="user_information">
          <div className="username">John Doe</div>

          <div className="email">
            <a href="">johndoe@gmail.com</a>
          </div>

          <div className="rating_num">{rating}</div>

          <div className="rating_vis">
            <div className="stars">
              <ReactStars
                size={40}
                value={rating}
                isHalf={true}
                edit={false}
                numberOfStars={5}
                name="rating"
              />
            </div>
          </div>
        </div>

        <div className="num_books">10 books</div>

        <div className="button_container">
          <LinkR
            style={{
              color: 'white',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
            to="/profile"
          >
            <Button className="save_button">Save</Button>
          </LinkR>
          <LinkR
            style={{
              color: 'white',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
            to="/profile"
          >
            <Button className="delete_button">Delete</Button>
          </LinkR>
        </div>

        <div className="user_books_container">
          <h2>Books Posted</h2>
        </div>
      </div>
      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box mt={10}></Box>
        </Container>

        <Footer />
      </div>
    </div>
  );
}
