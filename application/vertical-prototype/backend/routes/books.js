const express = require('express');
const db = require('../dataBase.js');
// const fs = require('fs');
// var FileReader = require('filereader');
const router = express.Router();

router.post('/search', (req, res) => {
  const { searchField } = req.body; // searchType can be: 'any', 'department', 'title', 'author'. Prof wants a pulldown menu with 3 categ for search.
  console.log(searchField);
  var query;
  const searchType = 'any';
  //searchField = "Co";
  if (searchType == 'any')
    query =
      'SELECT * FROM Book WHERE title LIKE ' +
      db.escape('%' + searchField + '%') +
      ' OR author LIKE ' +
      db.escape('%' + searchField + '%') +
      ' OR department LIKE ' +
      db.escape('%' + searchField + '%');
  else
    query =
      'SELECT * FROM Book WHERE ' +
      searchType +
      ' LIKE ' +
      db.escape('%' + searchField + '%');

  // } else {
  //   query = 'SELECT * FROM Book ORDER BY title ASC LIMIT 6';
  // }

  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send('error getting the data', err);
    } else {
      results.forEach(function (book, index) {
        if (book.image) {
          var bytes = Buffer.from(book.image, 'base64');
          results[index].image = bytes.toString();
        }
      });
      console.log(results);
      res.send(results);
    }
  });
});

module.exports = router;
