const express = require('express');
const db = require('../dataBase.js');
const router = express.Router();

router.get('/profile/:userId', (req, res) => {
  console.log('sdads');

  const id = req.params.userId;
  console.log(id);
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
router.put('/profile/:userId', (req, res) => {
  const id = req.params.userId;
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
