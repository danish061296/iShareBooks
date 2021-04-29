import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import './BuyBooks.css';
import axios from 'axios';
import DialogBox from '../components/DialogBox';
import { useDispatch } from 'react-redux';
import BuyBookModal from './BuyBookModal';
import BookGrid from './BookGrid';

import { setSearchField } from '../redux/actions/userActions';

const BuyBooks = () => {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const handleKeyDown = (e) => {};
  const handleSearch = (e) => {};

  const [paidBooks, setPaidBooks] = useState([]);
  React.useEffect(async () => {
    // Aos.init({ duration: 1600 });

    const res = await axios.get(
      'http://' + window.location.hostname + ':3001/paidbooks'
    );
    console.log(res.data);
    setPaidBooks(res.data.results);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

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
        </div>
        <div className="post__book__grid">
          {paidBooks.map((book, index) => {
            return (
              <BookGrid
                key={index}
                id={book.book_id}
                title={book.title}
                author={book.author}
                department={book.department}
                isbn={book.isbn}
                condition={book.condition}
                image={book.image}
                price={book.cost}
                seller={book.name}
                sellerEmail={book.email}
                defaultImage="default"
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuyBooks;
