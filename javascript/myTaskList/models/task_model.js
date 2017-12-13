'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    title: String, 
    isDone: Boolean
});

module.exports = mongoose.model('Task' TaskSchema);