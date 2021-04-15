const express = require("express");
const db = require("../dataBase.js");
const router = express.Router();
// const auth = require("../middleware/auth");

router.post("/posts", (req, res) => {
  console.log("Dsad");
  const { description, price } = JSON.parse(req.body.data);
  if (!req.files) {
    return res.status(500).send("no file was uplaoded");
  }

  let imageFile = req.files;
  let image = imageFile.file;
  console.log(image);

  imageFile.file.mv("../public", function (err) {
    if (err) {
      console.log("err");
      console.log(err);
      return res.status(500).send(err);
    }
    const data = [image, description, price];
    let inserSql = `INSERT INTO posts (image,description,price) VALUES (?)`;
    db.query(inserSql, [data], (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      } else {
        console.log(results);
      }
    });
  });
});
router.get("/post/:id", (req, res) => {
  console.log("dsads");
  const id = req.params.id;
  console.log(req.params);
  let inserSql = `SELECT * FROM posts where id=${id}`;
  db.query(inserSql, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("error getting the data");
    } else {
      res.send(results);
    }
  });
});

router.get("/posts", (req, res) => {
  let inserSql = `SELECT * FROM posts`;
  db.query(inserSql, (err, results) => {
    if (err) {
      res.status(500).send("error getting the data", err);
    } else {
      res.send(results);
    }
  });
});

module.exports = router;
