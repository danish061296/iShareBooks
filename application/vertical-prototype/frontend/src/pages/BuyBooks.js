import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import './BuyBooks.css';

import DialogBox from '../components/DialogBox';
import { useDispatch } from 'react-redux';
import BuyBookModal from './BuyBookModal';
import BookGrid from './BookGrid';
import ViewBook from './ViewBook';

import { setSearchField } from '../redux/actions/userActions';
import DisplayBooks from '../components/DisplayBooks';

import axios from 'axios';
import {
  setPosts,
  setPosts2,
} from '../redux/actions/userActions';

const BuyBooks = () => {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const handleKeyDown = (e) => {};
  const handleSearch = (e) => {};
  const handleBookDetail = (
    id,
    title,
    author,
    department,
    isbn,
    condition,
    price,
    image
  ) => {
    return <ViewBook id={id} />;
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

 
  var timer_counter = 0;
  var intervalId = window.setInterval(function(){ // Temporary way -- constantly update the store -- prevents Data loading infintely
    if (timer_counter == 5) {
      window.clearInterval(intervalId);
    }
    timer_counter++;

    console.log("ABC!!" + timer_counter);
    const tableName = {
      table: 'paidbooks',
    };
    axios.post("http://localhost:3001/getbooklist", tableName).then((response) => {
        if (response.data.msg) {
          dispatch(setPosts(response.data.results));
      }
    });
  }, 1000);

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
            <button onClick={handleSearch} className="search__btn">
              <SearchIcon className="search__icon" />
            </button>
          </div>
          <div className="post__book">
            <div className="post__book__container">
              <p className="post__book__text">POST YOUR BOOK FOR SELL</p>
              <Button className="post__book__button" onClick={handleClickOpen}>
                POST
              </Button>
              <DialogBox
                open={open}
                setOpen={setOpen}
                title="SELL YOUR BOOK"
                button="DONE"
              >
                <BuyBookModal />
              </DialogBox>
            </div>
          </div>
          <div className="post__book__content">
            <h2 className="post__book__title">BOOKS TO BUY</h2>
          </div>

          <DisplayBooks 
            department="Literature"
          />
          <DisplayBooks 
            department="Computer Science"
          />

          <DisplayBooks 
            department="History"
          />

        </div>
      

        {/* <div className="post__book__grid">
          {itemsArray.map((item) => (
            <div className="post__book__details">
              <img
                style={{ height: 200, width: 200 }}
                src={item.image}
                alt="book_image"
                className="post__book__image"
              />
              <Button
                className="buy__book__button"
                onClick={handleAddCart(
                  item.id,
                  item.title,
                  item.author,
                  item.department,
                  item.isbn,
                  item.price,
                  item.image
                )}
              >
                Add to cart
              </Button>

              <p className="post__book__price">{item.price}</p>
            </div>
          ))}
        </div> */}

        {/* <div className="post__book__grid">
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
        </div> */}
      </div>

      <Footer />
    </div>
  );
};

export default BuyBooks;
