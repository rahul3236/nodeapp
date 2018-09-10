var express = require('express');
var router = express.Router();
const locmodel = require('../model/querymodel')
var cors=require('cors')
//console.log(conn.connection)
/* GET home page. */

router.get('/', function(req, res, next) {
  locmodel.result('select * from product limit 0,10').then((locs) => {
    res.header("Access-Control-Allow-Origin", "*");
    //res.send(locs);
    res.send(locs)
  })
  .catch((err)=> next(new Error(err)))
});


router.post('/catlist',(req,res,next) => {

  locmodel.result('select * from category')
  .then((locs) => {
    console.log(locs)
    res.send(locs)
})
.catch((err) => {
  console.log(err)
})
})


router.post('/subcatlist',(req,res,next) => {
  locmodel.result("select * from sub_category")
.then((locs) => {
  console.log(locs)
  res.send(locs)
})
.catch((err) => {
  console.log(err)
})
})





router.post('/deleteproduct/', (req,res,next) => {
    locmodel.result("delete from product where product_id = " + req.body.locid)
    .then((success) => {
      res.send({success:true})
    })
    .catch((err)=>console.log(err))
   })


module.exports = router;
