var mysql = require('promise-mysql');
mysql.createConnection({
    host: 'localhost',
    user: 'rk',
    password: 'toor',
    database: 'fooderia'
}).then(function(conn){
    // do stuff with conn
	var result = conn.query('select * from location' )
    conn.end();
	return result
})
.then((result)=> {
	var newarray=[]
	for (var prop in result) {
	newarray.push(result[prop])
	}	
newarray.forEach((item,index)=>console.log(index+1))	
//console.log(newarray);
	

	})
.catch(err => console.log(err))
