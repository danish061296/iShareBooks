import React from 'react';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './BuyBooks.css';

import {setCartItem, setViewBook} from '../redux/actions/userActions';

const BookGrid = ({
  id,
  title,
  author,
  department,
  isbn,
  price,
  image,
  type,
}) => {
  const dispatch = useDispatch();

  const handleBookDetail = () => {
    dispatch(
      setViewBook({
        id,
        title,
        author,
        department,
        isbn,
        price,
        image,
        type,
      })
    );

    return <Redirect to='/viewbook' />;
  };

  const handleAddCart = () => {
    // console.log(itemsArray.title);
    dispatch(
      setCartItem({
        id,
        title,
        author,
        department,
        isbn,
        price,
        image,
        type,
      })
    );
  };

  return (
    <div>
      {price != 0 && (
        <div className='post__book__details'>
          <img
            style={{height: 200, width: 200}}
            src={image}
            alt='book_image'
            className='post__book__image'
          />
          <Button className='buy__book__button' onClick={handleAddCart}>
            Add to cart
          </Button>

          <p className='post__book__price'>{price}</p>
        </div>
      )}
      {price == 0 && (
        <div className='post__book__details'>
          <img
            style={{height: 200, width: 200}}
            src={image}
            alt='book_image'
            className='post__book__image'
          />
          <Button className='buy__book__button' onClick={handleAddCart}>
            Add to cart
          </Button>

          <p className='post__book__price'>$0.00</p>
        </div>
      )}
    </div>
  );
};

export default BookGrid;
