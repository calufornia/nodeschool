var fs = require('fs');
module.exports = function(directory, extension, callback) {
	fs.readdir(directory, function callback2(err, list) {
		if (err) return callback(err);
		var files = []
		for (var i = 0; i < list.length; i++) {
			if (list[i].endsWith("." + extension)) {
				files.push(list[i]);
			}
		}
		callback(null, files);
	})
}