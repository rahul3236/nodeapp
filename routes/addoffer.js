var express = require('express');
var router = express.Router();
const locmodel = require('../model/querymodel')

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('add_offer' );
});

router.post('/', (req,res,next) => {
  message=req.body.locid
  title=req.body.name
  //image=req.body.image.name
  //q="insert into addoffer(title,message,image_name) values (\"" + title + "\",\"" + message + "\",\"" + image + "\")"
 //locmodel.result(q).then((res) => {
  //  res.render("addoffer", {message:"Offer Added"})
  console.log(req.body)
 })
 //.catch((err)=> {
   //res.render('add_offer', {message:"Error while adding offer"})
 //})
module.exports = router;
