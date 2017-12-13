var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose  = require('mongoose');
var favicon = require('serve-favicon');
var logger = require('morgan')

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var port = 3000;

var app = express();

// View Engine
app.set('Views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));

app.use('/', index);
app.use('/api', tasks);

app.listen(port, function() {
	console.log("Server Started on port " + port);
})


