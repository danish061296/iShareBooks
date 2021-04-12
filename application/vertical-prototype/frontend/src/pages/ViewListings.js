import React from 'react';
import './ViewListings.css';
import ListingItem from '../components/ListingItem';
import TotalAmount from '../components/TotalAmount';
import Navigation from '../components/Navigation';

import { useDispatch, useSelector } from 'react-redux';

import Footer from '../components/Footer';

const ViewListings = () => {
  const cart = useSelector((state) => state.userReducer.cart);
  //   let cart = [
  //     {
  //       id: '355363',
  //       title: 'Computer Book',
  //       author: 'John Doe',
  //       department: 'Computer Science',
  //       isbn: 123567894,
  //       price: 10.67,
  //       image:
  //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFav9oFDbnaFFCMj-4ZalqZ7sAk0bCuwN-MIaO3_7Vlf3CgWccM0YGtJYiDRZM8Imx_FfB9gs&usqp=CAc',
  //     },
  //     {
  //       id: '732352',
  //       title: 'Literature Book',
  //       author: 'Alice Jane',
  //       department: 'Literature',
  //       isbn: 123535464,
  //       price: 30.99,
  //       image:
  //         'https://m.media-amazon.com/images/I/81xCpb+RC1L._AC_UL640_FMwebp_QL65_.jpg',
  //     },
  //     {
  //       id: '356234',
  //       title: 'English Book',
  //       author: 'Bob Michaels',
  //       department: 'English',
  //       isbn: 837748374,
  //       price: 27.01,
  //       image:
  //         'https://m.media-amazon.com/images/I/8110CWXpN5L._AC_UL640_FMwebp_QL65_.jpg',
  //     },
  //   ];

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
                <h4 className="viewlisting__message">Your Cart (3)</h4>
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
                    price={item.price}
                    image={item.image}
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
