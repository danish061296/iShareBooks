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
import BookGrid from './BookGrid';

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
          <BookGrid
            id="356234"
            title="English Book"
            author="Bob Michaels"
            department="English"
            isbn={837748374}
            condition="Used"
            price={0}
            image="https://m.media-amazon.com/images/I/8110CWXpN5L._AC_UL640_FMwebp_QL65_.jpg"
          />

          <BookGrid
            id="3578363"
            title="Computer Book"
            author="John Doe"
            department="Computer Science"
            isbn={1235678424394}
            condition="Used"
            price={0}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFav9oFDbnaFFCMj-4ZalqZ7sAk0bCuwN-MIaO3_7Vlf3CgWccM0YGtJYiDRZM8Imx_FfB9gs&usqp=CAc"
          />
          <BookGrid
            id="7315352"
            title="Literature Book"
            author="Alice Jane"
            department="Literature"
            isbn={123535464}
            condition="New"
            price={0}
            image="https://m.media-amazon.com/images/I/81xCpb+RC1L._AC_UL640_FMwebp_QL65_.jpg"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TradeBooks;
