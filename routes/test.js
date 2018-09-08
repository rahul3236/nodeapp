var express = require('express');
var router = express.Router();
const locmodel = require('../model/querymodel')
n="rahul"
p=123
locmodel.result("select * from test").then((res)=>console.log(res))
.catch((err)=> console.log(err))

locmodel.result("insert into test(name,pass) values('" + [n] +"'," + [p] + ")" )
.then((res)=> console.log(res))
.catch((err) => console.log(err))


locmodel.result("update test set name='nfekljf',pass =" + p + " where id=1" ).then((res)=>console.log(res))
.catch((err)=>console.log(err))
