import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import DialogBox from '../components/DialogBox';
import TradeBookModal from './TradeBookModal';
import './TradeBooks.css';
import { useDispatch } from 'react-redux';
import { setSearchField } from '../redux/actions/userActions';

const TradeBooks = () => {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const handleKeyDown = (e) => {};
  const handleClick = (e) => {};

  const handleClickOpen = () => {
    setOpen(true);
  };

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
                button="TRADE"
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
          <div className="post__book__details">
            <img
              src="https://via.placeholder.com/150"
              alt="book_image"
              className="post__book__image"
            />
            <Button className="trade__book__button">Add to cart</Button>
          </div>
          <div className="post__book__details">
            <img
              src="https://via.placeholder.com/150"
              alt="book_image"
              className="post__book__image"
            />
            <Button className="trade__book__button">Add to cart</Button>
          </div>
          <div className="post__book__details">
            <img
              src="https://via.placeholder.com/150"
              alt="book_image"
              className="post__book__image"
            />
            <Button className="trade__book__button">Add to cart</Button>
          </div>
          <div className="post__book__details">
            <img
              src="https://via.placeholder.com/150"
              alt="book_image"
              className="post__book__image"
            />
            <Button className="trade__book__button">Add to cart</Button>
          </div>
          <div className="post__book__details">
            <img
              src="https://via.placeholder.com/150"
              alt="book_image"
              className="post__book__image"
            />
            <Button className="trade__book__button">Add to cart</Button>
          </div>
          <div className="post__book__details">
            <img
              src="https://via.placeholder.com/150"
              alt="book_image"
              className="post__book__image"
            />
            <Button className="trade__book__button">Add to cart</Button>
          </div>
          <div className="post__book__details">
            <img
              src="https://via.placeholder.com/150"
              alt="book_image"
              className="post__book__image"
            />
            <Button className="trade__book__button">Add to cart</Button>
          </div>
          <div className="post__book__details">
            <img
              src="https://via.placeholder.com/150"
              alt="book_image"
              className="post__book__image"
            />
            <Button className="trade__book__button">Add to cart</Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TradeBooks;
