import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Typography from '@material-ui/core/Typography';

const SuccessfulPayment = (props) => {
  const paymentID = new URLSearchParams(window.location.search).get(
    'paymentId'
  );
  console.log(paymentID);
  return (
    <div>
      <Navigation />

      <h1 variant='body2' color='textSecondary' align='center'>
        Your Payment was Successful
        <div>
          <p> Your Transction Confrmation Number is: {paymentID}</p>{' '}
        </div>
      </h1>
      <Footer />
    </div>
  );
};

export default SuccessfulPayment;
