const express = require("express");
const db = require("../dataBase.js");
const router = express.Router();

router.post("/comments", (req, res) => {
  console.log(req.body);
  const { postID, comment } = req.body;
  const data = [postID, comment];
  let inserSql = `INSERT INTO comments (postID,comment) VALUES (?)`;
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
  let inserSql = `SELECT * FROM comments where postID=${postID}`;
  db.query(inserSql, (err, results) => {
    if (err) {
      res.status(500).send("error getting the data", err);
    } else {
      res.send(results);
    }
  });
});

module.exports = router;
