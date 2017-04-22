var net = require('net');
var port = process.argv[2];

var date = new Date();
var month = undefined;
if (date.getMonth() < 10) {
	month = '0' + (date.getMonth() + 1);
} else {
	month = date.getMonth() + 1;
}

var day = undefined;
if (date.getDate() < 10) {
	day = '0' + date.getDate();
} else {
	day = date.getDate();
}

var hours = undefined;
if (date.getHours() < 10) {
	hours = '0' + date.getHours();
} else {
	hours = date.getHours();
}

var minutes = undefined;
if (date.getMinutes() < 10) {
	minutes = '0' + date.getMinutes();
} else {
	minutes = date.getMinutes();
}

var time = date.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + minutes + '\n';

var server = net.createServer(function (socket) {
	socket.end(time)
})
server.listen(port)