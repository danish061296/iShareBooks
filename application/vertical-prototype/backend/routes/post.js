const express = require('express');
const db = require('../dataBase.js');
const router = express.Router();
// const auth = require("../middleware/auth");

router.post('/posts', (req, res) => {
  console.log(req.body);
  //get data from the frontend
  try {
    const {
      title,
      author,
      department,
      condition,
      isbn,
      cost,
      type,
      image,
      userid,
    } = req.body;

    if (title === '')
      res.send({ bookPosted: false, msg: 'Title field is required.'});
    else if (author === '')
      res.send({ bookPosted: false, msg: 'Author field is required.'});
    else if (department === '')
      res.send({ bookPosted: false, msg: 'Department field is required.' });
    else if (isbn === '')
      res.send({ bookPosted: false, msg: 'ISBN field is required.' });
    else if (condition === '' || condition === 'Condition')
      res.send({ bookPosted: false, msg: 'Condition field is required.'});
    else if (cost === '' && type == 'paid') 
      res.send({ bookPosted: false, msg: 'Cost field is required.'});
    else if (image === '' || image === undefined)
      res.send({ bookPosted: false, msg: 'Image field is required.' });
    else if (isNaN(cost))
      res.send({ bookPosted: false, msg: 'Cost must be an integer.'});
    else {
      console.log(req.body);
      if (type === 'free') {
        const data = [
          title,
          author,
          condition,
          image,
          department,
          isbn,
          userid,
        ];
        let query =
          'INSERT INTO freebooks (title, author, freebooks.condition, image, department, isbn, user_id) VALUES (?)';
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
        const data = [
          title,
          author,
          condition,
          image,
          isbn,
          department,
          userid,
        ];
        let inserSql = `INSERT INTO tradebooks (title, author, tradebooks.condition, image, isbn, department, user_id) VALUES (?)`;
        db.query(inserSql, [data], (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).send(err);
          } else {
            res.send({
              bookPosted: true,
              msg: 'The trade book was posted successfully!',
            });
          }
        });
      } else if (type === 'paid') {
        console.log('paid');
        const data = [
          isbn,
          title,
          author,
          condition,
          cost,
          department,
          image,
          userid,
        ];
        let inserSql = `INSERT INTO paidbooks (isbn, title, author, paidbooks.condition, cost, department, image, user_id) VALUES (?)`;
        db.query(inserSql, [data], (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).send(err);
          } else {
            res.send({
              bookPosted: true,
              msg: 'The free book was posted successfully!',
            });
            console.log(results);
          }
        });
      }
    }
  } catch (error) {
     console.log(error);
    res.status(400).send(error);
  }
});

router.get('/paidbooks', (req, res) => {
  console.log(req.body);
  // let inserSql = `SELECT * FROM paidbooks`;

  let insertSql = `SELECT paidbooks.*, users.name, users.email FROM paidbooks JOIN users ON paidbooks.user_id = users.id ORDER BY post_time DESC`;

  //let insertSql = `SELECT * FROM paidbooks`;
  db.query(insertSql, (err, results) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send({ books: false, errorMsg: 'Error getting the data' });
    } else {
      results.forEach(function (book, index) {
        if (book.image) {
          var bytes = Buffer.from(book.image, 'base64');
          results[index].image = bytes.toString();
        }
      });

      res.send({ books: true, results: results });
    }
  });
});

router.get('/tradebooks', (req, res) => {
  //let inserSql = `SELECT * FROM tradebooks`;
  let inserSql = `SELECT tradebooks.*, users.name, users.email FROM tradebooks JOIN users ON tradebooks.user_id = users.id ORDER BY post_time DESC`;
  db.query(inserSql, (err, results) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send({ books: false, errorMsg: 'Error getting the data' });
    } else {
      results.forEach(function (book, index) {
        if (book.image) {
          var bytes = Buffer.from(book.image, 'base64');
          results[index].image = bytes.toString();
        }
      });
      res.send({ books: true, results: results });
    }
  });
});

router.get('/freebooks', (req, res) => {
  //let inserSql = `SELECT * FROM freebooks`;
  let inserSql = `SELECT freebooks.*, users.name, users.email FROM freebooks JOIN users ON freebooks.user_id = users.id ORDER BY post_time DESC`;
  db.query(inserSql, (err, results) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send({ books: false, errorMsg: 'Error getting the data' });
    } else {
      results.forEach(function (book, index) {
        if (book.image) {
          var bytes = Buffer.from(book.image, 'base64');
          results[index].image = bytes.toString();
        }
      });
      res.send({ books: true, results: results });
    }
  });
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

router.get('/userposts/:userId', (req, res) => {
  var userId = req.params.userId;
  var query = `SELECT book_id, title, author, \`condition\`, isbn, department, image, cost, "paid" as type FROM paidbooks WHERE user_id = ${userId}
  UNION (SELECT book_id, title, author, \`condition\`, isbn, department, image, NULL, "trade" FROM tradebooks WHERE user_id = ${userId}) 
  UNION (SELECT book_id, title, author, \`condition\`, isbn, department, image, NULL, "free" FROM freebooks WHERE user_id = ${userId});`;

  db.query(query, (err, results) => {
    if (err) return res.send(err);

    results.forEach(function (book, index) {
      if (book.image) {
        var bytes = Buffer.from(book.image, 'base64');
        results[index].image = bytes.toString();
      }
    });
    res.send(results);
  });
});

module.exports = router;
