import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './BuyBooks.css';

import {
  setCartItem,
  setViewBook,
  setRating,
  setSeller,
  setSellerEmail,
} from '../redux/actions/userActions';

const BookGrid = ({
  id,
  title,
  author,
  department,
  isbn,
  condition,
  image,
  price,
  type,
  name,
  sellerEmail,
  sellerid,
}) => {
  var price_hold = price;

  if (isNaN(price)) {
    price = 0.0;
  }

  const dispatch = useDispatch();

  const handleBookDetail = () => {
    dispatch(
      setViewBook({
        id,
        title,
        author,
        department,
        isbn,
        condition,
        image,
        price,
        name,
        sellerEmail,
        sellerid,
      })
    );

    return <Redirect to="/viewbook" />;
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
        condition,
        image,
        price,
        type,
        name,
      })
    );
    dispatch(
      setRating({
        sellerid,
        name,
      })
    );
    console.log('SELL ID:' + sellerid);
  };

  dispatch(setSellerEmail(sellerEmail));

  return (
    <div>
      {price !== 0 && (
        <div className="post__book__details">
          <Link to="/viewbook" onClick={handleBookDetail}>
            <img
              style={{ height: 230, width: 170 }}
              src={`data:image/jpeg;base64,${image}`}
              alt="book_image"
              className="post__book__image"
            />
          </Link>
          <Button className="buy__book__button" onClick={handleAddCart}>
            Add to cart
          </Button>

          <p className="post__book__price">${price}</p>
        </div>
      )}
      {price === 0 && (
        <div className="post__book__details">
          <Link to="/viewbook" onClick={handleBookDetail}>
            <img
              style={{ height: 230, width: 170 }}
              src={`data:image/jpeg;base64,${image}`}
              alt="book_image"
              className="post__book__image"
            />
          </Link>
          {/* <Button className="buy__book__button" onClick={handleAddCart}>
            Add to cart
          </Button> */}

          <p className="post__book__price"></p>
        </div>
      )}
    </div>
  );
};

export default BookGrid;
