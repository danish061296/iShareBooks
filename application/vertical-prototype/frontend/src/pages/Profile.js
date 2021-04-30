import React from 'react';
import Button from '@material-ui/core/Button';
import ReactStars from 'react-rating-stars-component';
import { Link as LinkR } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './Profile.css';
import Footer from '../components/Footer';
import Tippy from '@tippyjs/react';

export default function Profile() {
  // var rating = 3.7;

  const username = useSelector((state) => state.userReducer.username);
  const email = useSelector((state) => state.userReducer.email);
  const userid = useSelector((state) => state.userReducer.userid);
  const name = useSelector((state) => state.userReducer.name);
  const userrating = useSelector((state) => state.userReducer.userrating);

  console.log(userrating);
  const sellerEmail = useSelector((state) => state.userReducer.sellerEmail);
  return (
    <div>
      <Navigation />

      {name && (
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
            <div className="user_profile_info">
              <div className="username">
                {name}
                {/* {name.charAt(0).toUpperCase() + name.slice(1)} */}
              </div>

              <div className="email">
                <a href="">{sellerEmail}</a>
              </div>

              <div className="rating_num">{userrating}</div>

              <div className="rating_vis">
                <div className="stars">
                  <ReactStars
                    size={40}
                    value={userrating}
                    isHalf={false}
                    edit={false}
                    numberOfStars={5}
                    name="rating"
                  />
                </div>
              </div>
            </div>
            {/* <div className="button_container">
            <LinkR
              style={{
                color: 'white',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              to="/profile"
            >
              <Tippy content="Will be implemented in future" placement="bottom">
                <Button className="save_button">Save</Button>
              </Tippy>
            </LinkR>
            <LinkR
              style={{
                color: 'white',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              to="/profile"
            >
              <Tippy content="Will be implemented in future" placement="bottom">
                <Button className="delete_button">Delete</Button>
              </Tippy>
            </LinkR>
          </div> */}
          </div>

          <div className="user_books_container">
            <h2 className="books__posted">Books Posted (10)</h2>
          </div>
        </div>
      )}
      {username && (
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
            <div className="user_profile_info">
              <div className="username">
                {username.charAt(0).toUpperCase() + username.slice(1)}
              </div>

              <div className="email">
                <a href="">{email}</a>
              </div>

              <div className="rating_num">{userrating}</div>

              <div className="rating_vis">
                <div className="stars">
                  <ReactStars
                    size={40}
                    value={userrating}
                    isHalf={false}
                    edit={false}
                    numberOfStars={5}
                    name="rating"
                  />
                </div>
              </div>
            </div>
            <div className="button_container">
              <LinkR
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                to="/profile"
              >
                <Tippy
                  content="Will be implemented in future"
                  placement="bottom"
                >
                  <Button className="save_button">Save</Button>
                </Tippy>
              </LinkR>
              <LinkR
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                to="/profile"
              >
                <Tippy
                  content="Will be implemented in future"
                  placement="bottom"
                >
                  <Button className="delete_button">Delete</Button>
                </Tippy>
              </LinkR>
            </div>
          </div>

          <div className="user_books_container">
            <h2 className="books__posted">Books Posted (10)</h2>
          </div>
        </div>
      )}

      <div>
        {/* <div className="profile__Container">
        <div className="top">
          <div className="image_container">
            <img
              className="image_circle"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96cmVJnAqOtv-ps5qnH-62RLVBh_ULqMD4PmBh1J6n7FTxlc7o4ZowyZT3C5v8Np_DKU&usqp=CAU"
            ></img>
          </div>
        </div>

        <div className="user_information">
          <div className="user_profile_info">
            <div className="username">
              {username.charAt(0).toUpperCase() + username.slice(1)}
            </div>

            <div className="email">
              <a href="">{email}</a>
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
          <div className="button_container">
            <LinkR
              style={{
                color: 'white',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              to="/profile"
            >
              <Tippy content="Will be implemented in future" placement="bottom">
                <Button className="save_button">Save</Button>
              </Tippy>
            </LinkR>
            <LinkR
              style={{
                color: 'white',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              to="/profile"
            >
              <Tippy content="Will be implemented in future" placement="bottom">
                <Button className="delete_button">Delete</Button>
              </Tippy>
            </LinkR>
          </div>
        </div>

        <div className="user_books_container">
          <h2 className="books__posted">Books Posted (10)</h2>
        </div>
      </div>
      <div> */}
        {/* <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box mt={10}></Box>
        </Container> */}

        <Footer />
      </div>
    </div>
  );
}
