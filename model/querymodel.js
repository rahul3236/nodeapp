const conn = require('./mysqlconncetion')
exports.result  =function(q) {
    return ( conn.connection.then((conn) => {
    let query = conn.query(q)
	return query
  })
  .then((response)=> {
  let newarray=[]
  for (let prop in response) {
    newarray.push(response[prop])
  }
  return newarray
  })
)
}