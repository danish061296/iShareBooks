const express = require('express');
const db = require('../dataBase.js');
const fs = require('fs');
const { query } = require('../dataBase.js');
//var FileReader = require('filereader');
const router = express.Router();

router.post('/search', (req, res) => {
  const { searchField } = req.body; // searchType can be: 'any', 'department', 'title', 'author'. Prof wants a pulldown menu with 3 categ for search.

  let query;
	let trending_limit_entries = 100;	
	
	/* insert a book into trending table
			args: book_id (int) the book id of a book
	*/
	function trending_insert(book_id) {
		// limit entries in the trending table
		query = "SELECT * FROM trending";
		db.query(query, (err, result) => {
		
			if (err)
				res.status(500).send('error getting the count data from trending', err);
				
			else {
				// has enough space to insert for trending
				if (result.length < trending_limit_entries) {
					query = "INSERT INTO trending (book_id) VALUES (" + book_id +")";
					db.query(query, (err2, result2) => {
						if (err2)
							res.status(500).send('error inserting the data into trending', err);
					});
				}
				
				// too much data, remove the first entry
				else {
					console.log("RESULT " + result.length);
					query = "SELECT MIN(trending_id) as len FROM trending";
					db.query(query, (err2, result2) => {
						if (err2)
							res.status(500).send('error inserting the data into trending', err);
						else {
								var min = result2[0].len;
								// removal of min
								query = "DELETE FROM trending WHERE trending_id=" + min;
								db.query(query, (err3, result3) => {
									if (err3)
										res.status(500).send('error removing the data from trending', err);
									else {
										trending_insert(book_id);
									}
									
								});
							}
					});
				}
			}
		
		});
	}
	
	

  function suggestions() {
    query = 'SELECT * FROM paidbooks ORDER BY title ASC LIMIT 8';
    db.query(query, (err, results) => {

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
      'SELECT * FROM paidbooks WHERE title LIKE ' +
      db.escape('%' + searchField + '%') +
      ' OR author LIKE ' +
      db.escape('%' + searchField + '%') +
      ' OR department LIKE ' +
      db.escape('%' + searchField + '%');
  else if (searchField == '') {
    suggestions();
    //  query = "SELECT * FROM BOOK ORDER BY title ASC LIMIT 8";
  } else if (searchType != 'any') {
    query = 'SELECT * FROM paidbooks ORDER BY title ASC LIMIT 8';
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

      if (results.length > 0) {
        res.send(results);
      } else {
        suggestions();
      }
    }
  });
});

module.exports = router;
