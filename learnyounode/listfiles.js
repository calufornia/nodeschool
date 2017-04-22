var fs = require('fs');
var pathname = process.argv[2];
var extension = process.argv[3];
fs.readdir(pathname, function callback(err, list) {
	for (var i = 0; i < list.length; i++) {
		if (list[i].endsWith("." + extension)) {
			console.log(list[i]);
		}
	}
})