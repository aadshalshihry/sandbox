var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var cors = require('cors');

mongoose.Promise = global.Promise;
var db = mongoose.connect('mongodb://localhost/To-Do-List');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());


require('./user.server.model');
var User = require('mongoose').model('User');



app.get('/users', function(req, res) {
  User.find().exec(function(err, users) {
    if (err) return next(err);
    else
      res.json(users);
  });
});

app.get('/users/myInfo', function(req, res) {
  let myInfo = {
  	name: "Roman", 
  	email: "Roman@roman.roman"
  }
  res.json(myInfo)
});

var port = 3002;
app.listen(port, function(err) {
  if (err) throw err;
  console.log("Express server listening on port " + port);
});
