var express = require('express');
var router = express.Router();
const locmodel = require('../model/querymodel')
//console.log(conn.connection)
/* GET home page. */
console.log(typeof conn);
router.get('/', function(req, res, next) {
  locmodel.result('select * from location limit 0,10').then((locs) => {
    //res.send(locs);
    res.render('location',{newarray:locs})
  })
  .catch((err)=> next(new Error(err)))
});
router.get('/:id', (req,res,next) =>{
  q = 'select * from location limit ' + ((parseInt(req.params.id) -1)*10) + "," + req.params.id*10
  console.log(q)
  locmodel.result(q).then((locs)=>{
    res.render('location',{newarray:locs})
  })
})
router.post('/editlocation/:id', (req,res,next) => {
    locmodel.result("update location set location_name = " + req.body.location +" where location_id=" + req.body.locid )
    .then((success)=> {
      res.send({success:true})
    })
    .catch((err) => {
      res.send({error:err})
    })
})

router.post('/delete/:id', (req,res,next) => {
    //locmodel.result()
    //.then((success) => {
      //res.send({error:err})
   // })
   console.log(req.body)
   res.send(req.body.id)
}) 
router.post('/addlocation',(req,res,next) => {
  locmodel.result("insert into location (location_name) values (\"" + req.body.val + "\")")
  .then((success)=> {
    console.log(req.body.val);
    res.send({success:true})
  })
.catch((err)=> {
  res.send({error:err})
})
})
module.exports = router;
