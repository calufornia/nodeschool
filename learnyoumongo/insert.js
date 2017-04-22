var mongo = require('mongodb').MongoClient

var name = {
	firstName: process.argv[2],
	lastName: process.argv[3]
}

mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
  var collection = db.collection('docs');
  collection.insert(name, function(err, data) {
  	console.log(JSON.stringify(name))
  })
  db.close()
})