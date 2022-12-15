var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var appSchema = new Schema({
    title: String,
    count: Number,
})