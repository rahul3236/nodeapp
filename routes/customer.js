var express = require('express');
var router = express.Router();
const locmodel = require('../model/querymodel')
//console.log(conn.connection)
/* GET home page. */

router.get('/', function(req, res, next) {
  locmodel.result('select * from user limit 0,10').then((locs) => {
    res.header("Access-Control-Allow-Origin", "*");
    //res.send(locs);
    res.send(locs)
    console.log(locs)
  })
  .catch((err)=> next(new Error(err)))
});

router.get('/:id', (req,res,next) =>{
  q = 'select * from user limit ' + ((parseInt(req.params.id) -1)*10) + "," + 10
  console.log(q)
  locmodel.result(q).then((locs)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.send(locs)
  })
})


router.post('/deleteuser/', (req,res,next) => {
  locmodel.result("delete from user where user_id = " + req.body.locid)
  .then((success) => {
    res.send({success:true})
  })
  .catch((err)=>console.log(err))
})

router.post('/viewinfo/',(req,res,next) => {
  console.log(req.body);
locmodel.result("select * from user where user_id =" + req.body.locid )
  .then((locs)=> {
    //console.log(req.locs)

    res.send(locs)
  })
.catch((err)=> {
  console.log(err)
})
})
module.exports = router;
