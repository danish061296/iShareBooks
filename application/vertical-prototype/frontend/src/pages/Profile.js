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
  const [sellerRating, setSellerRating] = React.useState(0);
  const [userRating, setUserRating] = React.useState(0);
  const username = useSelector((state) => state.userReducer.username);
  const email = useSelector((state) => state.userReducer.email);
  const sellerid = useSelector((state) => state.userReducer.sellerid);
  const name = useSelector((state) => state.userReducer.name);
  const sellerEmail = useSelector((state) => state.userReducer.sellerEmail);
  const userid = useSelector((state) => state.userReducer.userid);

  React.useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `http://${window.location.hostname}:3001/get_rating/${sellerid}`
      );
      console.log(res.data);
      setSellerRating(res.data.rating);
    }

    fetchData();
  }, []);

  React.useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `http://${window.location.hostname}:3001/get_rating/${userid}`
      );
      console.log(res.data);
      setUserRating(res.data.rating);
    }

    fetchData();
  }, []);

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
              <div className="username">{name}</div>

              <div className="email">
                <a href="">{sellerEmail}</a>
              </div>

              {sellerRating ? (
                <div className="rating_num">{sellerRating}</div>
              ) : (
                <div className="rating_num">{5}</div>
              )}

              <div className="rating_vis">
                {sellerRating && (
                  <div className="stars">
                    <ReactStars
                      size={40}
                      value={sellerRating}
                      isHalf={false}
                      edit={false}
                      numberOfStars={5}
                      name="rating"
                    />
                  </div>
                )}

                {!sellerRating && (
                  <div className="stars">
                    <ReactStars
                      size={40}
                      value={5}
                      isHalf={false}
                      edit={false}
                      numberOfStars={5}
                      name="rating"
                    />
                  </div>
                )}
              </div>
            </div>
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
                <a href="./profile">{email}</a>
              </div>

              {userRating ? (
                <div className="rating_num">{userRating}</div>
              ) : (
                <div className="rating_num">{5}</div>
              )}

              <div className="rating_vis">
                {userRating && (
                  <div className="stars">
                    <ReactStars
                      size={40}
                      value={userRating}
                      isHalf={false}
                      edit={false}
                      numberOfStars={5}
                      name="rating"
                    />
                  </div>
                )}
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

      <Footer />
    </div>
  );
}
