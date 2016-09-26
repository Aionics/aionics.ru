var express = require('express');
var server = express();
var path = require('path');
var PORT = 8084;

server.use('/', express.static('./www'));
server.get('/*', function(req, res){
	res.sendFile('index.html', { root: __dirname + '/www' });
});

server.listen(PORT, function() {
	console.log('listening ' + PORT);
});