import React from 'react';
import CurrencyFormat from 'react-currency-format';
import axios from 'axios';
import './TotalAmount.css';
import Button from '@material-ui/core/Button';
import {useSelector} from 'react-redux';
import {getCartTotal} from '../redux/reducers/userReducer';

const TotalAmount = () => {
  // const arrayOfBooks = [
  //   { name: 'c++', price: 110, id: 43434341 },
  //   { name: 'js', price: 300, id: 9943 },
  // ];

  const cart = useSelector((state) => state.userReducer.cart);

  const handleCheckout = async () => {
    console.log('clicked');
    const res = await axios.post('http://localhost:3001/pay', cart);
    window.open(res.data);
  };

  // arrayOfBooks.push();

  return (
    <div className='total__amount'>
      <div className='total__amount__top'>
        <div className='total__amount__summary'>
          <p className='summary'>SUMMARY</p>
        </div>
        <div className='subtotal__info'>
          <p className='subtotal'>SUBTOTAL</p>
          <p className='subtotal__cost'>${getCartTotal(cart)}</p>
          {/* <CurrencyFormat
            renderText={(value) => (
              <>
                <p className="subtotal">
                  SUBTOTAL ({cart.length} items):
                  <strong className="total__price">{`${value}`}</strong>
                </p>
              </>
            )}
            value={getCartTotal(cart)}
            // value={13.56}
            displayType={'text'}
            decimaleScale={2}
            thousandSeparator={true}
            prefix={'$'}
          /> */}
        </div>
        <div className='shipping__info'>
          <p className='shipping'>Estimated shipping & handling</p>
          <p className='shipping__cost'>$0.00</p>
        </div>
        <p className='shipping__standard'>Standard: FREE</p>
      </div>
      <div className='total__amount__bottom'>
        <div className='tax__info'>
          <p className='tax'>TAX</p>
          <p className='tax__cost'>$0.00</p>
        </div>
        <div className='total__info'>
          <p className='total'>TOTAL:</p>
          <p className='total__cost'>${getCartTotal(cart)}</p>
        </div>
        {/* <Link
          style={{
            color: 'white',
            textDecoration: 'none',

            cursor: 'pointer',
          }}
          className='checkout__link'
         
        > */}

        <button className='checkout__button' onClick={handleCheckout}>
          {' '}
          CHECKOUT
        </button>

        {/* </Link> */}
      </div>
    </div>
  );
};

export default TotalAmount;
