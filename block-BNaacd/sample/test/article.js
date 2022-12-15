var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var appSchema = ({
    name: {type: String, uppercase: true},
    email: {type: String, lowercase: true},
    age: {type: number}
}, {timestamps: true})