import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';

import { Link, Redirect } from 'react-router-dom';
import './BuyBooks.css';

import {
  setCartItem,
  setViewBook,
  setRating,
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
  sellerid,
  name,
  sellerEmail,
}) => {
  if (isNaN(price)) {
    price = 0.0;
  }

  const dispatch = useDispatch();
  const [mouseEnter, setMouseEnter] = React.useState(false);

  const handleMouseEnter = () => {
    if (!window.matchMedia('screen and (max-width: 768px)').matches) {
      setMouseEnter(true);
    }
  };
  const handleMouseLeave = () => {
    if (!window.matchMedia('screen and (max-width: 768px)').matches) {
      setMouseEnter(false);
    }
  };

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
        sellerid,
        sellerEmail,
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
        id,
        name,
      })
    );
  };

  dispatch(setSellerEmail(sellerEmail));
  // const imagetest = Buffer.from(image.data, 'base64');

  return (
    <div>
      {price !== 0 && (
        <div
          className="post__book__details"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/viewbook" onClick={handleBookDetail}>
            <img
              style={{ height: 230, width: 170 }}
              src={`data:image/jpeg;base64,${image}`}
              alt="book_image"
              className="post__book__image"
            />
          </Link>
          <div className="button__buy" onClick={handleAddCart}>
            <span className="button__text">ADD TO CART</span>
          </div>

          <p className="post__book__price">${price}</p>
        </div>
      )}
      {price === 0 && (
        <div
          className="post__book__details"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/viewbook" onClick={handleBookDetail}>
            <img
              style={{ height: 230, width: 170 }}
              src={`data:image/jpeg;base64,${image}`}
              alt="book_image"
              className={
                mouseEnter ? 'post__book__image__hover' : 'post__book__image'
              }
            />
          </Link>
          <div className="button__buy" onClick={handleAddCart}>
            <span className="button__text">ADD TO CART</span>
          </div>

          <p className="post__book__price">$0.00</p>
        </div>
      )}
    </div>
  );
};

export default BookGrid;
