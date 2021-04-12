import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import './BuyBooks.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchField } from '../redux/actions/userActions';

const BuyBooks = () => {
  const dispatch = useDispatch();
  const handleKeyDown = (e) => {};
  const handleClick = (e) => {};

  return (
    <div className="buybooks">
      <Navigation />
      <div className="buybooks__page">
        <div className="buybooks__container">
          <div className="search__content">
            <input
              className="searchBar"
              type="text"
              placeholder="Search by textbook name, department..."
              required
              onKeyDown={handleKeyDown}
              onChange={(e) => dispatch(setSearchField(e.target.value))}
            />
            <button onClick={handleClick} className="search__btn">
              <SearchIcon className="search__icon" />
            </button>
          </div>
          <div className="post__book">
            <div className="post__book__container">
              <p className="post__book__text">POST YOUR BOOK FOR SELL</p>
              <Button className="post__book__button">POST</Button>
            </div>
          </div>
          <div className="post__book__content">
            <h2 className="post__book__title">BOOKS TO BUY</h2>
          </div>
        </div>

        <div className="post__book__grid">
          <div className="post__book__details">
            <img
              src="https://via.placeholder.com/150"
              alt="book_image"
              className="post__book__image"
            />
            <Button className="buy__book__button">Add to cart</Button>

            <p className="post__book__price">$12</p>
          </div>
          <div className="post__book__details">
            <img
              src="https://via.placeholder.com/150"
              alt="book_image"
              className="post__book__image"
            />
            <Button className="buy__book__button">Add to cart</Button>

            <p className="post__book__price">$12</p>
          </div>
          <div className="post__book__details">
            <img
              src="https://via.placeholder.com/150"
              alt="book_image"
              className="post__book__image"
            />
            <Button className="buy__book__button">Add to cart</Button>

            <p className="post__book__price">$12</p>
          </div>
          <div className="post__book__details">
            <img
              src="https://via.placeholder.com/150"
              alt="book_image"
              className="post__book__image"
            />
            <Button className="buy__book__button">Add to cart</Button>

            <p className="post__book__price">$12</p>
          </div>
          <div className="post__book__details">
            <img
              src="https://via.placeholder.com/150"
              alt="book_image"
              className="post__book__image"
            />
            <Button className="buy__book__button">Add to cart</Button>

            <p className="post__book__price">$12</p>
          </div>
          <div className="post__book__details">
            <img
              src="https://via.placeholder.com/150"
              alt="book_image"
              className="post__book__image"
            />
            <Button className="buy__book__button">Add to cart</Button>

            <p className="post__book__price">$12</p>
          </div>
          <div className="post__book__details">
            <img
              src="https://via.placeholder.com/150"
              alt="book_image"
              className="post__book__image"
            />
            <Button className="buy__book__button">Add to cart</Button>

            <p className="post__book__price">$12</p>
          </div>
          <div className="post__book__details">
            <img
              src="https://via.placeholder.com/150"
              alt="book_image"
              className="post__book__image"
            />
            <Button className="buy__book__button">Add to cart</Button>

            <p className="post__book__price">$12</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuyBooks;
