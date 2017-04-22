var mongo = require('mongodb').MongoClient
var age = parseInt(process.argv[2])

mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
  var collection = db.collection('parrots');
  collection.count({
  	age: {$gt: age}
  }, function(err, count) {
  	console.log(count)
  })
  db.close()
})