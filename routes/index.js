var express = require('express');
var router = express.Router();

var connect = require('../utils/sqlConnect');

/* GET HOME PAGE */
router.get('/', function(req, res, next) {
  // do a batabase query and get some of the hero data
  connect.query(`SELECT name, avatar FROM hero`, (err, result) => {
    if (err) {
      throw err;
      console.log(err);
    } else {
      console.og(result);
      res.render('index', { avatars: result });
    }
  });
});

module.exports = router;
