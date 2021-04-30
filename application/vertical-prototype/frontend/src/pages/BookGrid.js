import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './BuyBooks.css';

import {
  setCartItem,
  setViewBook,
  setRating,
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
        condition,
        isbn,
        image,
        price,
        type,
        name,
      })
    );
    dispatch(
      setRating({
        id,
        name,
      })
    );
  };

  // const imagetest = Buffer.from(image.data, 'base64');

  return (
    <div>
      {price !== 0 && (
        <div className="post__book__details">
          <Link to="/viewbook" onClick={handleBookDetail}>
            <img
              style={{ height: 200, width: 200 }}
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
              style={{ height: 200, width: 200 }}
              src={`data:image/jpeg;base64,${image}`}
              alt="book_image"
              className="post__book__image"
            />
          </Link>
          <Button className="buy__book__button" onClick={handleAddCart}>
            Add to cart
          </Button>

          <p className="post__book__price"></p>
        </div>
      )}
    </div>
  );
};

export default BookGrid;
