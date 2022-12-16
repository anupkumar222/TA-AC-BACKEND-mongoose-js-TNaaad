var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchecma = new Schema({
    name: {type: String, required: true},
    email: {type: String, lowercase: true},
    sports: [String]
}, {timestamps: true})