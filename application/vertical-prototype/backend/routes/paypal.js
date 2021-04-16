const express = require('express');
const db = require('../dataBase.js');
const cors = require('cors');
const paypal = require('paypal-rest-sdk');
const router = express.Router();
router.use(cors());

//configure paypal
paypal.configure({
  mode: 'sandbox', //sandbox or live
  client_id:
    'AYxDsH8hwuP2LSay4PEJYG_Xc9zlO4r9wOZoAe8gFYgqysFKNFhBSEVNPGz21tCEr1_0zxPXz5AQ0jkk',
  client_secret:
    'EAPpS2WLG-Cke7m9k8QeSnaanF5zUUYsCvDEMlxt6JW2KOf_1pIrPxOI5YC7VYqOo5CJMuvyzLDPbDM9',
});

/* reciving a post request from the frontebd */
router.post('/pay', (req, res) => {
  //getting the array of data from the frontend
  let arrayOfBooks = req.body;

  //get the total total price of the books
  let booksPrice = 0;
  // adding the total price into the books

  for (let i = 0; i < arrayOfBooks.length; i++) {
    console.log(arrayOfBooks[i].name);
    booksPrice += arrayOfBooks[i].price;
    arrayOfBooks[i].quantity = 1;
    arrayOfBooks[i].sku = 'item';
    arrayOfBooks[i].currency = 'USD';
  }
  let paymentData = JSON.parse(JSON.stringify(arrayOfBooks));
  paymentData.forEach((d) => {
    delete d.id;
  });

  //payment info
  const create_payment_json = {
    intent: 'sale',
    payer: {
      payment_method: 'paypal',
    },
    redirect_urls: {
      return_url: 'http://localhost:3000/successfulPayment',
      cancel_url: 'http://localhost:3000/cancelPayment',
    },
    transactions: [
      {
        item_list: {
          items: paymentData,
        },
        amount: {
          currency: 'USD',
          total: booksPrice,
        },
        description: 'book sale transaction',
      },
    ],
  };

  paypal.payment.create(create_payment_json, function (error, payment) {
    console.log('payment', payment);
    if (error) {
      console.log(error);
      // return res.send(error);
      // throw error;
    } else {
      payment.links.forEach((link) => {
        if (link.rel === 'approval_url') {
          for (let i = 0; i < arrayOfBooks.length; i++) {
            const bookName = arrayOfBooks[i].name;
            const bookCost = arrayOfBooks[i].price;
            const bookId = arrayOfBooks[i].id;
            const data = [bookName, bookCost, bookId];
            console.log(data);
            let sqlQuery = ` INSERT INTO soldBooks (name, cost, id) VALUES (?);DELETE FROM posts WHERE id  = ?; `;
            db.query(sqlQuery, [data, bookId], (err, results) => {
              if (err) {
                console.log(err);
              } else {
                console.log(results);
              }
            });
          }

          res.send(link.href);
        }
      });
      console.log('Create Payment Response');
      //   console.log(payment);
    }
  });
});

router.get('/success', (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;
  var execute_payment_json = {
    payer_id: payerId,
    transactions: [
      {
        amount: {
          currency: 'USD',
          total: 2,
        },
      },
    ],
  };

  paypal.payment.execute(
    paymentId,
    execute_payment_json,
    function (error, payment) {
      if (error) {
        console.log(error.response);
        throw error;
      } else {
        res.send(JSON.stringify(payment));
      }
    }
  );
});

router.get('/cancel', (req, res) => {
  res.send('canceled');
});

module.exports = router;
