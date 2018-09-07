var express = require('express');
var router = express.Router();
const locmodel = require('../model/querymodel')
/* GET home page. */
router.get('/', function(req, res, next) {
  locmodel.result("select * from sub_category").then((locs) => {
    console.log(locs)
    res.send(locs)
  })
  .catch((err)=> new Error())
})
router.get('/:id', (req,res,next) =>{
  q = 'select * from sub_category limit ' + ((parseInt(req.params.id) -1)*10) + "," + 10
  console.log(q)
  locmodel.result(q).then((locs)=>{
    res.send(locs)
  })
})

router.post('/addsubcategory', (req,res,next) =>{
  console.log(req.body)
})

router.post('/editsubcategory', (req,res,next) =>{
  console.log(req.body)
})

router.post('/deletesubcategory/', (req,res,next) =>{
  console.log(req.body)
})



module.exports = router;
