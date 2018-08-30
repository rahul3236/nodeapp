var express = require('express');
var router = express.Router();
const locmodel = require('../model/querymodel')
//console.log(conn.connection)
/* GET home page. */
console.log(typeof conn);
router.get('/', function(req, res, next) {
  locmodel.result('select * from location sale  limit 0,10').then((locs) => {
    res.send(locs);
    //res.render('location',{newarray:locs})
  })
  .catch((err)=> next(new Error(err)))
});
router.get('/:id', (req,res,next) =>{
  q = 'select * from sale limit ' + ((parseInt(req.params.id) -1)*10) + "," + req.params.id*10
  console.log(q)
  locmodel.result(q).then((locs)=>{
    res.send(locs)
  })
})
module.exports = router;
