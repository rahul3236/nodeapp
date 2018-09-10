var express = require('express');
var router = express.Router();
const locmodel = require('../model/querymodel')

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('add_offer' );
});

router.post('/', (req,res,next) => {
  let message=req.body.message
  let title=req.body.title
  let image=req.files.img.name
  let q="insert into addoffer(title,message,image_name) values ('" + [title] + "','" + message + "','" + image + "')"
locmodel.result(q)
.then((resl) => {
    req.files.img.mv(`${__dirname}/${req.files.img.name}.jpg`, function(err) {
      if (err) {
        return res.status(500).send(err);
      }

 })
 console.log(resl)
 res.send(resl)
})
 .catch((err)=> {
   console.log(err)
   })
})
module.exports = router;
