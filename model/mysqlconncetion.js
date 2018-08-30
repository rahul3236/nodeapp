const mysql = require('promise-mysql');

exports.connection = mysql.createConnection({
    host: 'localhost',
    user: 'rk',
    password: 'toor',
    database: 'fooderia'
})
//.then((conn)=> {
  //      data="test_data"
    //    q="insert into location (location_name) values (\""  + data + "\")" 
      // res=conn.query(q)
      // return res
//})
//.then((res) => {
 //   console.log(res)
//})
.catch((err)=> console.log(err))
