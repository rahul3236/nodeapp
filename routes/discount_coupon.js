var express = require('express');
var router = express.Router();
const locmodel = require('../model/querymodel')
//console.log(conn.connection)
/* GET home page. */
console.log(typeof conn);
router.get('/', function(req, res, next) {
  locmodel.result('select * from coupon limit 0,10').then((locs) => {
    res.send(locs);
    //res.send()
  })
  .catch((err)=> next(new Error(err)))
});
router.post('/addcoupon', (req,res,next) =>{
  locmodel.result("insert into sub_category (sub_category_name, category ,banner) values'"+[req.body.cname]+"','" + [req.body.cdescription] + "','"+req.files.img.name +"')" )
  .then((success)=> {
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
.catch((err) => console.log(err))
})

router.post('/editcoupon', (req,res,next) =>{
  locmodel.result("update sub_category set sub_category_name = '" + req.body.cname +"' ,category  = '" + req.body.cdescription + "', banner= '" +req.files.img.name + "'where category_id =" + req.body.idtoedit)
  .then((success)=> {
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
.catch((err)=>console.log(err))
})



module.exports = router;
