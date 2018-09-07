var express = require('express');
var router = express.Router();
const locmodel = require('../model/querymodel')
//console.log(conn.connection)
/* GET home page. */

router.get('/', function(req, res, next) {
  locmodel.result('select * from location limit 0,10').then((locs) => {
    //res.send(locs);
    res.send(locs)
  })
  .catch((err)=> next(new Error(err)))
});
router.get('/:id', (req,res,next) =>{
  q = 'select * from location limit ' + ((parseInt(req.params.id) -1)*10) + "," + 10
  console.log(q)
  locmodel.result(q).then((locs)=>{
    res.send(locs)
  })
})
router.post('/editlocation/', (req,res,next) => {
    //locmodel.result("update location set location_name = " + req.body.value +" where location_id=" + req.body.locid )
    //then((success)=> {
      console.log(req.body.value)
      console.log(req.body.locid)
      res.send({success:true})
    //})
    //.catch((err) => {
      //res.send({error:err})
    //})
})

router.post('/deletelocation/', (req,res,next) => {
    //locmodel.result()
    //.then((success) => {
      //res.send({error:err})
   // })
   console.log(req.body.locid)
   res.send(JSON.stringify({success:req.body.locid}))
})
router.post('/addlocation/',(req,res,next) => {
//  locmodel.result("insert into location (location_name) values (\"" + req.body.val + "\")")
  //.then((success)=> {
    console.log(req.body.value);
    res.send({success:true})
  //})
//.catch((err)=> {
//  res.send({error:err})
//})
})
module.exports = router;
