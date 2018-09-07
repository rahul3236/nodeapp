var express = require('express');
var router = express.Router();
const locmodel = require('../model/querymodel')
//console.log(conn.connection)
/* GET home page. */
console.log(typeof conn);
router.get('/', function(req, res, next) {
  locmodel.result('select * from coupon limit 0,10').then((locs) => {
    res.send(locs);
    //res.send()
  })
  .catch((err)=> next(new Error(err)))
});
router.post("/",(req,res,next) => {
  console.log(req.files)
  console.log(req.body)
})

module.exports = router;
