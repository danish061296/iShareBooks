const express = require('express');
const db = require('../dataBase.js');
const router = express.Router();

router.post('/rating', (req, res) => {
  const userId = req.body.id;
  const newRting = req.body.rating;

  res.send('seccessful');
});
