var express = require('express');
var router = express.Router();
const locmodel = require('../model/querymodel')
/* GET home page. */
router.get('/', function(req, res, next) {
  locmodel.result("select * from sub_category").then((locs) => {
    console.log(locs)
    res.render('subcategory',{ newarray:locs })
  })
  .catch((err)=> new Error())
})

module.exports = router;
