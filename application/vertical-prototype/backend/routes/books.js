const express = require('express');
const db = require('../dataBase.js');
const fs = require('fs');
const {query} = require('../dataBase.js');
//var FileReader = require('filereader');
const router = express.Router();

router.post('/allbooks', (req, res) => {});

router.post('/search', (req, res) => {
  console.log('SEARCH');
  //freebooks
  //tradebooks
  //paidbooks

  // QUERY for retrieving user's info from id
  // SELECT paidbooks.*, users.name, users.email FROM paidbooks JOIN users ON paidbooks.user_id = users.id;

  const {searchField, munitem, message} = req.body; // searchType can be: 'any', 'department', 'title', 'author'. Prof wants a pulldown menu with 3 categ for search.
  console.log(searchField);
  const searchType = 'any';
  searchTable = 'paidbooks';
  if (searchField === 'default') {
    suggestions();
  }

  //searchField = "Co";
  if (searchType == 'any')
    query =
      `SELECT ${searchTable}.*, users.name, users.email FROM ${searchTable} JOIN users ON ${searchTable}.user_id = users.id WHERE title LIKE ` +
      db.escape('%' + searchField + '%') +
      ' OR author LIKE ' +
      db.escape('%' + searchField + '%') +
      ' OR department LIKE ' +
      db.escape('%' + searchField + '%');

  else if (searchField == '')
    query = `SELECT ${searchTable}.*, users.name, users.email FROM ${searchTable} JOIN users ON ${searchTable}.user_id = users.id ORDER BY title ASC LIMIT 8`;
  else if (searchType != 'any')
    query = `SELECT ${searchTable}.*, users.name, users.email FROM ${searchTable} JOIN users ON ${searchTable}.user_id = users.id ORDER BY title ASC LIMIT 8`;

  function suggestions() {
    query = `SELECT ${searchTable}.*, users.name, users.email FROM ${searchTable} JOIN users ON ${searchTable}.user_id = users.id ORDER BY title ASC LIMIT 8`;
    db.query(query, (err, results) => {
      let suggest = JSON.stringify(results);
      //console.log(JSON.parse(suggest))
      // console.log('Printig Results: ' + suggest)

      let obj = JSON.parse(suggest);

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

      // console.log(results.length);
      if (results.length > 0) {
        // console.log(results);
        res.send(results);
      } else {
        suggestions();
      } //else
    } //else
  }); //dbque ry
}); //routerPost

router.get('/fire', (req, res) => {
  var searchTable = 'paidbooks';

  var query = `SELECT ${searchTable}.*, users.name, users.email FROM ${searchTable} JOIN users ON ${searchTable}.user_id = users.id ORDER BY title ASC LIMIT 8`;
  db.query(query, (err, results) => {
    // let suggest = JSON.stringify(results);
    //console.log(JSON.parse(suggest))
    // console.log('Printig Results: ' + suggest)

    // let obj = JSON.parse(suggest);
    if (err) {
      console.log(err);
    }

    results.forEach(function (book, index) {
      if (book.image) {
        var bytes = Buffer.from(book.image, 'base64');
        results[index].image = bytes.toString();
      }
    });

    console.log(results);

    return res.send({
      results,
    });
  });
});

module.exports = router;
