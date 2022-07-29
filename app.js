// app.js
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

num = 0

app.use(express.static(__dirname + '/node_modules'));
app.get('/', function(req, res,next) {
    res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(client) {
    console.log('Client connected...');
	
	client.on('color', function(number) {
		
		
		num = num + number
		
		console.log(num)
		
		client.emit('colorpick', num)
		client.broadcast.emit('colorpick',num);
	});
});
	
server.listen(4200);