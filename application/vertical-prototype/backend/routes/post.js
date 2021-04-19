const express = require('express');
const db = require('../dataBase.js');
const router = express.Router();
// const auth = require("../middleware/auth");

router.post('/posts', (req, res) => {
  //get data from the frontend
  try {
    const {
      title,
      author,
      cost,
      department,
      condition,
      isbn,
      type,
      image,
    } = req.body;

    if (
      title === '' ||
      author === '' ||
      (cost === '' && type == 'paid') ||
      department === '' ||
      condition === '' ||
      isbn === '' ||
      image === ''
    ) {
      res.send({ bookPosted: false, msg: 'Enter all fields..' });
    } else {
      console.log(req.body);
      if (type === 'free') {
        const data = [title, author, condition, image, department, isbn];
        console.log('free');
        let query =
          'INSERT INTO freebooks (title, author, \`condition\`, image, department, isbn) VALUES (?)';
        db.query(query, [data], (err, result) => {
          if (err) console.log(err);
          else {
            res.send({
              bookPosted: true,
              msg: 'The free book was posted successfully!',
            });
          }
        });
      } else if (type === 'trade') {
        console.log('trede');
        const data = [title, author, condition, image, isbn, department];
        let inserSql = `INSERT INTO tradebooks (title, author, \`condition\`, image, isbn, department) VALUES (?)`;
        db.query(inserSql, [data], (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).send(err);
          } else {
            res.status(00).send({
              bookPosted: true,
              msg: 'The book was successfully posted for trade.',
            });
          }
        });
      } else if (type === 'paid') {
        console.log('paid');
        const data = [title, author, condition, image, isbn, department, cost];
        let inserSql = `INSERT INTO paidbooks (title, author, \`condition\`, image, isbn, department, cost) VALUES (?)`;
        db.query(inserSql, [data], (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).send(err);
          } else {
            res.status(200).send({
              bookPosted: true,
              msg: 'The book was successfully posted for sell',
            });
            console.log(results);
          }
        });
      }
    }
  } catch (error) {
    res.status(400).send(err);
  }
});

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
