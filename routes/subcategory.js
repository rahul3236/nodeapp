var express = require('express');
var router = express.Router();
const locmodel = require('../model/querymodel')
/* GET home page. */
router.get('/', function(req, res, next) {
  locmodel.result("select * from sub_category  limit  0,10").then((locs) => {
    console.log(locs)
    res.send(locs)
  })
  .catch((err)=> new Error())
})
router.get('/:id', (req,res,next) =>{
  console.log(req.params)
  let q = 'select * from sub_category limit ' + ((parseInt(req.params.id) -1)*10) + "," + 10
  console.log(q)
  locmodel.result(q).then((locs)=>{
    res.send(locs)
  })
  .catch((err)=> new Error())
})

router.post('/addsubcategory', (req,res,next) =>{
  locmodel.result("insert into sub_category (sub_category_name, category ,banner) values'"+[req.body.cn]+"','" + [req.body.cd] + "','"+req.files.img.name +"')" )
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
  

router.get('/categorylist',(req,res,next)=> {
  let q = 'select * from category'
  locmodel.result(q).then((locs) => {
    console.log(locs)
    res.send(locs)
  })
  .catch((err)=>console.log(err))

})
router.post('/editsubcategory', (req,res,next) =>{
  locmodel.result("update sub_category set sub_category_name = '" + req.body.cn +"' ,category  = '" + req.body.cd + "', banner= '" +req.files.img.name + "'where category_id =" + req.body.idtoedit)
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
  locmodel.result("delete from sub_category where sub_category_id=" +req.body.locid)
  .then((locs) => {
    res.send({ message:"Updated succesfully" })
  })
  .catch((err)=> res.send({messsage:"Error Occured"}))
})


module.exports = router;
