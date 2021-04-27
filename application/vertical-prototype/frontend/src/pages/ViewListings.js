import React from 'react';
import './ViewListings.css';
import ListingItem from '../components/ListingItem';
import TotalAmount from '../components/TotalAmount';
import Navigation from '../components/Navigation';

import { useSelector } from 'react-redux';

import Footer from '../components/Footer';

const ViewListings = () => {
  const cart = useSelector((state) => state.userReducer.cart);

  return (
    <div className="viewlistings__container">
      <Navigation />
      <div className="viewlisting">
        <div className="viewlisting__left">
          {cart?.length === 0 ? (
            <div className="viewlisting__noitems">
              <h2 className="viewlisting__empty__cart">
                Your shopping cart is empty.
              </h2>
              <p>
                You have no items in your cart. To buy one or more items, click
                on "Add to cart" below the item.
              </p>
              <p>Thank you!</p>
            </div>
          ) : (
            <div>
              <div className="cart__number">
                <h4 className="viewlisting__message">
                  Your Cart ({cart?.length})
                </h4>
              </div>
              {cart.map((item, i) => {
                return (
                  <ListingItem
                    key={i}
                    id={item.id}
                    title={item.title}
                    author={item.author}
                    department={item.department}
                    isbn={item.isbn}
                    condition={item.condition}
                    price={item.price}
                    image={item.image}
                    type={item.type}
                    username={item.username}
                  />
                );
              })}
            </div>
          )}
        </div>
        <div className="viewlisting__right">
          {cart.length > 0 && <TotalAmount cart={cart} />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewListings;
