var fs = require('fs');
var filepath = process.argv[2];
var buf = fs.readFileSync(filepath);
var str = buf.toString();
var substrings = str.split('\n');
console.log(substrings.length - 1)