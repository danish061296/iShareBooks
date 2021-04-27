import React, {useState, useEffect} from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '@material-ui/core/Button';
import DialogBox from '../components/DialogBox';
import SearchIcon from '@material-ui/icons/Search';
import './FreeBooks.css';
import FreeBookModal from './FreeBookModal';
import {useDispatch} from 'react-redux';
import {setSearchField} from '../redux/actions/userActions';
import BookGrid from './BookGrid';
import axios from 'axios';
const FreeBooks = () => {
  const [open, setOpen] = useState(false);
  const [freeBooks, setFreeBooks] = useState([]);
  const dispatch = useDispatch();
  const handleKeyDown = (e) => {};
  const handleClick = (e) => {};

  useEffect(async () => {
    const res = await axios.get(
      'http://' + window.location.hostname + ':3001/freebooks'
    );
    console.log(res.data);
    setFreeBooks(res.data.results);
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div className='freebooks'>
      <Navigation />
      <div className='freebooks__page'>
        <div className='freebooks__container'>
          <div className='search__content'>
            <input
              className='searchBar'
              type='text'
              placeholder='Search by textbook name, department...'
              required
              onKeyDown={handleKeyDown}
              onChange={(e) => dispatch(setSearchField(e.target.value))}
            />
            <button onClick={handleClick} className='search__btn'>
              <SearchIcon className='search__icon' />
            </button>
          </div>
          <div className='post__book'>
            <div className='post__book__container'>
              <p className='post__book__text'>POST YOUR BOOK FOR FREE</p>
              <Button className='post__book__button' onClick={handleClickOpen}>
                POST
              </Button>
              <DialogBox
                open={open}
                setOpen={setOpen}
                title='POST A BOOK FOR FREE'
                button='DONE'
              >
                <FreeBookModal />
              </DialogBox>
            </div>
          </div>
          <div className='post__book__content'>
            <h2 className='post__book__title'>BOOKS FOR FREE</h2>
          </div>
        </div>
        <div className='post__book__grid'>
          {freeBooks.map((book, index) => {
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
                username={book.name}
                defaultImage='default'
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FreeBooks;
