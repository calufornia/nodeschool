var fs = require('fs');
var filepath = process.argv[2];
var numLines = undefined;
fs.readFile(filepath, 'utf8', function callback(err, data) {
	numLines = data.split("\n").length - 1;
	console.log(numLines);
})