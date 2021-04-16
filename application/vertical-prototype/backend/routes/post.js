const express = require('express');
const db = require('../dataBase.js');
const router = express.Router();
// const auth = require("../middleware/auth");

router.post('/posts', (req, res) => {
  //get data from the frontend
  try {
    const { title, author, cost, department, isbn, type, image } = req.body;

    console.log(req.body);
    if (type === 'free') {
      const data = [title, author, department, isbn, image];
      console.log('free');
      let query =
        'INSERT INTO freebooks (title, author, image, department, isbn) VALUES (?)';
      db.query(query, [data], (err, result) => {
        if (err) console.log(err);
        else {
          res.send({ msg: 'Successfully added to free books' });
        }
      });
    } else if (type === 'trade') {
      console.log('trede');
      const data = [title, author, department, isbn, image];
      let inserSql = `INSERT INTO tradebooks (title, author, department, image, isbn) VALUES (?)`;
      db.query(inserSql, [data], (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).send(err);
        } else {
          res.status(00).send({ msg: 'Successfully added to traded books.' });
        }
      });
    } else if (type === 'paid') {
      console.log('paid');
      const data = [title, author, cost, department, isbn, image];
      let inserSql = `INSERT INTO paidbooks (title, author, cost, image,department,isbn) VALUES (?)`;
      db.query(inserSql, [data], (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).send(err);
        } else {
          res.status(200).send({ msg: 'Successfully added to paid books' });
          console.log(results);
        }
      });
    }
  } catch (error) {
    res.status(400).send(err);
  }
});

//NEED FIEXES
router.get('/post/:id', (req, res) => {
  const id = req.params.id;
  console.log(req.params);
  let inserSql = `SELECT * FROM posts where id=${id}`;
  db.query(inserSql, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('error getting the data');
    } else {
      res.send(results);
    }
  });
});

module.exports = router;
