var express = require('express');
var router = express.Router();
const locmodel = require('../model/querymodel')

/* GET home page. */
router.get('/', function(req, res, next) {
  locmodel.result("select * from client_feedback limit 0,10 ").then((result)=> {
    console.log(result)
    res.send(result)
  })

});
router.get('/:id', function(req, res, next) {
  q="select * from client_feedback limit " + (parseInt(req.params.id)-1)*10 +"," + 10
  console.log(q)
  locmodel.result(q).then((result)=> {
    console.log(result)
    res.send(result)
  })

});
router.post('/deleteuserfeedback/', (req,res,next) => {
    //locmodel.result()
    //.then((success) => {
      //res.send({error:err})
   // })
   console.log(req.body.locid)
   res.send(JSON.stringify({success:req.body.locid}))
})


module.exports = router;
