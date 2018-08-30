var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  location=['name','jdk','dkd']
  res.render('index');
});

module.exports = router;
