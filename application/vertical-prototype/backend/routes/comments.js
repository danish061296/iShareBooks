const express = require("express");
const db = require("../dataBase.js");
const router = express.Router();

router.post("/comments", (req, res) => {
  console.log(req.body);
  const { postID, comment, id } = req.body;
  const data = [postID, comment, id];
  let inserSql = `INSERT INTO comments (postID, comment, id) VALUES (?)`;
  db.query(inserSql, [data], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      console.log(results);
    }
  });
});

router.get("/comments/:postID", (req, res) => {
  const postID = req.params.postID;
  let inserSql = `SELECT comments.*, users.name FROM comments JOIN users ON id = user_id where postID=(?) ORDER BY post_time DESC`;
  db.query(inserSql, [postID], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("error getting the data", err);
    } else {
      res.send(results);
    }
  });
});

module.exports = router;
