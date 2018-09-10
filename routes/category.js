var express = require('express');
var router = express.Router();
const efile = require('express-fileupload')
const fs=require('fs')
const util=require('util')
PDFDocument = require('pdfkit')
doc = new PDFDocument
const locmodel = require('../model/querymodel')
/* GET home page. */
router.get('/', function(req, res, next) {
  locmodel.result("select * from category limit 0,10").then((locs) => {
    console.log(locs)
    res.send(locs)
  })
  .catch((err)=> new Error())
})





router.post('/addcategory', function(req, res, next) {
  locmodel.result("insert into category (category_name, description ,banner) values('"+[req.body.cn]+"','" + [req.body.cd] + "','"+req.files.img.name +"')" )
  .then((success)=> {
    console.log(req.body)
    console.log(req.files)
    //console.log()
    let imageFile = req.files.file;

req.files.img.mv(`${__dirname}/${req.files.img.name}`, function(err) {
  if (err) {
    return res.status(500).send(err);
  }

  res.send({success:true})


    //console.log(locs)
  console.log(req.body)
  //req.files=req.body.image
  //console.log(req.files.name)
  console.log(req.files)
  //console.log(util.inspect(req.body.img, {showHidden: false, depth: null}))
})

})
.catch((err)=>console.log(err))
})


router.post('/edit/', function(req, res, next) {
  locmodel.result("update category set category_name = '" + req.body.cn +"' ,description  = '" + req.body.cd + "',banner='" +req.files.img.name + "'where category_id =" + req.body.idtoedit)
  .then((success)=> {
    console.log(req.body)
    console.log(req.files)
    //console.log()
    let imageFile = req.files.file;

req.files.img.mv(`${__dirname}/${req.files.img.name}`, function(err) {
  if (err) {
    return res.status(500).send(err);
  }

  res.send({success:true})


    //console.log(locs)
  console.log(req.body)
  //req.files=req.body.image
  //console.log(req.files.name)
  console.log(req.files)
  //console.log(util.inspect(req.body.img, {showHidden: false, depth: null}))
})


})
.catch((err)=>res.status(500).send(err))

})

router.post('/delete/', function(req, res, next) {
  locmodel.result("delete from category where category_id=" +req.body.locid)
  .then((locs) => {
    res.send({ message:"Updated succesfully" })
  })
  .catch((err)=> res.send({messsage:"Error Occured"}))
})



module.exports = router;
