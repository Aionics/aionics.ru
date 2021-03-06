var express = require('express');
var server = express();
var path = require('path');

server.use('/', express.static('./www'));

server.get('/manage', function(req, res) {
	res.end('not ready yet');
})
server.get('/dev', function(req, res) {
	res.sendFile('dev.html', { root: __dirname + '/www' });
})

server.get('/', function(req, res){
	res.sendFile('index.html', { root: __dirname + '/www' });
});

server.set('port', process.env.PORT || process.env.npm_package_config_port);
server.listen(server.get('port'), function() {
	console.log('listening ' + server.get('port'));
});
