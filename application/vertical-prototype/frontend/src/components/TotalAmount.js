import React from 'react';
import axios from 'axios';
import './TotalAmount.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getCartTotal } from '../redux/reducers/userReducer';

const TotalAmount = () => {
  const cart = useSelector((state) => state.userReducer.cart);
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);

  const history = useHistory();

  const handleCheckout = async () => {

    console.log("CART");
    console.log(cart);
    history.push('./rating');

    if (!isLoggedIn) {
      alert('You need to log in first to checkout your books!');
    } else {
      const res = await axios.post(`http://${window.location.hostname}:3001/pay`, cart);
      window.open(res.data);
    }
  };

  return (
    <div className="total__amount">
      <div className="total__amount__top">
        <div className="total__amount__summary">
          <p className="summary">SUMMARY</p>
        </div>
        <div className="subtotal__info">
          <p className="subtotal">SUBTOTAL</p>
          <p className="subtotal__cost">${getCartTotal(cart).toFixed(2)}</p>
        </div>
        <div className="shipping__info">
          <p className="shipping">Service Fee</p>
          <p className="shipping__cost">$0.35</p>
        </div>
        <div className="shipping__info">
          <p className="shipping">Estimated shipping & handling</p>
          <p className="shipping__cost">$0.00</p>
        </div>
        <p className="shipping__standard">Standard: FREE</p>
        

      </div>
      <div className="total__amount__bottom">
        <div className="tax__info">
          <p className="tax">TAX</p>
          <p className="tax__cost">$0.00</p>
          
        </div>
        <div className="total__info">
          <p className="total">TOTAL:</p>
          <p className="total__cost">${(getCartTotal(cart) + 0.35).toFixed(2)}</p>
        </div>

        <button className="checkout__button" onClick={handleCheckout}>
          {' '}
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default TotalAmount;
