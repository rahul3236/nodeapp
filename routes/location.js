var express = require('express');
var router = express.Router();
const locmodel = require('../model/querymodel')

//console.log(conn.connection)
/* GET home page. */

router.get('/', function(req, res, next) {
  locmodel.result('select * from location limit 0,10').then((locs) => {
    res.header("Access-Control-Allow-Origin", "*");
    //res.send(locs);
    res.send(locs)
  })
  .catch((err)=> next(new Error(err)))
});

router.post('/editlocation/', (req,res,next) => {
    locmodel.result("update location set location_name ='" + req.body.value +"' where location_id=" + req.body.locid )
    .then((success)=> {
      console.log(req.body)
      res.send({success:true})
    })
    .catch((err) => {
      console.log(err)
    })
})

router.post('/deletelocation/', (req,res,next) => {
    locmodel.result("delete from location where location_id = " + req.body.locid)
    .then((success) => {
      res.send({success:true})
    })
    .catch((err)=>console.log(err))
   })
router.post('/addlocation/',(req,res,next) => {
    locmodel.result("insert into location (location_name) values (\"" + req.body.val + "\")")
  .then((success)=> {

    res.send({success:true})
  })
.catch((err)=> {
  res.send({error:err})
})
})

router.get('/getpdf',(req,res,next) => {
res.sendFile("/root/foodere/public/test.pdf")

})


module.exports = router;
