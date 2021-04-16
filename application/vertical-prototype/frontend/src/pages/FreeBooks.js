import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '@material-ui/core/Button';
import DialogBox from '../components/DialogBox';
import SearchIcon from '@material-ui/icons/Search';
import './FreeBooks.css';
import FreeBookModal from './FreeBookModal';
import { useDispatch } from 'react-redux';
import { setSearchField } from '../redux/actions/userActions';

const FreeBooks = () => {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const handleKeyDown = (e) => {};
  const handleClick = (e) => {};

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div className="freebooks">
      <Navigation />
      <div className="freebooks__page">
        <div className="freebooks__container">
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
              <p className="post__book__text">POST YOUR BOOK FOR FREE</p>
              <Button className="post__book__button" onClick={handleClickOpen}>
                POST
              </Button>
              <DialogBox
                open={open}
                setOpen={setOpen}
                title="DONATE YOUR BOOKS"
                button="DONATE"
              >
                <FreeBookModal />
              </DialogBox>
            </div>
          </div>
          <div className="post__book__content">
            <h2 className="post__book__title">BOOKS FOR FREE</h2>
          </div>
        </div>

        <div className="post__book__grid">
          <div className="post__book__details">
            <img
              src="https://via.placeholder.com/150"
              alt="book_image"
              className="post__book__image"
            />
            <Button className="free__book__button">Add to cart</Button>
          </div>
          <div className="post__book__details">
            <img
              src="https://via.placeholder.com/150"
              alt="book_image"
              className="post__book__image"
            />
            <Button className="free__book__button">Add to cart</Button>
          </div>
          <div className="post__book__details">
            <img
              src="https://via.placeholder.com/150"
              alt="book_image"
              className="post__book__image"
            />
            <Button className="free__book__button">Add to cart</Button>
          </div>
          <div className="post__book__details">
            <img
              src="https://via.placeholder.com/150"
              alt="book_image"
              className="post__book__image"
            />
            <Button className="free__book__button">Add to cart</Button>
          </div>
          <div className="post__book__details">
            <img
              src="https://via.placeholder.com/150"
              alt="book_image"
              className="post__book__image"
            />
            <Button className="free__book__button">Add to cart</Button>
          </div>
          <div className="post__book__details">
            <img
              src="https://via.placeholder.com/150"
              alt="book_image"
              className="post__book__image"
            />
            <Button className="free__book__button">Add to cart</Button>
          </div>
          <div className="post__book__details">
            <img
              src="https://via.placeholder.com/150"
              alt="book_image"
              className="post__book__image"
            />
            <Button className="free__book__button">Add to cart</Button>
          </div>
          <div className="post__book__details">
            <img
              src="https://via.placeholder.com/150"
              alt="book_image"
              className="post__book__image"
            />
            <Button className="free__book__button">Add to cart</Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FreeBooks;
