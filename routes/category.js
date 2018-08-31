var express = require('express');
var router = express.Router();
const locmodel = require('../model/querymodel')
/* GET home page. */
router.get('/', function(req, res, next) {
  locmodel.result("select * from category").then((locs) => {
    console.log(locs)
    res.render('category',{ newarray:locs })
  })
  .catch((err)=> new Error())
})
router.post('/addcategory', function(req, res, next) {
  locmodel.result("insert into category(category_name) values (\"" + req.body.val + "\")"  )
  .then((locs) => {
    //console.log(locs)
    res.send({ message:"category added"})
  })
  .catch((err)=> res.send({message:"Error occured"}))
})

router.post('/edit/:id', function(req, res, next) {
  locmodel.result("update category set category_name="+req.body.val + "where category_id=" + req.body.id)
  .then((locs) => {
    res.send({ message:"Updated succesfully" })
  })
  .catch((err)=> res.send({messsage:"Error Occured"}))
})
router.post('/delete/:id', function(req, res, next) {
  locmodel.result("update category set category_name="+req.body.val + "where category_id=" + req.body.id)
  .then((locs) => {
    res.send({ message:"Updated succesfully" })
  })
  .catch((err)=> res.send({messsage:"Error Occured"}))
})

module.exports = router;
