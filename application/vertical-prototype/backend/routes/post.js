const express = require("express");
const db = require("../dataBase.js");
const router = express.Router();
// const auth = require("../middleware/auth");

router.post("/post", (req, res) => {
  const {bookType, bookTitle, bookAuthor, bookCondition, bookImage} = req.body;
  var query;

  if (bookType == "free" || bookType == "trade")
    query = "INSERT INTO freebooks (title, author, condition, image) VALUES \
    ("+db.escape(bookTitle)+", "+db.escape(bookAuthor)+", "+db.escape(bookCondition)+", "+db.escape(bookImage)+")";

  else {
    const cost = req.body;
    query = "INSERT INTO freebooks (title, author, condition, image, cost) VALUES \
    ("+db.escape(bookTitle)+", "+db.escape(bookAuthor)+", "+db.escape(bookCondition)+", "+db.escape(bookImage)+", "+db.escape(cost)+")";
  }

  db.query(query, (err, result) => {
    if (err)
      throw err;
    else
      console.log("Successfully added a book into database.");
  });

});

module.exports = router;
