var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var index = require('./routes/index');
var addOffer= require('./routes/addoffer');
var category  =require('./routes/category');
var subcategory = require('./routes/subcategory')
var location = require('./routes/location');
var sales= require('./routes/sales');
var manageAdmin = require('./routes/manage_admin_profile')
var manageApp  = require('./routes/manage_app_slider')
var userFeedback = require('./routes/user_feedback')
var discountCoupon = require('./routes/discount_coupon')
var customer  = require('./routes/customer')
var login = require('./routes/login')
var product = require('./routes/products')
var morgan = require('morgan')
const fileUpload = require('express-fileupload');
var app = express();
var cors=require('cors')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors())
app.use(morgan('combined'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/customer',customer)
app.use('/product',product)
//app.use('/users', usersRouter);
app.use('/category',category)
app.use('/addOffer',addOffer)
app.use('/sales',sales)
app.use('/subcategory',subcategory)
app.use('/location',location)
app.use('/manageadmin',manageAdmin)
app.use('/manageapp',manageApp)
app.use('/userfeedback',userFeedback)
app.use('/discountcoupon/',discountCoupon)
app.use('/login', login)



// catch 404 and forward to error handler

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
