var express = require('express');
var server = express();

server.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'www/', 'index.html'))
})