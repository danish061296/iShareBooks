import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import DialogBox from '../components/DialogBox';
import TradeBookModal from './TradeBookModal';
import './TradeBooks.css';
import { useDispatch } from 'react-redux';
import { setSearchField } from '../redux/actions/userActions';
import BookGrid from './BookGrid';
import axios from 'axios';

const TradeBooks = () => {
  const [open, setOpen] = useState(false);
  const [tradeBooks, setTradeBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `http://${window.location.hostname}:3001/tradebooks`
      );
      console.log(res.data.results);
      setTradeBooks(res.data.results);
    }
    fetchData();
  }, []);
  const dispatch = useDispatch();

  const handleKeyDown = (e) => {};
  const handleClick = (e) => {};

  const handleClickOpen = () => {
    setOpen(true);
  };

  console.log(tradeBooks);

  return (
    <div className="tradebooks">
      <Navigation />
      <div className="tradebooks__page">
        <div className="tradebooks__container">
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
              <p className="post__book__text">POST YOUR BOOK FOR TRADE</p>
              <Button className="post__book__button" onClick={handleClickOpen}>
                POST
              </Button>
              <DialogBox
                open={open}
                setOpen={setOpen}
                title="TRADE YOUR BOOK"
                button="DONE"
              >
                <TradeBookModal />
              </DialogBox>
            </div>
          </div>
          <div className="post__book__content">
            <h2 className="post__book__title">BOOKS TO TRADE</h2>
          </div>
        </div>
        <div className="post__book__grid">
          {tradeBooks.map((book, index) => {
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
                price={0}
                sellerid={book.user_id}
                type="trade"
                name={book.name}
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

export default TradeBooks;
