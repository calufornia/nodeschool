var module = require('./listfilesmodule');
var directory = process.argv[2];
var extension = process.argv[3];
module(directory, extension, function callback(err, data) {
	if (err) return console.log("Something went wrong");
	for (var i = 0; i < data.length; i++) {
		console.log(data[i]);
	}
})