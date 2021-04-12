import React from 'react';
import { Star } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import './ListingItem.css';

const ListingItem = ({
  id,
  title,
  author,
  department,
  isbn,
  condition,
  price,
  image,
}) => {
  // remove item from the cart
  const removeFromCart = () => {};

  return (
    <div className="listingitem__item">
      <img
        className="listingitem__item__image"
        src={image}
        alt="Image_loading"
      />
      <div className="listingitem__item__details">
        <p className="listingitem__item__title">{title}</p>
        <p className="listingitem__item__author">
          <strong>Author: </strong>
          {author}
        </p>
        <p className="listingitem__item__department">
          <strong>Department: </strong>
          {department}
        </p>
        <p className="listingitem__item__condition">
          <strong>Condition: </strong>
          {condition}
        </p>
        <p className="listingitem__item__isbn">
          <strong>ISBN: </strong>
          {isbn}
        </p>

        <p className="listingitem__item__price">
          ${price}
          {/* <small>$</small>
          <strong>{price}</strong> */}
        </p>

        {/* <div className="listingitem__item__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <Star className="rating__star" />
              </p>
            ))}
        </div> */}
        <Button onClick={removeFromCart} className="listingitem__item__button">
          REMOVE FROM CART
        </Button>
      </div>
    </div>
  );
};

export default ListingItem;
