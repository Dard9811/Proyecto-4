const express = require("express");
const router = express.Router();
const MyMongoLib = require("../MyMongoLib.js");

const myMongoLib = MyMongoLib();

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index", { title: "Express" });
});

router.get("/data", (req, res) => {
  myMongoLib
    .getDocs()
    .then(docs => res.send(docs))
    .catch(err => res.send(err));
});

module.exports = router;
