const express = require('express');
const db = require('../dataBase.js');
const fs = require('fs');
const { query } = require('../dataBase.js');
//var FileReader = require('filereader');
const router = express.Router();

router.post('/search', (req, res) => {
  const { searchField } = req.body; // searchType can be: 'any', 'department', 'title', 'author'. Prof wants a pulldown menu with 3 categ for search.

  let query;

  function suggestions() {
    query = 'SELECT * FROM Book ORDER BY title ASC LIMIT 8';
    db.query(query, (err, results) => {
      // let suggest = JSON.stringify(results);
      //console.log(JSON.parse(suggest))
      // console.log('Printig Results: ' + suggest)

      // let obj = JSON.parse(suggest);

      results.forEach(function (book, index) {
        if (book.image) {
          var bytes = Buffer.from(book.image, 'base64');
          results[index].image = bytes.toString();
        }
      });

      return res.send({
        results: results,
        msg: 'No Results Were Found: Similar Books Available!',
      });
    });
  }

  let searchType = 'any';

  //searchField = "Co";
  if (searchType == 'any')
    query =
      'SELECT * FROM Book WHERE title LIKE ' +
      db.escape('%' + searchField + '%') +
      ' OR author LIKE ' +
      db.escape('%' + searchField + '%') +
      ' OR department LIKE ' +
      db.escape('%' + searchField + '%');
  else if (searchField == '') {
    suggestions();
    //  query = "SELECT * FROM BOOK ORDER BY title ASC LIMIT 8";
  } else if (searchType != 'any') {
    query = 'SELECT * FROM BOOK ORDER BY title ASC LIMIT 8';
  }

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

      console.log(results.length);
      if (results.length > 0) {
        console.log(results);
        res.send(results);
      } else {
        suggestions();
      }
    }
  });
});

module.exports = router;