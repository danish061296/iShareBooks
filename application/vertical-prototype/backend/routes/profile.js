const express = require('express');
const db = require('../dataBase.js');
const router = express.Router();

router.get('/profile/:id', (req, res) => {
  console.log('sdads');
  const id = req.params.id;
  let sql = `SELECT * FROM users where id=${id}`;
  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('error getting the data');
    } else {
      res.send(results);
    }
  });
});

//update user data
router.put('/profile/:id', (req, res) => {
  const id = req.params.id;
  const updateItem = Object.keys(req.body); //old value
  const newItemValue = Object.values(req.body); //newValue
  console.log('key', updateItem);
  console.log('value', newItemValue);
  let sql = `UPDATE users SET ${updateItem} = "${newItemValue}" where id=${id}`;
  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('error getting the data');
    } else {
      res.send(results);
    }
  });
});
module.exports = router;
