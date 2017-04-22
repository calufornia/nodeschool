var mongo = require('mongodb').MongoClient;
var db_name = process.argv[2];
var col_name = process.argv[3];
var _id = process.argv[4];

mongo.connect("mongodb://localhost:27017/" + db_name, function(err, db) {
	var collection = db.collection(col_name);
	collection.remove({
		_id: _id
	})
	db.close();
})