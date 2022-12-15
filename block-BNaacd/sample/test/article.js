var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var appSchema = ({
    name: String,
    email: {type: String, lowercase: true},
    age: {type: number, default: 0}
}, {timestamps: true})