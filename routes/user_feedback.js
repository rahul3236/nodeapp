var express = require('express');
var router = express.Router();
const locmodel = require('../model/querymodel')

/* GET home page. */
router.get('/', function(req, res, next) {
  locmodel.result("select * from client_feedback limit 0,10 ").then((result)=> {
    console.log(result)
    res.render("user_feedback",{newarray:result})
  })
  
});

module.exports = router;
