var mongo = require('mongodb').MongoClient
var age = parseInt(process.argv[2])
mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
  var collection = db.collection('parrots');
  collection.find({
  	age: {$gt: age}
  }, {
  	name: 1,
  	age: 1,
  	_id: 0
  }).toArray(function(err, documents) {
  	console.log(documents)
  })
  db.close()
})