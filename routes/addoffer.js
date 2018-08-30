var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('add_offer' );
});

router.post('/', (req,res,next) => {
  console.log(req.files)
  console.log(req.body)
    
})
module.exports = router;
