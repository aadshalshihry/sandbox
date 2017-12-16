var express = require('express');
var path = require('path');
var config = require('./webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var  webpackDevServer = require('webpack-dev-server');

var app = express();

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
	noInfo: false, publicPath: config.output.publicPath
}));

// app.use(webpackHotMiddleware(compiler));


// var port = 8080;

// var server = new webpackDevServer(compiler, {
// 	hot: true,
// 	contentBase : "./client"
// })

// server.listen(port);
