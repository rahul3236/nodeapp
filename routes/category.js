var express = require('express');
var router = express.Router();
const efile = require('express-fileupload')
const fs=require('fs')
const util=require('util')
const locmodel = require('../model/querymodel')
/* GET home page. */
router.get('/', function(req, res, next) {
  locmodel.result("select * from category").then((locs) => {
    console.log(locs)
    res.send(locs)
  })
  .catch((err)=> new Error())
})

router.get('/:id', (req,res,next) =>{
  q = 'select * from category limit ' + ((parseInt(req.params.id) -1)*10) + "," + 10
  console.log(q)
  locmodel.result(q).then((locs)=>{
    res.send(locs)
  })
})





router.post('/addcategory', function(req, res, next) {

    //console.log(locs)
  console.log(req.body)
  //req.files=req.body.image
  //console.log(req.files.name)
  console.log(req.files)
  //console.log(util.inspect(req.body.img, {showHidden: false, depth: null}))
})

router.post('/edit/', function(req, res, next) {
    console.log(req.body)

})
router.post('/delete/:id', function(req, res, next) {
  locmodel.result("update category set category_name="+req.body.val + "where category_id=" + req.body.id)
  .then((locs) => {
    res.send({ message:"Updated succesfully" })
  })
  .catch((err)=> res.send({messsage:"Error Occured"}))
})

module.exports = router;
