var http = require('http');
var url = require('url');
var port = process.argv[2];
http.createServer(function (request, response) {
	
	var urlObj = url.parse(request.url, true);
	var pathname = urlObj['pathname'];
	var date = new Date(urlObj['query']['iso']);
	var time = undefined;

	if (pathname === '/api/parsetime') {
		time = {
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		};
	} else if (pathname === '/api/unixtime') {
		time = {
			unixtime: date.getTime()
		};
	}
	
	response.writeHead(200, { 'Content-Type': 'application/json' });
	response.end(JSON.stringify(time))

}).listen(port)