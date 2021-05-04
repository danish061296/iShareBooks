import React, {useState} from 'react';
import Navigation from '../components/Navigation';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import './BuyBooks.css';
import axios from 'axios';
import DialogBox from '../components/DialogBox';
import {useDispatch} from 'react-redux';
import BuyBookModal from './BuyBookModal';
import BookGrid from './BookGrid';

import {setSearchField} from '../redux/actions/userActions';

const BuyBooks = () => {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const handleKeyDown = (e) => {};
  const handleSearch = (e) => {};

  const [paidBooks, setPaidBooks] = useState([]);
  React.useEffect(async () => {


    const res = await axios.get(`http://${window.location.hostname}:3001/paidbooks`)
    setPaidBooks(res.data.results);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div className='buybooks'>
      <Navigation />
      <div className='buybooks__page'>
      <Search />
        <div className='buybooks__container'>
          <div className='post__book'>
            <div className='post__book__container'>
              <p className='post__book__text'>POST YOUR BOOK FOR SELL</p>
              <Button className='post__book__button' onClick={handleClickOpen}>
                POST
              </Button>
              <DialogBox
                open={open}
                setOpen={setOpen}
                title='SELL YOUR BOOK'
                button='DONE'
              >
                <BuyBookModal />
              </DialogBox>
            </div>
          </div>
          <div className='post__book__content'>
            <h2 className='post__book__title'>BOOKS TO BUY</h2>
          </div>
        </div>
        <div className='post__book__grid'>
  
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
                name={book.name}
                defaultImage='default'
              />
            );
          })}
          {/* <BookGrid
            id="356234"
            title="English Book"
            author="Bob Michaels"
            department="English"
            isbn={837748374}
            condition="Used"
            type="paid"
            price={27.01}
            image="https://m.media-amazon.com/images/I/8110CWXpN5L._AC_UL640_FMwebp_QL65_.jpg"
          />

          <BookGrid
            id="3578363"
            title="Computer Book"
            author="John Doe"
            department="Computer Science"
            isbn={123567894}
            condition="Used"
            type="paid"
            price={120.67}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFav9oFDbnaFFCMj-4ZalqZ7sAk0bCuwN-MIaO3_7Vlf3CgWccM0YGtJYiDRZM8Imx_FfB9gs&usqp=CAc"
          />
          <BookGrid
            id="7315352"
            title="Literature Book"
            author="Alice Jane"
            department="Literature"
            isbn={123535464}
            condition="New"
            type="paid"
            price={30.99}
            image="https://m.media-amazon.com/images/I/81xCpb+RC1L._AC_UL640_FMwebp_QL65_.jpg"
          /> */}
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default BuyBooks;
