var express = require('express');
var app = express();
var path = require('path');

var p = path.join(__dirname, 'public');

app.get('/', function(req, res) {
    res.sendFile(path.join(p, 'index.html'));
});

app.use(express.static('public'));

app.listen(8080);