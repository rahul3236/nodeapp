var express = require('express');
var router = express.Router();
const locmodel = require('../model/querymodel')

var fs=require('fs')
//console.log(conn.connection)
/* GET home page. */

router.get('/', function(req, res, next) {
  locmodel.result('select * from app_slider limit 0,10').then((locs) => {
    res.header("Access-Control-Allow-Origin", "*");
    //res.send(locs);
    res.send(locs)
    console.log(locs)
  })
  .catch((err)=> next(new Error(err)))
});
router.get('/:id', (req,res,next) =>{
  q = 'select * from app_slider limit ' + ((parseInt(req.params.id) -1)*10) + "," + 10
  console.log(q)
  locmodel.result(q).then((locs)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.send(locs)
  })
})
router.post('/editslider/', (req,res,next) => {
    locmodel.result("update app_slider set slider_name = '" + [req.body.cname] +"', slider_image  = '" + [req.files.img.name] + "' where slider_id = " +[req.body.idtoedit] )
    .then((success)=> {
      console.log(req.body)
      console.log(req.files)
      //console.log()
      let imageFile = req.files.file;

  req.files.img.mv(`${__dirname}/${req.files.img.name}.jpg`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
    else {
        res.send({success:true})
      }
})
})
.catch((err)=> console.log(err))

      //fs.writeFile('message.jpeg', req.body.img, (err) => {
        //if (err) throw err;
        //console.log('The file has been saved!');
      //});
    //})
    //.catch((err) => {
      //res.send({error:err})
    //})
})

router.post('/deleteslider/', (req,res,next) => {
  locmodel.result("delete from app_slider where slider_id = " + req.body.locid)
  .then((success) => {
    res.send({success:true})
  })
  .catch((err)=>console.log(err))

  })
router.post('/addslider/' , (req,res,next) => {
  locmodel.result("insert into app_slider (slider_name,slider_image) values ('" + [req.body.cname] + "','" + [req.body.img.name] + "')")
  .then((success)=> {
    req.files.img.mv(`/root/foodere/public/${req.files.img.name}.jpg`, function(err) {
      if (err) {
        console.log(err)
      }
      else {

              res.send({success:true})
            res.send({success:true})
      }

  })
})
.catch((err)=> {
  res.send({error:err})
})
})



module.exports = router;
