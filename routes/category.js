var express = require('express');
var router = express.Router();
const efile = require('express-fileupload')
const fs=require('fs')
const util=require('util')
const locmodel = require('../model/querymodel')
/* GET home page. */
router.get('/', function(req, res, next) {
  locmodel.result("select * from category limit 0,10").then((locs) => {
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
  locmodel.result("insert into category (category_name, category_description ,category_images) values'"+[req.body.cn]+"','" + [req.body.cd] + "','"+req.files.img.name +"')" )
  //then((success)=> {
    console.log(req.body)
    console.log(req.files)
    //console.log()
    let imageFile = req.files.file;

req.files.img.mv(`${__dirname}/${req.files.img.name}.jpg`, function(err) {
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

router.post('/edit/', function(req, res, next) {
  locmodel.result("update category set category_name = '" + req.body.cn +"' ,category_description  = '" + req.body.cd + "', category_images= '" +req.files.img.name + "'where category_id =" + req.body.idtoedit)
  //then((success)=> {
    console.log(req.body)
    console.log(req.files)
    //console.log()
    let imageFile = req.files.file;

req.files.img.mv(`${__dirname}/${req.files.img.name}.jpg`, function(err) {
  if (err) {
    return res.status(500).send(err);
  }

  res.send({success:true})
})
})

router.post('/delete/', function(req, res, next) {
  locmodel.result("delete from category where category_id=" +req.body.locid)
  .then((locs) => {
    res.send({ message:"Updated succesfully" })
  })
  .catch((err)=> res.send({messsage:"Error Occured"}))
})

module.exports = router;
