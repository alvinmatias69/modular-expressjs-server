'use strict';

var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(require('./app/controllers'));

app.listen(3000, function() {
	console.log('cool apps at port 3000');
});