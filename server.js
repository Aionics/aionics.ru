var express = require('express');
var server = express();
var path = require('path');

server.use('/', express.static('./www'));
server.get('/*', function(req, res){
	res.sendFile('index.html', { root: __dirname + '/www' });
});


server.set('port', process.env.PORT || 8084);
server.listen(server.get('port'), function() {
	console.log('listening ' + server.get('port'));
});