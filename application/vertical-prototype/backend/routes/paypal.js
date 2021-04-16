const express = require('express');
const db = require('../dataBase.js');
const cors = require('cors');
const paypal = require('paypal-rest-sdk');
const router = express.Router();
router.use(cors());
paypal.configure({
  mode: 'sandbox', //sandbox or live
  client_id:
    'AYxDsH8hwuP2LSay4PEJYG_Xc9zlO4r9wOZoAe8gFYgqysFKNFhBSEVNPGz21tCEr1_0zxPXz5AQ0jkk',
  client_secret:
    'EAPpS2WLG-Cke7m9k8QeSnaanF5zUUYsCvDEMlxt6JW2KOf_1pIrPxOI5YC7VYqOo5CJMuvyzLDPbDM9',
});
router.post('/pay', (req, res) => {
  console.log('recived');
  // const arrayOfBooks = req.body;
  // console.log(...arrayOfBooks);
  // const bookName = req.body.name;
  // const bookCost = req.body.cost;
  // const bookId = req.body.id;
  let booksCost = 100;
  // for (let i = 0; i < arrayOfBooks.length(); i++) {
  //   booksCost += arrayOfBooks[i].cost;
  // }

  // "name": "item",
  //               "sku": "item",
  //               "price": "1.00",
  //               "currency": "USD",
  //               "quantity": 1
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
          name: 'item',
          sku: 'item',
          price: '1.00',
          currency: 'USD',
          quantity: 1,
        },
        amount: {
          currency: 'USD',
          total: booksCost,
        },
        description: 'book sale transaction',
      },
    ],
  };

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      return res.send(error);
      // throw error;
    } else {
      payment.links.forEach((link) => {
        if (link.rel === 'approval_url') {
          // INSERT INTO soldBooks
          // (name, cost, id) VALUES
          const data = [bookName, bookCost, bookId];
          console.log(data);
          let sqlQuery = ` INSERT INTO soldBooks (name, cost, id) VALUES (?);DELETE FROM posts WHERE description  = ?; `;
          db.query(sqlQuery, [data, bookName], (err, results) => {
            if (err) {
              console.log(err);
            }
          });
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
          total: bookCost,
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
        console.log('Get Payment Response');
        console.log(JSON.stringify(payment));
        res.send(JSON.stringify(payment));
      }
    }
  );
});

router.get('/cancel', (req, res) => {
  res.send('canceled');
});

module.exports = router;
