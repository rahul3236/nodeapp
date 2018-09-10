var express = require('express');
var router = express.Router();
const locmodel = require('../model/querymodel')
const PDFDocumnet  = require('pdfkit')
let doc  = new PDFDocumnet
const fs=require('fs')

let m = new Promise((resolve, reject)=> {
  resolve(1)
})
  m.then((q)=> doc.pipe(fs.createWriteStream('/root/foodere/public/inde.pdf') ))
  .then(()=>doc.text("jekwfhkew"))
  .then(() =>doc.end())
  .then(()=> console.log({success:true}))
  .catch((err)=> console.log(err))
