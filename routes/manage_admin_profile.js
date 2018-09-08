var express = require('express');
var router = express.Router();
const locmodel = require('../model/querymodel')
/* GET home page. */
router.get('/', function(req, res, next) {
  locmodel.result("select * from admin")
  .then((result)=> {
    console.log(result)
    res.send(result)
  })
  
});
router.post('/managedetails', (req,res,next)=> {
  //res.send("manage details")
  id=1
  //console.log(req.body)
  q="update admin set name='" + req.body.name + "',email= '"+ req.body.email + "',phone = '" +req.body.phone + "',address ='" + req.body.address + "' where admin_id=1"  
  console.log(q)
  locmodel.result(q)
.then((res)=> console.log(res))
.catch((err)=> console.log(err))  
})
router.post('/changepassword',(req,res,next)=> {
  //console.log(req.body)
  res.render("manage_admin_profile")
  

})

module.exports = router;
