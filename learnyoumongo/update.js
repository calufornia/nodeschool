var mongo = require('mongodb').MongoClient
var database = process.argv[2]

mongo.connect("mongodb://localhost:27017/" + database, function(err, db) {
	var collection = db.collection('users');
	collection.update({
		username: "tinatime"
	}, {
		$set: {
			age: 40
		}
	})
	db.close()
})